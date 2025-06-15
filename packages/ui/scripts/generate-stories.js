#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const STORIES_DIR = path.join(__dirname, '../src/stories');

// 要忽略的文件
const IGNORE_FILES = ['index.tsx', 'index.ts'];
// 要忽略的目录
const IGNORE_DIRS = ['stories', 'styles'];

// 读取组件文件并提取信息
function parseComponentFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // 提取导出的组件名称
  const exportRegex = /export\s+(?:const|function)\s+(\w+)/g;
  const interfaceRegex = /export\s+interface\s+(\w+Props)/g;
  
  const components = [];
  const interfaces = [];
  
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    components.push(match[1]);
  }
  
  while ((match = interfaceRegex.exec(content)) !== null) {
    interfaces.push(match[1]);
  }
  
  return { components, interfaces, content };
}

// 分析组件的props
function analyzeProps(content, componentName) {
  const props = [];
  
  // 查找接口定义
  const interfaceRegex = new RegExp(`interface\\s+${componentName}Props\\s*(?:extends[^{]*)?{([^}]*)}`, 's');
  let match = interfaceRegex.exec(content);
  
  if (match) {
    const propsContent = match[1];
    // 简单的prop提取（可以根据需要增强）
    const propRegex = /(\w+)[\?\s]*:\s*([^;]+);/g;
    let propMatch;
    
    while ((propMatch = propRegex.exec(propsContent)) !== null) {
      const propName = propMatch[1];
      const propType = propMatch[2].trim();
      
      // 基于类型生成控件
      let control = 'text';
      if (propType.includes('boolean')) control = 'boolean';
      else if (propType.includes('number')) control = 'number';
      else if (propType.includes('|') && !propType.includes('ReactNode')) {
        // 联合类型，提取选项
        const options = propType.split('|').map(s => s.trim().replace(/['"]/g, ''));
        control = { type: 'select', options };
      }
      
      props.push({ name: propName, type: propType, control });
    }
  } else {
    // 尝试从函数参数中提取props
    const functionRegex = new RegExp(`function\\s+${componentName}\\s*\\(\\s*{([^}]+)}`, 's');
    const arrowFunctionRegex = new RegExp(`const\\s+${componentName}\\s*=\\s*\\(\\s*{([^}]+)}`, 's');
    
    match = functionRegex.exec(content) || arrowFunctionRegex.exec(content);
    
    if (match) {
      const paramsContent = match[1];
      // 提取参数名称
      const paramRegex = /(\w+)[\s\?]*/g;
      let paramMatch;
      
      while ((paramMatch = paramRegex.exec(paramsContent)) !== null) {
        const propName = paramMatch[1];
        if (propName && propName !== 'children') {
          // 根据常见的命名推断类型
          let control = 'text';
          if (propName.includes('disabled') || propName.includes('checked')) control = 'boolean';
          if (propName.includes('count') || propName.includes('size') || propName.includes('index')) control = 'number';
          
          props.push({ name: propName, type: 'string', control });
        }
      }
    }
    
    // 检查是否有children参数
    if (content.includes('children') && content.includes('React.ReactNode')) {
      props.push({ name: 'children', type: 'React.ReactNode', control: 'text' });
    }
    
    // 检查是否使用了 VariantProps - 特别处理 CVA 组件
    if (content.includes('VariantProps') && content.includes('cva')) {
      // 查找 cva 定义中的 variants
      const cvaRegex = /cva\s*\(\s*"[^"]*",\s*{\s*variants:\s*{([^}]+)}/s;
      const cvaMatch = cvaRegex.exec(content);
      
      if (cvaMatch) {
        const variantsContent = cvaMatch[1];
        // 提取变体名称和选项
        const variantRegex = /(\w+):\s*{([^}]+)}/g;
        let variantMatch;
        
        while ((variantMatch = variantRegex.exec(variantsContent)) !== null) {
          const variantName = variantMatch[1];
          const optionsContent = variantMatch[2];
          
          // 提取选项
          const optionRegex = /(\w+):/g;
          const options = [];
          let optionMatch;
          
          while ((optionMatch = optionRegex.exec(optionsContent)) !== null) {
            options.push(optionMatch[1]);
          }
          
          if (options.length > 0) {
            props.push({
              name: variantName,
              type: options.map(opt => `'${opt}'`).join(' | '),
              control: { type: 'select', options }
            });
          }
        }
      }
    }
  }
  
  return props;
}

// 递归扫描目录获取所有 tsx 文件
function getAllTsxFiles(dir, baseDir = SRC_DIR) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // 跳过忽略的目录
      if (IGNORE_DIRS.includes(item)) {
        continue;
      }
      // 递归扫描子目录
      files.push(...getAllTsxFiles(fullPath, baseDir));
    } else if (stat.isFile() && item.endsWith('.tsx') && !IGNORE_FILES.includes(item) && !item.includes('.stories.')) {
      // 计算相对路径
      const relativePath = path.relative(baseDir, fullPath);
      files.push({
        fullPath,
        relativePath,
        fileName: item,
        dirPath: path.dirname(relativePath)
      });
    }
  }
  
  return files;
}

// 生成Stories文件内容
function generateStoryContent(componentName, fileInfo, props) {
  // 计算正确的导入路径
  const importPath = fileInfo.dirPath === '.' 
    ? `../${fileInfo.fileName.replace('.tsx', '')}` 
    : `../../${fileInfo.relativePath.replace('.tsx', '')}`;
  
  const argTypes = props.length > 0 ? props.map(prop => {
    if (typeof prop.control === 'object') {
      return `    ${prop.name}: {
      control: { type: '${prop.control.type}' },
      options: [${prop.control.options.map(opt => `'${opt}'`).join(', ')}],
    }`;
    } else {
      return `    ${prop.name}: { control: '${prop.control}' }`;
    }
  }).join(',\n') : '';

  // 生成示例args
  const defaultArgs = props.filter(prop => prop.name !== 'children').map(prop => {
    if (prop.type.includes('string')) return `    ${prop.name}: 'Example ${prop.name}'`;
    if (prop.type.includes('boolean')) return `    ${prop.name}: false`;
    if (prop.type.includes('number')) return `    ${prop.name}: 1`;
    if (typeof prop.control === 'object' && prop.control.options) {
      return `    ${prop.name}: '${prop.control.options[0]}'`;
    }
    return `    ${prop.name}: undefined`;
  }).join(',\n');

  const hasChildren = props.some(prop => prop.name === 'children');

  // 生成 Storybook 的 title，保持目录结构
  const titlePath = fileInfo.dirPath === '.' 
    ? `UI/${componentName}` 
    : `UI/${fileInfo.dirPath.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('/')}/${componentName}`;

  // 只为主要的变体生成 stories，避免重复
  const variantProps = props.filter(prop => typeof prop.control === 'object');
  const uniqueVariantStories = new Map();
  
  variantProps.forEach(prop => {
    prop.control.options.forEach(option => {
      const storyName = `${prop.name.charAt(0).toUpperCase() + prop.name.slice(1)}${option.charAt(0).toUpperCase() + option.slice(1)}`;
      if (!uniqueVariantStories.has(storyName)) {
        uniqueVariantStories.set(storyName, { prop: prop.name, option });
      }
    });
  });

  const variantStories = Array.from(uniqueVariantStories.entries()).map(([storyName, { prop, option }]) => `
export const ${storyName}: Story = {
  args: {${hasChildren ? `
    children: 'Example content',` : ''}
    ${prop}: '${option}',${defaultArgs ? `
${defaultArgs.split('\n').filter(line => !line.includes(`${prop}:`)).join('\n')}` : ''}
  },
};`).join('');

  return `import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${componentName} } from '${importPath}';

const meta = {
  title: '${titlePath}',
  component: ${componentName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],${argTypes ? `
  argTypes: {
${argTypes}
  },` : ''}
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {${defaultArgs || hasChildren ? `
  args: {${hasChildren ? `
    children: 'Example content',` : ''}${defaultArgs ? `
${defaultArgs}` : ''}
  },` : ''}
};${variantStories}`;
}

// 主函数
function generateStories() {
  console.log('🔍 递归扫描组件文件...');
  
  // 确保stories目录存在
  if (!fs.existsSync(STORIES_DIR)) {
    fs.mkdirSync(STORIES_DIR, { recursive: true });
  }
  
  // 递归扫描所有tsx文件
  const files = getAllTsxFiles(SRC_DIR);
  
  console.log(`📁 找到 ${files.length} 个组件文件`);
  
  files.forEach(fileInfo => {
    const { components } = parseComponentFile(fileInfo.fullPath);
    
    if (components.length === 0) {
      console.log(`⚠️  ${fileInfo.relativePath} 中没有找到导出的组件`);
      return;
    }
    
    components.forEach(componentName => {
      const storyFileName = `${componentName}.stories.tsx`;
      
      // 根据原文件的目录结构创建对应的 stories 目录
      const storyDirPath = fileInfo.dirPath === '.' 
        ? STORIES_DIR 
        : path.join(STORIES_DIR, fileInfo.dirPath);
      
      // 确保目标目录存在
      if (!fs.existsSync(storyDirPath)) {
        fs.mkdirSync(storyDirPath, { recursive: true });
      }
      
      const storyFilePath = path.join(storyDirPath, storyFileName);
      
      // 检查是否已经存在stories文件
      if (fs.existsSync(storyFilePath)) {
        console.log(`⏭️  ${path.relative(STORIES_DIR, storyFilePath)} 已存在，跳过`);
        return;
      }
      
      console.log(`✨ 为 ${componentName} 生成 Stories (${fileInfo.relativePath})...`);
      
      const { content } = parseComponentFile(fileInfo.fullPath);
      const props = analyzeProps(content, componentName);
      const storyContent = generateStoryContent(componentName, fileInfo, props);
      
      fs.writeFileSync(storyFilePath, storyContent);
      console.log(`✅ 已生成 ${path.relative(STORIES_DIR, storyFilePath)}`);
    });
  });
  
  console.log('🎉 Stories 生成完成！');
}

// 运行脚本
generateStories(); 
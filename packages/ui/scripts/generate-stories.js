#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const STORIES_DIR = path.join(__dirname, '../src/stories');

// 要忽略的文件
const IGNORE_FILES = ['index.tsx', 'index.ts'];

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

// 生成Stories文件内容
function generateStoryContent(componentName, fileName, props) {
  const importPath = `../${fileName.replace('.tsx', '')}`;
  
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

  return `import type { Meta, StoryObj } from '@storybook/react-vite';
import { ${componentName} } from '${importPath}';

const meta = {
  title: 'UI/${componentName}',
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
};

${props.filter(prop => typeof prop.control === 'object').map(prop => 
  prop.control.options.map(option => `
export const ${option.charAt(0).toUpperCase() + option.slice(1)}: Story = {
  args: {${hasChildren ? `
    children: 'Example content',` : ''}
    ${prop.name}: '${option}',${defaultArgs ? `
${defaultArgs.split('\n').filter(line => !line.includes(prop.name)).join('\n')}` : ''}
  },
};`).join('')
).join('')}`;
}

// 主函数
function generateStories() {
  console.log('🔍 扫描组件文件...');
  
  // 确保stories目录存在
  if (!fs.existsSync(STORIES_DIR)) {
    fs.mkdirSync(STORIES_DIR, { recursive: true });
  }
  
  // 扫描src目录下的tsx文件
  const files = fs.readdirSync(SRC_DIR)
    .filter(file => file.endsWith('.tsx') && !IGNORE_FILES.includes(file))
    .filter(file => !file.includes('.stories.'));
  
  console.log(`📁 找到 ${files.length} 个组件文件`);
  
  files.forEach(file => {
    const filePath = path.join(SRC_DIR, file);
    const { components } = parseComponentFile(filePath);
    
    if (components.length === 0) {
      console.log(`⚠️  ${file} 中没有找到导出的组件`);
      return;
    }
    
    components.forEach(componentName => {
      const storyFileName = `${componentName}.stories.ts`;
      const storyFilePath = path.join(STORIES_DIR, storyFileName);
      
      // 检查是否已经存在stories文件
      if (fs.existsSync(storyFilePath)) {
        console.log(`⏭️  ${storyFileName} 已存在，跳过`);
        return;
      }
      
      console.log(`✨ 为 ${componentName} 生成 Stories...`);
      
      const { content } = parseComponentFile(filePath);
      const props = analyzeProps(content, componentName);
      const storyContent = generateStoryContent(componentName, file, props);
      
      fs.writeFileSync(storyFilePath, storyContent);
      console.log(`✅ 已生成 ${storyFileName}`);
    });
  });
  
  console.log('🎉 Stories 生成完成！');
}

// 运行脚本
generateStories(); 
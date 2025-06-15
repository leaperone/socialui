#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const SRC_DIR = path.join(__dirname, '../src');

// 防抖函数，避免频繁触发
let generateTimeout = null;

// 运行生成stories的脚本
function runGenerateStories() {
  // 清除之前的定时器
  if (generateTimeout) {
    clearTimeout(generateTimeout);
  }
  
  // 延迟执行，避免频繁触发
  generateTimeout = setTimeout(() => {
    console.log('🔄 重新生成 Stories...');
    const child = spawn('node', [path.join(__dirname, 'generate-stories.js')], {
      stdio: 'inherit'
    });
    
    child.on('error', (error) => {
      console.error('❌ 生成Stories时出错:', error.message);
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Stories 生成完成！');
      } else {
        console.error(`❌ Stories 生成失败，退出码: ${code}`);
      }
    });
  }, 500);
}

console.log('👀 开始递归监听组件文件变化...');
console.log('💡 提示：修改任何子目录中的 .tsx 组件文件都会自动重新生成对应的 Stories');
console.log(`📂 监听目录: ${SRC_DIR}`);

// 启动时先运行一次生成脚本
console.log('🚀 首次运行 Stories 生成...');
runGenerateStories();

// 监听src目录的变化（递归监听）
fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.tsx') && !filename.includes('.stories.')) {
    console.log(`\n📝 检测到 ${filename} 发生变化 (${eventType})`);
    
    // 检查文件是否存在（处理删除事件）
    const fullPath = path.join(SRC_DIR, filename);
    const exists = fs.existsSync(fullPath);
    
    if (eventType === 'rename' && !exists) {
      console.log(`🗑️  文件 ${filename} 已被删除`);
    } else if (eventType === 'change' || (eventType === 'rename' && exists)) {
      console.log(`✏️  文件 ${filename} 已${eventType === 'rename' ? '创建/重命名' : '修改'}`);
    }
    
    runGenerateStories();
  }
});

// 监听错误
process.on('SIGINT', () => {
  console.log('\n🛑 停止监听...');
  if (generateTimeout) {
    clearTimeout(generateTimeout);
  }
  process.exit(0);
});

console.log('🎯 递归监听已启动！按 Ctrl+C 停止监听\n'); 
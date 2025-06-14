#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const SRC_DIR = path.join(__dirname, '../src');

// 运行生成stories的脚本
function runGenerateStories() {
  const child = spawn('node', [path.join(__dirname, 'generate-stories.js')], {
    stdio: 'inherit'
  });
  
  child.on('error', (error) => {
    console.error('❌ 生成Stories时出错:', error.message);
  });
}

console.log('👀 开始监听组件文件变化...');
console.log('💡 提示：修改任何 .tsx 组件文件都会自动重新生成对应的 Stories');

// 启动时先运行一次生成脚本
console.log('🚀 首次运行 Stories 生成...');
runGenerateStories();

// 监听src目录的变化
fs.watch(SRC_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && filename.endsWith('.tsx') && !filename.includes('.stories.')) {
    console.log(`\n📝 检测到 ${filename} 发生变化`);
    
    // 延迟一下再生成，避免频繁触发
    setTimeout(() => {
      runGenerateStories();
    }, 500);
  }
});

console.log('🎯 监听已启动！按 Ctrl+C 停止监听\n'); 
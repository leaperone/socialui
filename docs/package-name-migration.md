# 包名迁移指南：从 @socialui/react 到 @ui2someone/react

本文档记录了将包名从 `@socialui/react` 更改为 `@ui2someone/react` 的完整迁移过程。

## 迁移概述

### 迁移目标

- 将包名从 `@socialui/react` 更改为 `@ui2someone/react`
- 更新所有相关的 GitHub 仓库链接
- 更新所有文档中的包名引用
- 确保项目构建和运行正常

### 迁移范围

- 包配置文件 (package.json)
- 导入语句
- 文档文件
- 开发环境配置
- GitHub 仓库链接

## 迁移步骤

### 1. 更新包配置文件

#### packages/react/package.json

```json
{
  "name": "@ui2someone/react",
  "repository": {
    "url": "https://github.com/leaperone/ui2someone.git"
  },
  "homepage": "https://github.com/leaperone/ui2someone#readme",
  "bugs": {
    "url": "https://github.com/leaperone/ui2someone/issues"
  }
}
```

#### apps/docs/package.json 和 apps/web/package.json

```json
{
  "dependencies": {
    "@ui2someone/react": "workspace:*"
  }
}
```

#### 根目录 package.json

```json
{
  "name": "ui2someone"
}
```

### 2. 更新导入语句

#### 迁移前

```tsx
import { WeChatOfficialAccountCard } from "@socialui/react";
```

#### 迁移后

```tsx
import { WeChatOfficialAccountCard } from "@ui2someone/react";
```

### 3. 更新文档文件

#### packages/react/README.md

- 更新标题为 "UI2Someone React"
- 更新所有包名引用
- 更新安装和使用示例

#### 根目录 README.md

- 更新项目标题为 "UI2Someone"
- 更新包名引用
- 更新项目描述

#### docs/README.md

- 更新文档标题
- 更新项目结构说明
- 更新快速开始指南

#### docs/heroui-removal-migration.md

- 更新包名引用
- 更新示例代码

#### docs/social-profile-cards.md

- 更新包名引用
- 更新示例代码

### 4. 更新开发环境配置

#### .devcontainer/devcontainer.json

```json
{
  "name": "dev-ui2someone",
  "workspaceFolder": "/root/ui2someone",
  "postCreateCommand": "git clone git@github.com:leaperone/ui2someone.git ."
}
```

#### .devcontainer/Dockerfile

```dockerfile
WORKDIR /root/ui2someone
```

### 5. 清理和重建

#### 删除旧的 lock 文件

```bash
rm pnpm-lock.yaml
```

#### 重新安装依赖

```bash
pnpm install
```

#### 验证构建

```bash
pnpm build
```

## 验证清单

### 功能验证

- [x] 包名已正确更新
- [x] 所有导入语句已更新
- [x] 文档中的包名引用已更新
- [x] 开发环境配置已更新
- [x] 项目构建成功
- [x] 所有应用正常运行

### 文件检查

- [x] packages/react/package.json
- [x] apps/docs/package.json
- [x] apps/web/package.json
- [x] 根目录 package.json
- [x] packages/react/README.md
- [x] 根目录 README.md
- [x] docs/README.md
- [x] docs/heroui-removal-migration.md
- [x] docs/social-profile-cards.md
- [x] .devcontainer/devcontainer.json
- [x] .devcontainer/Dockerfile
- [x] apps/docs/app/page.tsx
- [x] apps/web/app/page.tsx

## 注意事项

### 重要提醒

1. **NPM 发布**: 需要在 npmjs.com 上创建新的包名 `@ui2someone/react`
2. **GitHub 仓库**: 需要将 GitHub 仓库名从 `socialui` 更改为 `ui2someone`
3. **用户迁移**: 现有用户需要更新他们的依赖引用
4. **文档更新**: 所有外部文档和示例都需要更新

### 后续步骤

1. 在 npmjs.com 上注册 `@ui2someone` 组织
2. 将 GitHub 仓库重命名为 `ui2someone`
3. 更新所有外部文档和示例
4. 通知现有用户关于包名更改
5. 发布新版本到 npm

## 回滚计划

如果迁移过程中遇到问题，可以按以下步骤回滚：

1. 恢复所有 package.json 文件中的包名
2. 恢复所有导入语句
3. 恢复所有文档中的包名引用
4. 恢复开发环境配置
5. 重新安装依赖

## 总结

此次包名迁移成功完成了以下工作：

- ✅ 更新了所有包配置文件
- ✅ 更新了所有导入语句
- ✅ 更新了所有文档文件
- ✅ 更新了开发环境配置
- ✅ 验证了项目构建和运行
- ✅ 清理了旧的依赖文件

新的包名 `@ui2someone/react` 已经准备就绪，可以发布到 npm 和 GitHub。

## 相关文档

- [项目设置指南](./SETUP.md)
- [组件文档](../packages/react/README.md)
- [代码质量规范](./CODE_QUALITY.md)

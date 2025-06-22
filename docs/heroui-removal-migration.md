# HeroUI 移除迁移指南

本文档记录了从 `@ui2someone/react` 包中完全移除 HeroUI 依赖，并使用自定义组件替代的过程。此次迁移旨在减少外部依赖，提高组件的可控性和定制性。

## 迁移概述

### 迁移目标

- 移除 HeroUI 依赖
- 使用自定义组件替代 HeroUI 组件
- 保持 API 兼容性
- 提高组件性能

### 迁移范围

- Button 组件
- Card 组件
- Tooltip 组件
- 其他 HeroUI 组件

## 迁移步骤

### 1. 移除 HeroUI 依赖

```bash
# 从 package.json 中移除 HeroUI
pnpm remove @heroui/react @heroui/themes
```

### 2. 更新导入语句

#### 迁移前

```tsx
import { Button } from "@ui2someone/react";
```

#### 迁移后

```tsx
import { Button } from "@ui2someone/react";
```

### 3. 组件 API 变更

#### Button 组件

##### 迁移前

```tsx
import { Button } from "@ui2someone/react";

<Button color="primary" variant="solid">
  Click me
</Button>;
```

##### 迁移后

```tsx
import { Button } from "@ui2someone/react";

<Button variant="primary">Click me</Button>;
```

#### Card 组件

##### 迁移前

```tsx
import { Card, CardBody } from "@ui2someone/react";

<Card>
  <CardBody>Card content</CardBody>
</Card>;
```

##### 迁移后

```tsx
import { Card } from "@ui2someone/react";

<Card>Card content</Card>;
```

#### Tooltip 组件

##### 迁移前

```tsx
import { Tooltip } from "@ui2someone/react";

<Tooltip content="Tooltip text">
  <Button>Hover me</Button>
</Tooltip>;
```

##### 迁移后

```tsx
import { Tooltip } from "@ui2someone/react";

<Tooltip content="Tooltip text">
  <Button>Hover me</Button>
</Tooltip>;
```

## 兼容性说明

### 保持兼容的 API

- 基本的 props 结构
- 事件处理函数
- 样式类名

### 变更的 API

- 颜色属性从 `color` 改为 `variant`
- 部分组件的嵌套结构简化
- 某些高级功能可能需要手动实现

## 性能优化

### 迁移后的优势

- 减少包体积
- 提高加载速度
- 更好的 Tree-shaking
- 自定义样式更容易

### 注意事项

- 确保自定义组件性能不劣于原组件
- 保持 TypeScript 类型安全
- 维护良好的文档和示例

## 测试建议

### 迁移测试清单

- [ ] 组件渲染正常
- [ ] 样式显示正确
- [ ] 交互功能正常
- [ ] TypeScript 类型检查通过
- [ ] 单元测试通过
- [ ] 集成测试通过

### 测试命令

```bash
# 运行类型检查
pnpm check-types

# 运行测试
pnpm test

# 运行 Storybook
pnpm storybook
```

## 回滚计划

如果迁移过程中遇到问题，可以按以下步骤回滚：

1. 恢复 HeroUI 依赖
2. 恢复原有的导入语句
3. 恢复组件 API 使用方式
4. 更新相关文档

## 总结

此次迁移成功移除了 HeroUI 依赖，提高了组件的可控性和性能。新的自定义组件保持了良好的 API 兼容性，同时提供了更好的定制能力。

## 相关文档

- [组件文档](../packages/react/README.md)
- [Storybook 文档](http://localhost:6006)
- [TypeScript 配置](../packages/typescript-config/README.md)

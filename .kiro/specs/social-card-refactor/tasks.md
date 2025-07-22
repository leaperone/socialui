# 实现计划

- [x] 1. 创建基础 SocialProfileCardPlain 组件

  - 在 components 目录下创建 social-profile-card-plain.tsx 文件
  - 实现纯逻辑组件，专注于核心功能，不包含内置样式
  - 提取所有社交媒体卡片的共享逻辑和结构
  - _需求: 1.1, 1.2, 1.3_

- [x] 1.1 定义 SocialProfileCardPlain 接口

  - 创建全面的 props 接口，支持所有必要的数据字段
  - 设计完整的样式类名 props，用于接收外部样式
  - 确保接口设计灵活，可适应所有平台特定需求
  - _需求: 1.1, 3.1, 3.2, 3.3_

- [x] 1.2 实现 QR 码生成和管理功能

  - 从现有组件中提取 QR 码生成逻辑
  - 添加统一的加载状态和错误处理
  - 支持自定义 QR 码选项
  - _需求: 4.1, 4.2, 4.3_

- [x] 1.3 实现基础组件结构

  - 创建基本的 DOM 结构，不包含任何硬编码样式
  - 实现基于 className props 的样式注入系统
  - 确保组件可以通过 props 接收所有必要的样式类名
  - _需求: 3.2, 3.3, 3.4_

- [x] 2. 重构 X 平台卡片组件

  - 修改 XProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 X 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 3. 重构 WeChat 联系人卡片组件

  - 修改 WeChatContactCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现微信平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 4. 重构 LinkedIn 个人资料卡片组件

  - 修改 LinkedInProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 LinkedIn 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 5. 重构 Facebook 个人资料卡片组件

  - 修改 FacebookProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Facebook 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 6. 重构 Weibo 个人资料卡片组件

  - 修改 WeiboProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现微博平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 7. 重构 Bilibili 个人资料卡片组件

  - 修改 BilibiliProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Bilibili 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 8. 更新导出和索引文件

  - 确保所有组件正确导出
  - 维护向后兼容性
  - 更新类型定义
  - _需求: 5.1, 5.2, 5.3_

- [x] 9. 重构 Jike 个人资料卡片组件

  - 修改 JikeProfileCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Jike 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 10. 重构 WhatsApp 联系人卡片组件

  - 修改 WhatsAppContactCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 WhatsApp 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 11. 重构 Line 联系人卡片组件

  - 修改 LineContactCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Line 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 12. 重构 Taobao 商店卡片组件

  - 修改 TaobaoStoreCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现淘宝平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 13. 重构 Twitch 直播间卡片组件

  - 修改 TwitchLiveRoomCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Twitch 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 14. 重构 Stripe 产品卡片组件

  - 修改 StripeProductCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 Stripe 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 15. 重构 YouTube 频道卡片组件

  - 修改 YouTubeChannelCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现 YouTube 平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [x] 16. 重构 WeChat 公众号卡片组件

  - 修改 WeChatOfficialAccountCard 为样式包装组件，使用 SocialProfileCardPlain
  - 实现微信公众号平台特定的主题配置和装饰性元素
  - 计算样式类名并传递给基础组件
  - 确保视觉效果与现有组件一致
  - _需求: 2.1, 2.2, 2.3, 5.1, 5.2_

- [ ] 17. 更新 Storybook 故事

  - 更新所有平台卡片的故事
  - 添加 SocialProfileCardPlain 的故事和文档
  - 确保所有变体和配置选项都有示例
  - _需求: 5.4, 6.1, 6.2_

- [ ] 18. 编写测试

  - 为 SocialProfileCardPlain 编写单元测试
  - 为每个平台包装组件编写测试
  - 添加集成测试验证组件组合
  - _需求: 1.3, 2.4, 3.1, 4.2_

- [ ] 19. 代码优化和清理

  - 移除重复代码
  - 优化性能
  - 确保代码质量和一致性
  - _需求: 1.3, 6.1, 6.2, 6.3_

- [ ] 20. 文档更新
  - 更新组件文档
  - 添加使用示例
  - 提供迁移指南
  - _需求: 5.1, 5.2, 6.3, 6.4_

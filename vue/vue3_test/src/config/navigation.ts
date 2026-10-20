/**
 * 左侧导航配置
 *
 * 导航分为四个一级区块：指南、组件、主题、生态。
 *
 * 组件区块的子分类（Basic/Form/Data/...）从 docs/index.ts 的 componentCategories
 * 自动生成，新增组件分类只需在 docs/ 中定义，无需修改此处。
 *
 * 指南/主题/生态的子项是手动维护的占位链接，对应 GuideDoc/ThemeDoc/EcosystemDoc 页面。
 */
import { componentCategories } from '../docs'

/** 单个导航项（叶子节点，如 "Button 按钮"、"安装"） */
export interface NavItem {
  /** 路由路径 */
  path: string
  /** 中文标题 */
  title: string
  /** 英文标题（用于多语言预留） */
  titleEn: string
}

/** 导航分组（如 "Basic 基础组件"） */
export interface NavGroup {
  /** 分组中文标题 */
  title: string
  /** 分组英文标题 */
  titleEn: string
  /** 图标名称（预留） */
  icon: string
  /** 分组下的子项 */
  children: NavItem[]
}

/** 导航区块（一级分类，如 "指南"、"组件"） */
export interface NavSection {
  /** 区块中文标题 */
  title: string
  /** 区块英文标题 */
  titleEn: string
  /** 直接子项（非分组结构，如指南下的 "安装"、"快速开始"） */
  items?: NavItem[]
  /** 分组子项（分组结构，如组件下的 Basic、Form、Data） */
  groups?: NavGroup[]
}

/**
 * 导航数据数组
 *
 * 结构说明：
 * - 指南 / 主题 / 生态：手动维护 items
 * - 组件：从 componentCategories 自动生成 groups
 */
export const navSections: NavSection[] = [
  // ============================================================
  // 指南：手动维护，对应 GuideDoc.vue
  // ============================================================
  {
    title: '指南',
    titleEn: 'Guide',
    items: [
      { path: '/guide/installation', title: '安装', titleEn: 'Installation' },
      { path: '/guide/quickstart', title: '快速开始', titleEn: 'QuickStart' },
      { path: '/guide/i18n', title: '国际化', titleEn: 'I18n' },
      { path: '/guide/builder', title: '构建工具', titleEn: 'Builder' },
      { path: '/guide/ssr', title: '服务端渲染', titleEn: 'SSR' },
      { path: '/guide/theme', title: '主题', titleEn: 'Theme' },
      { path: '/guide/design', title: '设计资源', titleEn: 'Design Resources' },
    ],
  },

  // ============================================================
  // 组件：componentCategories 自动生成 groups，新增分类无需修改此处
  // ============================================================
  {
    title: '组件',
    titleEn: 'Components',
    items: [{ path: '/', title: '组件概览', titleEn: 'Overview' }],
    groups: Object.entries(componentCategories).map(([key, cat]) => ({
      title: cat.title,
      titleEn: cat.titleEn,
      icon: cat.icon,
      children: cat.components.map((c) => ({
        path: c.path,
        title: c.title,
        titleEn: c.nameEn,
      })),
    })),
  },

  // ============================================================
  // 主题：手动维护，对应 ThemeDoc.vue
  // ============================================================
  {
    title: '主题',
    titleEn: 'Theme',
    items: [
      { path: '/theme/overview', title: '主题配置', titleEn: 'Theme Config' },
      { path: '/theme/variables', title: '变量说明', titleEn: 'Variables' },
      { path: '/theme/migration', title: 'Migration', titleEn: 'Migration' },
    ],
  },

  // ============================================================
  // 生态：手动维护，对应 EcosystemDoc.vue
  // ============================================================
  {
    title: '生态',
    titleEn: 'Ecosystem',
    items: [
      { path: '/ecosystem/awesome', title: 'Awesome Elements', titleEn: 'Awesome Elements' },
      { path: '/ecosystem/admin', title: 'Element Plus Admin', titleEn: 'Admin' },
      { path: '/ecosystem/vue-admin', title: 'Element Plus Vue Admin', titleEn: 'Vue Admin' },
    ],
  },
]

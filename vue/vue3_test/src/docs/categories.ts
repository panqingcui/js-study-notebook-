import type { CategoryMeta } from './types'

export const categories: Record<string, CategoryMeta> = {
  basic: {
    title: '基础组件',
    titleEn: 'Basic',
    icon: 'Grid',
  },
  form: {
    title: '表单组件',
    titleEn: 'Form',
    icon: 'Edit',
  },
  data: {
    title: '数据展示',
    titleEn: 'Data Display',
    icon: 'Document',
  },
  navigation: {
    title: '导航组件',
    titleEn: 'Navigation',
    icon: 'Menu',
  },
  feedback: {
    title: '反馈组件',
    titleEn: 'Feedback',
    icon: 'Message',
  },
  config: {
    title: '配置组件',
    titleEn: 'Config',
    icon: 'Setting',
  },
  others: {
    title: '其他组件',
    titleEn: 'Others',
    icon: 'More',
  },
}

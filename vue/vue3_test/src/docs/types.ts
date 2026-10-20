export interface Example {
  title: string
  description?: string
  template?: string
  code: string
}

export interface ComponentMeta {
  name: string
  nameEn: string
  path: string
  title: string
  description: string
  category: string
  props?: Array<{
    name: string
    type: string
    default?: string
    description: string
  }>
  events?: Array<{
    name: string
    description: string
    params?: string
  }>
  slots?: Array<{
    name: string
    description: string
  }>
  demos?: Example[]
}

export interface CategoryMeta {
  title: string
  titleEn: string
  icon: string
}

export interface DocCategoryData {
  category: string
  title: string
  titleEn: string
  icon: string
  components: ComponentMeta[]
}

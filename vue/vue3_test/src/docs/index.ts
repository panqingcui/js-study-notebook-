import type { ComponentMeta } from './types'
import { categories } from './categories'
import { basic } from './basic'
import { form } from './form'
import { data } from './data'
import { navigation } from './navigation'
import { feedback } from './feedback'
import { config } from './config'
import { others } from './others'

export type { ComponentMeta, CategoryMeta, Example, DocCategoryData } from './types'
export { categories } from './categories'

export const categoryOrder = ['basic', 'form', 'data', 'navigation', 'feedback', 'config', 'others']

const categoryMap: Record<string, ComponentMeta[]> = {
  basic,
  form,
  data,
  navigation,
  feedback,
  config,
  others,
}

export const allComponents: ComponentMeta[] = categoryOrder.flatMap((cat) => categoryMap[cat])

export const componentCategories = categoryOrder.map((cat) => ({
  ...categories[cat],
  category: cat,
  components: categoryMap[cat],
}))

export function getComponentByPath(path: string): ComponentMeta | undefined {
  return allComponents.find((c) => c.path === path)
}

export function getComponentByName(name: string): ComponentMeta | undefined {
  return allComponents.find((c) => c.name === name)
}

/**
 * 路由配置
 *
 * 路由也采用自动生成 + 手动维护的混合模式：
 *   - 组件路由：从 docs/index.ts 的 allComponents 自动生成，
 *     每个组件指向 ComponentDoc.vue，通过 props.componentPath 区分内容
 *   - 指南 / 主题 / 生态 路由：从 config/navigation.ts 的 navSections 生成，
 *     分别指向 GuideDoc.vue / ThemeDoc.vue / EcosystemDoc.vue
 *   - 首页：固定指向 OverviewPage.vue
 *
 * 新增组件：只需在 docs/ 添加元数据 + demos/ 添加 Demo，路由自动包含
 */
import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '../pages/overview/Overview.vue'
import ComponentDoc from '../pages/component/ComponentDoc.vue'
import GuideDoc from '../pages/guide/GuideDoc.vue'
import ThemeDoc from '../pages/theme/ThemeDoc.vue'
import EcosystemDoc from '../pages/ecosystem/EcosystemDoc.vue'
import { allComponents } from '../docs'
import { navSections } from '../config/navigation'

// ============================================================
// 1. 首页：组件概览
// ============================================================
const routes: any[] = [
  {
    path: '/',
    name: 'Overview',
    component: OverviewPage,
    meta: { title: '组件概览' },
  },
]

// ============================================================
// 2. 组件文档路由（自动生成）
//
// 从 allComponents 遍历，每个组件生成一条路由，
// 都指向同一个 ComponentDoc.vue 组件，
// 通过 props.componentPath 让 ComponentDoc 知道渲染哪个组件的文档
// ============================================================
allComponents.forEach((comp) => {
  routes.push({
    path: comp.path,
    name: comp.path,
    component: ComponentDoc,
    meta: { title: comp.title },
    props: { componentPath: comp.path },
  })
})

// ============================================================
// 3. 指南 / 主题 / 生态 路由（从 navSections 生成）
//
// 根据 path 前缀判断指向哪个通用页面组件
// ============================================================
navSections.forEach((section) => {
  if (section.items) {
    section.items.forEach((item) => {
      if (item.path === '/') return

      if (item.path.startsWith('/guide')) {
        routes.push({
          path: item.path,
          name: item.path,
          component: GuideDoc,
          meta: { title: item.title },
          props: { title: item.title },
        })
      } else if (item.path.startsWith('/theme')) {
        routes.push({
          path: item.path,
          name: item.path,
          component: ThemeDoc,
          meta: { title: item.title },
          props: { title: item.title },
        })
      } else if (item.path.startsWith('/ecosystem')) {
        routes.push({
          path: item.path,
          name: item.path,
          component: EcosystemDoc,
          meta: { title: item.title },
          props: { title: item.title },
        })
      }
    })
  }
})

// ============================================================
// 创建路由实例
// ============================================================
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 路由切换后自动更新浏览器标签页标题
router.afterEach((to) => {
  const title = to.meta?.title as string
  if (title) {
    document.title = `${title} - Element Plus`
  }
})

export default router

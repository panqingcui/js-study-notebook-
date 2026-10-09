// 路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
// 路由实例
const router = createRouter({
  history: createWebHashHistory(), // 哈希模式
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/news',
      component: News,
    },
  ],
})
// 导出路由实例
export default router

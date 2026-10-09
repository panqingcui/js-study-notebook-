// 路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detail.vue'
// 路由实例
const router = createRouter({
  history: createWebHashHistory(), // 哈希模式
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'about',
      path: '/about',
      component: About,
    },
    {
      name: 'news',
      path: '/news',
      component: News,
      // 子路由
      children: [
        {
          name: 'detail',
          path: '/news/detail/:id/:title?/:content?',
          component: Detail,
        },
      ],
    },
  ],
})
// 导出路由实例
export default router

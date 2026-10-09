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
          path: '/news/detail',
          component: Detail,
          //第一种方式
          // 将所有收到的params参数，传递路由参数到组件的 props 中
          // props: true,
          //第二种方式
          // 将所有收到的query参数，传递路由参数到组件的 props 中
          props(route) {
            return route.query
          },
          // 第三种方式
          // 将所有收到的params参数，传递路由参数到组件的 props 中
          // props: { id: Number, title: String, content: String },
        },
      ],
    },
    // 重定向
    // 重定向到 /about 路由
    {
      path: '/',
      redirect: '/about',
    },
  ],
})
// 导出路由实例
export default router

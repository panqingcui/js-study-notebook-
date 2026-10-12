import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/views/01_props/Father.vue'
export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/props',
      name: 'props',
      component: Props,
    },
    {
      path: '/event',
      name: 'custom-event',
      component: () => import('@/views/02_custom-event/Father.vue'),
    },
    {
      path: '/mitt',
      name: 'mitt',
      component: () => import('@/views/03-mitt/Father.vue'),
    },
    {
      path: '/model',
      name: 'v-model',
      component: () => import('@/views/04_v-model/Father.vue'),
    },
    {
      path: '/attrs',
      name: 'attrs',
      component: () => import('@/views/05_$attrs/Father.vue'),
    },
    {
      path: '/ref-parent',
      name: 'ref-parent',
      component: () => import('@/views/06_$refs-$parent/Father.vue'),
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('@/views/07_provide-inject/Father.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/08_pinia/Father.vue'),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/09_slot_默认插槽/Father.vue'),
    },
    {
      path: '/slot-named',
      name: 'slot-named',
      component: () => import('@/views/10_slot_具名插槽/Father.vue'),
    },
    {
      path: '/slot-scope',
      name: 'slot-scope',
      component: () => import('@/views/11_slot_作用域插槽/Father.vue'),
    },
  ],
})

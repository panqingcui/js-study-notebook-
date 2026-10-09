// 引入全局样式
// 引入全局组件
import { createApp } from 'vue'
// 引入全局组件
import App from './App.vue'

import { createPinia } from 'pinia'
// 创建pinia实例
const pinia = createPinia()

// 挂载全局组件并使用路由和pinia
createApp(App).use(pinia).mount('#app')

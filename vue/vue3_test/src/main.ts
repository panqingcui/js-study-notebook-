// 引入全局样式
// 引入全局组件
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
import router from './router'

const pinia = createPinia()

createApp(App).use(pinia).use(ElementPlus).use(router).mount('#app')

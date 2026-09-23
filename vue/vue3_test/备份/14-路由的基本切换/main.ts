// 引入全局样式
// 引入全局组件
import { createApp } from 'vue'
// 引入路由实例
import router from './router'
// 引入全局组件
import App from './App.vue'
// 挂载全局组件并使用路由
const app = createApp(App)
// 挂载路由
app.use(router).mount('#app')

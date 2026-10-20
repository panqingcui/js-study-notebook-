import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入element-plus
import ElmentPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入windiCSS
import 'virtual:windi.css'

// 引入windiCSS插件

createApp(App).use(ElmentPlus).mount('#app')



<template>
  <div class="doc-page">
    <header class="page-header">
      <h1>{{ title }}</h1>
      <p class="desc">Element Plus 官方文档 - {{ title }}</p>
    </header>
    <div class="page-content">
      <el-alert
        title="文档内容建设中"
        type="info"
        :closable="false"
        show-icon
        description="这里是 Element Plus 的指南文档页面，后续会逐步完善具体内容。"
      />

      <h2>快速开始</h2>
      <p>以下是 {{ title }} 的基础介绍：</p>
      <el-card>
        <pre><code>// npm 安装
npm install element-plus --save

// 在 main.ts 中引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')</code></pre>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<style scoped>
.doc-page {
  max-width: 960px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.8;
}

.page-header {
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 12px;
  color: #303133;
}

.desc {
  font-size: 14px;
  color: #606266;
  margin: 0;
}

.page-content h2 {
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  margin: 32px 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.page-content p {
  color: #606266;
}

.page-content pre {
  margin: 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #303133;
}
</style>

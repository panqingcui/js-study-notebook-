<template>
  <div class="doc-page">
    <header class="page-header">
      <h1>{{ title }}</h1>
      <p class="desc">Element Plus 主题定制相关内容</p>
    </header>

    <section>
      <h2>主题色</h2>
      <div class="color-grid">
        <div v-for="color in colors" :key="color.name" class="color-item">
          <div class="color-block" :style="{ background: color.value }"></div>
          <div class="color-info">
            <div class="color-name">{{ color.name }}</div>
            <div class="color-value">{{ color.value }}</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>快速开始</h2>
      <el-card>
        <pre><code>// 方式一：CSS 变量覆盖
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
}

// 方式二：SCSS 变量
// 在 src/styles/element-variables.scss 中修改
$ELEMENT_COLOR: #409eff;</code></pre>
      </el-card>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()

const colors = [
  { name: 'Primary', value: '#409eff' },
  { name: 'Success', value: '#67c23a' },
  { name: 'Warning', value: '#e6a23c' },
  { name: 'Danger', value: '#f56c6c' },
  { name: 'Info', value: '#909399' },
]
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

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.color-block {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
}

.color-name {
  font-size: 13px;
  font-weight: 500;
  color: #303133;
}

.color-value {
  font-size: 12px;
  color: #909399;
  font-family: monospace;
}

pre {
  margin: 0;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #303133;
}
</style>

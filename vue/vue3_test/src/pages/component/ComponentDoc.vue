<template>
  <div class="component-doc">
    <header class="doc-header">
      <h1>{{ meta.title }}</h1>
      <p class="doc-desc">{{ meta.description }}</p>
    </header>

    <section class="doc-section">
      <h2>Basic Usage 基础用法</h2>

      <template v-if="demoComponent">
        <div class="demo-block">
          <component :is="demoComponent" />
        </div>
      </template>

      <template v-else>
        <div class="demo-block placeholder">
          <el-icon :size="48" color="#c0c4cc"><Grid /></el-icon>
          <p>{{ meta.name }} 组件示例待实现</p>
          <p class="tip">在 <code>src/demos/</code> 下添加 {{ meta.name }}Demos.vue 即可自动识别</p>
        </div>
      </template>
    </section>

    <section v-if="meta.props && meta.props.length" class="doc-section">
      <h2>Attributes 属性</h2>
      <el-table :data="meta.props" border stripe>
        <el-table-column prop="name" label="参数" width="180" />
        <el-table-column prop="description" label="说明" />
        <el-table-column prop="type" label="类型" width="220" />
        <el-table-column label="默认值" width="140">
          <template #default="{ row }">
            <code>{{ row.default ?? '-' }}</code>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <section v-if="meta.events && meta.events.length" class="doc-section">
      <h2>Events 事件</h2>
      <el-table :data="meta.events" border stripe>
        <el-table-column prop="name" label="事件名" width="160" />
        <el-table-column prop="description" label="说明" />
        <el-table-column prop="params" label="回调参数" width="200" />
      </el-table>
    </section>

    <section v-if="meta.slots && meta.slots.length" class="doc-section">
      <h2>Slots 插槽</h2>
      <el-table :data="meta.slots" border stripe>
        <el-table-column prop="name" label="插槽名" width="160" />
        <el-table-column prop="description" label="说明" />
      </el-table>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { Grid } from '@element-plus/icons-vue'
import { getComponentByPath } from '../../docs'
import { getDemo } from '../../demos'
import type { ComponentMeta } from '../../docs/types'

const props = defineProps<{
  componentPath: string
}>()

const meta = computed<ComponentMeta>(() => {
  return (
    getComponentByPath(props.componentPath) || {
      name: '',
      nameEn: '',
      path: props.componentPath,
      title: '未知组件',
      description: '组件元数据未找到',
      category: '',
    }
  )
})

const demoComponent = computed(() => {
  return getDemo(meta.value.name)
})
</script>

<style scoped>
.component-doc {
  max-width: 960px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.8;
}

.doc-header {
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
}

.doc-header h1 {
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 12px;
  color: #303133;
}

.doc-desc {
  font-size: 14px;
  color: #606266;
  margin: 0;
}

.doc-section {
  margin-bottom: 40px;
}

.doc-section h2 {
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.demo-block {
  background: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 30px;
  min-height: 80px;
}

.demo-block.placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #909399;
  text-align: center;
}

.demo-block.placeholder p {
  margin: 8px 0 0;
}

.demo-block.placeholder .tip {
  font-size: 12px;
  color: #c0c4cc;
}

.demo-block.placeholder code {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
}

:deep(.el-table) {
  font-size: 13px;
}

:deep(.el-table th.el-table__cell) {
  background: #fafafa;
  color: #303133;
  font-weight: 500;
}

:deep(.el-table td.el-table__cell) {
  color: #606266;
}

:deep(.el-table code) {
  background: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: #c7254e;
}
</style>

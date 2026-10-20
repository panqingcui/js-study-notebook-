<template>
  <div class="demo-select-v2">
    <h3>大数据量（1000 条）</h3>
    <el-select-v2
      v-model="value1"
      :options="options"
      placeholder="请选择（支持大数据量）"
      style="width: 280px"
    />

    <h3>可搜索 + 多选</h3>
    <el-select-v2
      v-model="value2"
      :options="options"
      multiple
      filterable
      placeholder="请多选"
      style="width: 320px"
    />

    <h3>分组选项</h3>
    <el-select-v2
      v-model="value3"
      :options="groupedOptions"
      placeholder="请选择"
      style="width: 260px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<number>()
const value2 = ref<number[]>([])
const value3 = ref<number>()

const options = Array.from({ length: 1000 }, (_, i) => ({
  value: i + 1,
  label: `选项 ${i + 1}`,
}))

const groupedOptions = [
  {
    label: '热门语言',
    options: [
      { value: 1, label: 'JavaScript' },
      { value: 2, label: 'TypeScript' },
      { value: 3, label: 'Python' },
    ],
  },
  {
    label: '框架',
    options: [
      { value: 4, label: 'Vue 3' },
      { value: 5, label: 'React' },
      { value: 6, label: 'Angular' },
      { value: 7, label: 'Svelte' },
    ],
  },
]
</script>

<style scoped>
.demo-select-v2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-select-v2 h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

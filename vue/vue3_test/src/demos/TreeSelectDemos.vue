<template>
  <div class="demo-tree-select">
    <h3>基础用法</h3>
    <el-tree-select
      v-model="value1"
      :data="data"
      :render-after-expand="false"
      placeholder="请选择"
      style="width: 240px"
    />

    <h3>可搜索 + 多选</h3>
    <el-tree-select
      v-model="value2"
      :data="data"
      multiple
      filterable
      :render-after-expand="false"
      placeholder="请选择"
      style="width: 280px"
    />

    <h3>勾选模式</h3>
    <el-tree-select
      v-model="value3"
      :data="data"
      show-checkbox
      check-strictly
      :render-after-expand="false"
      placeholder="请选择"
      style="width: 260px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref<number>()
const value2 = ref<number[]>([])
const value3 = ref<number[]>([])

const data = [
  {
    value: 1,
    label: '一级 1',
    children: [
      { value: 11, label: '二级 1-1' },
      {
        value: 12,
        label: '二级 1-2',
        children: [
          { value: 121, label: '三级 1-2-1' },
          { value: 122, label: '三级 1-2-2' },
        ],
      },
    ],
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      { value: 21, label: '二级 2-1' },
      { value: 22, label: '二级 2-2' },
    ],
  },
  { value: 3, label: '一级 3' },
]
</script>

<style scoped>
.demo-tree-select {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-tree-select h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

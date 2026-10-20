<template>
  <div class="demo-color-picker">
    <h3>基础用法</h3>
    <el-color-picker v-model="value1" />

    <h3>不同尺寸</h3>
    <div class="demo-row">
      <el-color-picker v-model="value2" size="small" />
      <el-color-picker v-model="value3" />
      <el-color-picker v-model="value4" size="large" />
    </div>

    <h3>显示透明度</h3>
    <el-color-picker v-model="value5" show-alpha />

    <h3>预设颜色</h3>
    <el-color-picker
      v-model="value6"
      :predefine="[
        '#409EFF',
        '#67C23A',
        '#E6A23C',
        '#F56C6C',
        '#909399',
        '#9B59B6',
        '#1ABC9C',
        '#34495E',
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('#409EFF')
const value2 = ref('#67C23A')
const value3 = ref('#E6A23C')
const value4 = ref('#F56C6C')
const value5 = ref('rgba(64, 158, 255, 0.5)')
const value6 = ref('#409EFF')
</script>

<style scoped>
.demo-color-picker {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-color-picker h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>

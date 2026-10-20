<template>
  <div class="demo-radio">
    <h3>基础用法</h3>
    <el-radio-group v-model="value1">
      <el-radio label="1">选项 A</el-radio>
      <el-radio label="2">选项 B</el-radio>
      <el-radio label="3">选项 C</el-radio>
      <el-radio label="4" disabled>禁用</el-radio>
    </el-radio-group>

    <h3>按钮样式</h3>
    <el-radio-group v-model="value2">
      <el-radio-button label="纽约">纽约</el-radio-button>
      <el-radio-button label="伦敦">伦敦</el-radio-button>
      <el-radio-button label="东京">东京</el-radio-button>
      <el-radio-button label="上海" disabled>上海</el-radio-button>
    </el-radio-group>

    <h3>带边框</h3>
    <div class="demo-row">
      <el-radio v-model="value3" label="1" border>选项 A</el-radio>
      <el-radio v-model="value3" label="2" border>选项 B</el-radio>
      <el-radio v-model="value3" label="3" border disabled>禁用</el-radio>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('1')
const value2 = ref('纽约')
const value3 = ref('1')
</script>

<style scoped>
.demo-radio {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-radio h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>

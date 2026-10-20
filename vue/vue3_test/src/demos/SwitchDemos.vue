<template>
  <div class="demo-switch">
    <h3>基础用法</h3>
    <el-switch v-model="value1" />

    <h3>文字描述</h3>
    <el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费" />

    <h3>颜色自定义</h3>
    <el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949" />

    <h3>禁用</h3>
    <el-switch v-model="value4" disabled />
    <el-switch v-model="value5" disabled />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)
const value5 = ref(false)
</script>

<style scoped>
.demo-switch {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-switch h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

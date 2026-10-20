<template>
  <div class="demo-slider">
    <h3>基础用法（当前值：{{ value1 }}）</h3>
    <el-slider v-model="value1" />

    <h3>带输入框</h3>
    <el-slider v-model="value2" show-input />

    <h3>离散值</h3>
    <el-slider v-model="value3" :step="10" show-stops />

    <h3>范围选择</h3>
    <el-slider v-model="value4" range show-stops :max="10" />

    <h3>竖向</h3>
    <div style="height: 160px; display: flex; gap: 40px">
      <el-slider v-model="value5" vertical height="160px" />
      <el-slider v-model="value6" vertical height="160px" range />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(30)
const value2 = ref(50)
const value3 = ref(30)
const value4 = ref([2, 6])
const value5 = ref(30)
const value6 = ref([20, 60])
</script>

<style scoped>
.demo-slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-slider h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

<template>
  <div class="demo-input-number">
    <h3>基础用法</h3>
    <el-input-number v-model="value1" />

    <h3>步数（step = 2）</h3>
    <el-input-number v-model="value2" :step="2" />

    <h3>范围限制（1 ~ 10）</h3>
    <el-input-number v-model="value3" :min="1" :max="10" />

    <h3>精度</h3>
    <el-input-number v-model="value4" :precision="2" :step="0.1" />

    <h3>无控制按钮</h3>
    <el-input-number v-model="value5" :controls="false" style="width: 150px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(5)
const value4 = ref(1)
const value5 = ref(100)
</script>

<style scoped>
.demo-input-number {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-input-number h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

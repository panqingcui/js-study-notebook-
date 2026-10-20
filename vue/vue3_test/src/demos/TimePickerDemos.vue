<template>
  <div class="demo-time-picker">
    <h3>基础用法</h3>
    <el-time-picker v-model="value1" placeholder="选择时间" style="width: 200px" />

    <h3>范围选择</h3>
    <el-time-picker
      v-model="value2"
      is-range
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      style="width: 300px"
    />

    <h3>时间选择</h3>
    <el-time-select
      v-model="value3"
      :start="'08:30'"
      :step="'00:15'"
      :end="'18:30'"
      placeholder="选择时间"
      style="width: 200px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref<[Date, Date] | null>(null)
const value3 = ref('')
</script>

<style scoped>
.demo-time-picker {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-time-picker h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

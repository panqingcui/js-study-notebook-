<template>
  <div class="demo-date-picker">
    <h3>基础用法</h3>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" style="width: 200px" />

    <h3>日期时间</h3>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      style="width: 220px"
    />

    <h3>范围选择</h3>
    <el-date-picker
      v-model="value3"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      style="width: 300px"
    />

    <h3>月份 / 年份</h3>
    <div class="demo-row">
      <el-date-picker v-model="value4" type="month" placeholder="选择月份" style="width: 160px" />
      <el-date-picker v-model="value5" type="year" placeholder="选择年份" style="width: 160px" />
    </div>

    <h3>周选择</h3>
    <el-date-picker v-model="value6" type="week" placeholder="选择周" style="width: 160px" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref<[Date, Date] | null>(null)
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>

<style scoped>
.demo-date-picker {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-date-picker h3 {
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

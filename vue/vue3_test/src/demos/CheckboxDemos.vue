<template>
  <div class="demo-checkbox">
    <h3>基础用法</h3>
    <div class="demo-row">
      <el-checkbox v-model="checked1">选项 A</el-checkbox>
      <el-checkbox v-model="checked2">选项 B</el-checkbox>
      <el-checkbox v-model="checked3" disabled>禁用</el-checkbox>
    </div>

    <h3>复选框组</h3>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A" />
      <el-checkbox label="复选框 B" />
      <el-checkbox label="复选框 C" />
      <el-checkbox label="复选框 D" />
      <el-checkbox label="复选框 E" disabled />
    </el-checkbox-group>

    <h3>带边框</h3>
    <div class="demo-row">
      <el-checkbox v-model="checked4" border>选项 A</el-checkbox>
      <el-checkbox v-model="checked5" border>选项 B</el-checkbox>
      <el-checkbox v-model="checked6" border disabled>禁用</el-checkbox>
    </div>

    <h3>indeterminate 半选状态</h3>
    <el-checkbox v-model="isAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
      全选 {{ checkList.length }} / 5
    </el-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checked5 = ref(false)
const checked6 = ref(false)

const checkList = ref<string[]>(['复选框 A', '复选框 B'])
const isAll = ref(false)
const isIndeterminate = ref(true)

const allOptions = ['复选框 A', '复选框 B', '复选框 C', '复选框 D', '复选框 E']

function handleCheckAllChange(val: boolean) {
  checkList.value = val ? allOptions.slice(0, 4) : []
  isIndeterminate.value = false
}
</script>

<style scoped>
.demo-checkbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-checkbox h3 {
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

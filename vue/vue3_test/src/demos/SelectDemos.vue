<template>
  <div class="demo-select">
    <h3>基础用法</h3>
    <el-select v-model="value1" placeholder="请选择" style="width: 200px">
      <el-option label="黄金糕" value="黄金糕" />
      <el-option label="双皮奶" value="双皮奶" />
      <el-option label="蚵仔煎" value="蚵仔煎" />
      <el-option label="龙须面" value="龙须面" />
    </el-select>

    <h3>可清空</h3>
    <el-select v-model="value2" clearable placeholder="请选择" style="width: 200px">
      <el-option label="选项 1" value="1" />
      <el-option label="选项 2" value="2" />
      <el-option label="选项 3" value="3" />
    </el-select>

    <h3>可搜索</h3>
    <el-select v-model="value3" filterable placeholder="请搜索" style="width: 200px">
      <el-option label="张三" value="zhangsan" />
      <el-option label="李四" value="lisi" />
      <el-option label="王五" value="wangwu" />
      <el-option label="赵六" value="zhaoliu" />
    </el-select>

    <h3>多选</h3>
    <el-select v-model="value4" multiple placeholder="请多选" style="width: 240px">
      <el-option label="Vue" value="vue" />
      <el-option label="React" value="react" />
      <el-option label="Angular" value="angular" />
      <el-option label="Svelte" value="svelte" />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref<string[]>([])
</script>

<style scoped>
.demo-select {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-select h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

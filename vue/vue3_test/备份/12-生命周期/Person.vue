<template>
  <div class="person">
    <ul>
      <h2>生命周期</h2>
      <li><h3>创建阶段 setup</h3></li>
      <li><h3>挂载阶段：onBeforeMount、onMounted（组件挂载完成后调用）</h3></li>
      <li><h3>更新阶段：onBeforeUpdate、onUpdated（组件数据更新后调用）</h3></li>
      <li><h3>卸载阶段：onBeforeUnmount、onUnmounted（组件卸载前调用）</h3></li>
    </ul>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  computed,
} from 'vue'

// 定义求和的变量
const sum = ref(0)

// 定义改变求和的函数
const changeSum = () => {
  sum.value++
}
onBeforeMount(() => {
  console.log('组件挂载前调用')
})
// 组件挂载完成后调用
onMounted(() => {
  console.log('组件挂载完成后调用')
})
// 组件数据更新后调用
onBeforeUpdate(() => {
  console.log('组件数据更新前调用')
})
onUpdated(() => {
  console.log('组件数据更新后调用')
})
// 组件卸载前调用
onBeforeUnmount(() => {
  console.log('组件卸载前调用')
})
onUnmounted(() => {
  console.log('组件卸载后调用')
})
</script>

<style scoped>
.person {
  margin: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  font-family: '微软雅黑', sans-serif;
}
.case {
  margin: 16px 0;
  padding: 16px;
  background: #fff;
  border-radius: 6px;
  border-left: 4px solid #42b983;
}
.case h3 {
  margin: 0 0 12px 0;
  color: #333;
}
button {
  margin: 4px 8px 4px 0;
  padding: 6px 14px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #359a6b;
}
input {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
}
.child {
  padding: 10px;
  background: #ecf5ff;
  border-radius: 4px;
  display: inline-block;
}
</style>

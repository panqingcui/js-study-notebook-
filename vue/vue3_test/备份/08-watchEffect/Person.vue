<template>
  <div class="person">
    <h1>watchEffect</h1>
    <div>
      <h2>求和{{ sum }}</h2>
      <button @click="changeSum">修改a</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用reactive定义响应式数据
import { ref, watchEffect } from 'vue' //watchEffect
const sum = ref(0)
const changeSum = () => {
  sum.value += 1
}
// 自动收集依赖，当sum变化了，会自动调用回调函数
watchEffect(() => {
  if (sum.value > 5) {
    sum.value = 0
  }
})
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

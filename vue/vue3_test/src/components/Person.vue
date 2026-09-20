<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">年龄+1</button>
    <button @click="showTel">点我查看联系方式</button>
  </div>
</template>

<script setup lang="ts">
// 引入ref函数，用于定义响应式数据
import { ref } from 'vue'

// 定义响应式数据，简单类型用ref
const name = ref('张三')
const age = ref(18)
const tel = ref('13888888888')

// 方法直接定义，模板可以直接使用，不需要挂载
const changeName = () => {
  name.value = 'zhang-san'
}
const changeAge = () => {
  age.value += 1
}
const showTel = () => {
  alert(tel.value)
}
</script>

<style scoped></style>

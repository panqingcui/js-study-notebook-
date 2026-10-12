<template>
  <div class="app">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>性别：{{ person.sex }}</h2>
    <h2>姓名：{{ person.name }}</h2>
    <button @click="person.age += 1">修改年龄</button>
    <hr />
    <h2>姓名：{{ msg }}</h2>
    <input v-model="msg" placeholder="请输入姓名" />
  </div>
</template>
<script setup lang="ts">
import { markRaw, reactive, toRaw } from 'vue'
// 引入自定义的useCustomRef函数
import useCustomRef from './useCustomRef'

let { msg } = useCustomRef('张三', 1000)
let person = reactive({
  name: '张三',
  age: 18,
  sex: '男',
})
// 将响应式对象转换为普通对象
let person2 = toRaw(person)
console.log('响应式对象', person)
console.log('普通对象', person2)
</script>
<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}
button {
  margin: 0 5px;
}
</style>

<template>
  <div class="person">
    <div class="person">
      <!-- 通过析构的方式取值 -->
      <h1>姓名：{{ name }}</h1>
      <h1>年龄：{{ age }}</h1>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeName">修改姓名</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用reactive定义响应式数据
import { ref, reactive, toRefs } from 'vue'
// 定义响应式数据，简单类型用ref
const person = reactive({
  name: '张三',
  age: 18,
})
// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
//改变name和age的值，也会影响到person里面的值,
// 解构
const { name, age } = toRefs(person)
// 定义方法，修改name和age的值
const changeName = () => {
  name.value += '~'
}
const changeAge = () => {
  age.value += 1
}
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

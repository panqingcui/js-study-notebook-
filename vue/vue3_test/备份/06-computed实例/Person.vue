<template>
  <div class="person">
    <div class="person">
      <!-- v-model：value 指令：实现表单元素的双向数据绑定 v-bind:value 指令实现单向数据绑定
       v-model：value 可以简写为 v-model
       v-bind:value 可以简写为 :value
      -->
      姓：<input type="text" v-model="firstName" /> <br />
      名：<input type="text" v-model="lastName" /> <br />
      全名：<span>{{ fullName }}</span> <br />
      <button @click="changeFullName">全名改为：li-si</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用reactive定义响应式数据
import { ref, computed } from 'vue' //引入computed

let firstName = ref('zhang')
let lastName = ref('san')
// 计算属性——既读取又修改
// 计算属性的值是根据依赖的响应式数据变化而变化的,计算属性的值是缓存的,不会每次调用都重新计算
let fullName = computed({
  // 读取
  get() {
    return firstName!.value + '-' + lastName!.value
  },
  // 修改
  set(val) {
    console.log('有人修改了fullName', val)
    firstName.value = val.split('-')[0] ?? ''
    lastName.value = val.split('-')[1] ?? ''
    //第二种写法
    //const [str1,str2] = val.split('-')
    //firstName.value = str1
    //lastName.value = str2
  },
})

function changeFullName() {
  fullName.value = 'li-si' //引起set的val变化
}
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

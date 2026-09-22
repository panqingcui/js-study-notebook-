<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <input type="text" ref="inpt" /> <br /><br />
    <button @click="showLog">点我打印内容</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let title1 = ref()
let title2 = ref()
let title3 = ref()
const inpt = ref<HTMLInputElement | null>(null)

const showLog = () => {
  // 打印内容

  /************************************/

  // 通过ref获取元素
  console.log(title1.value?.innerText)
  console.log(title2.value?.innerText)
  console.log(title3.value?.innerText)

  // 如果要用原生 DOM API，必须给元素加 id
  // const t1 = document.getElementById('xxx')  // 需要模板里有 id="xxx"
}
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

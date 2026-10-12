<template>
  <h3>父组件</h3>
  <h4>汽车：{{ car }}</h4>
  <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
  <!-- 子组件触发事件时，父组件会调用 getToy 方法，将玩具名称作为参数传递给该方法 -->
  <Child @sendToy="getToy" />
  <Child2 />
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'
import Child2 from './Child2.vue'

const car = ref('奔驰')

let toy = ref('')
// 方法
function getToy(value: string) {
  toy.value = value
}
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>

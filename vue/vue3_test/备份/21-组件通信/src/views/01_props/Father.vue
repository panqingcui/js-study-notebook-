<template>
  <h3>父组件</h3>
  <h4>汽车：{{ car }}</h4>
  <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
  <Child :car="car" :sendToy="getToy" :list="list" />
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

const car = undefined
const list = ref([
  { name: '奔驰', price: 1000000 },
  { name: '宝马', price: 800000 },
])

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

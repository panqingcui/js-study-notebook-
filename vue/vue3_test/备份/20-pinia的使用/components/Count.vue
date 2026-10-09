<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>double sum: {{ doubleSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/store/count'
import { storeToRefs } from 'pinia'

// 调用useXxxxxStore得到对应的store
const sumStore = useCounterStore()
/* 使用storeToRefs转换countStore，随后解构 */
const { sum, doubleSum } = storeToRefs(sumStore)
const n = ref(1)
//const sum = ref(0)

const add = () => {
  // sumStore.sum += n.value
  // 调用actions中的increment方法
  sumStore.increment(n.value)
}

const minus = () => {
  // sumStore.sum -= n.value
  sumStore.decrement(n.value)
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>

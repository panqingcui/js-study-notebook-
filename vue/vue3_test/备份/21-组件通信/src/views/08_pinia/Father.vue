<template>
  <div class="father">
    <h3>父组件</h3>
    <p>count：{{ count }}</p>
    <p>double：{{ doubleCount }}</p>
    <button @click="increment">父组件 +1</button>
    <button @click="setMsg('父组件修改消息')">修改消息</button>

    <!-- 子组件 -->
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
import Child from './Child.vue'
// 调用useCounterStore得到对应的store
const counter = useCounterStore()
// 也可以使用解构赋值的方式获取store中的属性和方法
const { count, doubleCount } = storeToRefs(counter)
//函数直接解构
const { increment, setMsg } = counter
</script>

<style scoped>
.father {
  background-color: rgb(165, 165, 165);
  padding: 20px;
  border-radius: 10px;
}
</style>

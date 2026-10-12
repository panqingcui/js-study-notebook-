<template>
  <div class="grand-child">
    <h3>我是孙子组件</h3>
    <h4>银子：{{ money }}</h4>
    <h4>车子：{{ car.brand }}车，价值{{ car.price }}万元</h4>
    <button @click="updateMoney(10)">花10万元</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
// 注入数据上下文，获取money和updateMoney函数，并设置默认值为
const { money, updateMoney } = inject('moneyContext', {
  money: 0,
  updateMoney: (value: number) => {},
})
const car = inject('car', {
  brand: '',
  price: 0,
})
</script>

<style scoped>
.grand-child {
  margin-top: 20px;
  background-color: orange;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
}
</style>

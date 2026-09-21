<template>
  <div class="person">
    <div class="person">
      <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
      <h2>游戏列表：</h2>
      <ul>
        <!-- 遍历游戏列表，显示每个游戏的名称 ：key="g.id" -->
        <li v-for="g in games" :key="g.id">{{ g.name }}</li>
      </ul>
      <h2>测试：{{ obj.a.b.c.d }}</h2>
      <button @click="changeCarPrice">修改汽车价格</button>
      <button @click="changeFirstGame">修改第一游戏</button>
      <button @click="test">测试</button>
      <button @click="changeCar">修改汽车</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 使用reactive定义响应式数据
import { ref, reactive } from 'vue'
// 定义响应式数据，复杂类型用reactive
const car = reactive({
  brand: '奔驰',
  price: 1000000,
})
const games = ref([
  { id: 1, name: '游戏1' },
  { id: 2, name: '游戏2' },
  { id: 3, name: '游戏3' },
])
const obj = ref({
  a: {
    b: {
      c: {
        d: 'hello vue',
      },
    },
  },
})
// 方法直接定义，模板可以直接使用，不需要挂载
const changeCarPrice = () => {
  car.price += 100
}
const changeFirstGame = () => {
  games.value[0]!.name = '新游戏1'
}
const changeCar = () => {
  //ref 可以直接修改对象
  // car.value = {
  //   brand: '宝马',
  //   price: 100,
  // }
  // //reactive 不能直接修改对象，需要使用 Object.assign 方法
  Object.assign(car, {
    brand: '宝马',
    price: 145,
  })
}
const test = () => {
  alert(obj.value.a.b.c.d)
}
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

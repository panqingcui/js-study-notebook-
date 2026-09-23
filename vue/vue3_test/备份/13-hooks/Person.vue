<template>
  <div class="person">
    <ul>
      <h2>hooks</h2>
      <p>hooks 是 vue 3 中新增的特性，它可以在组件中使用函数式 API 来实现组件的逻辑。</p>
      <p>hooks 可以在组件中使用，也可以在插件中使用。</p>
    </ul>
    <h2>hooks 实现</h2>
    <div>
      <h3>{{ sum }}</h3>
      <p>useSum 是一个简单的 hooks，用于实现求和的逻辑。</p>
      <button @click="increment">点我+1</button>
      <button @click="decrement">点我-1</button>
    </div>
    <div>
      <img
        v-for="(item, index) in dogList.list"
        :key="index"
        :src="item"
        style="width: 200px; height: auto; display: block; margin: 8px 0"
      />
      <p>useDog 是一个简单的 hooks，用于实现获取狗狗图片的逻辑。</p>
      <span v-show="dogList.isLoading">加载中......</span><br />
      <button @click="getDog">再来一只狗</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'
// 解构赋值
const { sum, increment, decrement } = useSum()
const { dogList, getDog } = useDog()
</script>

<style scoped>
.person {
  margin: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  font-family: '微软雅黑', sans-serif;
}
.case {
  margin: 16px 0;
  padding: 16px;
  background: #fff;
  border-radius: 6px;
  border-left: 4px solid #42b983;
}
.case h3 {
  margin: 0 0 12px 0;
  color: #333;
}
button {
  margin: 4px 8px 4px 0;
  padding: 6px 14px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #359a6b;
}
input {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
}
.child {
  padding: 10px;
  background: #ecf5ff;
  border-radius: 4px;
  display: inline-block;
}
</style>

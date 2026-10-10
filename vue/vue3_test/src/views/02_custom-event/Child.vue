<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <!-- 点击按钮触发自定义事件 sendToy，将玩具名称作为参数传递给父组件的 getToy 方法 -->
    <button @click="emit('sendToy', toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 数据
let toy = ref('奥特曼')
// 定义自定义事件
const emit = defineEmits(['sendToy'])
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>

<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <!-- 点击按钮触发自定义事件 sendToy，将玩具名称作为参数传递给父组件的 getToy 方法 -->
    <button @click="emitter.emit('sendToy', toy)">发送事件，把玩具给兄弟</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emitter from '@/utils/emitter'

// 数据
let toy = ref('奥特曼')
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>

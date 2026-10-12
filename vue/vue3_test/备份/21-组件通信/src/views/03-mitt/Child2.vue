<template>
  <div class="child">
    <h3>子组件</h3>
    <h4 v-show="toy">兄弟给我的玩具：{{ toy }}</h4>
    <!-- 点击按钮触发自定义事件 sendToy，将玩具名称作为参数传递给父组件的 getToy 方法 -->
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'
// 数据
let toy = ref('')
// 监听事件 给emitter绑定send-toy事件
emitter.on('sendToy', (value: any) => {
  toy.value = value
})
// 组件卸载时，取消监听send-toy事件
onUnmounted(() => {
  emitter.off('send-toy')
})
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>

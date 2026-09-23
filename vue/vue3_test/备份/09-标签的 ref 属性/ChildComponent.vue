<template>
  <div class="child">我是子组件</div>
</template>

<script setup lang="ts">
const sayHello = () => {
  console.log('👋 子组件的方法被调用了！')
  alert('👋 子组件的方法被调用了！')
}

const sayHello1 = () => {
  console.log('👋 子组件的方法被调用了！')
  alert('👋 子组件的方法被调用了！')
}

defineExpose({ sayHello, sayHello1 })
</script>

<style scoped>
.child {
  padding: 10px;
  background: #ecf5ff;
  border-radius: 4px;
  display: inline-block;
}
</style>

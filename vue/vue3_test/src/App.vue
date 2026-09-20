<template>
  <div class="app">
    <h1>你好啊！</h1>
    <Person />
  </div>
</template>
<script setup lang="ts">
// 引入Person组件
import Person from './components/Person.vue'

// 注册Person组件
components: {
  Person
}
</script>
<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px rgba(224, 221, 221, 0.5);
  border-radius: 10px;
  padding: 20px;
}
</style>

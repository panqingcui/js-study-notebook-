<template>
  <div class="category">
    <slot name="title">默认插槽内容</slot>
    <slot name="content">默认插槽内容</slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}

.category h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>

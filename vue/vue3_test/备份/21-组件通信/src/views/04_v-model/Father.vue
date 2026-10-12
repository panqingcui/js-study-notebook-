<template>
  <!-- v-model 等价于 :modelValue="msg" @update:modelValue="msg = $event" -->
  <p>父组件值：{{ msg }}</p>
  <Child v-model="msg" />
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

let msg = ref('hello')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>

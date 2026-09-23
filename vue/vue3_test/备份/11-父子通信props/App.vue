<template>
  <Person name="张三" :age="3333" :list="persons" />
</template>
<script setup lang="ts">
// 引入Person组件
import Person from './components/Person.vue'
import { ref } from 'vue'
import { type PersonProps } from '@/types/index'

const persons = ref<PersonProps[]>([
  {
    name: '张三',
    age: 3333,
  },
  {
    name: '张三',
    age: 3333,
  },
])
</script>
<style></style>

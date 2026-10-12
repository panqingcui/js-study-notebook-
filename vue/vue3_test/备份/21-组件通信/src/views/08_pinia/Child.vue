<template>
  <div class="child">
    <h3>子组件</h3>
    <p>count：{{ counter.count }}</p>
    <p>msg：{{ counter.msg }}</p>
    <button @click="counter.increment">子组件 +1</button>
    <button @click="counter.setMsg('子组件修改消息')">子修改消息</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
</script>

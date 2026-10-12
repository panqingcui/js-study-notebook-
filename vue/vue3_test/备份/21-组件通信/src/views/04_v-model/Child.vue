<template>
  <div class="child">
    <h3>子组件 v-model</h3>
    <!-- 不能直接修改 props.modelValue！props只读 -->
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emitter from '@/utils/emitter'
// 定义 props
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

// 定义 emit
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
input {
  border: 2px solid black;
  background-image: linear-gradient(45deg, red, yellow, green);
  height: 30px;
  font-size: 20px;
  color: white;
}
</style>

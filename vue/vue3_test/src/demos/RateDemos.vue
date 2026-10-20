<template>
  <div class="demo-rate">
    <h3>基础用法</h3>
    <el-rate v-model="value1" />

    <h3>允许半选</h3>
    <el-rate v-model="value2" allow-half />

    <h3>显示辅助文字</h3>
    <el-rate v-model="value3" show-text :texts="['极差', '较差', '一般', '较好', '非常好']" />

    <h3>显示分数</h3>
    <el-rate v-model="value4" show-score />

    <h3>自定义图标</h3>
    <el-rate v-model="value5" :icon="StarFilled" :void-icon="Star" color="#f56c6c" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { StarFilled, Star } from '@element-plus/icons-vue'
const value1 = ref(3)
const value2 = ref(3.5)
const value3 = ref(4)
const value4 = ref(3)
const value5 = ref(4)
</script>

<style scoped>
.demo-rate {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.demo-rate h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

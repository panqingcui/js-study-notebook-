<template>
  <div class="demo-infinite-scroll">
    <h3>基础用法（滚动到底自动加载）</h3>
    <el-scrollbar
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="disabled"
      :infinite-scroll-delay="0"
      :infinite-scroll-distance="20"
      height="300px"
      style="width: 100%"
    >
      <div v-for="(item, index) in count" :key="index" class="infinite-item">
        第 {{ item }} 条数据
      </div>
      <div v-if="loading" class="loading-text">加载中...</div>
      <div v-if="disabled" class="loading-text">没有更多数据了</div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref<number[]>(Array.from({ length: 20 }, (_, i) => i + 1))
const loading = ref(false)
const disabled = ref(false)

function loadMore() {
  if (loading.value) return
  loading.value = true
  setTimeout(() => {
    const start = count.value.length
    count.value = count.value.concat(Array.from({ length: 10 }, (_, i) => start + i + 1))
    loading.value = false
    if (count.value.length >= 100) disabled.value = true
  }, 500)
}
</script>

<style scoped>
.demo-infinite-scroll {
  width: 100%;
}
.demo-infinite-scroll h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0 0 16px;
}
.infinite-item {
  padding: 10px 16px;
  border-bottom: 1px solid #ebeef5;
  color: #606266;
  font-size: 13px;
}
.loading-text {
  text-align: center;
  padding: 12px;
  color: #909399;
  font-size: 13px;
}
</style>

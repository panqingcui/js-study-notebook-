<template>
  <div class="demo-pagination">
    <h3>基础分页</h3>
    <el-pagination
      v-model:current-page="currentPage1"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      :total="100"
      layout="total, sizes, prev, pager, next, jumper"
      background
    />

    <h3>小型</h3>
    <el-pagination
      v-model:current-page="currentPage2"
      v-model:page-size="pageSize2"
      :page-sizes="[10, 20]"
      :total="50"
      layout="total, sizes, prev, pager, next"
      small
    />

    <h3>极简</h3>
    <el-pagination v-model:current-page="currentPage3" :total="80" layout="prev, pager, next" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const currentPage1 = ref(1)
const pageSize = ref(10)
const currentPage2 = ref(1)
const pageSize2 = ref(10)
const currentPage3 = ref(1)
</script>

<style scoped>
.demo-pagination {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-pagination h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

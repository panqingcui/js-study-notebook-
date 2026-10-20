<template>
  <div class="demo-transfer">
    <h3>基础用法</h3>
    <el-transfer
      v-model="value"
      :data="data"
      :titles="['源列表', '目标列表']"
      :button-texts="['到左边', '到右边']"
      :placeholder="['请输入搜索内容', '请输入搜索内容']"
      filterable
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface TransferItem {
  key: number
  label: string
  disabled?: boolean
}

const data: TransferItem[] = Array.from({ length: 20 }, (_, i) => ({
  key: i,
  label: `选项 ${i + 1}`,
  disabled: i % 3 === 0,
}))

const value = ref<number[]>([1, 3, 5])
</script>

<style scoped>
.demo-transfer {
  width: 100%;
}
.demo-transfer h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0 0 16px;
}
</style>

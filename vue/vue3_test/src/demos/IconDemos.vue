<template>
  <div class="demo-icon">
    <div class="demo-row">
      <el-icon :size="32" color="#409eff"><Edit /></el-icon>
      <el-icon :size="32" color="#67c23a"><Share /></el-icon>
      <el-icon :size="32" color="#e6a23c"><Delete /></el-icon>
      <el-icon :size="32" color="#f56c6c"><Search /></el-icon>
      <el-icon :size="32" color="#909399"><Loading /></el-icon>
      <el-icon :size="32" color="#9b59b6"><Star /></el-icon>
      <el-icon :size="32" color="#1abc9c"><Check /></el-icon>
      <el-icon :size="32" color="#3498db"><InfoFilled /></el-icon>
      <el-icon :size="32" color="#2ecc71"><Plus /></el-icon>
      <el-icon :size="32" color="#2ecc71"><SuccessFilled /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Edit,
  Share,
  Delete,
  Search,
  Loading,
  Star,
  Check,
  InfoFilled,
  Plus,
  SuccessFilled,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-icon {
  width: 100%;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
</style>

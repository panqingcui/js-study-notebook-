<template>
  <div class="demo-badge">
    <h3>基础用法</h3>
    <div class="demo-row">
      <el-badge :value="12" class="item">
        <el-button>评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="success">
        <el-button type="success">消息</el-button>
      </el-badge>
      <el-badge :value="5" class="item" type="warning">
        <el-button type="warning">提醒</el-button>
      </el-badge>
      <el-badge :value="99" class="item" type="info">
        <el-button type="info">通知</el-button>
      </el-badge>
    </div>

    <h3>最大值</h3>
    <div class="demo-row">
      <el-badge :value="200" :max="99" class="item">
        <el-button>超过 99 显示 99+</el-button>
      </el-badge>
    </div>

    <h3>小红点</h3>
    <div class="demo-row">
      <el-badge is-dot class="item">
        <el-button>有新消息</el-button>
      </el-badge>
      <el-badge is-dot type="success" class="item">
        <el-icon :size="28"><Bell /></el-icon>
      </el-badge>
      <el-badge is-dot type="danger" class="item">
        <el-avatar :size="40" :style="{ background: '#409eff' }">U</el-avatar>
      </el-badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-badge {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-badge h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.item {
  margin-right: 16px;
}
</style>

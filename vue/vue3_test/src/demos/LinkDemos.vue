<template>
  <div class="demo-link">
    <h3>基础链接</h3>
    <div class="demo-row">
      <el-link href="#" type="primary">主要链接</el-link>
      <el-link href="#" type="success">成功链接</el-link>
      <el-link href="#" type="warning">警告链接</el-link>
      <el-link href="#" type="danger">危险链接</el-link>
      <el-link href="#" type="info">信息链接</el-link>
    </div>

    <h3>下划线 / 禁用</h3>
    <div class="demo-row">
      <el-link href="#" :underline="false">无下划线</el-link>
      <el-link href="#" :underline="true">有下划线</el-link>
      <el-link href="#" disabled>禁用链接</el-link>
    </div>

    <h3>带图标</h3>
    <div class="demo-row">
      <el-link href="#" :icon="Edit">编辑</el-link>
      <el-link href="#" :icon="Delete" type="danger">删除</el-link>
      <el-link href="#" :icon="Download" type="success">下载</el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Edit, Delete, Download } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-link {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-link h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>

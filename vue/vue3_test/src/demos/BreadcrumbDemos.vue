<template>
  <div class="demo-breadcrumb">
    <h3>基础面包屑</h3>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">组件</a></el-breadcrumb-item>
      <el-breadcrumb-item>详情页</el-breadcrumb-item>
    </el-breadcrumb>

    <h3>自定义分隔符</h3>
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>编辑用户</el-breadcrumb-item>
    </el-breadcrumb>

    <h3>图标 + 文本</h3>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <el-icon><HomeFilled /></el-icon>
        <span style="margin-left: 4px">首页</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <el-icon><Document /></el-icon>
        <span style="margin-left: 4px">文章</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>文章标题</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { HomeFilled, Document } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-breadcrumb {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-breadcrumb h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

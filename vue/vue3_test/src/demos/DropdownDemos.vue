<template>
  <div class="demo-dropdown">
    <h3>基础下拉菜单</h3>
    <el-dropdown @command="handleCommand">
      <el-button>
        下拉菜单 <el-icon class="el-icon--right"><ArrowDown /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">黄金糕</el-dropdown-item>
          <el-dropdown-item command="b">双皮奶</el-dropdown-item>
          <el-dropdown-item command="c" divided>蚵仔煎</el-dropdown-item>
          <el-dropdown-item command="d" disabled>龙须面（禁用）</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <h3>按钮形式</h3>
    <el-dropdown split-button type="primary" @click="handleClick">
      更多操作
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="edit">编辑</el-dropdown-item>
          <el-dropdown-item command="share">分享</el-dropdown-item>
          <el-dropdown-item command="download">下载</el-dropdown-item>
          <el-dropdown-item command="delete" divided>删除</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <h3>触发方式</h3>
    <div class="demo-row">
      <el-dropdown trigger="hover">
        <el-button type="success">悬停触发</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>悬停菜单 1</el-dropdown-item>
            <el-dropdown-item>悬停菜单 2</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-dropdown trigger="click">
        <el-button type="warning">点击触发</el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>点击菜单 1</el-dropdown-item>
            <el-dropdown-item>点击菜单 2</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

function handleCommand(cmd: string) {
  ElMessage.success(`选择了：${cmd}`)
}
function handleClick() {
  ElMessage.info('主按钮点击')
}
</script>

<style scoped>
.demo-dropdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-dropdown h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>

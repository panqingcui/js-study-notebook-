<template>
  <div class="demo-message-box">
    <h3>基础用法</h3>
    <div class="demo-row">
      <el-button @click="alertDemo">Alert 提示</el-button>
      <el-button type="primary" @click="confirmDemo">Confirm 确认</el-button>
      <el-button type="success" @click="promptDemo">Prompt 输入</el-button>
    </div>

    <h3>自定义图标 / 按钮文字</h3>
    <div class="demo-row">
      <el-button type="warning" @click="customDemo">自定义按钮文字</el-button>
      <el-button type="danger" @click="errorDemo">警告确认</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessageBox, ElMessage } from 'element-plus'

function alertDemo() {
  ElMessageBox.alert('这是一段内容', '标题', {
    confirmButtonText: '好的',
    callback: (action) => {
      ElMessage.info(`action: ${action}`)
    },
  })
}

function confirmDemo() {
  ElMessageBox.confirm('此操作将永久删除该文件，是否继续？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => ElMessage.success('删除成功'))
    .catch(() => ElMessage.info('已取消'))
}

function promptDemo() {
  ElMessageBox.prompt('请输入你的邮箱', '邮箱验证', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: '邮箱格式不正确',
  })
    .then(({ value }) => ElMessage.success(`邮箱：${value}`))
    .catch(() => ElMessage.info('已取消'))
}

function customDemo() {
  ElMessageBox.confirm('确定要提交吗？', '确认', {
    confirmButtonText: '好的',
    cancelButtonText: '不用了',
    type: 'success',
  })
    .then(() => ElMessage.success('已提交'))
    .catch(() => ElMessage.info('好的'))
}

function errorDemo() {
  ElMessageBox.confirm('此操作不可撤销，确定要继续吗？', '危险操作', {
    confirmButtonText: '我确定',
    cancelButtonText: '取消',
    type: 'error',
    confirmButtonClass: 'el-button--danger',
  })
    .then(() => ElMessage.success('执行中...'))
    .catch(() => ElMessage.info('已取消'))
}
</script>

<style scoped>
.demo-message-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-message-box h3 {
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

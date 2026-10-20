<template>
  <div class="demo-notification">
    <h3>不同类型</h3>
    <div class="demo-row">
      <el-button @click="notify('success')">Success</el-button>
      <el-button type="info" @click="notify('info')">Info</el-button>
      <el-button type="warning" @click="notify('warning')">Warning</el-button>
      <el-button type="danger" @click="notify('error')">Error</el-button>
    </div>

    <h3>自定义位置</h3>
    <div class="demo-row">
      <el-button @click="notifyPosition('top-left')">左上角</el-button>
      <el-button type="primary" @click="notifyPosition('top-right')">右上角（默认）</el-button>
      <el-button type="success" @click="notifyPosition('bottom-left')">左下角</el-button>
      <el-button type="warning" @click="notifyPosition('bottom-right')">右下角</el-button>
    </div>

    <h3>自定义标题 / 内容</h3>
    <el-button @click="customNotify">自定义通知</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'

function notify(type: 'success' | 'info' | 'warning' | 'error') {
  ElNotification({
    title:
      type === 'success' ? '成功' : type === 'info' ? '信息' : type === 'warning' ? '警告' : '错误',
    message: `这是一条 ${type} 类型的通知消息`,
    type,
  })
}

function notifyPosition(position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right') {
  ElNotification({
    title: `Position: ${position}`,
    message: `这条通知显示在 ${position}`,
    position,
  })
}

function customNotify() {
  ElNotification({
    title: '<strong>这是一条 <i>自定义</i> 通知</strong>',
    message: '您可以使用 HTML 来美化通知内容，也可以自定义时长、关闭按钮等。',
    dangerouslyUseHTMLString: true,
    duration: 5000,
    showClose: true,
  })
}
</script>

<style scoped>
.demo-notification {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-notification h3 {
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

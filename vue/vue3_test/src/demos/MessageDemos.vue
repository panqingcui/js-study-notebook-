<template>
  <div class="demo-message">
    <h3>不同类型</h3>
    <div class="demo-row">
      <el-button @click="showMessage('success')">Success</el-button>
      <el-button type="info" @click="showMessage('info')">Info</el-button>
      <el-button type="warning" @click="showMessage('warning')">Warning</el-button>
      <el-button type="danger" @click="showMessage('error')">Error</el-button>
    </div>

    <h3>可关闭 / 自定义时间</h3>
    <div class="demo-row">
      <el-button @click="showClosable">可关闭</el-button>
      <el-button type="success" @click="showLongDuration">5 秒后消失</el-button>
      <el-button type="primary" @click="showCenter">居中显示</el-button>
    </div>

    <h3>自定义 HTML</h3>
    <el-button @click="showHtml">HTML 内容</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

function showMessage(type: 'success' | 'info' | 'warning' | 'error') {
  const messages = {
    success: '恭喜你，这是一条成功消息',
    info: '这是一条消息提示',
    warning: '警告哦，这是一条警告消息',
    error: '错了哦，这是一条错误消息',
  }
  ElMessage({ message: messages[type], type })
}

function showClosable() {
  ElMessage({ message: '这是一条可以手动关闭的消息', showClose: true })
}

function showLongDuration() {
  ElMessage.success({ message: '这条消息将在 5 秒后消失', duration: 5000 })
}

function showCenter() {
  ElMessage.info({ message: '居中显示的消息', center: true })
}

function showHtml() {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>这是 <i>HTML</i> 元素</strong>',
    type: 'success',
  })
}
</script>

<style scoped>
.demo-message {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-message h3 {
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

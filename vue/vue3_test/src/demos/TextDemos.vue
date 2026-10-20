<template>
  <div class="demo-text">
    <h3>不同类型的文本</h3>
    <el-text type="primary">Primary 主要</el-text>
    <el-text type="success">Success 成功</el-text>
    <el-text type="warning">Warning 警告</el-text>
    <el-text type="danger">Danger 危险</el-text>
    <el-text type="info">Info 信息</el-text>

    <h3>不同尺寸</h3>
    <el-text size="large">大型文本</el-text>
    <el-text>默认文本</el-text>
    <el-text size="small">小型文本</el-text>

    <h3>省略</h3>
    <el-text truncated style="max-width: 200px"
      >这是一段很长很长的文本，当超出容器宽度时会自动省略显示。</el-text
    >
  </div>
</template>

<style scoped>
.demo-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-text h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

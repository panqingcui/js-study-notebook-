<template>
  <div class="demo-tag">
    <h3>不同类型</h3>
    <div class="demo-row">
      <el-tag>默认</el-tag>
      <el-tag type="success">成功</el-tag>
      <el-tag type="info">信息</el-tag>
      <el-tag type="warning">警告</el-tag>
      <el-tag type="danger">危险</el-tag>
    </div>

    <h3>不同效果</h3>
    <div class="demo-row">
      <el-tag effect="plain">Plain</el-tag>
      <el-tag type="success" effect="plain">Plain Success</el-tag>
      <el-tag effect="dark">Dark</el-tag>
      <el-tag type="success" effect="dark">Dark Success</el-tag>
      <el-tag effect="light">Light</el-tag>
    </div>

    <h3>可关闭</h3>
    <div class="demo-row">
      <el-tag closable>标签 A</el-tag>
      <el-tag type="success" closable>标签 B</el-tag>
      <el-tag type="danger" closable>标签 C</el-tag>
    </div>

    <h3>圆角 + Hit</h3>
    <div class="demo-row">
      <el-tag round>Round</el-tag>
      <el-tag round type="success">Round</el-tag>
      <el-tag hit>Hit</el-tag>
      <el-tag hit type="warning">Hit</el-tag>
    </div>
  </div>
</template>

<style scoped>
.demo-tag {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-tag h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
</style>

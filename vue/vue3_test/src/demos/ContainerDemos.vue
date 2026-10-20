<template>
  <div class="demo-container">
    <h3>经典页面布局</h3>
    <el-container class="layout-demo" style="height: 300px">
      <el-header>Header 头部</el-header>
      <el-container>
        <el-aside width="120px">Aside 侧边</el-aside>
        <el-main>Main 主内容区域</el-main>
      </el-container>
      <el-footer>Footer 底部</el-footer>
    </el-container>

    <h3>水平布局</h3>
    <el-container direction="horizontal" class="layout-demo" style="height: 180px">
      <el-aside width="120px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.demo-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-container h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.layout-demo {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  overflow: hidden;
}
.layout-demo .el-header,
.layout-demo .el-footer {
  background: #e6f0ff;
  color: #303133;
  display: flex;
  align-items: center;
  font-size: 13px;
}
.layout-demo .el-aside {
  background: #f5f7fa;
  color: #606266;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}
.layout-demo .el-main {
  background: #ffffff;
  color: #606266;
  display: flex;
  align-items: center;
  font-size: 13px;
}
</style>

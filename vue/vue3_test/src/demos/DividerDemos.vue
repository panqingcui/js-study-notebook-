<template>
  <div class="demo-divider">
    <h3>基础分割线</h3>
    <div>这是一段文字</div>
    <el-divider />
    <div>这是另一段文字</div>

    <h3>带文字的分割线</h3>
    <el-divider>中间的文字</el-divider>
    <p>分割线上方的内容</p>
    <el-divider content-position="left">左侧文字</el-divider>
    <p>分割线下方的内容</p>
    <el-divider content-position="right">右侧文字</el-divider>

    <h3>垂直分割线</h3>
    <div class="demo-row">
      <span>文字 A</span>
      <el-divider direction="vertical" />
      <span>文字 B</span>
      <el-divider direction="vertical" />
      <span>文字 C</span>
      <el-divider direction="vertical" />
      <el-link href="#">链接一</el-link>
      <el-divider direction="vertical" />
      <el-link href="#">链接二</el-link>
      <el-divider direction="vertical" />
      <el-link href="#">链接三</el-link>
    </div>

    <h3>不同样式</h3>
    <el-divider border-style="dashed">虚线</el-divider>
    <el-divider border-style="dotted">点线</el-divider>
    <el-divider border-style="double">双线</el-divider>
  </div>
</template>

<style scoped>
.demo-divider {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.demo-divider h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 8px 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
</style>

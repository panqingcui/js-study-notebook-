<template>
  <div class="demo-anchor">
    <h3>基础用法</h3>
    <el-anchor :offset="20">
      <el-anchor-link href="#basic" title="基础用法" />
      <el-anchor-link href="#custom" title="自定义节点" />
      <el-anchor-link href="#container" title="指定容器" />
      <el-anchor-link href="#scroll" title="滚动" />
      <el-anchor-link href="#hash" title="Hash 模式" />
    </el-anchor>

    <h3>更多说明</h3>
    <p style="color: #909399; font-size: 13px">
      Anchor 锚点组件用于在长页面中快速定位到指定区域。点击左侧锚点链接，页面会平滑滚动到对应位置。
    </p>
  </div>
</template>

<style scoped>
.demo-anchor {
  width: 100%;
}
.demo-anchor h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0 0 16px;
}
</style>

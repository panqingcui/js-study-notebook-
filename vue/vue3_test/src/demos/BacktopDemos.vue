<template>
  <div class="demo-backtop">
    <h3>基础用法（页面向下滚动时出现）</h3>
    <p style="color: #909399">向下滚动页面查看效果。</p>
    <p v-for="n in 50" :key="n" class="long-content">滚动内容 {{ n }}</p>

    <el-backtop :right="100" :bottom="100" />
  </div>
</template>

<style scoped>
.demo-backtop {
  width: 100%;
}
.demo-backtop h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0 0 16px;
}
.long-content {
  padding: 8px;
  color: #606266;
}
</style>

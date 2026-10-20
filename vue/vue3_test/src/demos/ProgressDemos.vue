<template>
  <div class="demo-progress">
    <h3>基础进度条</h3>
    <div class="demo-row">
      <el-progress :percentage="10" />
      <el-progress :percentage="50" />
      <el-progress :percentage="100" status="success" />
      <el-progress :percentage="80" status="warning" />
      <el-progress :percentage="30" status="exception" />
    </div>

    <h3>不同颜色自定义</h3>
    <div class="demo-row">
      <el-progress :percentage="60" color="#ff0000" />
      <el-progress :percentage="60" color="rgb(50, 150, 200)" />
    </div>

    <h3>自定义进度值显示</h3>
    <div class="demo-row">
      <el-progress :percentage="50" :show-text="false" />
      <el-progress :percentage="40">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
        </template>
      </el-progress>
    </div>

    <h3>圆形进度条</h3>
    <div class="demo-row">
      <el-progress type="circle" :percentage="80" />
      <el-progress type="circle" :percentage="100" status="success" />
      <el-progress type="circle" :percentage="40" status="warning" />
      <el-progress type="circle" :percentage="20" status="exception" />
    </div>

    <h3>仪表盘进度条</h3>
    <div class="demo-row">
      <el-progress type="dashboard" :percentage="70" />
      <el-progress type="dashboard" :percentage="90" color="#67c23a" />
    </div>
  </div>
</template>

<style scoped>
.demo-progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-progress h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}
</style>

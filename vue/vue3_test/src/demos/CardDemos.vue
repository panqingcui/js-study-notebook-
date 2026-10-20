<template>
  <div class="demo-card">
    <h3>基础卡片</h3>
    <div class="demo-row">
      <el-card class="box-card" style="width: 240px">
        <template #header>
          <span>卡片标题</span>
        </template>
        <div class="text">这是卡片的内容区域。Element Plus 提供了多种卡片样式供您使用。</div>
      </el-card>

      <el-card class="box-card" shadow="hover" style="width: 240px">
        <template #header>
          <span>悬停阴影</span>
        </template>
        <div class="text">鼠标悬停时显示阴影效果。适用于需要强调交互反馈的场景。</div>
      </el-card>

      <el-card class="box-card" shadow="never" style="width: 240px">
        <template #header>
          <span>无阴影</span>
        </template>
        <div class="text">不显示阴影，纯边框卡片。适合简约风格页面。</div>
      </el-card>
    </div>

    <h3>简单卡片</h3>
    <div class="demo-row">
      <el-card style="width: 240px">
        <div class="text">没有 header 的简单卡片，内容更加简洁聚焦。</div>
      </el-card>

      <el-card style="width: 240px">
        <template #header>
          <div class="card-header">
            <span>操作区域</span>
            <el-button type="primary" link>更多</el-button>
          </div>
        </template>
        <div class="text">header 支持自定义内容，可以放置按钮、链接等。</div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.demo-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-card h3 {
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
.text {
  font-size: 13px;
  color: #606266;
  line-height: 1.6;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

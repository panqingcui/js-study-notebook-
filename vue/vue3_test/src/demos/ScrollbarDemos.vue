<template>
  <div class="demo-scrollbar">
    <h3>基础用法</h3>
    <el-scrollbar height="300px" style="width: 300px">
      <p v-for="item in 20" :key="item" class="scrollbar-item">
        {{ item }} - Element Plus 滚动条组件
      </p>
    </el-scrollbar>

    <h3>水平 + 垂直滚动</h3>
    <el-scrollbar height="200px" style="width: 360px">
      <div class="horizontal-content">
        <span v-for="item in 30" :key="item" class="horizontal-item">H-{{ item }}</span>
      </div>
      <p v-for="item in 15" :key="item" class="scrollbar-item">
        {{ item }} - 同时支持水平和垂直滚动
      </p>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.demo-scrollbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-scrollbar h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.scrollbar-item {
  padding: 8px 12px;
  color: #606266;
  font-size: 13px;
}
.horizontal-content {
  display: inline-flex;
  gap: 12px;
  padding: 8px;
}
.horizontal-item {
  padding: 4px 12px;
  background: #ecf5ff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
}
</style>

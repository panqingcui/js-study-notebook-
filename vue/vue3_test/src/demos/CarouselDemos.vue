<template>
  <div class="demo-carousel">
    <h3>基础轮播</h3>
    <el-carousel height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="carousel-item" :style="{ background: bgColors[item - 1] }">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>

    <h3>指示器位置</h3>
    <el-carousel height="200px" indicator-position="outside">
      <el-carousel-item v-for="item in 3" :key="item">
        <div class="carousel-item" :style="{ background: bgColors[item] }">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>

    <h3>卡片模式</h3>
    <el-carousel height="200px" :interval="4000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="carousel-item" :style="{ background: bgColors[item - 1] }">{{ item }}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
const bgColors = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399', '#9B59B6']
</script>

<style scoped>
.demo-carousel {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-carousel h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.carousel-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
}
</style>

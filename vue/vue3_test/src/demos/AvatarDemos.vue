<template>
  <div class="demo-avatar">
    <h3>不同尺寸</h3>
    <div class="demo-row">
      <el-avatar :size="40" :style="{ background: '#f56c6c' }">L</el-avatar>
      <el-avatar :size="50" :style="{ background: '#e6a23c' }">M</el-avatar>
      <el-avatar :size="60" :style="{ background: '#409eff' }">X</el-avatar>
      <el-avatar :size="70" :style="{ background: '#67c23a' }">E</el-avatar>
    </div>

    <h3>不同形状</h3>
    <div class="demo-row">
      <el-avatar
        :size="50"
        shape="circle"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-avatar
        :size="50"
        shape="square"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>

    <h3>带徽标</h3>
    <div class="demo-row">
      <el-badge :value="12" class="item">
        <el-avatar :size="40" :style="{ background: '#409eff' }">U</el-avatar>
      </el-badge>
      <el-badge :value="99" class="item">
        <el-avatar :size="40" :style="{ background: '#67c23a' }">E</el-avatar>
      </el-badge>
      <el-badge is-dot class="item">
        <el-avatar :size="40" :style="{ background: '#e6a23c' }">R</el-avatar>
      </el-badge>
    </div>
  </div>
</template>

<style scoped>
.demo-avatar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-avatar h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
.item {
  margin-right: 16px;
}
</style>

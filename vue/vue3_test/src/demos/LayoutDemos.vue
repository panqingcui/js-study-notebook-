<template>
  <div class="demo-layout">
    <h3>基础布局（24 栅格）</h3>
    <el-row>
      <el-col :span="8"><div class="box">span = 8</div></el-col>
      <el-col :span="8"><div class="box">span = 8</div></el-col>
      <el-col :span="8"><div class="box">span = 8</div></el-col>
    </el-row>
    <el-row class="row-gap">
      <el-col :span="6"><div class="box">6</div></el-col>
      <el-col :span="6"><div class="box">6</div></el-col>
      <el-col :span="6"><div class="box">6</div></el-col>
      <el-col :span="6"><div class="box">6</div></el-col>
    </el-row>

    <h3>分栏间隔 :gutter</h3>
    <el-row :gutter="16">
      <el-col :span="6"><div class="box gutter-box">6</div></el-col>
      <el-col :span="6"><div class="box gutter-box">6</div></el-col>
      <el-col :span="6"><div class="box gutter-box">6</div></el-col>
      <el-col :span="6"><div class="box gutter-box">6</div></el-col>
    </el-row>

    <h3>偏移</h3>
    <el-row>
      <el-col :span="6"><div class="box">6</div></el-col>
      <el-col :span="6" :offset="6"><div class="box">6 offset 6</div></el-col>
    </el-row>
    <h3>
      对齐方式
      <p>
        可以通过justify
        属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。
      </p>
      <p>居中对齐</p>
      <el-row justify="center">
        <el-col :span="6"><div class="box">6</div></el-col>
        <el-col :span="6"><div class="box">6</div></el-col>
      </el-row>
      <p>间距对齐</p>
      <el-row justify="space-between">
        <el-col :span="6"><div class="box">6</div></el-col>
        <el-col :span="6"><div class="box">6</div></el-col>
      </el-row>
    </h3>
  </div>
</template>

<style scoped>
.demo-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-layout h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.box {
  background: #d8ecff;
  border: 1px solid #a0cfff;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  color: #303133;
  font-size: 13px;
}
.gutter-box {
  background: #f0f9ff;
}
.row-gap {
  margin-top: 8px;
}
</style>

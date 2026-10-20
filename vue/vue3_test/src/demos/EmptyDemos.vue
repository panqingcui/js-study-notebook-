<template>
  <div class="demo-empty">
    <h3>基础用法</h3>
    <el-empty description="暂无数据" />

    <h3>自定义图片</h3>
    <el-empty description="自定义描述文字" :image-size="120">
      <template #image>
        <div class="custom-empty-image">🔍</div>
      </template>
      <template #default>
        <el-button type="primary">搜索一下</el-button>
      </template>
    </el-empty>

    <h3>内置图片类型</h3>
    <div class="demo-row">
      <el-empty image="error" description="出错了" />
      <el-empty image="search" description="无搜索结果" />
      <el-empty image="no-data" description="没有数据" />
    </div>
  </div>
</template>

<style scoped>
.demo-empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-empty h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.custom-empty-image {
  font-size: 64px;
}
</style>

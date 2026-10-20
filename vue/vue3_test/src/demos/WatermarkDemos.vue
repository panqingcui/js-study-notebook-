<template>
  <div class="demo-watermark">
    <h3>基础用法</h3>
    <el-watermark content="Element Plus">
      <div class="watermark-content">
        <h3>这是一段测试内容</h3>
        <p>水印会显示在这段内容的背景上。Watermark 组件用于给页面或区域添加水印效果。</p>
        <p style="margin-top: 12px">常用于文档、报表、系统页面等需要标识版权或保密信息的场景。</p>
      </div>
    </el-watermark>

    <h3>多段文字 + 自定义样式</h3>
    <el-watermark
      :content="['机密文件', '内部资料']"
      :font="{ fontSize: 16, color: 'rgba(0, 0, 0, 0.1)' }"
    >
      <div class="watermark-content">
        <h3>机密文档</h3>
        <p>这是一份机密文档，不得外传。</p>
      </div>
    </el-watermark>

    <h3>自定义间隔和角度</h3>
    <el-watermark content="© 2025 My Company" :gap="[100, 100]" :rotate="-22">
      <div class="watermark-content">
        <p>自定义了水印间隔和旋转角度。</p>
      </div>
    </el-watermark>
  </div>
</template>

<style scoped>
.demo-watermark {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-watermark h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.watermark-content {
  padding: 24px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  min-height: 120px;
}
.watermark-content h3 {
  margin: 0 0 12px;
  font-size: 16px;
  color: #303133;
}
.watermark-content p {
  color: #606266;
  font-size: 13px;
  line-height: 1.6;
}
</style>

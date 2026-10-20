<template>
  <div class="demo-loading">
    <h3>指令方式（v-loading）</h3>
    <div
      v-loading="loading"
      element-loading-text="加载中..."
      element-loading-spinner="Loading"
      class="loading-box"
    >
      <p>内容区域，加载时显示遮罩层</p>
      <p style="margin-top: 8px">这是 v-loading 指令的效果。</p>
    </div>
    <el-button style="margin-top: 12px" @click="loading = !loading">
      {{ loading ? '关闭 Loading' : '开启 Loading' }}
    </el-button>

    <h3>服务方式（全屏 Loading）</h3>
    <el-button type="primary" @click="openFullScreenLoading">全屏 Loading（3 秒后关闭）</el-button>

    <h3>自定义文字 + 背景</h3>
    <div
      v-loading="customLoading"
      element-loading-text="数据加载中，请稍候..."
      element-loading-background="rgba(0, 0, 0, 0.8)"
      class="loading-box dark"
    >
      <p>暗色背景的 Loading 效果</p>
    </div>
    <el-button style="margin-top: 12px" type="warning" @click="customLoading = !customLoading">
      {{ customLoading ? '关闭' : '开启' }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const loading = ref(true)
const customLoading = ref(false)

function openFullScreenLoading() {
  const loading = ElLoading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => loading.close(), 3000)
}
</script>

<style scoped>
.demo-loading {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-loading h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.loading-box {
  width: 100%;
  height: 120px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.loading-box p {
  color: #606266;
  font-size: 13px;
  margin: 0;
}
.loading-box.dark {
  background: #1a1a1a;
  border-color: #333;
}
.loading-box.dark p {
  color: #ddd;
}
</style>

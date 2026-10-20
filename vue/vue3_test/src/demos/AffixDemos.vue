<template>
  <div class="demo-affix">
    <h3>基础用法（滚动页面查看效果）</h3>
    <el-affix :offset="20">
      <el-button type="primary">固定在顶部 20px 处</el-button>
    </el-affix>

    <div style="margin-top: 100px">
      <h3>指定容器</h3>
      <div ref="containerRef" class="affix-container">
        <el-affix :offset="10" :target="containerRef">
          <el-button type="success">固定在容器内</el-button>
        </el-affix>
        <p v-for="n in 20" :key="n" style="padding: 10px">滚动内容 {{ n }}</p>
      </div>
    </div>

    <div style="height: 200px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const containerRef = ref<HTMLElement>()
</script>

<style scoped>
.demo-affix {
  width: 100%;
}
.demo-affix h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 16px 0;
}
.affix-container {
  height: 240px;
  overflow: auto;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 12px;
}
</style>

<template>
  <div class="demo-image">
    <h3>基础用法（预览）</h3>
    <div class="demo-row">
      <el-image
        style="width: 200px; height: 200px"
        src="https://picsum.photos/400/400?random=1"
        :preview-src-list="[
          'https://picsum.photos/800/800?random=1',
          'https://picsum.photos/800/800?random=2',
        ]"
      />
      <el-image
        style="width: 160px; height: 160px"
        src="https://picsum.photos/300/300?random=3"
        fit="contain"
      />
      <el-image
        style="width: 160px; height: 160px"
        src="https://picsum.photos/300/300?random=4"
        fit="cover"
      />
    </div>

    <h3>加载失败占位</h3>
    <div class="demo-row">
      <el-image style="width: 200px; height: 200px" src="https://invalid-url.png">
        <template #error>
          <div class="image-slot">
            <el-icon :size="40"><Picture /></el-icon>
            <span>图片加载失败</span>
          </div>
        </template>
      </el-image>
    </div>

    <h3>懒加载</h3>
    <div class="demo-row">
      <el-image
        v-for="i in 4"
        :key="i"
        style="width: 140px; height: 140px"
        :src="`https://picsum.photos/300/300?random=${i + 10}`"
        lazy
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Picture } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-image {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-image h3 {
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
.image-slot {
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f5f7fa;
  color: #909399;
}
</style>

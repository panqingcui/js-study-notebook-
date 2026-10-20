<template>
  <div class="demo-skeleton">
    <h3>基础骨架屏</h3>
    <div class="demo-row">
      <el-skeleton :rows="3" animated />
    </div>

    <h3>骨架屏 + 真实内容切换</h3>
    <template v-if="loading">
      <el-skeleton :rows="5" animated />
    </template>
    <template v-else>
      <el-card>
        <template #header>
          <span>加载完成</span>
        </template>
        <p>这是真实的内容，加载完成后显示。</p>
        <p>骨架屏用于在数据加载时展示内容占位，减少用户等待焦虑。</p>
      </el-card>
    </template>
    <el-button style="margin-top: 12px" @click="toggleLoading">{{
      loading ? '显示真实内容' : '显示骨架屏'
    }}</el-button>

    <h3>带头像的骨架屏</h3>
    <el-skeleton avatar animated>
      <template #default>
        <el-card>
          <template #header>内容标题</template>
          加载完成的内容区域。
        </el-card>
      </template>
    </el-skeleton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const loading = ref(true)
function toggleLoading() {
  loading.value = !loading.value
}
</script>

<style scoped>
.demo-skeleton {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-skeleton h3 {
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
</style>

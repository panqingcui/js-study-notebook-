<script setup lang="ts">
import { useRouter } from 'vue-router'
import { componentCategories } from '../docs'
import { iconMap } from '../config/icons'

const router = useRouter()

function goComponent(name: string) {
  router.push(`/component/${name}`)
}

function categoryIcon(icon: string) {
  return iconMap[icon] || iconMap.Document
}
</script>

<template>
  <div class="overview">
    <div class="overview-header">
      <h1>Vue 3 组件文档站</h1>
      <p>基于 Element Plus 的 70+ 组件全面解析 · 示例 · API</p>
    </div>
    <div class="overview-categories">
      <section v-for="cat in componentCategories" :key="cat.category" class="category">
        <h2 class="category-title">
          <svg width="20" height="20" viewBox="0 0 24 24" v-html="categoryIcon(cat.icon)"></svg>
          {{ cat.title }}
          <span class="count">{{ cat.components.length }}</span>
        </h2>
        <div class="component-grid">
          <button
            v-for="comp in cat.components"
            :key="comp.name"
            class="component-card"
            @click="goComponent(comp.name)"
          >
            <span class="comp-name">{{ comp.name }}</span>
            <span class="comp-en">{{ comp.nameEn }}</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.overview {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}
.overview-header {
  text-align: center;
  margin-bottom: 40px;
}
.overview-header h1 {
  font-size: 32px;
  margin: 0 0 8px;
  background: linear-gradient(135deg, #409eff, #8ca3ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.overview-header p {
  color: #909399;
  margin: 0;
}
.category {
  margin-bottom: 36px;
}
.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 16px;
  font-size: 18px;
  color: #303133;
}
.category-title .count {
  background: #ecf5ff;
  color: #409eff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: 4px;
}
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}
.component-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 16px 8px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
}
.component-card:hover {
  border-color: #409eff;
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
  transform: translateY(-2px);
}
.comp-name {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}
.comp-en {
  font-size: 11px;
  color: #909399;
}
</style>

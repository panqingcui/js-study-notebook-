<template>
  <el-container class="app-container">
    <header class="app-header">
      <div class="header-inner">
        <div class="logo">
          <svg viewBox="0 0 264 301" class="logo-svg">
            <path d="M0 0H264V301H0z" fill="none" />
            <path d="M182.96 37.312L104.24 72.576V228.168L182.96 192.936V37.312Z" fill="#409EFF" />
            <path d="M77.04 72.576H104.24V228.168H77.04V72.576Z" fill="#337ECC" />
            <path
              d="M182.96 37.312L104.24 72.576L77.04 72.576L155.76 37.312L182.96 37.312Z"
              fill="#66B1FF"
            />
          </svg>
          <span class="logo-text">Element Plus</span>
          <span class="logo-version">v2.14.7</span>
        </div>
        <nav class="header-nav">
          <a href="#" class="nav-link">指南</a>
          <a href="#" class="nav-link active">组件</a>
          <a href="#" class="nav-link">主题</a>
          <a href="#" class="nav-link">生态</a>
        </nav>
      </div>
    </header>

    <div class="app-body">
      <el-aside width="280px" class="app-aside">
        <div class="aside-content">
          <template v-for="section in navSections" :key="section.titleEn">
            <div class="nav-section">
              <h3 class="nav-section-title">{{ section.title }}</h3>

              <template v-if="section.items">
                <el-menu :default-active="activeMenu" class="aside-menu" router :ellipsis="false">
                  <el-menu-item v-for="item in section.items" :key="item.path" :index="item.path">
                    <span>{{ item.title }}</span>
                  </el-menu-item>
                </el-menu>
              </template>

              <template v-if="section.groups">
                <div v-for="group in section.groups" :key="group.titleEn" class="nav-group">
                  <h4 class="nav-group-title">
                    <span class="group-icon" :class="`icon-${group.icon}`"></span>
                    {{ group.title }}
                  </h4>
                  <el-menu
                    :default-active="activeMenu"
                    class="aside-menu sub-menu"
                    router
                    :ellipsis="false"
                  >
                    <el-menu-item
                      v-for="item in group.children"
                      :key="item.path"
                      :index="item.path"
                    >
                      <span>{{ item.title }}</span>
                    </el-menu-item>
                  </el-menu>
                </div>
              </template>
            </div>
          </template>
        </div>
      </el-aside>

      <el-main class="app-main">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>
      </el-main>
    </div>
  </el-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navSections } from './config/navigation'

const route = useRoute()
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.app-container {
  height: 100vh;
  flex-direction: column;
}

.app-header {
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e4e7ed;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 48px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-svg {
  width: 32px;
  height: 36px;
}

.logo-text {
  font-size: 20px;
  font-weight: 600;
  color: #303133;
}

.logo-version {
  font-size: 12px;
  color: #909399;
  background: #f4f4f5;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: normal;
}

.header-nav {
  display: flex;
  gap: 28px;
}

.nav-link {
  font-size: 14px;
  color: #606266;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #409eff;
}

.nav-link.active {
  color: #409eff;
  font-weight: 500;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #409eff;
}

.app-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.app-aside {
  background: #ffffff;
  border-right: 1px solid #e4e7ed;
  overflow-y: auto;
  height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
}

.aside-content {
  padding: 16px 0;
}

.nav-section {
  margin-bottom: 8px;
}

.nav-section-title {
  padding: 16px 24px 8px;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #909399;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-group {
  margin-bottom: 4px;
}

.nav-group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px 6px;
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #303133;
}

.group-icon {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  display: inline-block;
}

.icon-basic {
  background: linear-gradient(135deg, #409eff, #66b1ff);
}

.icon-config {
  background: linear-gradient(135deg, #67c23a, #85ce61);
}

.icon-form {
  background: linear-gradient(135deg, #e6a23c, #ebb563);
}

.icon-data {
  background: linear-gradient(135deg, #f56c6c, #f78989);
}

.icon-nav {
  background: linear-gradient(135deg, #909399, #b1b3b8);
}

.icon-feedback {
  background: linear-gradient(135deg, #9b59b6, #b07cc6);
}

.icon-others {
  background: linear-gradient(135deg, #1abc9c, #48c9b0);
}

.aside-menu {
  border-right: none;
}

.aside-menu :deep(.el-menu-item) {
  height: 34px;
  line-height: 34px;
  padding: 0 24px;
  font-size: 13px;
  color: #606266;
}

.aside-menu :deep(.el-menu-item:hover) {
  background: #f5f7fa;
  color: #409eff;
}

.aside-menu :deep(.el-menu-item.is-active) {
  background: #ecf5ff;
  color: #409eff;
  font-weight: 500;
  border-right: 2px solid #409eff;
}

.sub-menu {
  padding-left: 0;
}

.sub-menu :deep(.el-menu-item) {
  padding-left: 36px;
}

.app-main {
  background: #ffffff;
  padding: 32px 48px;
  overflow-y: auto;
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.app-aside::-webkit-scrollbar {
  width: 6px;
}

.app-aside::-webkit-scrollbar-thumb {
  background: #dcdfe6;
  border-radius: 3px;
}

.app-aside::-webkit-scrollbar-track {
  background: transparent;
}
</style>

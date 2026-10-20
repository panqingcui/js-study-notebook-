<template>
  <div class="demo-menu">
    <h3>水平菜单</h3>
    <el-menu
      :default-active="activeIndex1"
      class="demo-menu-horizontal"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-sub-menu index="2">
        <template #title>工作台</template>
        <el-menu-item index="2-1">选项 1</el-menu-item>
        <el-menu-item index="2-2">选项 2</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">订单管理</el-menu-item>
      <el-menu-item index="4" disabled>数据中心</el-menu-item>
    </el-menu>

    <h3>垂直菜单 + 折叠</h3>
    <el-menu
      :default-active="activeIndex2"
      class="demo-menu-vertical"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Menu /></el-icon>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项 1</el-menu-item>
        <el-menu-item index="1-2">选项 2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Location /></el-icon>
          <span>导航二</span>
        </template>
        <el-menu-item index="2-1">选项 1</el-menu-item>
        <el-menu-item index="2-2">选项 2</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><Setting /></el-icon>
        <template #title>导航三</template>
      </el-menu-item>
    </el-menu>
    <el-button style="margin-top: 12px" @click="isCollapse = !isCollapse">
      {{ isCollapse ? '展开菜单' : '折叠菜单' }}
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Menu, Location, Setting } from '@element-plus/icons-vue'

const activeIndex1 = ref('1')
const activeIndex2 = ref('1-1')
const isCollapse = ref(false)

function handleSelect(index: string) {
  activeIndex1.value = index
  ElMessage.info(`选中：${index}`)
}
</script>

<style scoped>
.demo-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-menu h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-menu-horizontal {
  border-bottom: 1px solid #e6e6e6;
}
.demo-menu-vertical {
  width: 240px;
  border-right: 1px solid #e6e6e6;
}
</style>

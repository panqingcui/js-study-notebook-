<template>
  <div class="demo-tabs">
    <h3>基础标签页</h3>
    <el-tabs v-model="activeTab1">
      <el-tab-pane label="标签一" name="1">内容区域一</el-tab-pane>
      <el-tab-pane label="标签二" name="2">内容区域二</el-tab-pane>
      <el-tab-pane label="标签三" name="3">内容区域三</el-tab-pane>
      <el-tab-pane label="标签四" name="4" disabled>禁用</el-tab-pane>
    </el-tabs>

    <h3>卡片式</h3>
    <el-tabs v-model="activeTab2" type="card">
      <el-tab-pane label="卡片标签一" name="1">内容区域一</el-tab-pane>
      <el-tab-pane label="卡片标签二" name="2">内容区域二</el-tab-pane>
      <el-tab-pane label="卡片标签三" name="3">内容区域三</el-tab-pane>
    </el-tabs>

    <h3>可关闭</h3>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      @tab-add="addTab"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>

    <h3>左侧竖排</h3>
    <el-tabs v-model="activeTab3" tab-position="left">
      <el-tab-pane label="左侧标签一" name="1">内容一</el-tab-pane>
      <el-tab-pane label="左侧标签二" name="2">内容二</el-tab-pane>
      <el-tab-pane label="左侧标签三" name="3">内容三</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeTab1 = ref('1')
const activeTab2 = ref('1')
const activeTab3 = ref('1')

const editableTabs = ref([
  { title: '标签 1', name: '1', content: '标签 1 内容' },
  { title: '标签 2', name: '2', content: '标签 2 内容' },
  { title: '标签 3', name: '3', content: '标签 3 内容' },
])
const editableTabsValue = ref('1')

function addTab() {
  const newTabName = `${++editableTabs.value.length}`
  editableTabs.value.push({
    title: `新标签 ${newTabName}`,
    name: newTabName,
    content: `新标签内容 ${newTabName}`,
  })
  editableTabsValue.value = newTabName
}

function removeTab(targetName: string) {
  const tabs = editableTabs.value
  let active = editableTabsValue.value
  tabs.forEach((tab, index) => {
    if (tab.name === targetName) {
      tabs.splice(index, 1)
      if (active === targetName) active = tabs[index > 0 ? index - 1 : 0]?.name || '1'
    }
  })
  editableTabsValue.value = active
}
</script>

<style scoped>
.demo-tabs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-tabs h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

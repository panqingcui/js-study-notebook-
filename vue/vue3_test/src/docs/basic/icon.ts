import type { ComponentMeta } from '../types'

export const icon: ComponentMeta = {
  name: 'Icon',
  nameEn: 'Icon',
  path: '/icon',
  title: 'Icon 图标',
  description: 'Element Plus 提供了一套常用的图标集合。',
  category: 'basic',
  props: [
    { name: 'size', description: '图标大小', type: 'number | string', default: 'inherit' },
    { name: 'color', description: '图标颜色', type: 'string', default: 'inherit' },
  ],
  events: [],
  slots: [{ name: 'default', description: '图标组件' }],
  demos: [
    {
      title: '基础用法',
      description: '直接通过设置类名为 el-icon-iconName 来使用即可。',
      template: `<el-icon :size="32" color="#409eff"><Edit /></el-icon>
<el-icon :size="32" color="#67c23a"><Share /></el-icon>
<el-icon :size="32" color="#e6a23c"><Delete /></el-icon>
<el-icon :size="32" color="#f56c6c"><Search /></el-icon>

<script setup>
import { Edit, Share, Delete, Search } from '@element-plus/icons-vue'
<\/script>`,
      code: `<template>
  <el-icon :size="32" color="#409eff"><Edit /></el-icon>
  <el-icon :size="32" color="#67c23a"><Share /></el-icon>
  <el-icon :size="32" color="#e6a23c"><Delete /></el-icon>
  <el-icon :size="32" color="#f56c6c"><Search /></el-icon>
</template>

<script setup>
import { Edit, Share, Delete, Search } from '@element-plus/icons-vue'
<\/script>`,
    },
  ],
}

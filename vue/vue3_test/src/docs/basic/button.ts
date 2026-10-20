import type { ComponentMeta } from '../types'

export const button: ComponentMeta = {
  name: 'Button',
  nameEn: 'Button',
  path: '/button',
  title: 'Button 按钮',
  description: '常用的操作按钮。',
  category: 'basic',
  props: [
    {
      name: 'size',
      description: '尺寸',
      type: '"large" | "default" | "small"',
      default: 'default',
    },
    {
      name: 'type',
      description: '类型',
      type: '"primary" | "success" | "warning" | "danger" | "info" | "text"',
      default: 'default',
    },
    { name: 'plain', description: '是否朴素按钮', type: 'boolean', default: 'false' },
    { name: 'round', description: '是否圆角按钮', type: 'boolean', default: 'false' },
    { name: 'circle', description: '是否圆形按钮', type: 'boolean', default: 'false' },
    { name: 'disabled', description: '是否禁用状态', type: 'boolean', default: 'false' },
    { name: 'loading', description: '是否加载中状态', type: 'boolean', default: 'false' },
    {
      name: 'loading-icon',
      description: '自定义加载中图标',
      type: 'string | Component',
      default: 'Loading',
    },
    { name: 'icon', description: '图标组件', type: 'string | Component', default: '-' },
    { name: 'autofocus', description: '是否默认聚焦', type: 'boolean', default: 'false' },
    {
      name: 'native-type',
      description: '原生 type 属性',
      type: '"button" | "submit" | "reset"',
      default: 'button',
    },
  ],
  events: [{ name: 'click', description: '点击按钮时触发', params: '(event: MouseEvent)' }],
  slots: [
    { name: 'default', description: '自定义按钮内容' },
    { name: 'icon', description: '自定义图标组件' },
  ],
  demos: [
    {
      title: '基础用法',
      description: '使用 type、plain、round 和 circle 来定义 Button 的样式。',
      template: `<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="success">成功按钮</el-button>
<el-button type="info">信息按钮</el-button>
<el-button type="warning">警告按钮</el-button>
<el-button type="danger">危险按钮</el-button>`,
      code: `<script setup>
import { ElButton } from 'element-plus'
<\/script>

<template>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>`,
    },
    {
      title: '尺寸',
      description: '提供了 large、default、small 三种尺寸。',
      template: `<el-button size="large">大型按钮</el-button>
<el-button>默认按钮</el-button>
<el-button size="small">小型按钮</el-button>`,
      code: `<template>
  <el-button size="large">大型按钮</el-button>
  <el-button>默认按钮</el-button>
  <el-button size="small">小型按钮</el-button>
</template>`,
    },
    {
      title: '朴素按钮',
      description: '通过 plain 属性设置为朴素按钮。',
      template: `<el-button plain>朴素按钮</el-button>
<el-button type="primary" plain>主要按钮</el-button>
<el-button type="success" plain>成功按钮</el-button>`,
      code: `<template>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
</template>`,
    },
    {
      title: '禁用状态',
      description: '通过 disabled 属性设置为禁用状态。',
      template: `<el-button disabled>禁用按钮</el-button>
<el-button type="primary" disabled>主要按钮</el-button>
<el-button type="success" disabled>成功按钮</el-button>`,
      code: `<template>
  <el-button disabled>禁用按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
</template>`,
    },
    {
      title: '加载状态',
      description: '点击按钮后进行数据加载操作，在按钮上显示加载状态。',
      template: `<el-button loading>加载中</el-button>
<el-button type="primary" loading>加载中</el-button>`,
      code: `<template>
  <el-button loading>加载中</el-button>
  <el-button type="primary" loading>加载中</el-button>
</template>`,
    },
    {
      title: '圆角按钮 / 圆形按钮',
      description: '通过 round 和 circle 属性设置圆角或圆形按钮。',
      template: `<el-button round>圆角按钮</el-button>
<el-button type="primary" round>圆角按钮</el-button>
<el-button type="success" round>圆角按钮</el-button>
<el-button :icon="Search" circle />
<el-button type="primary" :icon="Edit" circle />
<el-button type="success" :icon="Check" circle />`,
      code: `<script setup>
import { Search, Edit, Check } from '@element-plus/icons-vue'
<\/script>

<template>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>圆角按钮</el-button>
  <el-button type="success" round>圆角按钮</el-button>
  <el-button :icon="Search" circle />
  <el-button type="primary" :icon="Edit" circle />
  <el-button type="success" :icon="Check" circle />
</template>`,
    },
    {
      title: '文字按钮',
      description: '没有边框和背景色的按钮。',
      template: `<el-button link type="primary">文字按钮</el-button>
<el-button link type="danger">文字按钮</el-button>`,
      code: `<template>
  <el-button link type="primary">文字按钮</el-button>
  <el-button link type="danger">文字按钮</el-button>
</template>`,
    },
    {
      title: '图标按钮',
      description: '使用图标来提高 Button 的辨识度。',
      template: `<el-button type="primary" :icon="Edit" />
<el-button type="primary" :icon="Delete" />
<el-button type="primary" :icon="Search">搜索</el-button>
<el-button type="primary" :icon="Upload">上传</el-button>`,
      code: `<script setup>
import { Edit, Delete, Search, Upload } from '@element-plus/icons-vue'
<\/script>

<template>
  <el-button type="primary" :icon="Edit" />
  <el-button type="primary" :icon="Delete" />
  <el-button type="primary" :icon="Search">搜索</el-button>
  <el-button type="primary" :icon="Upload">上传</el-button>
</template>`,
    },
  ],
}

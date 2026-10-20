import type { ComponentMeta } from '../types'

export const input: ComponentMeta = {
  name: 'Input',
  nameEn: 'Input',
  path: '/input',
  title: 'Input 输入框',
  description: '通过鼠标或键盘输入字符。',
  category: 'form',
  props: [
    { name: 'v-model', description: '绑定值', type: 'string | number', default: '-' },
    {
      name: 'type',
      description: '类型',
      type: '"text" | "textarea" | "password" | ...',
      default: 'text',
    },
    { name: 'placeholder', description: '占位文本', type: 'string', default: '请输入' },
    { name: 'clearable', description: '是否可清空', type: 'boolean', default: 'false' },
    { name: 'show-password', description: '显示密码', type: 'boolean', default: 'false' },
    { name: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    {
      name: 'size',
      description: '尺寸',
      type: '"large" | "default" | "small"',
      default: 'default',
    },
    { name: 'maxlength', description: '最大输入长度', type: 'number', default: '-' },
    { name: 'minlength', description: '最小输入长度', type: 'number', default: '-' },
    { name: 'prefix-icon', description: '头部图标', type: 'string | Component', default: '-' },
    { name: 'suffix-icon', description: '尾部图标', type: 'string | Component', default: '-' },
  ],
  events: [
    { name: 'input', description: '值改变时触发', params: '(value: string)' },
    { name: 'focus', description: '获得焦点时触发', params: '(event: FocusEvent)' },
    { name: 'blur', description: '失去焦点时触发', params: '(event: FocusEvent)' },
    { name: 'change', description: '值改变时触发', params: '(value: string)' },
    { name: 'clear', description: '点击清空按钮时触发', params: '()' },
  ],
  slots: [
    { name: 'default', description: '自定义内容（仅 textarea）' },
    { name: 'prefix', description: '输入框头部内容' },
    { name: 'suffix', description: '输入框尾部内容' },
    { name: 'prepend', description: '输入框前置内容' },
    { name: 'append', description: '输入框后置内容' },
  ],
  demos: [
    {
      title: '基础用法',
      description: '最基础的输入框。',
      template: `<el-input v-model="input" placeholder="请输入内容" />

<script setup>
import { ref } from 'vue'
const input = ref('')
<\/script>`,
      code: `<template>
  <el-input v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
<\/script>`,
    },
    {
      title: '可清空',
      description: '带清空按钮的输入框。',
      template: `<el-input v-model="input" clearable placeholder="请输入内容" />

<script setup>
import { ref } from 'vue'
const input = ref('可清空内容')
<\/script>`,
      code: `<template>
  <el-input v-model="input" clearable placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('可清空内容')
<\/script>`,
    },
    {
      title: '密码输入框',
      description: '带密码可见切换的输入框。',
      template: `<el-input v-model="password" show-password placeholder="请输入密码" />

<script setup>
import { ref } from 'vue'
const password = ref('')
<\/script>`,
      code: `<template>
  <el-input v-model="password" show-password placeholder="请输入密码" />
</template>

<script setup>
import { ref } from 'vue'
const password = ref('')
<\/script>`,
    },
    {
      title: '带图标',
      description: '带前后缀图标的输入框。',
      template: `<el-input v-model="input" :prefix-icon="Search" placeholder="请输入搜索内容" />
<el-input v-model="input" :suffix-icon="Edit" placeholder="请输入内容" />

<script setup>
import { ref } from 'vue'
import { Search, Edit } from '@element-plus/icons-vue'
const input = ref('')
<\/script>`,
      code: `<template>
  <el-input v-model="input" :prefix-icon="Search" placeholder="请输入搜索内容" />
  <el-input v-model="input" :suffix-icon="Edit" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
import { Search, Edit } from '@element-plus/icons-vue'
const input = ref('')
<\/script>`,
    },
    {
      title: '文本域',
      description: '用于输入多行文本信息。',
      template: `<el-input v-model="textarea" type="textarea" :rows="3" placeholder="请输入内容" />

<script setup>
import { ref } from 'vue'
const textarea = ref('')
<\/script>`,
      code: `<template>
  <el-input v-model="textarea" type="textarea" :rows="3" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const textarea = ref('')
<\/script>`,
    },
  ],
}

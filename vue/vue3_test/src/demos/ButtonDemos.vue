<template>
  <div class="demo-button">
    <h3>基础用法</h3>
    <div class="demo-row">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>

    <h3>尺寸</h3>
    <div class="demo-row">
      <el-button size="large">大型按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button size="small">小型按钮</el-button>
    </div>

    <h3>朴素按钮</h3>
    <div class="demo-row">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
    </div>

    <h3>禁用状态</h3>
    <div class="demo-row">
      <el-button disabled>禁用按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
    </div>

    <h3>加载状态</h3>
    <div class="demo-row">
      <el-button loading>加载中</el-button>
      <el-button type="primary" loading>加载中</el-button>
      <button class="btn is-loading" disabled>
        <span class="spin"></span>
        加载中
      </button>
    </div>

    <h3>圆角 / 圆形按钮</h3>
    <div class="demo-row">
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
    </div>

    <h3>文字按钮</h3>
    <div class="demo-row">
      <el-button link type="primary">文字按钮</el-button>
      <el-button link type="danger">文字按钮</el-button>
    </div>

    <h3>图标按钮</h3>
    <div class="demo-row">
      <el-button type="primary" :icon="Edit" />
      <el-button type="primary" :icon="Delete" />
      <el-button type="primary" :icon="Search">搜索</el-button>
      <el-button type="primary" :icon="Upload">上传</el-button>
    </div>
    <h3>按钮组 以按钮组的方式出现，常用于多项类似操作。</h3>
    <el-button-group class="mb-4">
      <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
      <el-button type="primary">
        Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </el-button-group>
    <br />
    <el-radio-group v-model="direction" class="mb-2">
      <el-radio value="horizontal">Horizontal</el-radio>
      <el-radio value="vertical">Vertical</el-radio>
    </el-radio-group>
    <br />
    <el-button-group :direction="direction">
      <el-button type="primary" :icon="House" />
      <el-button type="primary" :icon="Operation" />
      <el-button type="primary" :icon="Notification" />
      <el-button type="primary" :icon="Plus" />
      <el-icon><Minus /></el-icon>
      <el-icon><CirclePlus /></el-icon>
      <el-icon><ArrowLeft /></el-icon>
      <el-icon><ArrowRight /></el-icon>
    </el-button-group>
  </div>
</template>

<script lang="ts" setup>
import {
  Search,
  Edit,
  Check,
  Delete,
  Upload,
  ArrowLeft,
  ArrowRight,
  House,
  Operation,
  Notification,
  Plus,
  Minus,
  CirclePlus,
} from '@element-plus/icons-vue'
import { ref } from 'vue'

const direction = ref<'horizontal' | 'vertical'>('horizontal')
</script>

<style scoped>
.demo-button {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-button h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 4px 0 0;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.btn {
  padding: 8px 16px;
  border: 1px solid #dcdfe6;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.btn.is-loading {
  position: relative;
  pointer-events: none;
}
.btn.is-loading::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.6);
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spin {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #909399;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 6px;
  vertical-align: -2px;
}
</style>

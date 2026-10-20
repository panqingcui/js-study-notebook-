<template>
  <div class="demo-popconfirm">
    <h3>基础用法</h3>
    <el-popconfirm title="确定要删除这个任务吗？">
      <template #reference>
        <el-button type="danger">删除任务</el-button>
      </template>
    </el-popconfirm>

    <h3>自定义按钮文字 + 图标</h3>
    <el-popconfirm
      title="确定执行此操作？"
      confirm-button-text="好的"
      cancel-button-text="不用了"
      confirm-button-type="primary"
    >
      <template #reference>
        <el-button type="primary">自定义按钮</el-button>
      </template>
    </el-popconfirm>

    <h3>带图标 + 自定义颜色</h3>
    <el-popconfirm
      title="确定吗？此操作不可撤销"
      confirm-button-text="我确定"
      cancel-button-text="再想想"
      icon="Warning"
      icon-color="#f56c6c"
      confirm-button-type="danger"
    >
      <template #reference>
        <el-button type="danger">危险操作</el-button>
      </template>
    </el-popconfirm>

    <h3>触发事件</h3>
    <el-popconfirm title="确认操作？" @confirm="onConfirm" @cancel="onCancel">
      <template #reference>
        <el-button type="success">触发事件</el-button>
      </template>
    </el-popconfirm>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
function onConfirm() {
  ElMessage.success('你点击了确认')
}
function onCancel() {
  ElMessage.info('你点击了取消')
}
</script>

<style scoped>
.demo-popconfirm {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-popconfirm h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

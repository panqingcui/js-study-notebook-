<template>
  <div class="demo-timeline">
    <h3>基础时间线</h3>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :timestamp="activity.timestamp"
        :type="activity.type"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>

    <h3>自定义颜色 + 节点</h3>
    <el-timeline>
      <el-timeline-item timestamp="2025-10-12 09:30" placement="top">
        <el-icon :size="16" color="#409eff"><Bell /></el-icon>
        <span>收到新消息</span>
      </el-timeline-item>
      <el-timeline-item timestamp="2025-10-12 10:00" placement="top" type="primary">
        发布了新版本 v2.0
      </el-timeline-item>
      <el-timeline-item timestamp="2025-10-12 12:30" placement="top" type="success">
        <el-icon :size="16" color="#67c23a"><Check /></el-icon>
        <span>完成代码审查</span>
      </el-timeline-item>
      <el-timeline-item timestamp="2025-10-12 14:00" placement="top" type="warning">
        修复了 3 个 Bug
      </el-timeline-item>
      <el-timeline-item timestamp="2025-10-12 17:00" placement="top" type="danger">
        <el-icon :size="16" color="#f56c6c"><Warning /></el-icon>
        <span>有紧急问题需要处理</span>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts" setup>
import { Bell, Check, Warning } from '@element-plus/icons-vue'

const activities = [
  { content: '活动按期开始', timestamp: '2025-10-12', type: 'primary' },
  { content: '通过审核', timestamp: '2025-10-11', type: 'success' },
  { content: '创建成功', timestamp: '2025-10-10', type: 'warning' },
  { content: '发布成功', timestamp: '2025-10-09', type: 'danger' },
  { content: '活动结束', timestamp: '2025-10-08' },
]
</script>

<style scoped>
.demo-timeline {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-timeline h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

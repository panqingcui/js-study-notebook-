<template>
  <div class="demo-table">
    <h3>基础表格</h3>
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>

    <h3>空状态</h3>
    <el-table :data="[]" border style="width: 100%">
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="value" label="值" />
    </el-table>

    <h3>带操作列</h3>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="#" width="60" />
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="操作" width="180" fixed="right">
        <template #default="{ row }">
          <el-button type="primary" link size="small">编辑</el-button>
          <el-button type="danger" link size="small" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const tableData = [
  { date: '2025-10-12', name: '张三', address: '北京市朝阳区建国门外大街' },
  { date: '2025-10-11', name: '李四', address: '上海市浦东新区世纪大道' },
  { date: '2025-10-10', name: '王五', address: '广州市天河区珠江新城' },
  { date: '2025-10-09', name: '赵六', address: '深圳市南山区科技园' },
]

function handleDelete(row: any) {
  ElMessage.info(`删除：${row.name}`)
}
</script>

<style scoped>
.demo-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-table h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

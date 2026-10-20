<template>
  <div class="demo-tree">
    <h3>基础用法</h3>
    <el-tree
      :data="data"
      :props="{ label: 'label', children: 'children' }"
      node-key="id"
      :default-expand-all="true"
      style="width: 260px"
    />

    <h3>可勾选</h3>
    <el-tree
      :data="data"
      :props="{ label: 'label' }"
      node-key="id"
      show-checkbox
      :default-expand-all="true"
      style="width: 260px"
    />

    <h3>自定义节点内容</h3>
    <el-tree
      :data="data"
      :props="{ label: 'label' }"
      node-key="id"
      :expand-on-click-node="false"
      style="width: 260px"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="primary" link size="small" @click.stop="append(data)">添加</el-button>
            <el-button type="danger" link size="small" @click.stop="removeNode(node, data)"
              >删除</el-button
            >
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Node } from 'element-plus/es/components/tree/src/model/node'

const data = ref([
  {
    id: 1,
    label: '一级节点 1',
    children: [
      {
        id: 11,
        label: '二级节点 1-1',
        children: [
          { id: 111, label: '三级节点 1-1-1' },
          { id: 112, label: '三级节点 1-1-2' },
        ],
      },
      { id: 12, label: '二级节点 1-2' },
    ],
  },
  {
    id: 2,
    label: '一级节点 2',
    children: [{ id: 21, label: '二级节点 2-1' }],
  },
])

function append(dataItem: any) {
  if (!dataItem.children) dataItem.children = []
  dataItem.children.push({ id: Date.now(), label: `新节点 ${Date.now()}` })
}

function removeNode(node: Node, dataItem: any) {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d: any) => d.id === dataItem.id)
  children.splice(index, 1)
}
</script>

<style scoped>
.demo-tree {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-tree h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>

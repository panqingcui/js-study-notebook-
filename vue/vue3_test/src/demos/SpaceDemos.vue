<template>
  <div class="demo-space">
    <h3>水平排列</h3>
    <el-space wrap>
      <el-button type="primary">按钮1</el-button>
      <el-button type="success">按钮2</el-button>
      <el-button type="warning">按钮3</el-button>
      <el-button type="danger">按钮4</el-button>
    </el-space>

    <h3>垂直排列 el-space 默认center, 可以通过alignment属性改变对齐方式</h3>
    <el-space direction="vertical" alignment="start">
      <el-input v-model="val1" placeholder="输入框1" style="width: 200px" />
      <el-input v-model="val2" placeholder="输入框2" style="width: 200px" />
      <el-input v-model="val3" placeholder="输入框3" style="width: 200px" />
    </el-space>

    <h3>不同间距</h3>
    <el-space :size="20">
      <el-tag>Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="warning">Tag 3</el-tag>
    </el-space>
    <el-space :size="40">
      <el-tag>Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="warning">Tag 3</el-tag>
    </el-space>
    <h3>行间分隔符</h3>
    <el-space :size="20" direction="horizontal" spacer="|">
      <el-tag>Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="warning">Tag 3</el-tag>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
</script>

<style scoped>
.demo-space {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-space h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

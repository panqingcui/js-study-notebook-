<template>
  <div class="demo-collapse">
    <h3>基础折叠面板</h3>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
        </div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰地感知自己的操作；</div>
        <div>结果反馈：操作完成后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户更容易辨识。</div>
      </el-collapse-item>
    </el-collapse>

    <h3>手风琴模式（每次只开一个）</h3>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="手风琴 1" name="1">内容 1</el-collapse-item>
      <el-collapse-item title="手风琴 2" name="2">内容 2</el-collapse-item>
      <el-collapse-item title="手风琴 3" name="3">内容 3</el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeNames = ref(['1', '3'])
const activeName = ref('1')
</script>

<style scoped>
.demo-collapse {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-collapse h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

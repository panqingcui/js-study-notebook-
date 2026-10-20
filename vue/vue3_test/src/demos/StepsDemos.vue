<template>
  <div class="demo-steps">
    <h3>基础步骤条</h3>
    <el-steps :active="1" finish-status="success">
      <el-step title="已完成" description="这是步骤的描述文字" />
      <el-step title="进行中" description="这是步骤的描述文字" />
      <el-step title="待进行" description="这是步骤的描述文字" />
      <el-step title="待进行" description="这是步骤的描述文字" />
    </el-steps>

    <h3>各种状态</h3>
    <el-steps :active="3" finish-status="success">
      <el-step title="已完成" />
      <el-step title="已完成" />
      <el-step title="进行中" />
      <el-step title="失败" status="error" />
      <el-step title="等待" />
    </el-steps>

    <h3>简洁模式（direction = vertical 竖排）</h3>
    <el-steps direction="vertical" :active="1">
      <el-step title="步骤一" description="描述信息一" />
      <el-step title="步骤二" description="描述信息二" />
      <el-step title="步骤三" description="描述信息三" />
    </el-steps>

    <h3>点击切换</h3>
    <el-steps :active="activeStep" finish-status="success" @change="handleChange">
      <el-step title="步骤 A" />
      <el-step title="步骤 B" />
      <el-step title="步骤 C" />
      <el-step title="步骤 D" />
    </el-steps>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeStep = ref(1)
function handleChange(val: number) {
  activeStep.value = val
}
</script>

<style scoped>
.demo-steps {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.demo-steps h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

<template>
  <div class="demo-input">
    <h3>基础用法</h3>
    <div class="demo-row">
      <el-input v-model="input1" placeholder="请输入内容" style="width: 200px" />
    </div>

    <h3>可清空</h3>
    <div class="demo-row">
      <el-input v-model="input2" clearable placeholder="请输入内容" style="width: 200px" />
    </div>

    <h3>密码输入框</h3>
    <div class="demo-row">
      <el-input v-model="password" show-password placeholder="请输入密码" style="width: 200px" />
    </div>

    <h3>带图标</h3>
    <div class="demo-row">
      <el-input
        v-model="input3"
        :prefix-icon="Search"
        placeholder="请输入搜索内容"
        style="width: 200px"
      />
      <el-input
        v-model="input4"
        :suffix-icon="Edit"
        placeholder="请输入内容"
        style="width: 200px"
      />
    </div>

    <h3>文本域</h3>
    <div class="demo-row">
      <el-input
        v-model="textarea"
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        style="width: 300px"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search, Edit } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('可清空内容')
const password = ref('')
const input3 = ref('')
const input4 = ref('')
const textarea = ref('')
</script>

<style scoped>
.demo-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-input h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 4px 0 0;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>

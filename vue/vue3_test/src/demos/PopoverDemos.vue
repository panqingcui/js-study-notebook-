<template>
  <div class="demo-popover">
    <h3>基础用法</h3>
    <el-popover placement="top" width="200" trigger="hover">
      <p>这是一段内容，用于说明 Popover 组件的使用方式。</p>
      <template #reference>
        <el-button>鼠标悬停触发</el-button>
      </template>
    </el-popover>

    <h3>不同触发方式</h3>
    <div class="demo-row">
      <el-popover placement="top" trigger="click">
        <p>点击触发内容</p>
        <template #reference><el-button type="primary">点击触发</el-button></template>
      </el-popover>

      <el-popover placement="bottom" trigger="focus">
        <p>聚焦输入框时触发</p>
        <template #reference>
          <el-input v-model="val" placeholder="聚焦触发" style="width: 180px" />
        </template>
      </el-popover>

      <el-popover placement="top" trigger="manual" :visible="visible">
        <p>手动控制的 Popover</p>
        <el-button type="primary" size="small" @click="visible = false">关闭</el-button>
        <template #reference><el-button @click="visible = !visible">手动控制</el-button></template>
      </el-popover>
    </div>

    <h3>嵌入表单</h3>
    <el-popover placement="top" width="300" trigger="click">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" size="small" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">确定</el-button>
          <el-button size="small">取消</el-button>
        </el-form-item>
      </el-form>
      <template #reference><el-button type="success">打开表单</el-button></template>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const val = ref('')
const visible = ref(false)
const form = reactive({ name: '' })
</script>

<style scoped>
.demo-popover {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-popover h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
</style>

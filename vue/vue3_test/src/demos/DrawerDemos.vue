<template>
  <div class="demo-drawer">
    <h3>右侧抽屉</h3>
    <el-button type="primary" @click="drawer1Visible = true">打开右侧抽屉</el-button>
    <el-drawer v-model="drawer1Visible" title="右侧抽屉的标题" direction="rtl">
      <span>Hi，这是右侧抽屉的内容。</span>
      <p style="margin-top: 12px; color: #909399">抽屉组件常用于展示侧边栏、详情面板等场景。</p>
    </el-drawer>

    <h3>左侧抽屉</h3>
    <el-button type="success" @click="drawer2Visible = true">打开左侧抽屉</el-button>
    <el-drawer v-model="drawer2Visible" title="左侧抽屉" direction="ltr" size="300px">
      <p>这是从左侧滑出的抽屉。</p>
    </el-drawer>

    <h3>上 / 下抽屉</h3>
    <div class="demo-row">
      <el-button type="warning" @click="drawer3Visible = true">打开顶部抽屉</el-button>
      <el-button type="info" @click="drawer4Visible = true">打开底部抽屉</el-button>
    </div>
    <el-drawer v-model="drawer3Visible" title="顶部抽屉" direction="ttb" size="40%">
      <p>这是从顶部滑出的抽屉。</p>
    </el-drawer>
    <el-drawer v-model="drawer4Visible" title="底部抽屉" direction="btt" size="40%">
      <p>这是从底部滑出的抽屉。</p>
    </el-drawer>

    <h3>带嵌套组件</h3>
    <el-button type="danger" @click="drawer5Visible = true">带表单</el-button>
    <el-drawer v-model="drawer5Visible" title="编辑信息" direction="rtl" size="420px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="姓名"><el-input v-model="form.name" /></el-form-item>
        <el-form-item label="年龄"><el-input-number v-model="form.age" /></el-form-item>
        <el-form-item label="城市">
          <el-select v-model="form.city" placeholder="请选择" style="width: 100%">
            <el-option label="北京" value="beijing" />
            <el-option label="上海" value="shanghai" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="drawer5Visible = false">取消</el-button>
        <el-button type="primary" @click="drawer5Visible = false">提交</el-button>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const drawer1Visible = ref(false)
const drawer2Visible = ref(false)
const drawer3Visible = ref(false)
const drawer4Visible = ref(false)
const drawer5Visible = ref(false)
const form = reactive({ name: '', age: 18, city: '' })
</script>

<style scoped>
.demo-drawer {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-drawer h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>

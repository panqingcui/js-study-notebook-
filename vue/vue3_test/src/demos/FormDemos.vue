<template>
  <div class="demo-form">
    <h3>基础表单</h3>
    <el-form :model="form" label-width="80px" style="max-width: 420px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" show-password placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input-number v-model="form.age" :min="0" :max="150" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio label="male">男</el-radio>
          <el-radio label="female">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="城市">
        <el-select v-model="form.city" placeholder="请选择" style="width: 100%">
          <el-option label="北京" value="beijing" />
          <el-option label="上海" value="shanghai" />
          <el-option label="广州" value="guangzhou" />
          <el-option label="深圳" value="shenzhen" />
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="form.bio" type="textarea" :rows="3" placeholder="介绍一下自己" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  username: '',
  password: '',
  age: 18,
  gender: 'male',
  city: '',
  bio: '',
})

function submit() {
  ElMessage.success(`提交成功：${JSON.stringify(form)}`)
}

function reset() {
  form.username = ''
  form.password = ''
  form.age = 18
  form.gender = 'male'
  form.city = ''
  form.bio = ''
}
</script>

<style scoped>
.demo-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-form h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

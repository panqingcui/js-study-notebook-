<template>
  <div class="demo-dialog">
    <h3>基础对话框</h3>
    <el-button type="primary" @click="dialog1Visible = true">打开对话框</el-button>

    <el-dialog v-model="dialog1Visible" title="提示">
      <span>这是一段信息</span>
      <template #footer>
        <el-button @click="dialog1Visible = false">取消</el-button>
        <el-button type="primary" @click="dialog1Visible = false">确定</el-button>
      </template>
    </el-dialog>

    <h3>自定义宽度</h3>
    <el-button @click="dialog2Visible = true">自定义宽度</el-button>
    <el-dialog v-model="dialog2Visible" title="自定义宽度" width="30%">
      <p>这个对话框的宽度是 30%。</p>
    </el-dialog>

    <h3>可全屏 + 拖拽</h3>
    <el-button type="success" @click="dialog3Visible = true">可拖拽对话框</el-button>
    <el-dialog v-model="dialog3Visible" title="可拖拽" width="500px" draggable>
      <p>这个对话框支持鼠标拖拽移动标题栏。</p>
      <p style="margin-top: 8px">你可以尝试用鼠标拖动标题栏来移动这个对话框。</p>
    </el-dialog>

    <h3>居中布局</h3>
    <el-button type="warning" @click="dialog4Visible = true">居中布局</el-button>
    <el-dialog v-model="dialog4Visible" title="居中布局" width="30%" center>
      <span>内容居中，底部按钮居中。</span>
      <template #footer>
        <el-button @click="dialog4Visible = false">取消</el-button>
        <el-button type="primary" @click="dialog4Visible = false">确定</el-button>
      </template>
    </el-dialog>

    <h3>带 Form 表单</h3>
    <el-button type="danger" @click="dialog5Visible = true">带表单的对话框</el-button>
    <el-dialog v-model="dialog5Visible" title="新建用户" width="420px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名"><el-input v-model="form.name" /></el-form-item>
        <el-form-item label="邮箱"><el-input v-model="form.email" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialog5Visible = false">取消</el-button>
        <el-button type="primary" @click="dialog5Visible = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const dialog1Visible = ref(false)
const dialog2Visible = ref(false)
const dialog3Visible = ref(false)
const dialog4Visible = ref(false)
const dialog5Visible = ref(false)
const form = reactive({ name: '', email: '' })
</script>

<style scoped>
.demo-dialog {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-dialog h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

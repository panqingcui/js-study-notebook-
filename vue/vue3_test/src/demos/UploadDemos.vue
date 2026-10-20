<template>
  <div class="demo-upload">
    <h3>点击上传</h3>
    <el-upload
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-92d5-ed96a77da8e6"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :file-list="fileList"
      drag
    >
      <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">支持 jpg/png 文件，且不超过 2MB</div>
      </template>
    </el-upload>

    <h3>卡片式上传</h3>
    <el-upload
      class="avatar-uploader"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-92d5-ed96a77da8e6"
      list-type="picture-card"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :file-list="fileList2"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { UploadFilled, Plus } from '@element-plus/icons-vue'
import { ElMessage, type UploadFile } from 'element-plus'

const fileList = ref<UploadFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://element-plus.org/images/thumbnail.svg',
    status: 'success',
    uid: 1,
  },
  {
    name: 'food2.jpeg',
    url: 'https://element-plus.org/images/thumbnail.svg',
    status: 'success',
    uid: 2,
  },
])

const fileList2 = ref<UploadFile[]>([
  {
    name: 'avatar.jpeg',
    url: 'https://element-plus.org/images/thumbnail.svg',
    status: 'success',
    uid: 1,
  },
])

function handleRemove(file: UploadFile, list: UploadFile[]) {
  ElMessage.info(`删除文件: ${file.name}`)
}

function handlePreview(file: UploadFile) {
  ElMessage.info(`预览: ${file.name}`)
}

function beforeUpload(file: File) {
  const isImage = file.type.startsWith('image/')
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isImage) ElMessage.error('只能上传图片文件!')
  if (!isLt2M) ElMessage.error('图片大小不能超过 2MB!')
  return isImage && isLt2M
}
</script>

<style scoped>
.demo-upload {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-upload h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.avatar-uploader :deep(.el-upload) {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 148px;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  transition: border-color 0.3s;
}
.avatar-uploader :deep(.el-upload:hover) {
  border-color: #409eff;
}
</style>

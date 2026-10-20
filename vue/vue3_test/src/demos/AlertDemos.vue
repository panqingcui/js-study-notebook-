<template>
  <div class="demo-alert">
    <h3>不同类型</h3>
    <el-alert title="成功提示的文案" type="success" show-icon />
    <el-alert title="消息提示的文案" type="info" show-icon />
    <el-alert title="警告提示的文案" type="warning" show-icon />
    <el-alert title="错误提示的文案" type="error" show-icon />

    <h3>带描述</h3>
    <el-alert
      title="成功提示的文案"
      type="success"
      description="这是一段描述信息，用于进一步说明提示的详细内容。"
      show-icon
    />

    <h3>可关闭</h3>
    <el-alert title="不显示关闭按钮" type="info" show-icon :closable="false" />
    <el-alert title="有默认关闭按钮" type="warning" />
    <el-alert title="自定义关闭文字" type="error" close-text="知道了" />

    <h3>不同主题</h3>
    <div class="demo-row">
      <el-alert title="亮色主题 (light)" type="success" show-icon effect="light" />
      <el-alert title="暗色主题 (dark)" type="success" show-icon effect="dark" />
    </div>
  </div>
</template>

<style scoped>
.demo-alert {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.demo-alert h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 8px 0 0;
}
.demo-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

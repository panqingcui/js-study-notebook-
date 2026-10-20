<template>
  <div class="demo-result">
    <h3>成功</h3>
    <el-result icon="success" title="成功提示" sub-title="您的操作已完成">
      <template #extra>
        <el-button type="primary">返回首页</el-button>
        <el-button>查看详情</el-button>
      </template>
    </el-result>

    <h3>错误</h3>
    <el-result icon="error" title="失败提示" sub-title="抱歉，操作失败了">
      <template #extra>
        <el-button type="primary">重新尝试</el-button>
        <el-button>联系客服</el-button>
      </template>
    </el-result>

    <h3>警告 + 信息</h3>
    <div class="demo-row">
      <el-result icon="warning" title="警告提示" sub-title="请注意此操作的风险" />
      <el-result icon="info" title="信息提示" sub-title="这是一条通知信息" />
    </div>

    <h3>404 页面</h3>
    <el-result status="404" title="404" sub-title="抱歉，您访问的页面不存在">
      <template #extra>
        <el-button type="primary">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>

<style scoped>
.demo-result {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-result h3 {
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

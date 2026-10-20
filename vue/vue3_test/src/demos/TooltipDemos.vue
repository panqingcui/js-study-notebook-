<template>
  <div class="demo-tooltip">
    <h3>不同位置</h3>
    <div class="demo-row">
      <el-tooltip content="Top 提示" placement="top">
        <el-button>Top</el-button>
      </el-tooltip>
      <el-tooltip content="Top-start 提示" placement="top-start">
        <el-button>Top-start</el-button>
      </el-tooltip>
      <el-tooltip content="Top-end 提示" placement="top-end">
        <el-button>Top-end</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom 提示" placement="bottom">
        <el-button>Bottom</el-button>
      </el-tooltip>
      <el-tooltip content="Left 提示" placement="left">
        <el-button>Left</el-button>
      </el-tooltip>
      <el-tooltip content="Right 提示" placement="right">
        <el-button>Right</el-button>
      </el-tooltip>
    </div>

    <h3>不同类型</h3>
    <div class="demo-row">
      <el-tooltip content="Dark 默认" placement="top" effect="dark">
        <el-button type="primary">Dark</el-button>
      </el-tooltip>
      <el-tooltip content="Light 亮色" placement="top" effect="light">
        <el-button type="success">Light</el-button>
      </el-tooltip>
    </div>

    <h3>内容较长</h3>
    <el-tooltip placement="top" :show-after="300">
      <template #content>
        <div style="max-width: 260px">
          <div style="font-weight: bold; margin-bottom: 4px">标题</div>
          <div>
            这是一段比较长的提示内容，可能包含多行文字描述。Tooltip 组件可以用来展示额外的帮助信息。
          </div>
        </div>
      </template>
      <el-button type="warning">复杂内容</el-button>
    </el-tooltip>
  </div>
</template>

<style scoped>
.demo-tooltip {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-tooltip h3 {
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

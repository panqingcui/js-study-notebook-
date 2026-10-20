<template>
  <div class="demo-config-provider">
    <h3>基础用法（组件尺寸 / 语言全局配置）</h3>
    <div class="demo-row">
      <el-config-provider :size="'large'">
        <el-button type="primary">Large 按钮</el-button>
        <el-input placeholder="Large 输入框" style="width: 200px" />
        <el-select style="width: 160px" placeholder="Large Select">
          <el-option label="选项" value="1" />
        </el-select>
      </el-config-provider>
    </div>

    <h3>中型（默认）</h3>
    <div class="demo-row">
      <el-button type="primary">Medium 按钮</el-button>
      <el-input placeholder="Medium 输入框" style="width: 200px" />
      <el-select style="width: 160px" placeholder="Medium Select">
        <el-option label="选项" value="1" />
      </el-select>
    </div>

    <h3>小型</h3>
    <el-config-provider :size="'small'">
      <div class="demo-row">
        <el-button type="primary">Small 按钮</el-button>
        <el-input placeholder="Small 输入框" style="width: 200px" />
        <el-select style="width: 160px" placeholder="Small Select">
          <el-option label="选项" value="1" />
        </el-select>
      </div>
    </el-config-provider>

    <h3>RTL 布局（从右到左）</h3>
    <el-config-provider dir="rtl">
      <div class="demo-row">
        <el-button type="primary">按钮</el-button>
        <el-input placeholder="输入框" style="width: 200px" />
      </div>
    </el-config-provider>
  </div>
</template>

<style scoped>
.demo-config-provider {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-config-provider h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>

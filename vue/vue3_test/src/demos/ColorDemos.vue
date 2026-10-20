<template>
  <div class="demo-color-wrapper">
    <h3>主色</h3>
    <div class="demo-color">
      <div
        class="color-item"
        v-for="item in primaryList"
        :key="item.var"
        :class="{ 'light-bg': item.light }"
        :style="{ backgroundColor: item.var }"
      >
        <span class="label">{{ item.name }}</span>
        <span class="hex">{{ item.hex }}</span>
        <span class="var-name">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>

    <h3>辅助色</h3>
    <div class="demo-color">
      <div
        class="color-item"
        v-for="item in auxiliaryList"
        :key="item.var"
        :style="{ backgroundColor: item.var }"
      >
        <span class="label">{{ item.name }}</span>
        <span class="hex">{{ item.hex }}</span>
        <span class="var-name">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>

    <h3>主色阶</h3>
    <div class="demo-color-steps">
      <div
        class="step-item"
        v-for="item in primarySteps"
        :key="item.var"
        :class="{ 'dark-step': item.dark }"
        :style="{ backgroundColor: item.var }"
      >
        <span class="step-label">{{ item.label }}</span>
        <span class="step-hex">{{ item.hex }}</span>
      </div>
    </div>

    <h3>文本颜色</h3>
    <div class="demo-color-text">
      <div class="text-item" v-for="item in textColorList" :key="item.var">
        <span class="text-preview" :style="{ color: item.var }">Aa 文字示例</span>
        <span class="text-hex">{{ item.hex }}</span>
        <span class="text-var">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>

    <h3>边框颜色</h3>
    <div class="demo-color-border">
      <div class="border-item" v-for="item in borderColorList" :key="item.var">
        <div class="border-preview" :style="{ borderColor: item.var }" />
        <span class="border-hex">{{ item.hex }}</span>
        <span class="border-var">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>

    <h3>填充颜色</h3>
    <div class="demo-color-fill">
      <div class="fill-item" v-for="item in fillColorList" :key="item.var">
        <div class="fill-preview" :style="{ backgroundColor: item.var }" />
        <span class="fill-hex">{{ item.hex }}</span>
        <span class="fill-var">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>

    <h3>背景颜色</h3>
    <div class="demo-color-fill">
      <div class="fill-item" v-for="item in bgColorList" :key="item.var">
        <div class="fill-preview" :style="{ backgroundColor: item.var, borderColor: '#e4e7ed' }" />
        <span class="fill-hex">{{ item.hex }}</span>
        <span class="fill-var">{{ item.var.replace('var(--', '').replace(')', '') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryList = [
  { name: 'Brand Color', var: 'var(--el-color-primary)', hex: '#409EFF', light: false },
]

const auxiliaryList = [
  { name: 'Success', var: 'var(--el-color-success)', hex: '#67C23A' },
  { name: 'Warning', var: 'var(--el-color-warning)', hex: '#E6A23C' },
  { name: 'Danger', var: 'var(--el-color-danger)', hex: '#F56C6C' },
  { name: 'Error', var: 'var(--el-color-error)', hex: '#F56C6C' },
  { name: 'Info', var: 'var(--el-color-info)', hex: '#909399' },
]

const primarySteps = [
  { label: 'light-1', var: 'var(--el-color-primary-light-1)', hex: '#53A8FF', dark: false },
  { label: 'light-2', var: 'var(--el-color-primary-light-2)', hex: '#66B1FF', dark: false },
  { label: 'light-3', var: 'var(--el-color-primary-light-3)', hex: '#79BBFF', dark: false },
  { label: 'light-4', var: 'var(--el-color-primary-light-4)', hex: '#8CC5FF', dark: false },
  { label: 'light-5', var: 'var(--el-color-primary-light-5)', hex: '#A0CFFF', dark: false },
  { label: 'light-6', var: 'var(--el-color-primary-light-6)', hex: '#B3D8FF', dark: false },
  { label: 'light-7', var: 'var(--el-color-primary-light-7)', hex: '#C6E2FF', dark: false },
  { label: 'light-8', var: 'var(--el-color-primary-light-8)', hex: '#D9ECFF', dark: false },
  { label: 'light-9', var: 'var(--el-color-primary-light-9)', hex: '#ECF5FF', dark: false },
  { label: 'primary', var: 'var(--el-color-primary)', hex: '#409EFF', dark: false },
  { label: 'dark-2', var: 'var(--el-color-primary-dark-2)', hex: '#337ECC', dark: true },
]

const textColorList = [
  { var: 'var(--el-text-color-primary)', hex: '#303133' },
  { var: 'var(--el-text-color-regular)', hex: '#606266' },
  { var: 'var(--el-text-color-secondary)', hex: '#909399' },
  { var: 'var(--el-text-color-placeholder)', hex: '#A8ABB2' },
  { var: 'var(--el-text-color-disabled)', hex: '#C0C4CC' },
]

const borderColorList = [
  { var: 'var(--el-border-color)', hex: '#DCDFE6' },
  { var: 'var(--el-border-color-light)', hex: '#E4E7ED' },
  { var: 'var(--el-border-color-lighter)', hex: '#EBEEF5' },
  { var: 'var(--el-border-color-extra-light)', hex: '#F2F6FC' },
  { var: 'var(--el-border-color-dark)', hex: '#D4D7DE' },
  { var: 'var(--el-border-color-darker)', hex: '#CDD0D6' },
]

const fillColorList = [
  { var: 'var(--el-fill-color)', hex: '#F0F2F5' },
  { var: 'var(--el-fill-color-light)', hex: '#F5F7FA' },
  { var: 'var(--el-fill-color-lighter)', hex: '#FAFAFA' },
  { var: 'var(--el-fill-color-extra-light)', hex: '#FAFCFF' },
  { var: 'var(--el-fill-color-blank)', hex: '#FFFFFF' },
  { var: 'var(--el-fill-color-dark)', hex: '#EBEDF0' },
  { var: 'var(--el-fill-color-darker)', hex: '#E6E8EB' },
]

const bgColorList = [
  { var: 'var(--el-bg-color)', hex: '#FFFFFF' },
  { var: 'var(--el-bg-color-page)', hex: '#F2F3F5' },
  { var: 'var(--el-bg-color-overlay)', hex: '#FFFFFF' },
]
</script>

<style scoped>
.demo-color-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-color-wrapper h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}

.demo-color {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.color-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 140px;
  height: 90px;
  padding: 10px 14px;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.color-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.color-item.light-bg {
  color: #303133;
}

.color-item .label {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 4px;
}

.color-item .hex {
  font-size: 13px;
  opacity: 0.9;
  font-weight: 500;
  font-family: Consolas, Monaco, monospace;
}

.color-item .var-name {
  font-size: 11px;
  opacity: 0.75;
  font-family: Consolas, Monaco, monospace;
  margin-top: 2px;
}

.demo-color-steps {
  display: flex;
  height: 72px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.step-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 8px;
  color: rgba(255, 255, 255, 0.95);
  transition: flex 0.3s;
}

.step-item:hover {
  flex: 1.8;
}

.step-item.dark-step {
  color: #fff;
}

.step-label {
  font-size: 11px;
  font-family: Consolas, Monaco, monospace;
  opacity: 0.9;
}

.step-hex {
  font-size: 12px;
  font-weight: 600;
  font-family: Consolas, Monaco, monospace;
}

.demo-color-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #f5f7fa;
  padding: 2px;
  border-radius: 6px;
}

.text-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  padding: 10px 16px;
  font-size: 13px;
  border-radius: 4px;
}

.text-preview {
  font-size: 18px;
  font-weight: 500;
  width: 130px;
}

.text-hex {
  font-family: Consolas, Monaco, monospace;
  color: #909399;
  width: 70px;
  font-size: 13px;
}

.text-var {
  font-family: Consolas, Monaco, monospace;
  color: #c0c4cc;
  font-size: 12px;
}

.demo-color-border {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.border-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100px;
}

.border-preview {
  width: 100%;
  height: 48px;
  border: 3px solid;
  border-radius: 6px;
  background: #fff;
}

.border-hex {
  font-family: Consolas, Monaco, monospace;
  font-size: 12px;
  color: #606266;
}

.border-var {
  font-family: Consolas, Monaco, monospace;
  font-size: 11px;
  color: #c0c4cc;
}

.demo-color-fill {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.fill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100px;
}

.fill-preview {
  width: 100%;
  height: 48px;
  border-radius: 6px;
  border: 1px solid #ebeef5;
}

.fill-hex {
  font-family: Consolas, Monaco, monospace;
  font-size: 12px;
  color: #606266;
}

.fill-var {
  font-family: Consolas, Monaco, monospace;
  font-size: 11px;
  color: #c0c4cc;
}
</style>

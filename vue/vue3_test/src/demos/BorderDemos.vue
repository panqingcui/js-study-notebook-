<template>
  <div class="demo-border">
    <h3>边框样式</h3>
    <div class="demo-row">
      <table class="demo-border">
        <tbody>
          <tr>
            <td class="text">Name</td>
            <td class="text">Thickness</td>
            <td class="line">Demo</td>
          </tr>
          <tr>
            <td class="text">Solid</td>
            <td class="text">1px</td>
            <td class="line">
              <div />
            </td>
          </tr>
          <tr>
            <td class="text">Dashed</td>
            <td class="text">2px</td>
            <td class="line">
              <div class="dashed" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>圆角边框样式</h3>
    <div class="demo-row">
      <el-row :gutter="4" class="demo-radius">
        <el-col v-for="(radius, i) in radiusGroup" :key="i" :span="6" :xs="{ span: 12 }">
          <div class="title">{{ radius.name }}</div>
          <div class="value">
            <code>
              border-radius:
              {{ radius.type ? useCssVar(`--el-border-radius-${radius.type}`) : '"0px"' }}
            </code>
          </div>
          <div
            class="radius"
            :style="{
              borderRadius: radius.type ? `var(--el-border-radius-${radius.type})` : '',
            }"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
const radiusGroup = ref([
  {
    name: 'No Radius',
    type: '',
  },
  {
    name: 'Small Radius',
    type: 'small',
  },
  {
    name: 'Large Radius',
    type: 'base',
  },
  {
    name: 'Round Radius',
    type: 'round',
  },
])
</script>

<style scoped>
.demo-border {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.demo-border h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 4px 0 0;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  width: 100%;
}
.demo-row > * {
  width: 100%;
}
.demo-border .text {
  width: 15%;
}
.demo-border .line {
  width: 70%;
}
.demo-border .line div {
  width: 100%;
  height: 0;
  border-top: 1px solid var(--el-border-color);
}
.demo-border .line .dashed {
  border-top: 2px dashed var(--el-border-color);
}
.demo-radius .title {
  color: var(--el-text-color-regular);
  font-size: 18px;
  margin: 10px 0;
}
.demo-radius .value {
  color: var(--el-text-color-primary);
  font-size: 16px;
  margin: 10px 0;
  min-width: 0;
}
.demo-radius .value code {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.demo-radius .radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}
</style>

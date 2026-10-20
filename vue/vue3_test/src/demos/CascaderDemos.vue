<template>
  <div class="demo-cascader">
    <h3>基础用法</h3>
    <el-cascader v-model="value1" :options="options" placeholder="请选择" style="width: 240px" />

    <h3>可清空 + 可搜索</h3>
    <el-cascader
      v-model="value2"
      :options="options"
      clearable
      filterable
      placeholder="请搜索"
      style="width: 240px"
    />

    <h3>只返回最后一级值</h3>
    <el-cascader
      v-model="value3"
      :options="options"
      :emit-path="false"
      placeholder="只返回末级"
      style="width: 240px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref<string[]>([])
const value2 = ref<string[]>([])
const value3 = ref('')

const options = [
  {
    value: 'beijing',
    label: '北京',
    children: [
      { value: 'chaoyang', label: '朝阳区' },
      { value: 'haidian', label: '海淀区' },
      { value: 'dongcheng', label: '东城区' },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      { value: 'huangpu', label: '黄浦区' },
      { value: 'jingan', label: '静安区' },
      { value: 'pudong', label: '浦东新区' },
    ],
  },
  {
    value: 'guangdong',
    label: '广东省',
    children: [
      {
        value: 'guangzhou',
        label: '广州市',
        children: [
          { value: 'tianhe', label: '天河区' },
          { value: 'yuexiu', label: '越秀区' },
        ],
      },
      {
        value: 'shenzhen',
        label: '深圳市',
        children: [
          { value: 'nanshan', label: '南山区' },
          { value: 'futian', label: '福田区' },
        ],
      },
    ],
  },
]
</script>

<style scoped>
.demo-cascader {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-cascader h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

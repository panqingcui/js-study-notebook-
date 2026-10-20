<template>
  <div class="demo-autocomplete">
    <h3>基础用法</h3>
    <el-autocomplete
      v-model="value1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      style="width: 260px"
    />

    <h3>自定义模板</h3>
    <el-autocomplete
      v-model="value2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      style="width: 260px"
    >
      <template #default="{ item }">
        <span>{{ item.value }}</span>
        <span style="float: right; color: #8492a6; font-size: 12px">{{ item.tel }}</span>
      </template>
    </el-autocomplete>
    <h3>从服务端搜索数据。</h3>
    <el-autocomplete
      v-model="value3"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      style="width: 260px"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const links = ref<{ value: string; link: string }[]>([])
const list = [
  { value: '张三', tel: '138****1234' },
  { value: '李四', tel: '139****5678' },
  { value: '王五', tel: '137****9012' },
  { value: '赵六', tel: '136****3456' },
  { value: '孙七', tel: '135****7890' },
]

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

function querySearch(query: string, cb: (items: any[]) => void) {
  if (query) {
    cb(list.filter((item) => item.value.toLowerCase().includes(query.toLowerCase())).slice(0, 10))
  } else {
    cb(list.slice(0, 10))
  }
}
onMounted(() => {
  links.value = loadAll()
})
let timeout: number
const querySearchAsync = (queryString: string, cb: (items: any[]) => void) => {
  const results = queryString ? links.value.filter(createFilter(queryString)) : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: any) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
</script>

<style scoped>
.demo-autocomplete {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-autocomplete h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
</style>

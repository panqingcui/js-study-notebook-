<template>
  <div class="person">
    <h2>🎯 父子通信 Props,父组件传入数据，子组件接收数据，用defineProps定义属性类型</h2>
    <p>父组件传递的属性：</p>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <p>性别：{{ sex }}</p>
    <p>列表：
      <ul>
        <!-- 遍历列表，显示每个元素的名称 ：key="index" -->
        <li v-for="(item, index) in list" :key="index">{{ item.name }}--{{ item.age }}--{{ index }}</li>
      </ul>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { type PersonProps, type Props } from '@/types/index'

// 定义属性类型,并设置默认值  
const props = withDefaults(defineProps<Props>(), {
  name: '无名氏',
  age: 18,
  sex: '未知',
  list: () => []
})
// // 访问属性值
// const name = computed(() => props.name)
// const age = computed(() => props.age)
// const sex = computed(() => props.sex)
// const list = computed(() => props.list)
</script>

<style scoped>
.person {
  margin: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  font-family: '微软雅黑', sans-serif;
}
.case {
  margin: 16px 0;
  padding: 16px;
  background: #fff;
  border-radius: 6px;
  border-left: 4px solid #42b983;
}
.case h3 {
  margin: 0 0 12px 0;
  color: #333;
}
button {
  margin: 4px 8px 4px 0;
  padding: 6px 14px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #359a6b;
}
input {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
}
.child {
  padding: 10px;
  background: #ecf5ff;
  border-radius: 4px;
  display: inline-block;
}
</style>
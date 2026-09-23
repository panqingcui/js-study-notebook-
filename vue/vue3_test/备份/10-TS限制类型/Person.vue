<template>
  <div class="person">
    <h2>🎯 TS使用案例</h2>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <p v-for="p in personProps" :key="p.name">姓名：{{ p.name }}，年龄：{{ p.age }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type PersonProps } from '@/types/index'
// 通过 接口限制 person 对象的属性只能是 name 和 age
// 如果尝试添加其他属性，会报错
// 例如：person.value = { name: '李四', age: 15, sex: '男' } 会报错
let person = ref<PersonProps>({
  name: '张三',
  age: 0,
})
// 通过 接口限制 personProps 数组的元素只能是 name 和 age
// 如果尝试添加其他属性，会报错
// 例如：personProps.value = [{ name: '王五', age: 10, sex: '男' }, { name: '张三', age: 13, sex: '男' }] 会报错
let personProps = ref<PersonProps[]>([
  {
    name: '王五',
    age: 10,
  },
  {
    name: '张三',
    age: 13,
  },
])
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

<template>
  <div class="person">
    <h2>🎯 模板 ref 使用案例</h2>

    <!-- 案例 1：输入框自动聚焦 -->
    <div class="case">
      <h3>案例 1：进入页面自动聚焦输入框</h3>
      <input type="text" ref="inputRef" placeholder="我会自动获得焦点" />
    </div>

    <!-- 案例 2：点击按钮读取 / 修改 DOM 内容 -->
    <div class="case">
      <h3>案例 2：操作 DOM 元素</h3>
      <p ref="titleRef">原始文字：你好 Vue 3</p>
      <button @click="changeTitle">修改上面的文字</button>
      <button @click="highlightTitle">高亮上面的文字</button>
    </div>

    <!-- 案例 3：获取输入框的值 -->
    <div class="case">
      <h3>案例 3：获取输入框的值</h3>
      <input type="text" ref="usernameRef" placeholder="输入用户名" />
      <button @click="submitForm">提交表单</button>
    </div>

    <!-- 案例 4：操作子组件（ref 绑在组件上） -->
    <div class="case">
      <h3>案例 4：ref 绑在子组件上</h3>
      <ChildComponent ref="childRef" />
      <button @click="callChildMethod">调用子组件方法</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ChildComponent from './ChildComponent.vue'

// ============ 案例 1：输入框自动聚焦 ============
const inputRef = ref<HTMLInputElement | null>(null)
onMounted(() => {
  inputRef.value?.focus()
})

// ============ 案例 2：操作 DOM 元素 ============
const titleRef = ref<HTMLParagraphElement | null>(null)

const changeTitle = () => {
  if (titleRef.value) {
    titleRef.value.innerText = '文字被修改了 ✨'
  }
}

const highlightTitle = () => {
  if (titleRef.value) {
    titleRef.value.style.color = 'red'
    titleRef.value.style.fontWeight = 'bold'
    titleRef.value.style.backgroundColor = '#fff3cd'
  }
}

// ============ 案例 3：获取输入框的值 ============
const usernameRef = ref<HTMLInputElement | null>(null)

const submitForm = () => {
  const username = usernameRef.value?.value
  console.log('提交的用户名:', username)
  alert(`你输入的是：${username}`)
}

// ============ 案例 4：ref 绑在子组件上 ============
const childRef = ref<InstanceType<typeof ChildComponent> | null>(null)

const callChildMethod = () => {
  childRef.value?.sayHello()
}
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

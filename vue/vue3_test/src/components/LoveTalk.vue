<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.content }}</li>
    </ul>
    <button @click="modify">修改</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useTalkStore } from '@/store/talk'
import { storeToRefs } from 'pinia'

const talkStore = useTalkStore()
// 从pinia中获取talkList数组 ，并解构赋值给talkList
const { talkList } = storeToRefs(talkStore)

// 数据
// let talkList = reactive([
//   { id: 'ftrfasdf01', content: '今天你有点怪，哪里怪？怪好看的！' },
//   { id: 'ftrfasdf02', content: '草莓、蓝莓、蔓越莓，今天想我了没？' },
//   { id: 'ftrfasdf03', content: '心里给你留了一块地，我的死心塌地' },
// ])
// 方法
async function getLoveTalk() {
  talkStore.getATalk()
}
// 修改数组中的数据
function modify() {
  talkStore.$patch((state) => {
    // 覆盖talkList数组
    // talkList: [
    //   { id: nanoid(), content: '今天你有点怪，哪里怪？怪好看的！' },
    //   { id: nanoid(), content: '草莓、蓝莓、蔓越莓，今天想我了没？' },
    //   { id: nanoid(), content: '心里给你留了一块地，我的死心塌地' },
    // ],
    // 覆盖talkList数组中的第一个元素
    // 删除第一个
    state.talkList.shift()
    // 删除最后一个
    state.talkList.pop()
    // 在数组开头添加一个元素
    state.talkList.unshift({ id: nanoid(), content: '今天你有点怪，哪里怪？怪好看的！' })
    // 在数组末尾添加一个元素
    state.talkList.push({ id: nanoid(), content: '草莓、蓝莓、蔓越莓，今天想我了没？' })
  })
}
//监听pinia的状态变化
talkStore.$subscribe((mutation, state) => {
  console.log(mutation, state)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>

//pinia
import { defineStore } from 'pinia'
import axios from 'axios'

// 定义一个聊天的store
// 定义并暴露一个store
export const useTalkStore = defineStore('talk', {
  // 动作
  actions: {
    async getATalk() {
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {
        data: { id, hitokoto: content },
      } = await axios.get('https://v1.hitokoto.cn/')
      // 把请求回来的字符串，包装成一个对象
      let obj = { id: id, content }
      // 放到数组中
      this.talkList.unshift(obj)
    },
  },
  // 状态
  state() {
    return {
      talkList: JSON.parse(localStorage.getItem('talkList') as string) || [], //避免是null无法调用unshift
    }
  },
  // 计算
  getters: {},
})

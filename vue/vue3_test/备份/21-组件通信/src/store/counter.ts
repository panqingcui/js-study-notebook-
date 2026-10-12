import { defineStore } from 'pinia'

// 定义store，唯一id：counter
export const useCounterStore = defineStore('counter', {
  // state：状态
  state: () => ({
    count: 0,
    msg: '来自pinia的消息',
  }),
  // getters：计算属性
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // actions：修改状态（支持异步）
  actions: {
    increment() {
      this.count++
    },
    setMsg(newMsg: string) {
      this.msg = newMsg
    },
  },
})

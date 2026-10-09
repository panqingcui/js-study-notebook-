// 引入pina
import { defineStore } from 'pinia'

// 定义一个计数器的store
export const useCounterStore = defineStore('counter', {
  // state: 定义状态
  state: () => {
    return {
      sum: 3,
    }
  },
  // getters: 定义计算属性,可以对state进行加工处理,类似于vue2中的computed
  getters: {
    // doubleSum(state) {
    //   return state.sum * 2
    // },
    doubleSum: (state) => state.sum * 2,
  },
  // actions：修改状态的方法，支持同步/异步

  actions: {
    //sum++的函数
    increment(n: number) {
      this.sum += n
    },
    //sum--的函数
    decrement(n: number) {
      this.sum -= n
    },
    // 异步示例
    async asyncAdd(num: number) {
      await new Promise((resolve) => setTimeout(resolve, 500))
      this.sum += num
    },
  },
})

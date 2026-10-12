import { customRef } from 'vue'

export default function (initValue: string, delay: number) {
  // 使用Vue提供的customRef定义响应式数据
  let timer: number

  // track(跟踪)、trigger(触发)
  let msg = customRef((track, trigger) => {
    return {
      // get何时调用？—— msg被读取时
      get: () => {
        track() //告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
        return initValue
      },
      // set何时调用？—— msg被赋值时
      set: (value: string) => {
        // 清除之前的定时器
        if (timer) {
          clearTimeout(timer)
        }
        // 设置新的定时器，延迟执行赋值操作
        timer = setTimeout(() => {
          initValue = value
          trigger() //告诉Vue数据msg变化了，你要去更新
        }, delay)
      },
    }
  })
  return { msg }
}

import { ref, onMounted } from 'vue'

export default function () {
  let sum = ref(0)

  const increment = () => {
    sum.value += 1
  }
  const decrement = () => {
    sum.value -= 1
  }
  //   组件挂载完成后调用
  onMounted(() => {
    increment()
  })

  //向外部暴露数据
  return { sum, increment, decrement }
}

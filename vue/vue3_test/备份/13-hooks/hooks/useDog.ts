import { reactive, onMounted } from 'vue'
import axios, { AxiosError } from 'axios'

export default function () {
  // 数据与加载状态合并为一个响应式对象
  let dogList = reactive<{ list: string[]; isLoading: boolean }>({
    list: [],
    isLoading: false,
  })

  // 方法
  // 获取狗狗图片的异步函数
  async function getDog() {
    try {
      // 请求开始，显示加载中
      dogList.isLoading = true
      // 发请求：调用 dog.ceo 接口获取柯基犬(pembroke)的随机图片
      let { data } = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // 维护数据：将接口返回的图片地址添加到响应式列表中
      dogList.list.push(data.message)
    } catch (error) {
      // 处理错误：将捕获的错误断言为 AxiosError 类型，方便获取错误信息
      const err = <AxiosError>error
      // 打印错误消息到控制台
      console.log(err.message)
    } finally {
      // 请求结束（无论成功或失败），隐藏加载中
      dogList.isLoading = false
    }
  }

  // 挂载钩子
  onMounted(() => {
    getDog()
    getDog()
  })

  //向外部暴露数据
  return { dogList, getDog }
}

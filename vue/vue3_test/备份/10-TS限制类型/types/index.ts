// 定义组件的属性类型
export interface PersonProps {
  name: string
  age: number
}

export interface Props {
  name?: string
  age?: number
  sex?: '男' | '女' | '未知' | '其他'
  list?: PersonProps[]
}

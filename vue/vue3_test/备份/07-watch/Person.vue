<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ user.name }}</h2>
    <h2>年龄：{{ user.age }}</h2>
    <button @click="changeUserName">修改名字</button>
    <button @click="changeUserAge">修改年龄</button>
    <button @click="changeUser">修改整个人</button>
    <hr />
    <h2>测试：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
  <div class="person">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ user.name }}</h2>
    <h2>年龄：{{ user.age }}</h2>
    <h2>汽车：{{ user.car.c1 }}、{{ user.car.c2 }}</h2>
    <button @click="changeUserName">修改名字</button>
    <button @click="changeUserAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
  <div class="person">
    <h1>情况五：监视上述的多个数据</h1>
    <h2>姓名：{{ user.name }}</h2>
    <h2>年龄：{{ user.age }}</h2>
    <h2>汽车：{{ user.car.c1 }}、{{ user.car.c2 }}</h2>
    <button @click="changeUserName">修改名字</button>
    <button @click="changeUserAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script setup lang="ts">
// 使用reactive定义响应式数据
import { ref, watch, reactive } from 'vue' //引入watch
let sum = ref(0)
let person = ref({
  name: '张三',
  age: 18,
})

let obj = reactive({
  a: {
    b: {
      c: 'hello vue3',
    },
  },
})

let user = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马',
  },
})

function changeSum() {
  sum.value++
}
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {
    name: '王五',
    age: 22,
  }
}
function changeUserName() {
  user.name += '~'
}
function changeUserAge() {
  user.age += 1
}
function changeUser() {
  Object.assign(user, { name: '王五', age: 36 }) //本质上替换了原person的每个属性值
}
function test() {
  obj.a.b.c += '~'
}
function changeC1() {
  user.car.c1 += '~'
}
function changeC2() {
  user.car.c2 += '~'
}
function changeCar() {
  user.car = {
    c1: '奔驰',
    c2: '宝马',
  }
}

// 监视，情况一：监视【ref】定义的【基本类型】数据

const stopWatch = watch(sum, (newVal, oldVal) => {
  console.log('sum变化了', newVal, oldVal)
  console.log('sum变化了', stopWatch)
  // 可以在watch中修改响应式数据，但是不建议
  if (newVal >= 10) {
    //watch 有返回值，返回值是一个函数，调用这个函数，可以手动停止监听函数
    stopWatch()
  }
})

/*
    监视，情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....）

  */

watch(
  person,
  (newVal, oldVal) => {
    console.log('person变化了', newVal, oldVal)
    // 修改属性值，且设置deep为true，才能监视到属性值的变化,但修改对象的地址值，不能监视到对象地址值的变化。
    // 但新旧对象的信息是一直的，因为对象是引用类型，修改对象的属性值，会改变对象的信息，而不是改变对象的地址值
  },
  { deep: true, immediate: true },
)

// 监视，情况三：监视【reactive】定义的【对象类型】数据
watch(user, (newVal, oldVal) => {
  console.log('user变化了', newVal, oldVal)
})

watch(obj, (newValue, oldValue) => {
  console.log('Obj变化了', newValue, oldValue)
})

// 监视，情况四：监视响应式对象中的某个属性，且该属性是【对象类型】的，可以直接写，也能写函数，更推荐写函数
//直接写： 监视对象的属性变化
watch(user.car, (newValue, oldValue) => {
  console.log('直接写user.car变化了---', newValue, oldValue)
})
//写函数,监视对象的属性变化和对象的地址值变化：
watch(
  () => user.car,
  (newValue, oldValue) => {
    console.log('函数式user.car deep为true，变化了', newValue, oldValue)
  },
  { deep: true },
)
//写函数（开启深度监视）,监视一个非对象类型的属性，需要是函数类型：
watch(
  () => user.name,
  (newValue, oldValue) => {
    console.log('user.name 变化了', newValue, oldValue)
  },
)

// 监视，情况五：监视上述的多个数据
watch(
  [() => user.name, user.car],
  (newValue, oldValue) => {
    console.log('person.car变化了', newValue, oldValue)
  },
  { deep: true },
)
</script>

<style scoped>
.person {
  margin: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>

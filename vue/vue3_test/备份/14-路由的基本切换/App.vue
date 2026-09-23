<template>
  <div class="app">
    <h2 class="title">Vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- 导航链接组件 RouterLink  active-class="active" 用于设置当前路由的样式类 -->
      <RouterLink to="/" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!-- 展示区 -->
    <div class="main-content">
      <!-- 路由出口组件 RouterView 用于渲染当前路由的组件 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.app {
  margin: 20px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  font-family: '微软雅黑', sans-serif;
}
.navigate {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}
/* 导航链接样式类 RouterLink 标签会被渲染为 a 标签 */
.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  /* 文字下划线 */
  text-decoration: none;
  color: white;
  font-size: 18px;
  /* 字间距 */
  letter-spacing: 5px;
}
.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}
.active {
  background-color: #64967e;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}
</style>

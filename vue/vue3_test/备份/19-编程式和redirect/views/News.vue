<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <RouterLink
          :to="{
            name: 'detail',
            query: { id: news.id, title: news.title },
          }"
        >
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <div class="main-content">
      <!-- 路由出口组件 RouterView 用于渲染当前路由的组件 -->
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

// 函数式组件 中使用 useRouter 函数
let router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push({
      name: 'detail',
      query: { id: 1, title: '新闻1' },
    })
  }, 1000)
})
let newsList = ref([
  {
    id: 1,
    title: '新闻1',
    content: '这是新闻1的内容',
  },
  {
    id: 2,
    title: '新闻2',
    content: '这是新闻2的内容',
  },
  {
    id: 3,
    title: '新闻3',
    content: '这是新闻3的内容',
  },
  {
    id: 4,
    title: '新闻4',
    content: '这是新闻4的内容',
  },
])
</script>
<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
/* 新闻列表 取消列表样式 */
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
/* 新闻列表 链接样式 */
.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
news-content {
  width: 70%;
  height: 90%;
  border: 3px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>

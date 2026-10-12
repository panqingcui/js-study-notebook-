<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="container">
      <Category>
        <template v-slot:title>
          <h2>热门游戏列表</h2>
        </template>
        <template v-slot:content>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
      </Category>
      <Category>
        <template v-slot:title>
          <h2>今日美食城市</h2>
        </template>
        <template v-slot:content>
          <img :src="imgUrl" alt="" />
        </template>
      </Category>
      <Category>
        <template v-slot:title>
          <h2>今日影视推荐</h2>
        </template>
        <template v-slot:content>
          <video :src="videoUrl" controls></video>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from './Category.vue'
import { reactive, ref } from 'vue'
let games = reactive([
  { id: 'asgytdfats01', name: '英雄联盟' },
  { id: 'asgytdfats02', name: '王者农药' },
  { id: 'asgytdfats03', name: '红色警戒' },
  { id: 'asgytdfats04', name: '斗罗大陆' },
])

let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.container {
  display: flex;
  /* ✅ 空间不足时，自动换行（往下折行） */
  flex-wrap: wrap;
  /* 两端对齐，中间有间距 */
  justify-content: space-between;
}

img,
video {
  width: 100%;
}
h2 {
  background-color: orange;
  text-align: center;
  font-size: 20px;
  font-weight: 800;
}
</style>

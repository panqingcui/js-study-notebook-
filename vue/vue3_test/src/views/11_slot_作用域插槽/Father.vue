<template>
  <div class="father">
    <h2>作用域插槽</h2>
    <div class="content">
      <Game>
        <template v-slot:content="params">
          <ul>
            <li v-for="item in params.youxi" :key="item.id">
              {{ item.name }} {{ params.x }} {{ params.y }}
            </li>
          </ul>
        </template>
      </Game>
      <Game>
        <template #content="{ youxi, x, y }">
          <ol>
            <li v-for="item in youxi" :key="item.id">{{ item.name }} {{ x }} {{ y }}</li>
          </ol>
        </template>
      </Game>
      <!-- 解构的一种方式 等价于 v-slot:name="params" -->
      <Game>
        <template #content="{ youxi, x, y }">
          <h4 v-for="item in youxi" :key="item.id">{{ item.name }} {{ x }} {{ y }}</h4>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts">
import Game from './Game.vue'
</script>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}

img,
video {
  width: 100%;
}
</style>

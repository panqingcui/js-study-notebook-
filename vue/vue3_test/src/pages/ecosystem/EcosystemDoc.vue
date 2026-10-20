<template>
  <div class="doc-page">
    <header class="page-header">
      <h1>{{ title }}</h1>
      <p class="desc">Element Plus 周边生态与社区资源</p>
    </header>

    <section>
      <h2>生态工具</h2>
      <el-row :gutter="16">
        <el-col :span="8" v-for="item in ecosystem" :key="item.name">
          <el-card shadow="hover" class="eco-card">
            <div class="eco-icon" :style="{ background: item.color }">
              {{ item.icon }}
            </div>
            <div class="eco-info">
              <h3>{{ item.name }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section>
      <h2>社区资源</h2>
      <el-card>
        <ul class="resource-list">
          <li v-for="item in resources" :key="item.name">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span class="resource-desc">{{ item.desc }}</span>
          </li>
        </ul>
      </el-card>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()

const ecosystem = [
  {
    name: 'Element Plus Admin',
    desc: '基于 Element Plus 的后台管理模板',
    icon: 'A',
    color: '#409eff',
  },
  { name: 'Element Plus Vue', desc: 'Vue 3 组件库', icon: 'V', color: '#67c23a' },
  { name: 'Element Plus Icons', desc: '官方图标库', icon: 'I', color: '#e6a23c' },
]

const resources = [
  { name: 'GitHub', url: 'https://github.com/element-plus/element-plus', desc: '开源仓库' },
  { name: 'Discord', url: 'https://discord.gg/element-plus', desc: '社区交流' },
  { name: 'Awesome Elements', url: '#', desc: '精选资源合集' },
]
</script>

<style scoped>
.doc-page {
  max-width: 960px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.8;
}

.page-header {
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #ebeef5;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 12px;
  color: #303133;
}

.desc {
  font-size: 14px;
  color: #606266;
  margin: 0;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  color: #303133;
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.eco-card {
  text-align: center;
  margin-bottom: 16px;
}

.eco-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  margin: 0 auto 12px;
}

.eco-info h3 {
  margin: 0 0 6px;
  font-size: 15px;
  color: #303133;
}

.eco-info p {
  margin: 0;
  font-size: 12px;
  color: #909399;
}

.resource-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.resource-list li {
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 12px;
}

.resource-list li:last-child {
  border-bottom: none;
}

.resource-list a {
  color: #409eff;
  text-decoration: none;
  font-weight: 500;
}

.resource-list a:hover {
  text-decoration: underline;
}

.resource-desc {
  font-size: 12px;
  color: #909399;
}
</style>

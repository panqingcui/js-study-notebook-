<template>
  <div class="demo-calendar">
    <h3>基础日历</h3>
    <el-calendar v-model="value1" />

    <h3>自定义周起始日 + 事件标记</h3>
    <el-calendar v-model="value2" :first-day-of-week="1">
      <template #cell="{ data }">
        <div class="cell-wrap">
          <span>{{ data.day.split('-').slice(2).join('-') }}</span>
          <div v-if="hasEvent(data.day)" class="event-dot"></div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(new Date())
const value2 = ref(new Date())

const eventDays = ['2025-10-12', '2025-10-15', '2025-10-20', '2025-10-25']
function hasEvent(day: string) {
  return eventDays.includes(day)
}
</script>

<style scoped>
.demo-calendar {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.demo-calendar h3 {
  font-size: 13px;
  color: #909399;
  font-weight: normal;
  margin: 0;
}
.cell-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.event-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f56c6c;
  align-self: flex-end;
}
</style>

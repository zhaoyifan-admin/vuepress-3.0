<template>
  <tvue-text-ellipsis :key="text"
                      :text="text"
                      :height="40"
                      :width="200"
                      use-tooltip
                      placement="top">
    <template #more>
      <small>...</small>
    </template>
  </tvue-text-ellipsis>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const text = ref("《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。")

function show () {
  ElMessage.success('show');
}
function hide () {
  ElMessage.success('hide')
}
</script>


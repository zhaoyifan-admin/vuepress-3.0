<template>
  <tvue-text-ellipsis :text="text"
                      :height="100"
                      :width="200">
    <template #more>
      <small>...</small>
    </template>
    <template #before>
      <el-tag>new</el-tag>
    </template>
    <template #after>
      <small>[09/14]</small>
    </template>
  </tvue-text-ellipsis>
</template>
<script setup>
import { ref } from 'vue'
const text = ref("《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动，这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。")

</script>
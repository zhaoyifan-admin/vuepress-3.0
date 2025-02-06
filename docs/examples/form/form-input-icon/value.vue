<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '图标',
      prop: 'icon',
      type: 'icon',
      value: 'el-icon-user',
      iconList: [{
        label: '符号图标',
        list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
      }]
    }
  ]
})
</script>
<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '内容1',
      prop: 'text1',
      labelTip: '我是一个标题提示语'
    },
    {
      label: '内容2',
      prop: 'text2',
      labelTip: '我是一个标题提示语',
      labelTipPlacement: 'right'
    }
  ]
})
</script>

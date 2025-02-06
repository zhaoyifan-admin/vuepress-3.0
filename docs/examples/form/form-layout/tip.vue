<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [{
    label: '内容1',
    prop: 'text1',
    tip: '我是一个默认提示语',
  }, {
    label: '内容2',
    prop: 'text2',
    tip: '我是一个左边提示语',
    tipPlacement: 'left',
  }]
})
</script>

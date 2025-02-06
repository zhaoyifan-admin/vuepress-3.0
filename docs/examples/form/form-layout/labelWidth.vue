<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      labelWidth: 200,
      label: '我是一个超级长的标题',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
})
</script>

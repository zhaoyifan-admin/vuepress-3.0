<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      span: 8
    },
    {
      label: '性别',
      prop: 'sex',
      offset: 8,
      span: 8
    },
    {
      label: '年龄',
      prop: 'number',
      type: 'number',
      offset: 8,
      span: 8
    }
  ]
})
</script>

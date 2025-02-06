<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  gutter: 100,
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '性别',
      prop: 'sex',
    }
  ]
})
</script>

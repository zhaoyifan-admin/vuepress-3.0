<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex',
      order: 1
    }
  ]
})
</script>

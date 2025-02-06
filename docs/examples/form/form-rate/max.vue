<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '评价',
      prop: 'rate',
      type: 'rate',
      max: 40
    }
  ]
})
</script>

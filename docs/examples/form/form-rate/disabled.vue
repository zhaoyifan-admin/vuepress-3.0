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
      value: 3.7,
      disabled: true,
      showScore: true,
      scoreTemplate: "{value}"
    }
  ]
})
</script>

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
    },
    {
      label: '评价',
      prop: 'rate',
      type: 'rate',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  ]
})
</script>

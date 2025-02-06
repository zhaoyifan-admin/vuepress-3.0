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
      showText: true,
      texts: ['极差', '失望', '一般', '满意', '惊喜']
    }
  ]
})
</script>

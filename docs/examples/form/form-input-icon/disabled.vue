<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '图标',
      prop: 'icon',
      type: 'icon',
      disabled: true
    }
  ]
})
</script>
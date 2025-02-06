<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '标签',
      prop: 'tag',
      type: 'tag',
      size: 'large',
    },
    {
      label: '标签',
      prop: 'tag1',
      type: 'tag',
      size: 'small'
    }
  ]
})

</script>
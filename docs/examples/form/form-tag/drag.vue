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
      value: [1, 2, 3],
      drag: true
    }
  ]
});
</script>

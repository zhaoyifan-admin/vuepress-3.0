<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '数组框',
      prop: 'array',
      type: 'array',
      limit: 3,
      value: [0, 1, 2]
    }
  ]
});
</script>

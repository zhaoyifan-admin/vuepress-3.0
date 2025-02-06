<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '表格选择器',
      prop: 'table',
      type: 'table',
      disabled: true
    }
  ]
});
</script>

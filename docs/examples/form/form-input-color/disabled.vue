<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '颜色选择器',
      prop: 'color',
      type: 'color',
      disabled: true
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '数字输入框',
      prop: 'input',
      type: 'number',
      size: 'large'
    },
    {
      label: '数字输入框',
      prop: 'input1',
      type: 'number',
      size: 'small'
    }
  ]
});
</script>

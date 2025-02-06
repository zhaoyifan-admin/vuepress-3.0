<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '数字输入框',
      prop: 'num',
      controlsPosition: '',
      type: 'number'
    }
  ]
});
</script>

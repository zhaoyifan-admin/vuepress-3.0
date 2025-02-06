<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '图片框',
      prop: 'array',
      type: 'img',
      value: ['/images/logo.png']
    },
    {
      label: '单个图片框',
      prop: 'array',
      alone: true,
      type: 'img',
      value: ['/images/logo.png']
    }
  ]
});
</script>

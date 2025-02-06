<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '超链接框',
      prop: 'array',
      type: 'url',
      value: ['http://avuejs.com']
    },
    {
      label: '单个超链接框',
      prop: 'array',
      alone: true,
      type: 'url',
      value: ['http://avuejs.com']
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  menuSpan: 6,
  column: [
    {
      label: '姓名',
      prop: 'name',
      span: 6
    },
    {
      label: '年龄',
      prop: 'sex',
      span: 6
    }
  ]
});
</script>

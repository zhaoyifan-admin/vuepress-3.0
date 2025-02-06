<template>
  <tvue-crud :option="option"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { text1: '内容1-1', text2: '内容1-2' },
  { text1: '内容2-1', text2: '内容2-2' }
]);

const option = ref({
  menu: false,
  printBtn: true,
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' }
  ]
});
</script>

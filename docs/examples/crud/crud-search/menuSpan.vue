<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { text1: '文本1', text2: '文本2' }
]);

const option = ref({
  searchMenuSpan: 8,
  column: [
    {
      label: '内容1',
      prop: 'text1',
      search: true
    },
    {
      label: '内容2',
      prop: 'text2',
      search: true
    }
  ]
});
</script>

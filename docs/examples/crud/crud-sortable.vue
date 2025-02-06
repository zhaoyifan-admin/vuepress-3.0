<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { text1: '内容1-1', text2: '内容1-2' },
  { text1: '内容2-1', text2: '内容2-2' },
  { text1: '内容3-1', text2: '内容3-2' }
]);

const option = ref({
  sortable: true,
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' }
  ]
});
</script>

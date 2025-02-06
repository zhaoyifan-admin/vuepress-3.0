<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    text1: '内容1-1',
    text2: '内容1-2',
    deep: {
      text3: '内容1-3',
    },
  },
  {
    text1: '内容2-1',
    text2: '内容2-2',
    deep: {
      text3: '内容2-3',
    },
  },
]);

const option = ref({
  excelBtn: true,
  column: [
    {
      label: '列内容1',
      prop: 'text1',
    },
    {
      label: '列内容2',
      prop: 'text2',
    },
    {
      label: '列内容3',
      prop: 'text3',
      bind: 'deep.text3',
    },
  ],
});
</script>

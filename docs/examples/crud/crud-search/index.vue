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
  searchIndex: 3,
  searchIcon: true,
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
    },
    {
      label: '内容3',
      prop: 'text3',
      search: true
    },
    {
      label: '内容4',
      prop: 'text4',
      search: true
    }
  ]
});
</script>

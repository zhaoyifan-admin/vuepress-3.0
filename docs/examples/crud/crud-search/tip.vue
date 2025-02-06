<template>
  <tvue-crud :option="option"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { text1: '文本1', text2: '文本2' }
]);

const option = ref({
  column: [
    {
      label: '内容1',
      prop: 'text1',
      search: true,
      searchTip: '我是一个默认提示语',
    },
    {
      label: '内容2',
      prop: 'text2',
      search: true,
      searchTip: '我是一个左边提示语',
      searchTipPlacement: 'left',
    }
  ]
});
</script>

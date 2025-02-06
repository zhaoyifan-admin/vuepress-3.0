<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

// 定义响应式数据
const data = ref([
  {
    text1: '内容1-1',
    text2: '内容1-2',
    text3: '内容1-3',
    text4: '内容1-4'
  },
  {
    text1: '内容2-1',
    text2: '内容2-2',
    text3: '内容2-3',
    text4: '内容2-4'
  }
]);

const option = ref({
  align: 'center',
  headerAlign: 'center',
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
      hide: true
    },
    {
      label: '列内容4',
      prop: 'text4',
      showColumn: false,
    }
  ]
});
</script>

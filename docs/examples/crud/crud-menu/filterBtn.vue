<template>
  <tvue-crud :option="option"
             :data="data"
             @filter="filterChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { text1: '内容1-1', text2: '内容1-2' },
  { text1: '内容2-1', text2: '内容2-2' }
]);

const option = ref({
  filterBtn: true,
  align: 'center',
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' }
  ]
});

const filterChange = (result) => {
  ElMessage.success('过滤器' + JSON.stringify(result));
};
</script>

<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { sum: 5, avg: 10, count: 2 },
  { sum: 15, avg: 20, count: 1 }
]);

const option = ref({
  index: true,
  showSummary: true,
  sumColumnList: [
    { label: '自定义前缀:', name: 'sum', type: 'sum', decimals: 1 },
    { name: 'avg', type: 'avg' },
    { name: 'count', type: 'count' }
  ],
  column: [
    { label: '相加', prop: 'sum' },
    { label: '平均值', prop: 'avg' },
    { label: '统计', prop: 'count' }
  ]
});
</script>

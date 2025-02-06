<template>
  <tvue-crud :option="option"
             :data="data"
             :summary-method="summaryMethod"
             @selection-change="selectionChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const selectList = ref([]);
const data = ref([
  { sum: 5, avg: 10, count: 2 },
  { sum: 15, avg: 20, count: 1 }
]);

const option = ref({
  selection: true,
  index: true,
  showSummary: true,
  column: [
    { label: '相加', prop: 'sum' },
    { label: '平均值', prop: 'avg' },
    { label: '统计', prop: 'count' }
  ]
});

const selectionChange = (list) => {
  selectList.value = list;
};

const summaryMethod = ({ columns }) => {
  const sums = [];
  if (columns.length > 0) {
    columns.forEach((column, index) => {
      let prop = column.property;
      if (['sum', 'avg', 'count'].includes(prop)) {
        let values = selectList.value.map(item => Number(item[prop] || 0));
        let all = values.length !== 0 ? values.reduce((a, b) => a + b) : 0;
        if (prop === 'sum') {
          sums[index] = all;
        } else if (prop === 'avg') {
          sums[index] = values.length ? all / values.length : 0;
        } else if (prop === 'count') {
          sums[index] = values.length;
        }
      } else {
        sums[index] = '-';
      }
    });
  }
  return sums;
};
</script>

<template>
  <tvue-crud :data="data"
             :option="option"
             :header-row-style="headerRowStyle"
             :header-cell-style="headerCellStyle"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', money: 3000 },
  { name: '李四', sex: false, money: 4000 },
  { name: '王五', sex: false, money: 2000 }
]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '工资', prop: 'money' }
  ]
});

const headerRowStyle = ({ rowIndex }) => {
  console.log({ rowIndex });
};

const headerCellStyle = ({ column, columnIndex, row, rowIndex }) => {
  return columnIndex === 0
    ? { color: 'green', fontWeight: 'bold', fontSize: '20px' }
    : { color: 'red', fontWeight: 'bold', fontSize: '20px' };
};
</script>

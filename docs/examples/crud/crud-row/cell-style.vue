<template>
  <tvue-crud :data="data"
             :option="option"
             :cell-style="cellStyle"
             :row-style="rowStyle"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { id: 1, name: '张三', money: 3000 },
  { id: 2, name: '李四', sex: false, money: 4000 },
  { id: 3, name: '王五', sex: false, money: 2000 }
]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '工资', prop: 'money' }
  ]
});

function rowStyle ({ row, column, rowIndex }) {
  if (rowIndex % 2 === 0) {
    return { backgroundColor: '#eee', color: '#fff' };
  }
  return {};
}

function cellStyle ({ row, column, rowIndex, columnIndex }) {
  if (columnIndex === 1) {
    if (row.money <= 3000) {
      return {
        color: 'green',
        fontWeight: 'bold',
        fontSize: '20px'
      };
    } else {
      return {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px'
      };
    }
  }
  return {};
}
</script>

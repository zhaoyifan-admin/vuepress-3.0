<template>
  <tvue-crud :data="data"
             :option="option"
             :header-cell-class-name="headerCellClassName"
             :header-row-class-name="headerRowClassName"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const headerRowClassName = ({ rowIndex }) => {
  console.log({ rowIndex });
};

const headerCellClassName = ({ column, columnIndex }) => {
  if (columnIndex === 0) {
    return 'warning-row';
  } else if (columnIndex === 1) {
    return 'success-row';
  }
};
</script>

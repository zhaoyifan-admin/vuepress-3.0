<template>
  <tvue-crud :data="data"
             :option="option"
             :row-class-name="tableRowClassName"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    name: '张三',
    sex: '男'
  },
  {
    name: '李四',
    sex: '女'
  }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 0) {
    return 'warning-row';
  } else if (rowIndex === 1) {
    return 'success-row';
  }
  return '';
};
</script>

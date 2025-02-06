<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
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
      prop: 'name',
      formatter: (row, value, label, column) => {
        return row.name + '自定义';
      }
    },
    {
      label: '性别',
      prop: 'sex',
      filters: true,
      dicData: [
        { label: '男', value: '男' },
        { label: '女', value: '女' }
      ],
      filterMethod: (value, row, column) => {
        return row.sex === value;
      }
    }
  ]
});
</script>

<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  searchLabelWidth: 150,
  column: [
    {
      label: '姓名',
      prop: 'name',
      searchLabelWidth: 30,
      search: true
    },
    {
      label: '性别',
      prop: 'sex',
      search: true
    }
  ]
});
</script>

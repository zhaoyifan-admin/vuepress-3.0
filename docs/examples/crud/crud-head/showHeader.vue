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
  showHeader: false,
  column: [
    { label: '姓名', prop: 'name', width: 200, fixed: true },
    { label: '性别', prop: 'sex', width: 300 },
    { label: '日期', prop: 'datetime', width: 300 },
    { label: '地址', prop: 'address', width: 300 }
  ]
});
</script>

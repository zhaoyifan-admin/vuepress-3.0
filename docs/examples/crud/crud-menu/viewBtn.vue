<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', age: 12, address: '码云的地址' },
  { name: '李四', age: 13, address: '码云的地址' }
]);

const option = ref({
  viewBtn: true,
  editBtn: false,
  delBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'age' },
    {
      label: '地址',
      span: 24,
      prop: 'address',
      type: 'textarea'
    }
  ]
});
</script>

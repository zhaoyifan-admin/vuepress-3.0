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
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
    },
    {
      label: '性别',
      prop: 'sex',
      rules: [{ required: true, message: '请输入性别', trigger: 'blur' }]
    }
  ]
});
</script>

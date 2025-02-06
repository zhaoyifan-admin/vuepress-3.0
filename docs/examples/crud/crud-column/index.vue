<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

// 定义响应式数据
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
  index: true,
  indexLabel: '序号',
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
</script>

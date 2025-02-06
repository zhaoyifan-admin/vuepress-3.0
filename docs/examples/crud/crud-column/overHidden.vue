<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

// 定义响应式数据
const data = ref([
  {
    name: '张三的名字是一个很长很长的内容',
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
      overHidden: true,
      width: 80,
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

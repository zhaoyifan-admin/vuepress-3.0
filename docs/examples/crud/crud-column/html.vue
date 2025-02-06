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
  column: [
    {
      label: '姓名',
      prop: 'name',
      html: true,
      formatter: (val) => {
        return `<b style="color:red">${val.name}格式化内容</b>`;
      }
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

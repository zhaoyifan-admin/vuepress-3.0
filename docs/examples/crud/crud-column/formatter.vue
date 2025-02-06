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
    sex: '男',
    select: '110000'
  },
  {
    name: '李四',
    sex: '女',
    select: '120000'
  }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      formatter: (val, value, label) => {
        return val.name + '格式化内容';
      }
    },
    {
      label: '性别',
      prop: 'sex'
    },
    {
      label: '字典',
      prop: 'select',
      type: 'select',
      formatter: (val, value, label) => {
        return `${label}(${value})`;
      },
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
    }
  ]
});
</script>

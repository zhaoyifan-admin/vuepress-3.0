<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男', age: 18, province: '110000' },
  { name: '李四', sex: '女', age: 18, province: '130000' }
]);

const baseUrl = 'https://cli.avuejs.com/api/area';

const option = ref({
  grid: true,
  gridSpan: 12,
  gridBackgroundImage: '/images/grid.png',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex', gridRow: true },
    { label: '年龄', prop: 'age' },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`
    }
  ]
});
</script>

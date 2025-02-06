<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const data = ref([
  { name: '张三', sex: '男', age: 18, province: '110000' },
  { name: '李四', sex: '女', age: 18, province: '130000' }
]);

const option = ref({
  grid: true,
  gridSpan: 12,
  gridBackground: (row, index) => {
    if (index === 1) {
      return 'linear-gradient(to right, rgba(255,255,255,255.2), rgba(255,0,0,0.2))';
    } else {
      return 'linear-gradient(to right, rgba(255,255,255,255.2), rgba(0,255,0,0.2))';
    }
  },
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex', gridRow: true },
    { label: '年龄', prop: 'age' }
  ]
});
</script>

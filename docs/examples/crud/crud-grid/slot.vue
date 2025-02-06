<template>
  <tvue-crud :option="option"
             :data="data">
    <template #img="{ row }">
      <img :src="row.img"
           alt="" />
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    name: '张三',
    sex: '男',
    img: 'https://avuejs.com/images/logo.png',
    age: 18
  },
  {
    name: '李四',
    sex: '女',
    img: 'https://avuejs.com/images/logo.png',
    age: 18
  }
]);

const option = ref({
  grid: true,
  gridSpan: 12,
  gridBackgroundImage: '/images/grid.png',
  column: [
    {
      label: '姓名',
      prop: 'name',
      gridRow: true
    },
    {
      label: '性别',
      prop: 'sex',
      gridRow: true
    },
    {
      label: '年龄',
      prop: 'age',
      gridRow: true
    },
    {
      label: '',
      className: 'imgbox',
      prop: 'img'
    }
  ]
});
</script>

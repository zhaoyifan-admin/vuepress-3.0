<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    id: 1,
    name: '张三',
    sex: '男'
  },
  {
    id: 2,
    name: '李四',
    sex: '女'
  }
]);

const option = ref({
  index: true,
  indexFixed: false,
  indexWidth: 100,
  selection: true,
  selectionWidth: 100,
  selectionFixed: false,
  expand: true,
  expandWidth: 100,
  expandFixed: false,
  column: [
    {
      label: '姓名',
      fixed: true,
      prop: 'name'
    },
    {
      width: 500,
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

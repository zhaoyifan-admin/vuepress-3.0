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
  indexClassName: 'indexClassName',
  indexLabelClassName: 'indexLabelClassName',
  selection: true,
  selectionClassName: 'selectionClassName',
  selectionLabelClassName: 'selectionLabelClassName',
  expand: true,
  expandClassName: 'expandClassName',
  expandLabelClassName: 'expandLabelClassName',
  column: [
    {
      label: '姓名',
      prop: 'name',
      className: 'className',
      labelClassName: 'labelClassName'
    },
    {
      width: 500,
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

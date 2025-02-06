<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  emptyText: '自定义暂无数据提示语',
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '年龄',
      prop: 'sex',
    },
  ],
});

const data = ref([]);
</script>

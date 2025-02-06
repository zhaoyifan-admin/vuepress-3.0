<template>
  <tvue-crud :option="option"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([{ name: '张三', date: '' }]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
    },
    {
      label: '日期',
      prop: 'date',
      type: 'datetime',
      search: true,
      searchSpan: 18,
      searchRange: true,
    }
  ]
});
</script>

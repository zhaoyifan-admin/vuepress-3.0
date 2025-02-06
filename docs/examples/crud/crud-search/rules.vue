<template>
  <tvue-crud :option="option"
             :data="data">
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([{ name: '张三' }]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
      searchRules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur"
        }
      ]
    },
    {
      label: '日期',
      prop: 'date',
      type: 'datetime'
    }
  ]
});
</script>

<template>
  <tvue-crud :option="option"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([{ name: '张三' }]);

const option = ref({
  searchBtnText: '查询',
  searchBtnIcon: 'el-icon-user',
  emptyBtnText: '重置',
  emptyBtnIcon: 'el-icon-close',
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
    }
  ]
});
</script>

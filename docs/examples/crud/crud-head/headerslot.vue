<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data">
    <template #name-header="{ column }">
      <el-tag>{{ (column || {}).label }}-{{ (column || {}).prop }}</el-tag>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' }
  ]
});

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);
</script>

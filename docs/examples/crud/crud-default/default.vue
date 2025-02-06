<template>
  <tvue-crud :option="option"
             v-model:page="page"
             :data="data">
    <template #header>
      <el-tag>头部卡槽</el-tag>
    </template>
    <template #body>
      <el-tag>中部卡槽</el-tag>
    </template>
    <template #footer>
      <el-tag>尾部卡槽</el-tag>
    </template>
    <template #page>
      <el-tag>分页卡槽</el-tag>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
const page = ref({
  total: 40
});

const data = ref([{
  name: '张三',
  age: 18,
}]);

const option = ref({
  column: [{
    label: '姓名',
    prop: 'name'
  }, {
    label: '年龄',
    prop: 'age'
  }]
});
</script>

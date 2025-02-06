<template>
  <tvue-crud :option="option"
             v-model:search="search"
             :data="data">
    <template #search-menu="{ row, size }">
      <el-button :size="size"
                 @click="searchSubmit(row)">自定义提交</el-button>
    </template>
    <template #search="{ size }">
      <el-tag>标题</el-tag>
      <el-input placeholder="自定义输入框"
                :size="size"
                style="width: 200px"
                v-model:value="search.slot"></el-input>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const search = ref({});
const data = ref([{ name: '张三' }]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '日期',
      prop: 'date',
      type: 'datetime'
    }
  ]
});

function searchSubmit (row) {
  console.log(row)
}
</script>

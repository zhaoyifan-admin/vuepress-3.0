<template>
  <p>
    页码:{{page.currentPage}}
    <el-button type="primary"
               @click="page.currentPage=page.currentPage+1">页码+1</el-button>
  </p>
  <p>
    条数:{{page.pageSize}}
    <el-button type="primary"
               @click="page.pageSize=page.pageSize+10">条数+10</el-button>
  </p>
  <p>
    总数:{{page.total}}
    <el-button type="primary"
               @click="page.total=page.total+10">总页数+10</el-button>
  </p>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>

</template>
<script setup>
import { ref } from 'vue';
const data = ref([])
const page = ref({
  total: 1000,
  currentPage: 1,
  pageSize: 10
})
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
})
</script>
<template>
  <el-button @click="setSimpleMode">简单模式</el-button>
  <el-button @click="setComplexMode">复杂模式</el-button>
  <br /><br />
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue'

const page = ref({
  total: 1000,
  layout: "total, sizes, prev, pager, next, jumper",
})

const data = ref([])
const option = {
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
}

const setSimpleMode = () => {
  page.value.layout = 'sizes,pager'
}

const setComplexMode = () => {
  page.value.layout = 'total, sizes, prev, pager, next, jumper'
}
</script>
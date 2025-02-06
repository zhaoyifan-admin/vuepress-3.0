<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    ids: 1,
    name: '张三',
    sex: '男'
  }, {
    ids: 2,
    name: '李四',
    sex: '女'
  }
])
const option = ref({
  rowKey: 'ids',
  column: [
    {
      label: '姓名',
      prop: 'name'
    }, {
      label: '性别',
      prop: 'sex'
    }
  ]
})
  </script>
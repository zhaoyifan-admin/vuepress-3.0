<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    id: 1,
    name: '张三',
    sex: '男'
  }, {
    id: 2,
    name: '李四',
    sex: '女'
  }
])
const option = ref({
  column: [
    {
      width: 200,
      label: '姓名',
      prop: 'name'
    }, {
      label: '性别',
      prop: 'sex'
    }
  ]
})
</script>
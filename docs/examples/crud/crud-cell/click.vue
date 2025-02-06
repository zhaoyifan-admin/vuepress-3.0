<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @row-click="handleRowClick">
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
])

const option = ref({
  menu: false,
  dialogType: 'drawer',
  dialogWidth: 800,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
})

const crud = ref(null)

const handleRowClick = (row, event, column) => {
  crud.value.rowEdit(row, row.$index)
}
</script>

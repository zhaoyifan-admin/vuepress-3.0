<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @row-dblclick="handleRowDBLClick">
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

const handleRowDBLClick = (row, event) => {
  crud.value.rowEdit(row, row.$index)
}
</script>

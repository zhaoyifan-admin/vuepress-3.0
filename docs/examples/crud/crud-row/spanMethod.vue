<template>
  <tvue-crud :data="data"
             :option="option"
             :span-method="spanMethod"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
const data = ref([
  {
    id: '12987122',
    name: '王小虎',
    amount1: '234',
    amount2: '3.2',
    amount3: 10
  },
  {
    id: '12987123',
    name: '王小虎',
    amount1: '165',
    amount2: '4.43',
    amount3: 12
  },
  {
    id: '12987124',
    name: '王小虎',
    amount1: '324',
    amount2: '1.9',
    amount3: 9
  },
  {
    id: '12987125',
    name: '王小虎',
    amount1: '621',
    amount2: '2.2',
    amount3: 17
  },
  {
    id: '12987126',
    name: '王小虎',
    amount1: '539',
    amount2: '4.1',
    amount3: 15
  }
])
const option = ref({
  border: true,
  menu: false,
  column: [
    {
      label: 'ID',
      prop: 'id'
    },
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '数值 1',
      prop: 'amount1'
    },
    {
      label: '数值 2',
      prop: 'amount2'
    },
    {
      label: '数值 3',
      prop: 'amount3'
    }
  ]
})
function spanMethod ({ row, column, rowIndex, columnIndex }) {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}
</script>
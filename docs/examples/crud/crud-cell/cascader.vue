<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data">
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue'

const baseUrl = 'https://cli.avuejs.com/api/area'

const data = ref([
  { id: 1, province: '130000', city: '130200', area: '130202', $cellEdit: true },
  { id: 2, province: '110000', city: '110100', area: '110101', $cellEdit: true }
])

const option = ref({
  addRowBtn: true,
  addBtn: false,
  cellBtn: true,
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: { label: 'name', value: 'code' },
      cell: true,
      cascader: ['city'],
      dicUrl: `${baseUrl}/getProvince`,
      rules: [{ required: true, message: '请选择省份', trigger: 'blur' }]
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      cell: true,
      cascader: ['area'],
      props: { label: 'name', value: 'code' },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [{ required: true, message: '请选择城市', trigger: 'blur' }]
    },
    {
      label: '地区',
      prop: 'area',
      cell: true,
      props: { label: 'name', value: 'code' },
      type: 'select',
      dicUrl: `${baseUrl}/getArea/{{key}}`,
      rules: [{ required: true, message: '请选择地区', trigger: 'blur' }]
    }
  ]
})

const crud = ref(null)

const addRow = () => {
  crud.value.rowCellAdd({
    id: 3,
    province: '110000',
    $cellEdit: true
  })
}
</script>

<template>
  <tvue-tree :permission="getPermission"
             :option="option"
             :data="data">
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    value: 0,
    label: '一级部门',
    children: [
      { value: 1, label: '一级部门1' },
      { value: 2, label: '一级部门2' }
    ]
  },
  {
    value: 3,
    label: '二级部门',
    children: [
      { value: 4, label: '二级部门1' },
      { value: 5, label: '二级部门2' }
    ]
  }
])

const option = ref({
  defaultExpandAll: true,
  formOption: {
    labelWidth: 100,
    column: [
      { label: '自定义项', prop: 'label' }
    ],
  }
})

function getPermission (key, data) {
  if (key === "addBtn" && data.value === 0) { return false }
  return true
}
</script>

<template>
  <tvue-tree :option="option"
             :data="data"
             v-model="form">
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({})
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
  title: '我是标题',
  filterText: "搜索关键字自定义",
  defaultExpandAll: true,
  addBtnText: '新增自定义文案',
  editBtnText: '修改自定义文案',
  delBtnText: '删除自定义文案',
  defaultExpandedKeys: [1],
  formOption: {
    labelWidth: 100,
    column: [
      { label: '自定义项', prop: 'label' }
    ],
  },
  props: {
    labelText: '标题',
    label: 'label',
    value: 'value',
    children: 'children'
  }
})
</script>

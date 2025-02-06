<template>
  <tvue-tree ref="tree"
             :option="option"
             :data="data"
             v-model="form"
             @check-change="checkChange">
  </tvue-tree>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const tree = ref(null)
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
  defaultExpandAll: true,
  multiple: true,
  formOption: {
    labelWidth: 100,
    column: [
      { label: '自定义项', prop: 'label' },
      { label: '测试', prop: 'test' }
    ],
  }
})

const checkChange = (data, checked, indeterminate) => {
  ElMessage.success(JSON.stringify(data))
}

onMounted(() => {
  tree.value.setCheckedKeys([0])
})
</script>

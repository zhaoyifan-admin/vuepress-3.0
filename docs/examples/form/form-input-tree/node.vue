<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const dicData = [
  {
    label: '字典1',
    value: 0,
    children: [
      {
        label: '字典3',
        value: 2
      }
    ]
  },
  {
    label: '字典2',
    value: 1
  }
];

const option = ref({
  column: [
    {
      label: '多选',
      prop: 'tree',
      type: 'tree',
      multiple: true,
      nodeClick: (data, node, nodeComp) => {
        ElMessage.success(JSON.stringify(data));
      },
      checked: (checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys) => {
        ElMessage.success(JSON.stringify(checkedKeys));
      },
      dicData: dicData
    }
  ]
});
</script>

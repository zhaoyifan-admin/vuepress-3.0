<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

// 创建响应式数据
const form = ref({
  name: 'smallwei',
  cascader: [0, 1],
  tree: 0
});

const option = ref({
  filterParams: ['name'],
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '级别',
      prop: 'cascader',
      type: 'cascader',
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            {
              label: '一级1',
              value: 1,
            },
            {
              label: '一级2',
              value: 2,
            }
          ]
        }
      ]
    },
    {
      label: '树型',
      prop: 'tree',
      type: 'tree',
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            {
              label: '一级1',
              value: 1,
            },
            {
              label: '一级2',
              value: 2,
            }
          ]
        }
      ]
    }
  ]
});
</script>

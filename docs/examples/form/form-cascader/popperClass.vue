<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const dicData = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          { value: 'yizhi', label: '一致' },
          { value: 'fankui', label: '反馈' }
        ]
      }
    ]
  }
];

const form = ref({});
const option = ref({
  column: [
    {
      label: '级联',
      prop: 'cascader',
      type: 'cascader',
      popperClass: 'popperClass',
      dicData: dicData
    }
  ]
});
</script>

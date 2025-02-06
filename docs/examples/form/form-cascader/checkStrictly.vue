<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const dic = [{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则',
    children: [{
      value: 'yizhi',
      label: '一致'
    }, {
      value: 'fankui',
      label: '反馈'
    }]
  }]
}];

const option = ref({
  column: [{
    label: '级联',
    prop: 'cascader',
    type: 'cascader',
    dicData: dic,
    checkStrictly: true
  }]
});
</script>

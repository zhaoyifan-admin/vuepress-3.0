<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: "普通滑块",
      prop: "slider",
      type: 'slider',
    },
    {
      label: "初始化值",
      prop: "slider",
      type: 'slider',
      value: 2
    },
    {
      label: "隐藏提示",
      prop: "slider",
      type: 'slider',
      showTooltip: false
    },
    {
      label: "格式化值",
      prop: "slider",
      type: 'slider',
      formatTooltip (val) {
        return '格式化的值' + val;
      }
    },
    {
      label: "禁用",
      prop: "slider",
      type: 'slider',
      disabled: true
    }
  ]
});
</script>

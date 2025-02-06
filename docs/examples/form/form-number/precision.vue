<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 创建响应式的数据
const option = ref({
  column: [
    {
      label: '数字输入框',
      prop: 'num',
      type: 'number',
      precision: 2
    }
  ]
});
</script>

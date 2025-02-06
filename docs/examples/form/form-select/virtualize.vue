<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '下拉框',
      prop: 'select',
      type: 'select',
      virtualize: true,
      dicData: Array.from({ length: 10000 }, (_, index) => ({
        label: '选项' + (index + 1),
        value: index + 1
      }))
    }
  ]
});
</script>

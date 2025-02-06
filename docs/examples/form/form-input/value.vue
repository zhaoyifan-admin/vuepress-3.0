<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '输入框',
      prop: 'input',
      value: '默认值'
    }
  ]
})
</script>
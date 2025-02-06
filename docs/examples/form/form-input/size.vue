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
      size: 'large',
    },
    {
      label: '输入框',
      prop: 'input1',
      size: 'small'
    }
  ]
})

</script>
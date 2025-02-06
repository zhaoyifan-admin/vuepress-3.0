<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '密码框',
      prop: 'input',
      type: 'password',
      showPassword: true
    }
  ]
})
</script>
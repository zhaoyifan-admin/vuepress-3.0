<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const form = ref({})
const option = ref({
  column: [
    {
      label: '单文本框',
      prop: 'input',
      maxlength: 10,
      showWordLimit: true
    }, {
      label: '多文本框',
      prop: 'textarea',
      type: 'textarea',
      minRows: 3,
      maxRows: 5,
      maxlength: 20,
      span: 24,
      showWordLimit: true
    }
  ]
})
</script>
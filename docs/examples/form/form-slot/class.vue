<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex',
      span: 24,
      className: 'formClassName'
    }
  ]
});
</script>

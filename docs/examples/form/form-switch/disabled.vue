<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '开关',
      prop: 'switch',
      type: 'switch',
      dicData: [{
        label: '关',
        value: 0
      }, {
        label: '开',
        value: 1
      }],
      disabled: true
    }
  ]
});
</script>

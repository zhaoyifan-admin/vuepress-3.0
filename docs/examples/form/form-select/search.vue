<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '创建',
      prop: 'select',
      type: 'select',
      allowCreate: true,
      filterable: true,
      dicData: [
        {
          label: '字典1',
          value: 0
        },
        {
          label: '字典2',
          value: 1
        }
      ]
    }
  ]
});
</script>

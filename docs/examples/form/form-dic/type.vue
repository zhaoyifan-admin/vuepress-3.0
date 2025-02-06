<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  data: 1
});

const option = ref({
  column: [
    {
      label: '字符串字典',
      prop: 'data',
      type: 'select',
      dataType: 'string',
      dicData: [
        {
          label: '一级',
          value: '1'
        }
      ]
    }
  ]
});
</script>

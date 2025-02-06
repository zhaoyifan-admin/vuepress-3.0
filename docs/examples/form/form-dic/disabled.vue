<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  grade: 1
});

const option = ref({
  column: [
    {
      label: '权限',
      prop: 'grade',
      type: 'select',
      dicData: [
        {
          label: '有权限',
          value: 1
        },
        {
          label: '无权限',
          value: 0
        },
        {
          label: '禁止项',
          disabled: true,
          value: -1
        }
      ]
    }
  ]
});
</script>

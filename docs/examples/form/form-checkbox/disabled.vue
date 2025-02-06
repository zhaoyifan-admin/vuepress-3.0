<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '多选框',
      prop: 'checkbox',
      type: 'checkbox',
      dicData: [
        {
          label: '男',
          value: 0
        },
        {
          label: '女',
          value: 1
        },
        {
          label: '未知',
          value: ''
        }
      ],
      disabled: true
    }
  ]
});
</script>

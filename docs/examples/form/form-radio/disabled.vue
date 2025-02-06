<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '单选框',
      prop: 'radio',
      type: 'radio',
      dicData: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
        { label: '未知', value: '' }
      ],
      disabled: true
    }
  ]
})
</script>

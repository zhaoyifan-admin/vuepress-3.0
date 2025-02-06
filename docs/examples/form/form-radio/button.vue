<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  radio: [0, 1]
})

const option = ref({
  column: [
    {
      label: '实心单选',
      prop: 'radio',
      type: 'radio',
      button: true,
      dicData: [
        { label: '男', value: 0 },
        { label: '女', value: 1 },
        { label: '未知', value: '' }
      ]
    }
  ]
})
</script>

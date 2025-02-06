<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const option = ref({
  column: [
    {
      label: '多选框',
      prop: 'radio',
      type: 'radio',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
    }
  ]
})
</script>

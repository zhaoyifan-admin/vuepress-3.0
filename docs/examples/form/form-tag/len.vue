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
      label: '标签',
      prop: 'tag',
      type: 'tag',
      maxlength: 10,
      showWordLimit: true
    }
  ]
})
</script>
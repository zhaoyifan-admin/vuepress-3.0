<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: "时间",
    prop: "time",
    type: "time",
    pickerOptions: {
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }
  }]
});
</script>

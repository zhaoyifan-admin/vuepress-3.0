<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      display: false
    }
  ]
});
</script>

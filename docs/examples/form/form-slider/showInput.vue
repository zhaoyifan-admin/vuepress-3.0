<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: "滑块",
      prop: "slider",
      type: 'slider',
      showInput: true
    }
  ]
});
</script>

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
      showStops: true,
      max: 10,
      range: true,
      value: [4, 8]
    }
  ]
});
</script>

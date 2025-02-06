<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '坐标',
      prop: 'map',
      type: 'map'
    }
  ]
});
</script>

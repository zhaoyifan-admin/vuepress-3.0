<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: "时间",
      prop: "time",
      type: "time",
      visibleChange: () => {
        console.log('=====')
      }
    }
  ]
});
</script>

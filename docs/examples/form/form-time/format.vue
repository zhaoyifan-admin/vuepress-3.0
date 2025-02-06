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
    format: 'HH时mm分ss秒',
    valueFormat: 'HH:mm:ss'
  }]
});
</script>

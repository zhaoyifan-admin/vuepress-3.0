<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: "时间范围",
    prop: 'timerange',
    type: 'timerange',
    format: 'HH:mm:ss',
    valueFormat: 'HH:mm:ss',
    startPlaceholder: '时间开始范围自定义',
    endPlaceholder: '时间结束范围自定义',
  }]
});
</script>

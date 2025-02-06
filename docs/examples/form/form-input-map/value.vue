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
      type: 'map',
      value: [113.10235504165291, 41.03624227495205, "内蒙古自治区乌兰察布市集宁区新体路街道顺达源广告传媒"]
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '提及框',
    prop: 'mention',
    type: 'mention',
    value: '@',
    dicData: [{
      label: '字典1',
      value: 0
    }, {
      label: '字典2',
      value: 1
    }]
  }]
});
</script>

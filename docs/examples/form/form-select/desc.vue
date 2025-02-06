<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '下拉框',
    prop: 'select',
    type: 'select',
    dicData: [{
      label: '字典1',
      desc: '字典描述',
      value: 0
    }, {
      label: '字典2',
      value: 1
    }]
  }]
});
</script>

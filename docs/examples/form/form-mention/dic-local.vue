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
    props: {
      label: 'name',
      value: 'code'
    },
    dicData: [{
      name: '字典1',
      code: 0
    }, {
      name: '字典2',
      code: 1
    }]
  }]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '开关',
    prop: 'switch',
    type: 'switch',
    props: {
      label: 'name',
      value: 'code'
    },
    dicData: [{
      name: '关',
      code: 0
    }, {
      name: '开',
      code: 1
    }]
  }]
});
</script>

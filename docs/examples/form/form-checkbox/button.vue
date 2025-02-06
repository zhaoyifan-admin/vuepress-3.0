<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  checkbox: [0, 1],
});

const option = ref({
  column: [{
    label: '实心多选',
    prop: 'checkbox',
    type: 'checkbox',
    button: true,
    dicData: [{
      label: '男',
      value: 0
    }, {
      label: '女',
      value: 1
    }, {
      label: '未知',
      value: ''
    }]
  }]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '多选',
    prop: 'checkbox',
    type: 'checkbox',
    all: true,
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

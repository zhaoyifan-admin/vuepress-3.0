<template>
  <tvue-form v-model:defaults="defaults"
             :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref, watch } from 'vue';

const defaults = ref({});
const form = ref({
  text1: 0
});
const option = {
  column: [
    {
      label: '内容1',
      prop: 'text1',
      type: 'radio',
      dicData: [
        { label: '显示', value: 0 },
        { label: '隐藏', value: 1 }
      ]
    },
    {
      label: '内容2',
      prop: 'text2',
      display: true
    },
    {
      label: '内容3',
      prop: 'text3'
    }
  ]
};

watch(() => form.value.text1, (val) => {
  if (val == 0) {
    defaults.value.text2 = { ...defaults.value.text2, display: true };
    defaults.value.text3 = { ...defaults.value.text3, label: '内容3' };
  } else {
    defaults.value.text2 = { ...defaults.value.text2, display: false };
    defaults.value.text3 = { ...defaults.value.text3, label: '有没有发现我变了' };
  }
});
</script>

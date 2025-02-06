<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  title: '我是头部标题',
  title1: '我是尾部标题'
});

const option = ref({
  column: [
    {
      label: "",
      labelWidth: 20,
      type: 'title',
      prop: "title",
      span: 24,
      styles: {
        color: 'red',
        fontSize: '24px'
      }
    },
    {
      label: '输入框',
      prop: 'text'
    },
    {
      label: "",
      labelWidth: 20,
      type: 'title',
      prop: "title1",
      span: 24,
      styles: {
        color: 'green',
        fontSize: '18px'
      }
    }
  ]
});
</script>

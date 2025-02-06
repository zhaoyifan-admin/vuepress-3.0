<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const option = ref({
  submitBtn: false,
  emptyBtn: false,
  column: [
    {
      label: "用户名",
      prop: "username"
    }
  ]
});
</script>

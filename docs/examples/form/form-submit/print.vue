<template>
  <tvue-form :option="option"
             v-model="form"
             @submit="handleSubmit"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const option = ref({
  printBtn: true,
  column: [{
    label: "用户名",
    prop: "username"
  }]
});

const handleSubmit = () => {
  // Your submit logic here
};
</script>

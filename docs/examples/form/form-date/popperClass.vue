<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});

const option = ref({
  column: [
    {
      label: "日期",
      prop: "datetime",
      popperClass: 'popperClass',
      type: "datetime",
    }
  ]
});
</script>

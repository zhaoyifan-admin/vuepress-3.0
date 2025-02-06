<template>
  <tvue-form :option="option"
             v-model="form">
    <template #datetime-type="{ item }">
      <span>{{ item.text }}日</span>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});

const option = ref({
  column: [
    {
      label: '日期',
      prop: 'datetime',
      type: 'datetime'
    }
  ]
});
</script>

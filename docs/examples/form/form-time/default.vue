<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({});

const option = computed(() => ({
  column: [
    {
      label: "开始时间",
      prop: 'start',
      type: 'time',
      format: 'HH:mm:ss',
      start: '08:30',
      step: '00:15',
      end: '18:30'
    },
    {
      label: "结束时间",
      prop: 'end',
      type: 'time',
      format: 'HH:mm:ss',
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: form.value.start
    }
  ]
}));
</script>

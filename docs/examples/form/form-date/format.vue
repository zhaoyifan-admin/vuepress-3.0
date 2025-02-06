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
      type: "datetime",
      format: 'YYYY年MM月DD日 HH时mm分ss秒',
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    {
      label: "时间戳",
      prop: "datetime",
      type: "datetime",
      format: "YYYY-MM-DD HH:mm:ss",
      valueFormat: "x",
    }
  ]
});
</script>

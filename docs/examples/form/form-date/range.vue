<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});

const option = ref({
  labelWidth: 110,
  column: [
    {
      label: "时间日期范围",
      type: 'datetimerange',
      prop: 'datetimerange',
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      startPlaceholder: '时间日期开始范围自定义',
      endPlaceholder: '时间日期结束范围自定义',
    },
    {
      label: "日期范围",
      prop: "daterange",
      type: "daterange",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      startPlaceholder: '日期开始范围自定义',
      endPlaceholder: '日期结束范围自定义',
    }
  ]
});
</script>

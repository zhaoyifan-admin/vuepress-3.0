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
      label: "时间",
      prop: "time",
      type: "time",
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
    },
    {
      label: "周",
      prop: "week",
      type: "week",
      format: "YYYY 第 WW 周"
    },
    {
      label: "月",
      prop: "month",
      type: "month",
    },
    {
      label: "月范围",
      prop: "monthrange",
      type: "monthrange",
      format: 'YYYY-MM',
      valueFormat: 'YYYY-MM'
    },
    {
      label: "年",
      prop: "year",
      type: "year",
    },
    {
      label: "年范围",
      prop: "yearrange",
      type: "yearrange",
    },
    {
      label: "多个年份",
      prop: "years",
      type: "years",
      format: "YYYY",
      valueFormat: "YYYY",
    },
    {
      label: "多个月份",
      prop: "months",
      type: "months",
      format: "YYYY-MM",
      valueFormat: "YYYY-MM",
    },
    {
      label: "多个日期",
      prop: "dates",
      type: "dates",
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD",
    },
  ],
});
</script>

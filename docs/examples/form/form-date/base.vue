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
    },
    {
      label: "快捷方式",
      prop: "date",
      type: "date",
      shortcuts: [
        {
          text: '今天',
          value: new Date(),
        },
        {
          text: '昨天',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: '一周前',
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
    },
    {
      label: "禁止日期",
      prop: "date",
      type: "date",
      disabledDate (time) {
        return time.getTime() < Date.now();
      },
    },
  ],
});
</script>

<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  text1: 0,
});

const option = ref({
  column: [
    {
      label: "内容1",
      prop: "text1",
      type: "radio",
      control: (val, form) => {
        if (val === 0) {
          return {
            text2: {
              display: true,
            },
            text3: {
              label: "内容3",
            },
          };
        } else {
          return {
            text2: {
              display: false,
            },
            text3: {
              label: "有没有发现我变了",
            },
          };
        }
      },
      dicData: [
        {
          label: "显示",
          value: 0,
        },
        {
          label: "隐藏",
          value: 1,
        },
      ],
    },
    {
      label: "内容2",
      prop: "text2",
      display: true,
      control: (val, form) => {
        return new Promise((resolve) => {
          if (val) {
            resolve({
              text1: {
                label: "改变内容1",
              },
            });
          } else {
            resolve({
              text1: {
                label: "内容1",
              },
            });
          }
        });
      },
    },
    {
      label: "内容3",
      prop: "text3",
    },
  ],
});
</script>

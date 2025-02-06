<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  cascader: [0, 1],
  tree: 0
});

const option = ref({
  column: [
    {
      label: "array",
      prop: "cascader",
      type: "cascader",
      dicData: [
        {
          label: "一级",
          value: 0,
          children: [
            {
              label: "一级1",
              value: 1,
            },
            {
              label: "一级2",
              value: 2,
            },
          ],
        },
      ],
    },
    {
      label: "function",
      prop: "tree",
      type: "tree",
      dicData: (ele) => {
        return [
          {
            label: "一级",
            value: 0,
            children: [
              {
                label: "一级1",
                value: 1,
              },
              {
                label: "一级2",
                value: 2,
              },
            ],
          },
        ];
      },
    },
    {
      label: "promise",
      prop: "select",
      type: "select",
      dicData: (ele) => {
        return new Promise((resolve) => {
          resolve([
            {
              label: "一级1",
              value: 1,
            },
            {
              label: "一级2",
              value: 2,
            },
          ]);
        });
      },
    },
  ],
});
</script>

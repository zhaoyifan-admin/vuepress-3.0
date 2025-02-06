<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const dicData = [
  {
    label: '字典1',
    value: 0,
    children: [
      {
        label: '字典3',
        value: 2
      }
    ]
  },
  {
    label: '字典2',
    value: 1
  }
];

const form = ref({
  tree: [0, 1, 2, 3, 4]
});

const option = ref({
  column: [
    {
      label: '多选',
      prop: 'tree',
      type: 'tree',
      multiple: true,
      dicData: dicData
    },
    {
      label: '多选',
      prop: 'tree',
      type: 'tree',
      multiple: true,
      collapseTags: true,
      maxCollapseTags: 3,
      collapseTagsTooltip: true,
      dicData: dicData
    }
  ]
});
</script>

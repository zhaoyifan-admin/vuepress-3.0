<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const dicData = [
  { label: '字典1', value: 0 },
  { label: '字典2', value: 1 },
  { label: '字典3', value: 2 }
];

const form = ref({
  select: [0, 1, 2]
});

const option = ref({
  column: [
    {
      label: '下拉框',
      prop: 'select',
      type: 'select',
      multiple: true,
      limit: 3,
      dicData
    },
    {
      label: '下拉框',
      prop: 'select',
      type: 'select',
      multiple: true,
      collapseTags: true,
      maxCollapseTags: 3,
      limit: 3,
      collapseTagsTooltip: true,
      dicData
    }
  ]
});
</script>

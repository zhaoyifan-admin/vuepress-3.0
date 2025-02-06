<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '开关',
      prop: 'switch',
      type: 'switch',
      activeIcon: "el-icon-check",
      inactiveIcon: "el-icon-close",
      dicData: [
        { label: '关', value: 0 },
        { label: '开', value: 1 }
      ]
    },
    {
      label: '开关',
      prop: 'switch',
      type: 'switch',
      activeIcon: "el-icon-check",
      inactiveIcon: "el-icon-close",
      inlinePrompt: true,
      dicData: [
        { label: '关', value: 0 },
        { label: '开', value: 1 }
      ]
    },
    {
      label: '开关',
      prop: 'switch',
      type: 'switch',
      activeActionIcon: "el-icon-check",
      inactiveActionIcon: "el-icon-close",
      dicData: [
        { label: '关', value: 0 },
        { label: '开', value: 1 }
      ]
    }
  ]
});
</script>

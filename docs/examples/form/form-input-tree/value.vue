<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '树型选择框',
      prop: 'tree',
      type: 'tree',
      dicData: [
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
      ],
      value: 0
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '多选',
      prop: 'tree',
      type: 'tree',
      filterable: true,
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
      ]
    },
    {
      label: '父类不可选',
      prop: 'tree1',
      type: 'tree',
      parent: false,
      dicData: [
        {
          label: '字典1',
          value: 0,
          children: [
            {
              label: '字典3',
              value: 2,
              children: [
                {
                  label: '字典4',
                  value: 3
                }
              ]
            }
          ]
        },
        {
          label: '字典2',
          value: 1
        }
      ]
    }
  ]
});
</script>

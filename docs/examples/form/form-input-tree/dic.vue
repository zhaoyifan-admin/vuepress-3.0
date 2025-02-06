<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '树形下拉框',
      prop: 'tree',
      type: 'tree',
      props: {
        label: 'name',
        value: 'code',
        children: 'list'
      },
      dicData: [
        {
          name: '字典1',
          code: 0,
          list: [
            {
              name: '字典3',
              code: 2
            }
          ]
        },
        {
          name: '字典2',
          code: 1
        }
      ]
    }
  ]
});
</script>

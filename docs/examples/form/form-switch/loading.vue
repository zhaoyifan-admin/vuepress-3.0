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
      beforeChange: (done) => {
        setTimeout(() => {
          done(true);
        }, 1000);
      },
      dicData: [
        { label: '关', value: 0 },
        { label: '开', value: 1 }
      ]
    }
  ]
});
</script>

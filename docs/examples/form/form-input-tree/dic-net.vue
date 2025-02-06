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
        value: 'code'
      },
      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
    }
  ]
});
</script>

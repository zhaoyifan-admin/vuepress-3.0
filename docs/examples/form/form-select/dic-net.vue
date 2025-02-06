<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '下拉框',
    prop: 'select2',
    type: 'select',
    props: {
      label: 'name',
      value: 'code'
    },
    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
  }]
});
</script>

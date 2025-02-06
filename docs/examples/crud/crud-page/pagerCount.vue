<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page" />
</template>

<script setup>
import { ref } from 'vue';

const page = ref({
  pagerCount: 11,
  total: 1000
});
const data = ref([]);
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
});
</script>
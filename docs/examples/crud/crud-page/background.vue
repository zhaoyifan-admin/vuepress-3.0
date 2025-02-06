<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
const page = ref({
  background: false,
  total: 1000
})
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
})
const data = ref([])
</script>
<template>
  {{ search }}
  <tvue-crud :option="option"
             v-model:search="search"
             :data="data">
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const search = ref({ name: 'small' });
const data = ref([{ name: '张三' }]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true
    }
  ]
});
</script>

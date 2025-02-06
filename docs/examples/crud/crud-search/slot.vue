<template>
  <tvue-crud :option="option"
             :data="data"
             v-model:search="search">
    <template #age-search="{ disabled, size }">
      <el-slider :disabled="disabled"
                 :size="size"
                 v-model:value="search.age" />
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const search = ref({});
const data = ref([{ name: '张三', age: 18 }]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
    },
    {
      label: '年龄',
      prop: 'age',
      search: true
    }
  ]
});
</script>

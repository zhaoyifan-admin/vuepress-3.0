<template>
  <tvue-crud :option="option"
             v-model="form"
             :data="data"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([{
  name: '姓名',
  sex: 14
}])
const option = ref({
  labelWidth: 120,
  column: {
    name: {
      label: '姓名',
    },
    sex: {
      label: '年龄',
    }
  }
})
const form = ref({})
option.value.column.name.label += '(name)';
</script>
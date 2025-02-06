<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref({
  name: '姓名',
  sex: 14
});

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
});

onMounted(() => {
  option.value.column.name.label += '(name)';
});
</script>

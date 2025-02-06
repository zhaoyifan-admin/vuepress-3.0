<template>
  <tvue-form :option="option"
             v-model="form">
    <template #code-type="{ item, value, label }">
      <span>{{ item }}</span>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({});
const option = ref({
  column: [{
    label: '单选',
    prop: 'code',
    type: 'tree',
    props: {
      label: 'name',
      value: 'code'
    },
    dicUrl: `${baseUrl}/getProvince`,
    typeformat (item, label, value) {
      return `值:${item[label]}-名:${item[value]}`;
    },
    rules: [
      {
        required: true,
        message: '请选择省份',
        trigger: 'blur'
      }
    ]
  }, {
    label: '多选',
    prop: 'codes',
    type: 'tree',
    props: {
      label: 'name',
      value: 'code'
    },
    multiple: true,
    dicUrl: `${baseUrl}/getProvince`,
    typeformat (item, label, value) {
      return `值:${item[label]}-名:${item[value]}`;
    },
    rules: [
      {
        required: true,
        message: '请选择省份',
        trigger: 'blur'
      }
    ]
  }]
});
</script>

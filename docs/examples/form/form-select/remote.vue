<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  province1: '110000,120000,130000,140000'
});

const option = ref({
  column: [
    {
      label: '省份单选',
      prop: 'province',
      type: 'select',
      remote: true,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince?id={{key}}`,
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '省份多选',
      prop: 'province1',
      type: 'select',
      multiple: true,
      remote: true,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince?id={{key}}`,
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    }
  ]
});
</script>

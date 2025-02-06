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
      label: '提及框',
      prop: 'province',
      type: 'mention',
      remote: true,
      value: '@',
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

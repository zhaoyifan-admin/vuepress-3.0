<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref, computed } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city: '110100',
  params: 'test'
});

const option = ref({
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      cascader: ['city'],
      dicUrl: `${baseUrl}/getProvince`,
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '参数',
      prop: 'params'
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/${form.value.province}?params=${form.value.params}`,
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'blur'
        }
      ]
    }
  ]
});
</script>

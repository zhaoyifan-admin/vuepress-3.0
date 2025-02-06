<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city1: '110100',
  city2: '110100',
  area: '110101',
});

const option = ref({
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      cascader: ['city1', 'city2'],
      cascaderIndex: 1,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`
    },
    {
      width: 120,
      label: '城市1',
      prop: 'city1',
      type: 'select',
      cascader: ['area'],
      cascaderIndex: 1,
      cell: true,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [
        {
          required: true,
          message: '请选择城市1',
          trigger: 'blur'
        }
      ]
    },
    {
      width: 120,
      label: '城市2',
      prop: 'city2',
      type: 'select',
      cascaderIndex: 2,
      cell: true,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [
        {
          required: true,
          message: '请选择城市2',
          trigger: 'blur'
        }
      ]
    },
    {
      width: 120,
      label: '地区',
      prop: 'area',
      cell: true,
      props: {
        label: 'name',
        value: 'code'
      },
      type: 'select',
      dicUrl: `${baseUrl}/getArea/{{key}}?province={{province}}`,
      rules: [
        {
          required: true,
          message: '请选择地区',
          trigger: 'blur'
        }
      ]
    }
  ]
});
</script>

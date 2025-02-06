<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city: '110100',
  area: '110101'
});

const option = ref({
  column: [{
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
    label: '城市',
    prop: 'city',
    type: 'select',
    cascader: ['area'],
    props: {
      label: 'name',
      value: 'code'
    },
    row: true,
    dicUrl: `${baseUrl}/getCity/{{key}}?province={{province}}`,
    rules: [
      {
        required: true,
        message: '请选择城市',
        trigger: 'blur'
      }
    ]
  },
  {
    label: '地区',
    prop: 'area',
    type: 'select',
    props: {
      label: 'name',
      value: 'code'
    },
    dicUrl: `${baseUrl}/getArea/{{key}}?city={{city}}`,
    rules: [
      {
        required: true,
        message: '请选择地区',
        trigger: 'blur'
      }
    ]
  }]
});
</script>

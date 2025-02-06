<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  array: [{ label: '名称.jpg', value: '/images/logo-bg.jpg' }],
  array1: [{ name: '名称.jpg', url: '/images/logo-bg.jpg' }],
  string: '/images/logo-bg.jpg,/images/logo-bg.jpg',
  json: '[{"label":"名称.jpg","value":"/images/logo-bg.jpg"}]'
});

const option = ref({
  labelWidth: 120,
  column: [
    {
      label: '数组对象',
      prop: 'array',
      dataType: 'object',
      type: 'upload',
      propsHttp: { res: 'data' },
      span: 24,
      action: 'https://api.avuejs.com/imgupload'
    },
    {
      label: '数组对象',
      prop: 'array1',
      dataType: 'object',
      type: 'upload',
      props: { label: 'name', value: 'url' },
      propsHttp: { res: 'data' },
      span: 24,
      action: 'https://api.avuejs.com/imgupload'
    },
    {
      label: '字符串',
      prop: 'string',
      dataType: 'string',
      type: 'upload',
      propsHttp: { res: 'data' },
      span: 24,
      action: 'https://api.avuejs.com/imgupload'
    },
    {
      label: 'json字符串',
      prop: 'json',
      dataType: 'json',
      type: 'upload',
      propsHttp: { res: 'data' },
      span: 24,
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
});
</script>

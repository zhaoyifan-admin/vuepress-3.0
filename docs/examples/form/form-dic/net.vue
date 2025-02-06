<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city: '110000'
});

const option = ref({
  column: [
    {
      label: 'get请求',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`
    },
    {
      label: 'post请求',
      prop: 'city',
      type: 'tree',
      dicMethod: 'post',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`
    }
  ]
});
</script>

<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  grade: 1
});

const option = ref({
  column: [
    {
      label: '权限',
      prop: 'grade',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicData: [
        { name: '有权限', code: 1 },
        { name: '无权限', code: 0 },
        { name: '禁止项', code: -1 }
      ]
    },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code',
        res: 'data.list'
      },
      dicUrl: 'https://cli.avuejs.com/api/area/getProvince?isRes=true'
    }
  ]
});
</script>

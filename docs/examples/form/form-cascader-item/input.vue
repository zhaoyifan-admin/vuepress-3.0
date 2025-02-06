<template>
  <el-tag>110000-北京市</el-tag>
  <el-tag>130000-河北省</el-tag>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city: '110100'
});

const option = ref({
  column: [
    {
      label: '省份',
      prop: 'province',
      cascader: ['city'],
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
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

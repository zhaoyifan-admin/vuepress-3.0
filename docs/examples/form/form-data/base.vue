<template>
  {{ obj }}
  <tvue-form :option="option"
             v-model="obj"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const obj = ref({
  cascader: '1,2',
  province: 120000,
  radio: 1,
  checkbox: '1,2,3',
  selects: '1|2|3'
});

const option = ref({
  column: [
    {
      label: '单选',
      prop: 'radio',
      type: 'radio',
      dataType: 'number',
      dicData: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 }
      ]
    },
    {
      label: '多选',
      prop: 'checkbox',
      type: 'checkbox',
      dataType: 'number',
      dicData: [
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
        { label: '选项3', value: 3 }
      ]
    },
    {
      label: '多选',
      prop: 'selects',
      type: 'select',
      separator: '|',
      multiple: true,
      dicData: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' }
      ]
    },
    {
      label: '级联',
      prop: 'cascader',
      type: 'cascader',
      dataType: 'string',
      dicData: [
        {
          label: '级别1',
          value: 1,
          children: [{ label: '级别2', value: 2 }]
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择级联',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      dataType: 'number',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`,
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

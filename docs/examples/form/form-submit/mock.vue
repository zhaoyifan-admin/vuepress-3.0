<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const DIC = {
  VAILD: [
    { label: '真', value: 'true' },
    { label: '假', value: 'false' }
  ],
  SEX: [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
  ]
}

const form = ref({
  text: '动态内容1'
})

const option = {
  mockBtn: true,
  column: [
    {
      label: '头像',
      prop: 'video',
      type: 'upload',
      listType: 'picture-img',
      mock: { type: 'image' },
      span: 24
    },
    {
      label: 'id',
      prop: 'id',
      mock: { type: 'id', uuid: true }
    },
    {
      label: '手机号',
      prop: 'tel',
      mock: { type: 'tel' }
    },
    {
      label: '用户名',
      prop: 'username',
      mock: { type: 'name', en: true }
    },
    {
      label: '自定义',
      prop: 'text2',
      mock: (form) => '自定义逻辑' + form.name,
      span: 8
    },
    {
      label: '姓名',
      prop: 'name',
      mock: { type: 'name' },
      span: 8
    },
    {
      label: '类型',
      prop: 'type',
      type: 'select',
      dicData: DIC.VAILD,
      span: 6,
      mock: { type: 'dic' }
    },
    {
      label: '权限',
      prop: 'grade',
      span: 6,
      type: 'checkbox',
      dicData: DIC.VAILD,
      mock: { type: 'dic' }
    },
    {
      label: '开关',
      prop: 'switch',
      span: 6,
      type: 'switch',
      dicData: DIC.SEX,
      mock: { type: 'dic' },
      hide: true,
      row: true
    },
    {
      label: '性别',
      prop: 'sex',
      span: 6,
      type: 'radio',
      dicData: DIC.SEX,
      mock: { type: 'dic' }
    },
    {
      label: '数字',
      prop: 'number',
      type: 'number',
      span: 6,
      precision: 2,
      mock: { type: 'number', max: 1, min: 2, precision: 2 },
      min: 0,
      max: 3,
      row: true
    },
    {
      label: '网站',
      span: 12,
      prop: 'url',
      prepend: 'http://',
      mock: { type: 'url', header: false },
      append: 'com',
      row: true
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date',
      span: 8,
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      mock: { type: 'datetime', format: 'yyyy-MM-dd' }
    },
    {
      label: '日期时间',
      prop: 'datetime',
      type: 'datetime',
      span: 8,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      mock: { type: 'datetime', format: 'yyyy-MM-dd HH:mm:ss', now: true }
    },
    {
      label: '时间',
      prop: 'time',
      type: 'time',
      span: 8,
      format: 'HH:mm:ss',
      valueFormat: 'HH:mm:ss',
      mock: { type: 'datetime', format: 'HH:mm:ss' }
    },
    {
      label: '地址',
      span: 24,
      prop: 'address',
      mock: { type: 'county' }
    },
    {
      label: '建议',
      span: 24,
      prop: 'adit',
      mock: { type: 'word', min: 10, max: 30 }
    }
  ]
}
</script>

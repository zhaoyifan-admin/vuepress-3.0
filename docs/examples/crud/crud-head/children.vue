<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  excelBtn: true,
  border: true,
  index: true,
  expandLevel: 3,
  headerAlign: 'center',
  align: 'center',
  tree: true,
  labelWidth: 100,
  column: [
    { label: '姓名', prop: 'name', width: 140 },
    { label: '性别1', prop: 'sex' },
    {
      label: '自定义图标',
      prop: 'icon',
      type: 'icon',
      iconList: [
        {
          label: '基本图表',
          list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']
        }
      ]
    },
    {
      label: '多级表头',
      children: [
        {
          label: '信息',
          children: [
            { label: '年龄', prop: 'age' },
            { label: '手机号', prop: 'phone' }
          ]
        },
        {
          label: '地区',
          prop: 'address',
          type: 'select',
          props: { label: 'name', value: 'code' },
          dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
        }
      ]
    },
    { label: '测试', prop: 'test' },
    { label: '手机信息1', prop: 'phone1' }
  ]
});

const data = ref([
  {
    name: '张三',
    age: 14,
    address: '110000',
    phone1: '17547400800',
    phone: '17547400800',
    icon: 'el-icon-time',
    test: 1,
    sex: '男'
  },
  {
    name: '王五',
    age: 10,
    address: '120000',
    test: 1,
    sex: '女',
    icon: 'el-icon-star-on',
    phone1: '17547400800',
    phone: '17547400800'
  }
]);
</script>

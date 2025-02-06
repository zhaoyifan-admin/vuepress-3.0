<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';
const crud = ref(null)
const data = ref([]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '性别',
      prop: 'sex',
    },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      cascader: ['city'],
      cascaderIndex: 1,
      props: {
        label: 'name',
        value: 'code',
      },
      dicUrl: `${baseUrl}/getProvince`,
    },
    {
      width: 120,
      label: '城市',
      prop: 'city',
      type: 'select',
      cascader: ['area'],
      cascaderIndex: 1,
      cell: true,
      props: {
        label: 'name',
        value: 'code',
      },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'blur',
        },
      ],
    },
    {
      width: 120,
      label: '地区',
      prop: 'area',
      cell: true,
      props: {
        label: 'name',
        value: 'code',
      },
      type: 'select',
      dicUrl: `${baseUrl}/getArea/{{key}}`,
      rules: [
        {
          required: true,
          message: '请选择地区',
          trigger: 'blur',
        },
      ],
    },
  ],
});

onMounted(() => {
  data.value = [
    {
      name: '张三',
      sex: '男',
      province: '110000',
      city: '110100',
      area: '110101',
    },
    {
      name: '李四',
      sex: '女',
      province: '130000',
      city: '130200',
      area: '130202',
    },
  ];
  //加载完数据后调用
  nextTick(() => {
    crud.value.dicInit('cascader');
  });
});
</script>

<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const data = ref([]);

const option = ref({
  excelBtn: true,
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: { label: 'name', value: 'code' },
      cascader: ['city'],
      search: true,
      dicUrl: `${baseUrl}/getProvince`,
      rules: [
        { required: true, message: '请选择省份', trigger: 'blur' }
      ]
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      cascader: ['area'],
      props: { label: 'name', value: 'code' },
      search: true,
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [
        { required: true, message: '请选择城市', trigger: 'blur' }
      ]
    },
    {
      label: '地区',
      prop: 'area',
      type: 'select',
      props: { label: 'name', value: 'code' },
      search: true,
      dicUrl: `${baseUrl}/getArea/{{key}}`,
      rules: [
        { required: true, message: '请选择地区', trigger: 'blur' }
      ]
    }
  ]
});

const crud = ref(null);

onMounted(() => {
  data.value = [
    { id: 1, name: '张三', province: '110000', city: '110100', area: '110101' },
    { id: 2, name: '李四', province: '140000', city: '140600', area: '140623' }
  ]
  //加载完数据后调用
  nextTick(() => {
    crud.value.dicInit('cascader');
  });
});
</script>

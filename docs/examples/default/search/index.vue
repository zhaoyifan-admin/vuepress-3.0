<template>
  <tvue-search :option="option"
               v-model="form"
               @change="handleChange">
    <template #zdy="{}">
      <el-tag>自定义</el-tag>
    </template>
  </tvue-search>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  zt: ["370000", "620000", "610000", "110000", "410000"],
  checkbox: 0,
  jtgj: [0, 1, 2, 3, 4]
});

const option = {
  column: [{
    label: '自定义',
    prop: 'zdy'
  }, {
    label: '地区',
    prop: 'zt',
    dicUrl: 'https://cli.avuejs.com/api/area/getProvince',
    props: {
      label: 'name',
      value: 'code'
    }
  }, {
    label: '多选',
    prop: 'checkbox',
    multiple: false,
    dicData: [{
      label: '单层',
      value: 0
    }, {
      label: '多层',
      value: 1
    }]
  }, {
    label: '交通工具',
    prop: 'jtgj',
    dicData: [{
      label: '飞机',
      value: 0
    }, {
      label: '动车',
      value: 1
    }, {
      label: '驾车',
      value: 2
    }, {
      label: '其他',
      value: 3
    }]
  }]
};

const handleChange = (form) => {
  ElMessage.success(JSON.stringify(form));
};
</script>

<template>
  <el-button type="primary"
             @click="handleReload">Key初始化</el-button>
  <tvue-form :key="reload"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const reload = ref(Math.random());
const option = {
  border: true,
  align: 'center',
  menuAlign: 'center',
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `https://cli.avuejs.com/api/area/getProvince`,
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    }
  ]
};

function handleReload () {
  reload.value = Math.random();
  ElMessage.success('初始化完成');
}
</script>

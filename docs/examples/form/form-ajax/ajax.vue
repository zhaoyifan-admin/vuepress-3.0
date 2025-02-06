<template>
  <el-button type="primary"
             icon="el-icon-sort"
             @click="getOption">服务端加载</el-button>
  <tvue-form :key="reload"
             v-model="form"
             :option="option"
             v-loading="loading"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const reload = ref(Math.random());
const loading = ref(true);
const form = ref({});
const option = ref({});

function getOption () {
  ElMessage.success('模拟2s后服务端动态加载');
  setTimeout(() => {
    option.value = {
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
    form.value = {
      name: '张三',
      sex: '男',
      province: '110000'
    };
    reload.value = Math.random();
    loading.value = false;
  }, 2000);
}
</script>

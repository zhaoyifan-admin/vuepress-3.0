<template>
  <el-button type="primary"
             @click="updateUrlDic">更新字典</el-button><br /><br />
  <tvue-form ref="formRef"
             :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const formRef = ref(null)
const option = ref({
  column: [{
    label: '字典',
    span: 24,
    type: 'checkbox',
    prop: 'checkbox',
    dicUrl: 'https://cli.avuejs.com/api/area/getProvince',
    props: {
      label: 'name',
      value: 'code'
    }
  }]
});

const updateUrlDic = () => {
  ElMessage.success('先设置本地字典1s后请求url')
  formRef.value.updateDic('checkbox', [
    { name: '字典1', code: 1 },
    { name: '字典0', code: 2 }
  ]);
  setTimeout(() => {
    formRef.value.updateDic('checkbox');
  }, 1000);
};
</script>

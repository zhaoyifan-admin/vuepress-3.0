<template>
  <el-button type="danger"
             @click="validate">验证表单</el-button>
  <tvue-form ref="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [
        {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '性别',
      prop: 'sex',
      rules: [
        {
          required: true,
          message: '请输入性别',
          trigger: 'blur'
        }
      ]
    }
  ]
});

const form = ref(null);

const validate = () => {
  if (form.value) {
    form.value.validate((valid, done, msg) => {
      if (valid) {
        done();
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
};
</script>

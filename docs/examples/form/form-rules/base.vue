<template>
  <tvue-form :option="option"
             @submit="submit"
             @error="error"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

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

const submit = (form, done) => {
  ElMessage.success(JSON.stringify(form));
  done();
};

const error = (err) => {
  ElMessage.success('请查看控制台');
  console.log(err);
};
</script>

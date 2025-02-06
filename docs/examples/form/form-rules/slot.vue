<template>
  <tvue-form v-model="obj"
             :option="option1"
             @submit="submit"
             @error="error"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const obj = ref({
  name: '张三',
  password: '',
  oldpassword: ''
});

const option1 = {
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur"
        }
      ]
    },
    {
      label: '性别',
      prop: 'sex',
      rules: [
        {
          required: true,
          message: "请输入性别",
          trigger: "blur"
        }
      ]
    },
    {
      label: '密码',
      prop: 'password',
      type: 'password',
      rules: [
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    },
    {
      label: '确认密码',
      prop: 'oldpassword',
      type: 'password',
      rules: [
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== obj.value.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    }
  ]
};

const submit = (form, done) => {
  ElMessage.success(JSON.stringify(form));
  done();
};

const error = (err) => {
  ElMessage.success('请查看控制台');
  console.log(err);
};
</script>

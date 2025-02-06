<template>
  <tvue-crud :data="data"
             v-model="obj"
             :option="option"
             @error="handleError"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
const obj = ref({});
const data = ref([]);

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    callback();
  }
};

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== obj.value.password) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};

const option = ref({
  column: [
    {
      label: '密码',
      prop: 'password',
      rules: [{ required: true, validator: validatePass, trigger: 'blur' }]
    },
    {
      label: '确认密码',
      prop: 'oldpassword',
      rules: [{ required: true, validator: validatePass2, trigger: 'blur' }]
    }
  ]
});

const handleError = (err) => {
  ElMessage.success('请查看控制台');
  console.log(err);
};
</script>

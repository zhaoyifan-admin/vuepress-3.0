<template>
  <tvue-form ref="formRef"
             v-model="form"
             :option="option">
    <template #menu-form="{}">
      <el-button icon="el-icon-user"
                 type="primary"
                 @click="handleSubmit">提 交</el-button>
      <el-button icon="el-icon-delete"
                 @click="handleEmpty">清 空</el-button>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const formRef = ref(null)
const option = ref({
  emptyBtn: false,
  submitBtn: false,
  column: [
    {
      label: '用户名',
      prop: 'username',
      rules: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ]
    }
  ]
});

const handleEmpty = () => {
  form.value = {};
};

const handleSubmit = () => {
  formRef.value.validate((valid, done, msg) => {
    if (valid) {
      ElMessage.success(JSON.stringify(form.value));
      setTimeout(() => {
        done();
      }, 2000);
    }
  });
};
</script>

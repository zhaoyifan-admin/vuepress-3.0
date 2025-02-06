<template>
  <tvue-form ref="formRef"
             :option="option"
             v-model="form"
             @submit="handleSubmit">
    <template #menu-form-before="{ size }">
      <el-tag type="primary"
              :size="size">提示</el-tag>
    </template>
    <template #menu-form="{ size }">
      <el-button type="primary"
                 :size="size"
                 @click="submitForm">自定义提交</el-button>
      <el-button :size="size"
                 @click="resetForm">自定义清空</el-button>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const formRef = ref(null)
const option = ref({
  submitBtn: false,
  emptyBtn: false,
  column: [{
    label: "用户名",
    prop: "username"
  }]
});

const submitForm = () => {
  formRef.value.submit();
};

const resetForm = () => {
  formRef.value.resetForm();
};

const handleSubmit = (form, done) => {
  ElMessage.success('3s后关闭');
  setTimeout(() => {
    done();
  }, 3000);
};
</script>

<template>
  <tvue-form v-model="form"
             :option="option">
    <template #text-error="{ error }">
      <p style="color:green">自定义提示{{ error }}</p>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  text: ''
});

const option = {
  labelWidth: 120,
  column: [{
    label: '姓名',
    prop: 'text',
    rules: [{
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }]
  }]
};
</script>

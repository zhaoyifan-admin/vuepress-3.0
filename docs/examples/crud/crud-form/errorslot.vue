<template>
  <tvue-crud :data="data"
             :option="option">
    <template #name-error="{ error }">
      <p style="color:green">自定义提示{{ error }}</p>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { sex: '男' },
  { sex: '女' }
]);

const option = {
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
      prop: 'sex'
    }
  ]
};
</script>

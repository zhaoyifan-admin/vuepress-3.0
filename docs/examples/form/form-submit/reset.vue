<template>
  <tvue-form :option="option"
             v-model="form"
             @reset-change="handleReset"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const option = ref({
  column: [{
    label: "用户名",
    prop: "username"
  }]
});

const handleReset = () => {
  ElMessage.success('清空成功回调');
};
</script>

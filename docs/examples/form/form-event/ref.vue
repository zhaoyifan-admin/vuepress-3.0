<template>
  <tvue-form ref="formRef"
             v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const formRef = ref(null)
const option = {
  labelWidth: 120,
  column: [{
    label: '测试框',
    prop: 'text',
  }]
};

onMounted(() => {
  setTimeout(() => {
    ElMessage.success('查看控制台');
    console.log('text的ref对象')
    console.log(formRef.value.getPropRef('text').$refs.temp)
  });
});
</script>
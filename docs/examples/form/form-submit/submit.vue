<template>
  <tvue-form :option="option"
             v-model="form"
             @submit="handleSubmit"></tvue-form>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const form = ref({})
const option = ref({
  column: [{
    label: "用户名",
    prop: "username"
  }]
})
const handleSubmit = (form, done) => {
  ElMessage.success('3s后关闭');
  setTimeout(() => {
    done()
  }, 3000)
}
</script>
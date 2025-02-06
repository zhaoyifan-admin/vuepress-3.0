<template>
  {{form}}
  <tvue-form ref="formRef"
             :option="option"
             v-model="form"
             @submit="handleSubmit"></tvue-form>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
//获取this
let { proxy } = getCurrentInstance()
const option = ref({})
const form = ref({})
option.value = {
  column: [{
    label: '姓名',
    prop: 'name'
  }, {
    label: '年龄',
    prop: 'sex'
  }]
}
form.value = {
  name: '张三',
  sex: 12
}
function handleSubmit (form, done) {
  console.log(form)
  done()
}
</script>
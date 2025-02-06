<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const form = ref({});
const optipn = ref({
  submitText: '完成',
  emptyText: '取消',
  column: [{
    label: "用户名",
    prop: "username"
  }]
})
</script>

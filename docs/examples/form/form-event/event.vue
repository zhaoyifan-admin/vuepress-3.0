<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  name: '11'
});

const option = ref({
  column: [{
    label: '姓名',
    prop: 'name',
    change: ({ value, column }) => {
      ElMessage.success('change事件查看控制台');
      console.log('值改变', value, column);
    },
    click: ({ value, column }) => {
      ElMessage.success('click事件查看控制台');
      console.log('点击事件', value, column);
    },
    focus: ({ value, column }) => {
      ElMessage.success('focus事件查看控制台');
      console.log('获取焦点', value, column);
    },
    blur: ({ value, column }) => {
      ElMessage.success('blur事件查看控制台');
      console.log('失去焦点', value, column);
    },
    enter: ({ value, column }) => {
      ElMessage.success('enter事件查看控制台');
      console.log('回车事件', value, column);
    }
  }]
});
</script>

<template>
  <el-button type="primary"
             @click="handlePrint">打印全部</el-button>
  <el-button type="primary"
             @click="handlePrint1">打印局部</el-button>
  <el-button type="primary"
             @click="handlePrint2">打印DOM</el-button>
  <div id="test">
    <h2 style="color:red">我是测试字段</h2>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus';
import { $Print } from '@smallwei/avue'

const handlePrint = () => {
  ElMessage.success('Print triggered for #app');
  $Print('#app');
};

const handlePrint1 = () => {
  ElMessage.success('Print triggered for #test');
  $Print('#test');
}
const handlePrint2 = () => {
  ElMessage.success('Print triggered for .logo');
  $Print(document.querySelector('.logo'));
}
</script>
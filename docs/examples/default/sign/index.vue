<template>
  <tvue-sign ref="signRef"></tvue-sign>
  <el-button type="primary"
             @click="handleSubmit">生成</el-button>
  <el-button type="danger"
             @click="getStar">图章</el-button>
  <el-button @click="handleClear">清空</el-button>
  <div>
    <br />
    结果
    <img :src="img"
         alt=""
         width="80"
         height="50" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const signRef = ref(null)
const img = ref('')
function handleSubmit () {
  img.value = signRef.value.submit(80, 50);
  ElMessage.message(img.value)
}
function handleClear () {
  signRef.value.clear()
}
function getStar () {
  signRef.value.getStar('这里是用途', '这里是单位的名称', '123456')
}
</script>
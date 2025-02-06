<template>
  <div style="margin-bottom:10px">
    <el-button @click="copy">直接复制</el-button>
    <el-button @click="textarea=''">清 空</el-button>
  </div>
  <el-input placeholder="内容"
            v-model="text">
    <template #append>
      <el-button @click="copyText"
                 color="primary">复制</el-button>
    </template>
  </el-input>
  <div style="margin-top:10px">
    <el-input type="textarea"
              v-model="textarea"
              cols="40"
              rows="3"></el-input>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { $Clipboard } from '@smallwei/avue'
import { ElMessage } from 'element-plus'
const text = ref('')
const textarea = ref('')
function copyText () {
  $Clipboard({
    text: text.value
  }).then(() => {
    ElMessage.success('复制成功')
  }).catch(() => {
    ElMessage.error('复制失败')
  });
}
function copy () {
  $Clipboard({
    text: '测试==复制至剪切板的文本==测试'
  }).then(() => {
    ElMessage.success('复制成功')
  }).catch(() => {
    ElMessage.error('复制失败')
  });
}
</script>

<template>
  <el-button @click="startRecord"
             v-if="!flag"
             type="primary">开始录制</el-button>
  <el-button type="danger"
             @click="stopRecord"
             v-else>停止录制</el-button>
  <br /><br />
  <tvue-video background="https://avuejs.com/images/face.png"
              @data-change="dataChange"
              ref="video"></tvue-video>

</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus';
const flag = ref(false)
function startRecord () {
  flag.value = true;
  ElMessage.success('开始录制')
  video.value.startRecord();
}
function stopRecord () {
  flag.value = false;
  ElMessage.success('请看控制台视频文件的base64')
  video.value.stopRecord();
}
function dataChange (data) {
  console.log(data);
}
</script>
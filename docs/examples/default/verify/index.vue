<template>
  <el-button @click="handleRandomn"
             type="primary">随机验证码</el-button>
  <br /><br />
  <span style="font-size: 24px;line-height: 24px;color: #333;">请使用普通话朗读下方验证码</span>
  <br /><br />
  <tvue-verify v-model="data"
               :len="len"
               ref="verify"></tvue-verify>
  <br /><br />
  <tvue-video background="https://avuejs.com/images/face.png"
              @data-change="dataChange"
              ref="videoRef"></tvue-video>

</template>
<script setup>
import { ref } from 'vue'
const data = ref(null)
const len = ref(6)
const videoRef = ref(null)
function dataChange (data) {
  console.log(data);
}
function handleRandomn () {
  videoRef.value.randomn()
}
</script>
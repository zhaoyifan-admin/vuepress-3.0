<template>
  <div>
    <el-button @click="openPreview(0)"
               style="margin-bottom:20px;">打开图片预览</el-button>
    <p>
      <img style="width:200px;margin-right:20px"
           v-for="(d, index) of datas"
           :src="d.thumbUrl"
           :key="index"
           @click="openPreview(index)">
    </p>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus'
import { $ImagePreview } from '@smallwei/avue'
const { appContext } = getCurrentInstance();

const datas = ref([
  { thumbUrl: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg`, url: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg` },
  { thumbUrl: `https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg`, url: `https://www.w3school.com.cn/i/movie.ogg` },
])

const openPreview = (index = 0) => {
  $ImagePreview(appContext)(datas.value, index, {
    closeOnClickModal: true,
    interval: 3000,
    click: (data, index) => {
      ElMessage.success('点击事件' + index)
    },
    beforeClose: () => {
      ElMessage.success('关闭回调')
    }
  })
}
</script>

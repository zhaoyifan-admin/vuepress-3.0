<template>
  <el-button @click="handleUpload">导出PDF</el-button>
  <el-button @click="handleFile"
             type="success">下载图片</el-button>
  <el-button @click="handleSend"
             type="primary">获取文件流</el-button>
  <el-button @click="handleBase64"
             type="danger">获取bas64</el-button>
  <tvue-license ref="licenseRef"
                :option="data">
    <h1 style="color:red">自定义内容</h1>
  </tvue-license>
</template>
<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { downFile } from '@smallwei/avue'

const form = ref({
  id: 'xxxx',
  date: '2022-02-02',
  name: 'xxx公司',
  qq: 'xxxxx'
})

const data = computed(() => ({
  img: "/images/sqstemp.jpg",
  list: [
    {
      left: 140,
      top: 665,
      text: `“ ${form.value.name} ”`,
      color: '#000',
      size: 29,
      bold: true,
      style: '黑体'
    },
    {
      left: 280,
      top: 1049,
      text: form.value.id,
      color: '#000',
      size: 26,
      bold: true,
      style: '黑体'
    },
    {
      left: 740,
      top: 1049,
      text: form.value.date,
      color: '#000',
      bold: true,
      size: 26,
      style: '黑体'
    },
    {
      left: 440,
      top: 120,
      width: 100,
      img: '/logo.png'
    }
  ]
}))

const licenseRef = ref(null)
const handleSend = () => {
  ElMessage.success('请查看控制台')
  licenseRef.value.getFile(form.value.name).then(file => {
    console.log(file)
  })
}

const handleBase64 = () => {
  ElMessage.success('请查看控制台')
  licenseRef.value.getBase64().then(file => {
    console.log(file)
  })
}

const handleFile = () => {
  licenseRef.value.getBase64(form.value.name).then(file => {
    downFile(file, new Date().getTime())
  })
}

const handleUpload = () => {
  licenseRef.value.getPdf(form.value.name)
}

</script>
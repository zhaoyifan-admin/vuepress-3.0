<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-exceed="uploadExceed"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({
  imgUrl: ['/images/logo-bg.jpg']
})

const option = {
  column: [
    {
      label: '附件上传',
      prop: 'imgUrl',
      type: 'upload',
      listType: 'picture-card',
      limit: 1,
      span: 24,
      propsHttp: {
        res: 'data'
      },
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
}

const uploadExceed = (limit, files, fileList, column) => {
  ElMessage.error('超出上传限制文件数量')
  console.log(limit, files, fileList, column)
}
</script>

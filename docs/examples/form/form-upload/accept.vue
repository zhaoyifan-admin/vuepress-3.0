<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-size="uploadSize">
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({})
const option = ref({
  column: [
    {
      label: '水印头像',
      prop: 'imgUrl3',
      type: 'upload',
      listType: 'picture-card',
      accept: 'image/png, image/jpeg',
      limit: 2,
      fileSize: 10000,
      span: 24,
      propsHttp: {
        res: 'data'
      },
      tip: '只能上传jpg/png用户头像，且不超过10M',
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
})

const uploadSize = (fileSize, file, fileList, column) => {
  console.log(fileSize, file, fileList, column)
}
</script>

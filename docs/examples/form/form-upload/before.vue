<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-before="uploadBefore"
             :upload-after="uploadAfter"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({
  imgUrl: ['/images/logo-bg.jpg']
})

const option = ref({
  column: [
    {
      label: '附件上传',
      prop: 'imgUrl',
      type: 'upload',
      listType: 'picture-card',
      span: 24,
      propsHttp: {
        res: 'data'
      },
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
})

const uploadBefore = (file, done, loading, column) => {
  console.log(file, column)
  //如果你想修改file文件,由于上传的file是只读文件，必须复制新的file才可以修改名字，完后赋值到done函数里,如果不修改的话直接写done()即可
  const newFile = new File([file], '1234', { type: file.type })
  done(newFile)
  ElMessage.success('上传前的方法')
}

const uploadAfter = (res, done, loading, column) => {
  console.log(res, column)
  done()
  ElMessage.success('上传后的方法')
}
</script>

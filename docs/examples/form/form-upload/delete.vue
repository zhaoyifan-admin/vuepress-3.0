<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-delete="uploadDelete">
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const form = ref({
  imgUrl3: ['/images/logo-bg.jpg'],
})

const option = ref({
  column: [
    {
      label: '水印头像',
      prop: 'imgUrl3',
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

const uploadDelete = (file, column) => {
  console.log(file, column)
  return ElMessageBox.confirm('这里是自定义的，是否确定移除该选项？', '确认删除', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
}
</script>

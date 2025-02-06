<template>
  <tvue-form :option="option"
             v-model="form">
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  imgUrl3: 'https://www.runoob.com/try/demo_source/circle1.svg'
})

const option = {
  column: [
    {
      label: '头像',
      prop: 'imgUrl3',
      type: 'upload',
      listType: 'picture-img',
      span: 24,
      fileType: 'img',//img/video/audio
      propsHttp: {
        res: 'data'
      },
      tip: '只能上传jpg/png用户头像，且不超过500kb',
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
}
</script>

<template>
  <tvue-form :option="option"
             v-model="form">
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
      listType: 'picture-img',
      span: 24,
      propsHttp: {
        res: 'data'
      },
      canvasOption: {
        text: 'avue',
        ratio: 0.1
      },
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
})
</script>

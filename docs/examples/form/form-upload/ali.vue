<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({})
const option = ref({
  column: [
    {
      label: '阿里上传',
      prop: 'imgUrl',
      type: 'upload',
      listType: 'picture-img',
      canvasOption: {
        text: 'avue',
        ratio: 0.1
      },
      oss: 'ali',
      span: 24
    }
  ]
})
</script>

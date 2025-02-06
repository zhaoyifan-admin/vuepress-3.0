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
      label: '腾讯上传',
      prop: 'imgUrl',
      type: 'upload',
      listType: 'picture-img',
      fileType: 'img',
      oss: 'cos',
      span: 24
    }
  ]
})
</script>

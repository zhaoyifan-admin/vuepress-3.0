<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const action = 'https://api.avuejs.com/imgupload'

const form = ref({
  video: '/i/movie.ogg',
  imgUrl: [
    "/images/logo-bg.jpg",
    'https://www.w3school.com.cn/i/movie.ogg',
    'https://www.runoob.com/try/demo_source/horse.mp3'
  ],
})

const option = ref({
  column: [
    {
      label: '附件上传',
      prop: 'imgUrl',
      type: 'upload',
      multiple: true,
      span: 24,
      propsHttp: {
        url: 'url',
        name: 'name',
        res: 'data'
      },
      action
    },
    {
      label: '视频',
      prop: 'video',
      type: 'upload',
      propsHttp: {
        res: 'data',
        url: 'url',
        name: 'name',
        home: 'https://www.w3school.com.cn'
      },
      listType: 'picture-img',
      span: 24,
      action
    },
    {
      label: '照片墙',
      prop: 'imgUrl',
      listType: 'picture-card',
      type: 'upload',
      span: 24,
      action
    },
    {
      label: '缩略图上传',
      prop: 'imgUrl',
      type: 'upload',
      span: 24,
      listType: 'picture',
      action
    },
    {
      label: '拖拽上传',
      prop: 'imgUrl',
      type: 'upload',
      span: 24,
      dragFile: true,
      action
    },
  ]
})
</script>

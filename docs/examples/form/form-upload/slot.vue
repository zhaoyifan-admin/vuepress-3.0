<template>
  <tvue-form :option="option"
             v-model="form">
    <template #img-type="{ file }">
      <span>自定义模板{{ file }}</span>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  img: ['/images/logo-bg.jpg', 'https://www.w3school.com.cn/i/movie.ogg'],
});
const option = ref({
  column: [
    {
      label: '附件上传',
      prop: 'img',
      type: 'upload',
      span: 24,
      propsHttp: {
        res: 'data'
      },
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
});
</script>

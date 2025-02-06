<template>
  {{ form }}
  <tvue-form :option="option"
             v-model="form"> </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  img: ['/images/logo-bg.jpg', '/images/logo-bg.jpg', './xx/xx.sql']
});

const option = ref({
  column: [
    {
      label: '数组图片组',
      prop: 'img',
      drag: true,
      type: 'upload',
      propsHttp: {
        res: 'data'
      },
      span: 24,
      listType: 'picture-card',
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
});
</script>

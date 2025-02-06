<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const option = ref({
  column: [
    {
      label: '头像',
      prop: 'imgUrl3',
      type: 'upload',
      span: 24,
      propsHttp: {
        res: 'data'
      },
      fileText: '我是上传按钮',
      loadText: '上传等待文案',
      tip: '只能上传jpg/png用户头像，且不超过500kb',
      action: 'https://api.avuejs.com/imgupload'
    }
  ]
});
</script>

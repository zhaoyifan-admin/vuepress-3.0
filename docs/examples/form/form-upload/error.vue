<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-error="uploadError"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});

const option = ref({
  labelWidth: 120,
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
});

const uploadError = (error, column) => {
  ElMessage.error('上传失败回调');
  console.log(error, column);
};
</script>

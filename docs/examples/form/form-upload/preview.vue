<template>
  <tvue-form :option="option"
             v-model="form"
             :upload-preview="uploadPreview"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

const form = ref({
  imgUrl: [
    "/images/logo-bg.jpg",
    'https://www.w3school.com.cn/i/movie.ogg'
  ]
});

const option = ref({
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

// 方法定义
function uploadPreview (file, column, done) {
  ElMessageBox.confirm('是否放大查看图片', '确认', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    done();
  }).catch(() => {
    // 用户取消操作时的处理逻辑，如果需要的话
  });
}
</script>

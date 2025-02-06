<template>
  <el-button @click="handleOk"
             type="primary"
             icon="el-icon-camera">意见反馈</el-button>
  <el-dialog append-to-body
             title="意见反馈"
             top="50px"
             v-model:visible="box"
             width="60%">
    <el-input type="textarea"
              placeholder="请告诉我们遇到的问题或建议"
              v-model="form.text"></el-input>
    <br />
    <br />
    <div v-loading="flag"
         element-loading-text="正在截取屏幕数据">
      <img :src="form.img"
           style="width:100%" />
    </div>
    <template #footer>
      <el-button type="primary"
                 icon="el-icon-check"
                 @click="box = false">提 交</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, computed } from 'vue';
import { $Screenshot } from '@smallwei/avue';

const box = ref(false);
const form = ref({
  img: '',
  text: ''
});

const flag = computed(() => !form.value.img);

const handleOk = () => {
  form.value = {
    img: '',
    text: ''
  };
  $Screenshot(document.querySelector("#app")).then(canvas => {
    form.value.img = canvas.toDataURL("image/jpeg", 0.8);
    box.value = true;
  });

};

</script>

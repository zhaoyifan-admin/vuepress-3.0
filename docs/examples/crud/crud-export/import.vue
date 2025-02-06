<template>
  <div style="display:flex;">
    <el-button type="primary"
               @click="handleGet">下载模版</el-button>
    &nbsp;&nbsp;
    <el-upload :auto-upload="false"
               :show-file-list="false"
               action="action"
               :on-change="handleChange">
      <el-button type="primary">导入 excel</el-button>
    </el-upload>
  </div>
  <br />
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
let { proxy } = getCurrentInstance()
const data = ref([]);
const option = ref({
  column: [
    { label: 'id', prop: 'id' },
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' },
  ],
});

function handleGet () {
  window.open('/cdn/demo.xlsx');
}

function handleChange (file, fileList) {
  proxy.$Export.xlsx(file.raw).then((data) => {
    data.value = data.results;
  });
}
</script>

<template>
  <div style="display:flex;">
    <el-button type="primary"
               @click="handleGet">下载模版</el-button>
    <div style="width:20px;"></div>
    <el-upload :auto-upload="false"
               :show-file-list="false"
               action="action"
               @change="handleChange">
      <el-button type="primary">导入 excel</el-button>
    </el-upload>
  </div>
  <br />
  <tvue-crud :option="option"
             :data="list"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { $Export } from '@smallwei/avue'

const list = ref([]);
const option = ref({
  column: [{
    label: 'id',
    prop: 'id'
  }, {
    label: '姓名',
    prop: 'name'
  }, {
    label: '年龄',
    prop: 'sex'
  }]
});

const handleGet = () => {
  window.open('/cdn/demo.xlsx');
};

const handleChange = async (file) => {
  try {
    const data = await $Export.xlsx(file.raw);
    list.value = data.results;
  } catch (error) {
    ElMessage.error('导入失败');
  }
};
</script>

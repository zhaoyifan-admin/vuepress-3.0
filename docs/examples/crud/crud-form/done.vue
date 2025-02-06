<template>
  <tvue-crud :data="data"
             :option="option"
             @row-save="handleRowSave"
             @row-update="handleRowUpdate"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = {
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
};

const handleRowSave = (row, done, loading) => {
  ElMessage.success('1秒后关闭禁止表单');
  setTimeout(() => {
    loading();
    ElMessage.success('3秒后关闭表单');
  }, 1000);
  setTimeout(() => {
    done();
  }, 3000);
};

const handleRowUpdate = (row, index, done, loading) => {
  ElMessage.success('1秒后关闭禁止表单');
  setTimeout(() => {
    loading();
    ElMessage.success('3秒后关闭表单');
  }, 1000);
  setTimeout(() => {
    done();
  }, 3000);
};
</script>

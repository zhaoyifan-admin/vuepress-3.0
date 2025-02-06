<template>
  <tvue-crud :data="data"
             :option="option"
             @row-save="rowSave"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 数据定义
const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  editBtn: false,
  delBtn: false,
  addBtnText: '新增数据',
  addBtnIcon: 'el-icon-user',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const rowSave = (form, done, loading) => {
  ElMessage.success('模拟网络请求');
  form.id = new Date().getTime()
  setTimeout(() => {
    ElMessage.success('关闭按钮等待');
    loading();
  }, 1000);

  setTimeout(() => {
    ElMessage.success('新增数据: ' + JSON.stringify(form));
    done(form);
  }, 2000);
};
</script>

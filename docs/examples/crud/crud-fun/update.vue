<template>
  <tvue-crud :data="data"
             :option="option"
             @row-update="rowUpdate"></tvue-crud>
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
  addBtn: false,
  delBtn: false,
  editBtnText: '修改数据',
  editBtnIcon: 'el-icon-user',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

// 编辑数据处理
const rowUpdate = (form, index, done, loading) => {
  ElMessage.success('模拟网络请求');

  setTimeout(() => {
    ElMessage.success('关闭按钮等待');
    loading();
  }, 1000);

  setTimeout(() => {
    ElMessage.success(`编辑数据 ${JSON.stringify(form)} 数据序号 ${index}`);
    done(form);
  }, 2000);
};
</script>

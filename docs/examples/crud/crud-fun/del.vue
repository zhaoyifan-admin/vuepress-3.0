<template>
  <tvue-crud :data="data"
             :option="option"
             @row-del="rowDel"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

// 数据定义
const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  editBtn: false,
  addBtn: false,
  delBtnText: '删除数据',
  delBtnIcon: 'el-icon-user',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

// 删除处理
const rowDel = (form, index) => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage.success('删除成功!');
  }).catch(() => { });
};
</script>

<template>
  <tvue-crud :data="data"
             :option="option"
             @refresh-change="refreshChange"
             @row-save="rowSave"
             @row-update="rowUpdate"
             @row-del="rowDel"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';

const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const refreshChange = () => {
  ElMessage.success('刷新回调');
};

const rowSave = (form, done, loading) => {
  form.id = new Date().getTime();
  ElMessage.success('模拟网络请求');

  setTimeout(() => {
    ElMessage.success('关闭按钮等待');
    loading();
  }, 1000);

  setTimeout(() => {
    ElMessage.success('新增数据: ' + JSON.stringify(form));
    done(form);
  }, 2000);
};

const rowDel = (form, index, done) => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    done(form);
    ElMessage.success('删除成功!');
  }).catch(() => { });
};

const rowUpdate = (form, index, done, loading) => {
  ElMessage.success('模拟网络请求');

  setTimeout(() => {
    ElMessage.success('关闭按钮等待');
    loading();
  }, 1000);

  setTimeout(() => {
    ElMessage.success('编辑数据: ' + JSON.stringify(form) + ' 数据序号: ' + index);
    done(form);
  }, 2000);
};
</script>

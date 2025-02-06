<template>
  <tvue-crud :data="data"
             :option="option"
             ref="crud">
    <template #menu-left>
      <el-button type="danger"
                 icon="el-icon-plus"
                 @click="addRow">新增</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = {
  addBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
};

const crud = ref(null);

function addRow () {
  if (crud.value) {
    crud.value.rowAdd();
  } else {
    ElMessage.error('CRUD组件未加载');
  }
}
</script>

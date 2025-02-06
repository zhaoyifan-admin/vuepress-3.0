<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @selection-change="selectionChange">
    <template #menu-left="{ size }">
      <el-button type="success"
                 icon="el-icon-check"
                 :size="size"
                 @click="toggleAllSelection">选中全部</el-button>
      <el-button type="success"
                 icon="el-icon-check"
                 :size="size"
                 @click="toggleRowSelection(data[0])">选中第一行</el-button>
      <el-button type="success"
                 icon="el-icon-check"
                 :size="size"
                 @click="toggleSelection([data[1]])">选中第二行</el-button>
      <el-button type="danger"
                 icon="el-icon-delete"
                 :size="size"
                 @click="toggleSelection()">取消选择</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const crud = ref(null)
const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  selection: true,
  align: 'center',
  menuAlign: 'center',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const toggleAllSelection = () => {
  crud.value.toggleAllSelection();
};

const toggleSelection = (data) => {
  crud.value.toggleSelection(data);
};

const toggleRowSelection = (row) => {
  crud.value.toggleRowSelection(row, true);
};

const selectionChange = (list) => {
  ElMessage.success('选中的数据: ' + JSON.stringify(list));
};
</script>

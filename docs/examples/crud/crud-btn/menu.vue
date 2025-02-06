<template>
  <tvue-crud :data="data"
             :option="option"
             ref="crud">
    <template #menu="{ row, index, size }">
      <el-button type="danger"
                 :size="size"
                 icon="el-icon-edit"
                 @click="rowEdit(row, index)">编辑</el-button>
      <el-button type="success"
                 :size="size"
                 icon="el-icon-delete"
                 @click="rowDel(row, index)">删除</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = {
  delBtn: false,
  editBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
};

const crud = ref(null);

function rowEdit (row, index) {
  if (crud.value) {
    crud.value.rowEdit(row, index);
  }
}

function rowDel (row, index) {
  if (crud.value) {
    crud.value.rowDel(row, index);
  }
}
</script>

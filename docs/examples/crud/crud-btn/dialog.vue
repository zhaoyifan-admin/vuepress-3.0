<template>
  <tvue-crud :data="data"
             :option="option"
             ref="crud">
    <template #menu-form-before="{ row, index, type }">
      <el-tag type="primary"
              :size="size">提示</el-tag>
    </template>
    <template #menu-form="{ row, index, type }">
      <el-button type="primary"
                 icon="el-icon-check"
                 v-if="type === 'add'"
                 @click="rowSave">自定义新增</el-button>
      <el-button type="primary"
                 icon="el-icon-check"
                 v-if="type === 'edit'"
                 @click="rowUpdate">自定义修改</el-button>
      <el-button type="primary"
                 icon="el-icon-check"
                 @click="closeDialog">取消</el-button>
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
  saveBtn: false,
  updateBtn: false,
  cancelBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
};

const crud = ref(null);

function rowSave () {
  if (crud.value) {
    crud.value.rowSave();
  }
}

function rowUpdate () {
  if (crud.value) {
    crud.value.rowUpdate();
  }
}

function closeDialog () {
  if (crud.value) {
    crud.value.closeDialog();
  }
}
</script>

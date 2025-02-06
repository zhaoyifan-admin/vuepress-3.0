<template>
  <tvue-crud ref="crud"
             :option="option1"
             :data="data1"
             @tree-load="treeLoad"
             @row-save="rowSave"
             @row-update="rowUpdate">
    <template #menu="{row, size}">
      <el-button :size="size"
                 text
                 type="primary"
                 @click="handleAdd(row)">新增子级</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const crud = ref(null);
const parentId = ref(undefined);

const option1 = {
  lazy: true,
  rowKey: 'id',
  column: [{
    label: '姓名',
    prop: 'name'
  }, {
    label: '日期',
    prop: 'date'
  }, {
    label: '地址',
    prop: 'address',
    overHidden: true
  }]
};

const data1 = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    hasChildren: true
  }, {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }
]);

function rowDel (row, index, done) {
  done(row);
}

function rowSave (row, done) {
  row.parentId = parentId.value;
  row.id = new Date().getTime();
  parentId.value = undefined;
  done(row);
}

function rowUpdate (row, index, done) {
  done(row);
}

function handleAdd (row) {
  parentId.value = row.id;
  crud.value.rowAdd();
}

function treeLoad (tree, treeNode, resolve) {
  setTimeout(() => {
    resolve([{
      id: new Date().getTime(),
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      hasChildren: true
    }]);
  }, 1000);
}
</script>

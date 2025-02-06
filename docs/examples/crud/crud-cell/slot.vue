<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"
             @row-update="addUpdate"
             @row-save="rowSave"
             @row-click="handleRowClick">
    <template #age="{row}">
      <el-tag>{{row.age}}</el-tag>
    </template>
    <template #age-form="{row,disabled}">
      自定义:<el-input v-model="row.age"
                :disabled="disabled"></el-input>
    </template>
    <span></span>
    <template #name-form="{row}">
      <el-input v-model="row.name"
                :disabled="row.$index==2"></el-input>
    </template>
    <template #menu-left="{}">
      <el-button @click="addRow">添加10条</el-button>
    </template>
    <template #menu="{row,index,size}">
      <el-button @click="addBreakRow(row,index)"
                 :size="size"
                 type="primary"
                 text>向上添加</el-button>
      <el-button @click="addNextRow(row,index)"
                 :size="size"
                 type="primary"
                 text>向下添加</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([{
  id: 0,
  sex: 1,
  age: 18,
  $cellEdit: true
}, {
  id: 1,
  name: '李四',
  age: 18,
  sex: 0,
}, {
  id: 1,
  name: '王五',
  age: 18,
  sex: 0,
  $cellEdit: true
}]);

const option = ref({
  addBtn: false,
  addRowBtn: true,
  cellBtn: true,
  menuWidth: 250,
  column: [{
    label: '姓名',
    prop: 'name',
    cell: true,
    rules: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'blur'
      }
    ]
  }, {
    label: '性别',
    prop: 'sex',
    type: 'select',
    dicData: [{
      label: '男',
      value: 0
    }, {
      label: '女',
      value: 1
    }],
    cell: true
  }, {
    label: '年龄',
    prop: 'age',
    dicData: [{
      label: '男',
      value: 0
    }, {
      label: '女',
      value: 1
    }],
    rules: [
      {
        required: true,
        message: '请输入年龄',
        trigger: 'blur'
      }
    ],
    cell: true
  }, {
    label: '开关',
    prop: 'switch',
    type: 'switch',
    cell: true
  }]
});

const addUpdate = (form, index, done, loading) => {
  ElMessage.success('模拟网络请求');
  setTimeout(() => {
    ElMessage.success('关闭按钮等待');
    loading();
  }, 1000);
  setTimeout(() => {
    ElMessage.success(
      '编辑数据' + JSON.stringify(form) + '数据序号' + index
    );
    done();
  }, 2000);
};

const rowSave = (form, done) => {
  ElMessage.success(
    '新增数据' + JSON.stringify(form)
  );
  done();
};

const addRow = () => {
  ElMessage.success('正在添加，请稍后');
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      refs.crud.rowCellAdd({
        name: '',
      });
    }
  }, 500);
};

const addNextRow = (row, index) => {
  data.value.splice(index + 1, 0, {
    $cellEdit: true
  });
};

const addBreakRow = (row, index) => {
  data.value.splice(index, 0, {
    $cellEdit: true
  });
};

const handleRowClick = (row) => {
  ElMessage({
    showClose: true,
    message: '序号' + row.$index,
    type: 'success',
  });
};
</script>

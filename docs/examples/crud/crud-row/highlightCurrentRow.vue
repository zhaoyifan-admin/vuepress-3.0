<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @current-row-change="handleCurrentRowChange"></tvue-crud>
  <div style="margin-top: 20px">
    <el-button @click="setCurrent(data[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';
const crud = ref(null);
const data = ref([
  {
    name: '张三',
    sex: '男'
  },
  {
    name: '李四',
    sex: '女'
  }
]);

const option = ref({
  highlightCurrentRow: true,
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});

const setCurrent = (row) => {
  crud.value.setCurrentRow(row);
};

const handleCurrentRowChange = (val) => {
  ElNotification({
    showClose: true,
    message: '单选' + JSON.stringify(val),
    type: 'success'
  });
};
</script>

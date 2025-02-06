<template>
  <el-radio-group v-model="direction">
    <el-radio label="left">居左</el-radio>
    <el-radio label="center">居中</el-radio>
    <el-radio label="right">居右</el-radio>
  </el-radio-group>
  <br /><br />
  <tvue-crud :option="option"
             :data="list"></tvue-crud>
</template>

<script setup>
import { ref, watch } from 'vue';

const direction = ref('right');
const list = ref([
  {
    id: 1,
    name: '张三',
    sex: 12
  }, {
    id: 2,
    name: '李四',
    sex: 12
  }
]);

const option = ref({
  dialogMenuPosition: 'right',
  column: [
    {
      label: 'id',
      prop: 'id'
    }, {
      label: '姓名',
      prop: 'name'
    }, {
      label: '年龄',
      prop: 'sex'
    }
  ]
});

watch(direction, (value) => {
  option.value.dialogMenuPosition = value;
});
</script>

<template>
  <el-radio-group v-model="direction">
    <el-radio label="ltr">从左往右开</el-radio>
    <el-radio label="rtl">从右往左开</el-radio>
    <el-radio label="ttb">从上往下开</el-radio>
    <el-radio label="btt">从下往上开</el-radio>
  </el-radio-group>
  <br /><br />
  <tvue-crud :option="option"
             :data="list"></tvue-crud>
</template>

<script setup>
import { ref, watch } from 'vue';

const direction = ref('rtl');
const list = ref([
  {
    name: '张三',
    sex: 12
  }, {
    name: '李四',
    sex: 12
  }
]);

const option = ref({
  dialogDirection: 'rtl',
  dialogType: 'drawer',
  column: [
    {
      label: '姓名',
      prop: 'name'
    }, {
      label: '年龄',
      prop: 'sex'
    }
  ]
});

watch(direction, (value) => {
  option.value.dialogDirection = value;
});
</script>

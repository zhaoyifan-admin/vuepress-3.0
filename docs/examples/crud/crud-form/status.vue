<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    name: '张三',
    sex: '男',
    grade: 0
  }, {
    name: '李四',
    sex: '女',
    grade: 1
  }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      editDisabled: true
    }, {
      label: '性别',
      prop: 'sex',
      editDisplay: false
    }, {
      label: '权限',
      prop: 'grade',
      editDetail: true,
      addDisabled: true
    }, {
      label: '测试',
      prop: 'test',
      addDisplay: false
    }
  ]
});
</script>

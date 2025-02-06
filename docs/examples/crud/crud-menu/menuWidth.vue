<template>
  <tvue-crud :data="data"
             :option="option1" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option1 = ref({
  menuTitle: '其它',
  menuWidth: 250,
  menuAlign: 'left',
  menuHeaderAlign: 'left',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});
</script>

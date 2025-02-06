<template>
  <tvue-crud :option="option"
             :permission="getPermission"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' }
  ]
});
const data = ref([
  { id: 1, name: '张三', sex: 12 },
  { id: 2, name: '李四', sex: 20 }
]);

const getPermission = (key, row, index) => {
  if (key === 'editBtn' && index === 0) {
    return false;
  } else if (key === 'delBtn' && index === 1) {
    return false;
  }
  return true;
};
</script>

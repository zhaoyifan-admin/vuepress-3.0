<template>
  <tvue-crud :data="data"
             :option="option"
             @row-dblclick="handleRowDBLClick"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});


const handleRowDBLClick = (row, event) => {
  ElNotification({
    showClose: true,
    message: JSON.stringify(row),
    type: 'success',
  });
};
</script>

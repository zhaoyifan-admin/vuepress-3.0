<template>
  <tvue-crud :data="data"
             :option="option"
             @refresh-change="refreshChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 数据定义
const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  addBtn: false,
  menu: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

// 刷新回调处理
const refreshChange = () => {
  ElMessage.success('刷新回调');
};
</script>

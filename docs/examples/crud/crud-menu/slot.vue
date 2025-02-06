<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu-header>
      <el-tag @click="tip">操作</el-tag>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  menuWidth: 380,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const tip = () => {
  ElMessage.success('自定义头部按钮');
};
</script>

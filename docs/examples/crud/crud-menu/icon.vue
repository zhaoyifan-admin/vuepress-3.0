<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu="{ row }">
      <el-button @click="tip(row)"
                 icon="el-icon-share"></el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' },
  { name: '王五', sex: '女' },
  { name: '赵六', sex: '男' }
]);

const option = ref({
  menuType: 'icon',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const tip = (row) => {
  ElMessage.success('自定义按钮' + JSON.stringify(row));
};
</script>

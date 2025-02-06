<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu="{ size, row, index }">
      <el-button @click="tip(row, index)"
                 icon="el-icon-check"
                 text
                 type="primary"
                 :size="size">
        自定义后菜单
      </el-button>
    </template>
    <template #menu-before="{ size, row, index }">
      <el-tag type="primary"
              :size="size">提示</el-tag>
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

const tip = (row, index) => {
  ElMessage.success('自定义按钮' + JSON.stringify(row));
};
</script>

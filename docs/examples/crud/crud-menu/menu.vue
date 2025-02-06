<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu-btn-before="{ row }">
      <el-tag type="primary"
              :size="size">提示</el-tag>
    </template>
    <template #menu-btn="{ row }">
      <el-dropdown-item divided
                        @click="tip(row)">自定义后按钮</el-dropdown-item>
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
  menuType: 'menu',
  menuBtnTitle: '自定义名称',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const size = ref('medium'); // 设置标签大小

const tip = (row) => {
  ElMessage.success('自定义按钮' + JSON.stringify(row));
};
</script>

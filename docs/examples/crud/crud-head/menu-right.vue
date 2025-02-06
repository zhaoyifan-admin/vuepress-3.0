<template>
  <tvue-crud :data="data"
             :option="option">
    <template #menu-right="{ size }">
      <el-button type="primary"
                 icon="el-icon-edit"
                 circle
                 :size="size"></el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

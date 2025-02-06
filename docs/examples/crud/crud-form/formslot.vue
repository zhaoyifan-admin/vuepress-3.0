<template>
  <tvue-crud :data="data"
             :option="option"
             v-model="form">
    <template #name-form="{ type, disabled }">
      <el-tag v-if="type === 'add'">新增</el-tag>
      <el-tag v-else-if="type === 'edit'">修改</el-tag>
      <el-tag v-else-if="type === 'view'">查看</el-tag>
      <el-tag>{{ user.name ? user.name : '暂时没有内容' }}</el-tag>
      <el-input :disabled="disabled"
                v-model="user.name"></el-input>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [
        {
          required: true,
          message: "请输入姓名",
          trigger: "blur"
        }
      ]
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

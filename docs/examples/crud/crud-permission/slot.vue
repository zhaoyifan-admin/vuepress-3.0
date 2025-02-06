<template>
  <tvue-crud :option="option"
             ref="crud"
             :data="data">
    <template #menu="{ size, row, index }">
      <el-button text
                 type="primary"
                 icon="el-icon-edit"
                 :size="size"
                 :disabled="index === 0"
                 @click="handleEdit(row, index)">编辑</el-button>
      <el-button text
                 type="primary"
                 icon="el-icon-delete"
                 :size="size">删除</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  editBtn: false,
  delBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' }
  ]
});
const data = ref([
  { id: 1, name: '张三', sex: 12 },
  { id: 2, name: '李四', sex: 20 }
]);

const crud = ref(null);


const handleEdit = (row, index) => {
  if (crud.value) {
    crud.value.rowEdit(row, index);
  }
};

</script>

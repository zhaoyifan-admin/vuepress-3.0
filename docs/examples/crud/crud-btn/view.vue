<template>
  <tvue-crud :data="data"
             :option="option"
             ref="crud">
    <template #menu="{ row, index, size }">
      <el-button type="success"
                 icon="el-icon-delete"
                 :size="size"
                 @click="rowView(row, index)">查看</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = {
  delBtn: false,
  editBtn: false,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
};

const crud = ref(null);

function rowView (row, index) {
  if (crud.value) {
    crud.value.rowView(row, index);
  }
}
</script>

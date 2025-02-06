<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @row-click="rowClick">
    <template #radio="{ row }">
      <el-radio v-model="selectRow"
                :label="row.$index">-</el-radio>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'

const selectRow = ref('');
const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);
const option = ref({
  align: 'center',
  menuAlign: 'center',
  column: [
    { label: '', prop: 'radio', width: 60, hide: false },
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const rowClick = (row) => {
  selectRow.value = row.$index;
  ElMessage.success(`选择序号 ${row.$index}`);
};
</script>

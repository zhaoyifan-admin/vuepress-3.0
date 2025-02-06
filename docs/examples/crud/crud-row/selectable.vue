<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option"
             @selection-change="selectionChange" />
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'

const data = ref([
  { id: 1, name: '张三', sex: '男' },
  { id: 2, name: '李四', sex: '女' }
]);

const option = ref({
  selection: true,
  selectable: (row, index) => index === 1,
  tip: false,
  align: 'center',
  menuAlign: 'center',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const selectionChange = (list) => {
  ElMessage.success('选中的数据', JSON.stringify(list));
};
</script>

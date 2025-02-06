<template>
  <tvue-crud ref="crud"
             :option="option1"
             :data="data"
             @expand-change="expandChanges">
    <template #expand="{ row }">
      {{ row }}
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'; // 根据实际使用的库导入消息组件

const data = ref([
  { id: 1, name: '张三', sex: 12 },
  { id: 2, name: '李四', sex: 20 }
]);

const option1 = ref({
  expand: true,
  expandRowKeys: [],
  rowKey: 'id',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' }
  ]
});

function expandChanges (row, expandList) {
  if (expandList.length) {
    option1.value.expandRowKeys = [];
    if (row) {
      option1.value.expandRowKeys.push(row.id);
    }
  } else {
    option1.value.expandRowKeys = [];
  }
  ElMessage.success('展开回调');
}
</script>

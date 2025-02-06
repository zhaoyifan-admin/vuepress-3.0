<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"
             @expand-change="expandChange">
    <template #expand="{ row }">
      {{ row }}
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const option = ref({
  expand: true,
  expandRowKeys: [1],
  rowKey: 'id',
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '年龄',
      prop: 'sex'
    }
  ]
});

const data = ref([
  {
    id: 1,
    name: '张三',
    sex: 12
  },
  {
    id: 2,
    name: '李四',
    sex: 20
  }
]);

const expandChange = (row, expendList) => {
  ElMessage.success('展开回调');
};
</script>

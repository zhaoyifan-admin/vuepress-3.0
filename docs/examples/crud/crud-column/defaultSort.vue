<template>
  <tvue-crud :data="data"
             :option="option1"
             @sort-change="sortChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  {
    name: '张三',
    sex: '男'
  },
  {
    name: '李四',
    sex: '女'
  }
]);

const option1 = ref({
  defaultSort: {
    prop: 'name',
    order: 'descending'
  },
  border: true,
  column: [
    {
      sortable: true,
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});

function sortChange (val) {
  ElMessage.success(JSON.stringify(val));
}
</script>

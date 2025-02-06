<template>
  <tvue-crud :option="option"
             :data="data"
             @search-change="searchChange"
             @search-reset="resetChange">
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([{ name: '张三' }]);
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
    }
  ]
});

function resetChange (item) {
  ElMessage.success('清空回调');
}

function searchChange (params, done) {
  ElMessage.success('2s后关闭锁定');
  setTimeout(() => {
    done();
    ElMessage.success(JSON.stringify(params));
  }, 2000);
}
</script>

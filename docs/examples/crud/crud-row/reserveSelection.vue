<template>
  <tvue-crud v-model:page="page"
             :data="data"
             :option="option"
             @selection-change="selectionChange"
             @on-load="onLoad" />
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const page = ref({
  pageSize: 2,
  pageSizes: [2],
  total: 4,
});

const data = ref([]);

const option = ref({
  selection: true,
  reserveSelection: true,
  align: 'center',
  menuAlign: 'center',
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' },
  ],
});

const onLoad = (page) => {
  if (page.currentPage === 1) {
    data.value = [
      { id: 1, name: '张三', sex: '男' },
      { id: 2, name: '李四', sex: '女' },
    ];
  } else if (page.currentPage === 2) {
    data.value = [
      { id: 3, name: '王五', sex: '女' },
      { id: 4, name: '赵六', sex: '女' },
    ];
  }
};

const selectionChange = (list) => {
  ElMessage.success('选中的数据' + JSON.stringify(list));
};
</script>

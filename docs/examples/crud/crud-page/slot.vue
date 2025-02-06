<template>
  {{ page }}
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"
             @size-change="sizeChange"
             @current-change="currentChange" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const page = ref({
  currentPage: 1,
  total: 0,
  layout: "total,pager,prev,next",
  background: false,
  pageSize: 10
});

const data = ref([]);
const option = ref({
  align: 'center',
  menuAlign: 'center',
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});

function getList () {
  page.value.total = 40;
  if (page.value.currentPage === 1) {
    data.value = [
      { id: 1, name: '张三', sex: '男' },
      { id: 2, name: '李四', sex: '女' }
    ];
  } else if (page.value.currentPage === 2) {
    data.value = [
      { id: 3, name: '王五', sex: '女' },
      { id: 4, name: '赵六', sex: '女' }
    ];
  }
}

function sizeChange (val) {
  page.value.currentPage = 1;
  page.value.pageSize = val;
  getList();
  ElMessage.success(`行数 ${val}`);
}

function currentChange (val) {
  page.value.currentPage = val;
  getList();
  ElMessage.success(`页码 ${val}`);
}

onMounted(() => {
  getList();
});
</script>
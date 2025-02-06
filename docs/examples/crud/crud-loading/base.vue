<template>
  <el-button type="primary"
             icon="el-icon-sort"
             @click="getOption">加载等待框</el-button>
  <br /> <br />
  <tvue-crud :key="reload"
             :data="data"
             :option="option"
             :table-loading="loading"></tvue-crud>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const reload = ref(Math.random());
const loading = ref(true);
const data = ref([]);
const option = ref({
  border: true,
  align: 'center',
  menuAlign: 'center',
  loadingText: "Loading...",
  loadingSpinner: "svg",
  loadingSvgViewBox: "-10, -10, 50, 50",
  loadingBackground: "rgba(122, 122, 122, 0.8)",
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' }
  ]
});

const getOption = () => {
  loading.value = true;
  ElMessage.success('模拟2s后服务端动态加载');
  setTimeout(() => {
    data.value = [
      { name: '张三', sex: '男', province: '110000' },
      { name: '李四', sex: '女', province: '120000' }
    ];
    loading.value = false;
    reload.value = Math.random();
  }, 2000);
};

onMounted(() => {
  getOption();
});
</script>

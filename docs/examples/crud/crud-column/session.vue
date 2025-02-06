<template>
  <tvue-crud ref="crud"
             :key="reload"
             :option="option"
             :data="data">
    <template #menu-left="{size}">
      <el-button @click="saveOption"
                 type="danger"
                 :size="size">保存配置</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 设置常量
const key = 'tvue-option';

// 定义响应式数据
const reload = ref(Math.random());
const data = ref([
  { text1: '内容1-1', text2: '内容2-1', text3: '110000' },
  { text1: '内容1-2', text2: '内容2-2', text3: '120000' },
  { text1: '内容1-3', text2: '内容2-3' },
  { text1: '内容1-4', text2: '内容2-4' },
  { text1: '内容1-5', text2: '内容2-5' }
]);
const option = ref({
  sortable: true,
  addBtn: false,
  menu: false,
  border: true,
  align: 'center',
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' },
    { label: '列内容3', prop: 'text3', type: 'select', props: { label: 'name', value: 'code' }, dicUrl: 'https://cli.avuejs.com/api/area/getProvince' }
  ]
});

// 在组件挂载后读取本地存储
onMounted(() => {
  const storedOption = localStorage.getItem(key);
  if (storedOption) {
    option.value = JSON.parse(storedOption);
    reload.value = Math.random();
  }
});

// 保存配置到本地存储
const saveOption = () => {
  localStorage.setItem(key, JSON.stringify(option.value));
  ElMessage.success('配置保存成功');
};
</script>

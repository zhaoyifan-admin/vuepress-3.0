<template>
  <tvue-crud ref="crud"
             @date-change="dateChange"
             :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([
  { text1: '内容1-1', text2: '内容1-2' },
  { text1: '内容2-1', text2: '内容2-2' },
  { text1: '内容3-1', text2: '内容3-2' }
]);

const option = ref({
  dateBtn: true,
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' }
  ]
});

const dateChange = (date) => {
  ElMessage.success(JSON.stringify(date));
};
</script>

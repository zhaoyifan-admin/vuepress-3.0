<template>
  <tvue-crud :option="option"
             :data="data"
             @sortable-change="sortableChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'; // 或根据实际使用的库导入消息组件

const data = ref([
  { text1: '内容1-1', text2: '内容1-2' },
  { text1: '内容2-1', text2: '内容2-2' },
  { text1: '内容3-1', text2: '内容3-2' },
  { text1: '内容4-1', text2: '内容4-2' },
  { text1: '内容5-1', text2: '内容5-2' }
]);

const option = ref({
  rowSort: true,
  column: [
    { label: '列内容1', prop: 'text1' },
    { label: '列内容2', prop: 'text2' }
  ]
});

function sortableChange (oldIndex, newIndex) {
  ElMessage.success(`${oldIndex}, ${newIndex}`);
  console.log(oldIndex, newIndex);
}
</script>

<template>
  <tvue-tabs :option="option"
             @change="handleChange"></tvue-tabs>
  <span v-if="type.prop === 'tab1'">选项卡内容1</span>
  <span v-else-if="type.prop === 'tab2'">选项卡内容2</span>
  <span v-else-if="type.prop === 'tab3'">选项卡内容3</span>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const option = {
  column: [{
    icon: 'el-icon-info',
    label: '选项卡1',
    prop: 'tab1',
  }, {
    icon: 'el-icon-warning',
    label: '选项卡2',
    prop: 'tab2',
  }, {
    icon: 'el-icon-question',
    label: '选项卡3',
    prop: 'tab3',
  }]
};

const type = ref({});

onMounted(() => {
  type.value = option.column[0];
});

const handleChange = (column) => {
  type.value = column;
  ElMessage.success(JSON.stringify(column));
};
</script>

<template>
  <tvue-crud :option="option"
             :data="data"
             @grid-status-change="gridStatusChange"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 数据定义
const baseUrl = 'https://cli.avuejs.com/api/area';

const data = ref([
  { name: '张三', sex: '男', age: 18, province: '110000' },
  { name: '李四', sex: '女', age: 18, province: '130000' }
]);

const option = ref({
  grid: true,
  column: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'sex' },
    { label: '年龄', prop: 'age' },
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: { label: 'name', value: 'code' },
      dicUrl: `${baseUrl}/getProvince`
    }
  ]
});

// 处理网格状态变化
const gridStatusChange = (val) => {
  console.log('status', val);
};
</script>

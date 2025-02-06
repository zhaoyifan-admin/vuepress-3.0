<template>

  <tvue-crud :data="data"
             :option="option">
    <template #tip>
      <el-tag type="danger">自定义内容</el-tag>
    </template>
  </tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
const data = ref([{
  id: 1,
  name: '张三',
  sex: '男'
}, {
  id: 2,
  name: '李四',
  sex: '女'
}])
const option = ref({
  selection: true,
  align: 'center',
  menuAlign: 'center',
  column: [
    {
      label: '姓名',
      prop: 'name'
    }, {
      label: '性别',
      prop: 'sex'
    }
  ]
})
</script>
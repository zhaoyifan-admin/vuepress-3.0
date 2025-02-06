<template>
  <tvue-crud :data="data"
             v-model="form"
             :before-open="beforeOpen"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

const form = ref({});
const data = ref([{
  name: '张三',
  sex: '男'
}]);
const option = {
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
};

const beforeOpen = (done, type, loading) => {
  if (['view', 'edit'].includes(type)) {
    loading()
    setTimeout(() => {
      done()
    }, 300)
  } else {
    // 新增逻辑
    form.value.name = '初始化赋值';
    done();
  }
};
</script>

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
  ElMessageBox.alert(`我是${type}`, '提示', {
    confirmButtonText: '确定'
  }).then(() => {
    if (['view', 'edit'].includes(type)) {
      // 查看和编辑逻辑
    } else {
      // 新增逻辑
      form.value.name = '初始化赋值';
    }
    done();
  }).catch(() => {
    // 处理取消或关闭的逻辑（如果有需要）
  });
};
</script>

<template>
  <tvue-crud :data="data"
             v-model="form"
             :before-close="beforeClose"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus'

const form = ref({});
const data = ref([{
  name: '张三',
  sex: '男'
}]);
const option = ref({
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

const beforeClose = (done, type) => {
  ElMessageBox.confirm('确认关闭？')
    .then(() => {
      done();
    })
    .catch(() => { });
};
</script>


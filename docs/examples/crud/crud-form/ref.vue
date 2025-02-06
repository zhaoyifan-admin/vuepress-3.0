<template>
  <tvue-crud ref="crud"
             :data="data"
             :before-open="beforeOpen"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const data = ref([{
  text: '测试数据'
}]);

const option = ref({
  labelWidth: 120,
  column: [{
    label: '测试框',
    prop: 'text',
  }]
});

const crud = ref(null);

const beforeOpen = (done) => {
  done();
  setTimeout(() => {
    ElMessage.success('查看控制台');
    console.log('text的ref对象');
    console.log(crud.value.getPropRef('text'));
  }, 0);
};
</script>

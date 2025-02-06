<template>
  <tvue-crud :option="option"
             :data="data"
             v-model="form">
    <template #info-form="{}">
      <tvue-crud :option="infoOption"
                 :data="form.info"></tvue-crud>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({});
const data = ref([{
  name: '张三',
  info: [
    { sex: 15 },
    { sex: 16 }
  ]
}]);

const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { labelWidth: 0, label: '', prop: 'info', span: 24, hide: true }
  ]
});

const infoOption = ref({
  column: [
    { label: '年龄', prop: 'sex' }
  ]
});
</script>

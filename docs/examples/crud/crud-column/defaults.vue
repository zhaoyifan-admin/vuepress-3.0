<template>
  <tvue-crud ref="crud"
             v-model:defaults="defaults"
             :option="option"
             :data="data">
    <template #menu-left="{ size }">
      <el-button type="primary"
                 :size="size"
                 @click="change">改变配置</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const type = ref(false);
const defaults = ref({});
const data = ref([
  {
    text1: 0
  }
]);

const option = ref({
  column: [
    {
      label: '内容1',
      prop: 'text1',
      type: 'radio',
      dicData: [
        { label: '显示', value: 0 },
        { label: '隐藏', value: 1 }
      ]
    },
    {
      label: '内容2',
      prop: 'text2',
      display: true
    },
    {
      label: '内容3',
      prop: 'text3'
    }
  ]
});

const crud = ref(null);

function change () {
  if (type.value) {
    defaults.value.text2 = { hide: true };
    defaults.value.text3 = { label: '内容3' };
  } else {
    defaults.value.text2 = { hide: false };
    defaults.value.text3 = { label: '有没有发现我变了' };
  }
  type.value = !type.value;
  crud.value.refreshTable();
}
</script>

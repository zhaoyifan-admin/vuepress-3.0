<template>
  <tvue-crud :data="data"
             :option="option"
             v-model="form"></tvue-crud>
</template>

<script setup>
import { h, ref } from 'vue';

const form = ref({});
const data = ref([
  {
    name: '张三',
    sex: '男'
  }, {
    name: '李四',
    sex: '女'
  }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      renderForm: ({ row }) => {
        return h('p',
          {
            id: 'box',
            class: { 'demo': true },
            style: { color: 'pink', lineHeight: '30px' },
          }, row.name || 'name');
      }
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

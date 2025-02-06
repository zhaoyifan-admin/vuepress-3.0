<template>
  <tvue-crud :option="option"
             :data="data" />
</template>

<script setup>
import { ref } from 'vue';

const dic = [
  { label: '选项1', value: 1 },
  { label: '选项2', value: 2 }
];

const data = ref([{
  selects: [1, 2],
  select: 1
}]);

const option = ref({
  column: [
    {
      label: '多选框',
      prop: 'selects',
      type: 'select',
      multiple: true,
      search: true,
      searchType: 'checkbox',
      searchSpan: 24,
      dicData: dic
    },
    {
      label: '单选框',
      prop: 'select',
      type: 'select',
      search: true,
      searchType: 'radio',
      searchSpan: 24,
      dicData: dic
    }
  ]
});
</script>

<template>
  <el-button type="primary"
             @click="updateOption">更改配置</el-button><br /><br />
  <tvue-form ref="form"
             :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { findObject } from '@smallwei/avue'
const form = ref({});
const option = ref({
  column: [{
    label: '字典',
    prop: 'checkbox',
    span: 24,
    type: 'checkbox',
    dicData: [
      { label: '单选字典1', value: 1 },
      { label: '单选字典0', value: 2 }
    ]
  }]
});

function updateOption () {
  const column = findObject(option.value.column, 'checkbox');
  if (column) {
    column.type = 'radio';
    column.dicData = [
      { label: '下拉框字典1', value: 1 },
      { label: '下拉框字典0', value: 2 }
    ];
  }
}

</script>

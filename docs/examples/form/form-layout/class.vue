<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref(({
  column: [
    {
      label: '姓名',
      prop: 'name',
      span: 12,
      row: true
    },
    {
      label: '性别',
      prop: 'sex',
      span: 12,
      row: true
    },
    {
      label: '身份证号',
      prop: 'id',
      span: 12
    },
    {
      label: '视频',
      prop: 'video',
      type: 'upload',
      className: 'upload',
      listType: 'picture-img'
    }
  ]
}));
</script>

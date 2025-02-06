<template>
  <tvue-form :option="option"> </tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '图标选择器',
      prop: 'icon',
      type: 'icon',
      iconList: [{
        label: '基本图标',
        list: [{
          label: '名称1',
          value: 'el-icon-info'
        }, {
          label: '名称2',
          value: 'el-icon-error'
        }, {
          label: '名称3',
          value: 'el-icon-success'
        }, {
          label: '名称4',
          value: 'el-icon-warning'
        }, {
          label: '名称5',
          value: 'el-icon-question'
        }]
      }, {
        label: '方向图标',
        list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']
      }, {
        label: '符号图标',
        list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
      }]
    }
  ]
})
</script>
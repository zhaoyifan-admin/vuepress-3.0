<template>
  <el-row style="margin-bottom:20px">
    <el-radio-group v-model="sizeValue">
      <el-radio label="large">large</el-radio>
      <el-radio label="default">default</el-radio>
      <el-radio label="small">small</el-radio>
    </el-radio-group>
  </el-row>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref, computed } from 'vue'

const sizeValue = ref('default')

const option = computed(() => ({
  size: sizeValue.value,
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    },
    {
      label: '年龄',
      prop: 'number',
      type: 'number'
    }
  ]
}))
</script>

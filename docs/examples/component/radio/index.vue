<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-radio v-model="form"
                  :dic="dic"></tvue-radio>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref(0)
const dic = [
  { label: '选项1', value: 0 },
  { label: '选项2', value: 1 }
]
</script>

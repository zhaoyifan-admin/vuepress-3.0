<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-select v-model="form"
                   placeholder="请选择内容"
                   type="tree"
                   :dic="dic"></tvue-select>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值: {{ form1 }}<br />
      <tvue-select all
                   multiple
                   v-model="form1"
                   placeholder="请选择内容"
                   type="tree"
                   :dic="dic"></tvue-select>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref('')
const form1 = ref([0, 1])
const dic = [
  {
    label: '选项1',
    desc: '描述1',
    disabled: true,
    value: 0
  },
  {
    label: '选项2',
    desc: '描述2',
    value: 1
  }
]
</script>

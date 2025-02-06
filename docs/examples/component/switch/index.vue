<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-switch v-model="form"
                   :dic="dic"></tvue-switch>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      颜色值: {{ form }}<br />
      <tvue-switch active-color="#13ce66"
                   inactive-color="#ff4949"
                   v-model="form"
                   :dic="dic"></tvue-switch>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      图标值: {{ form }}<br />
      <tvue-switch active-icon-class="el-icon-s-tools"
                   inactive-icon-class="el-icon-setting"
                   v-model="form"
                   :dic="dic"></tvue-switch>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref(1)
const dic = [
  { label: '选项1', value: 0 },
  { label: '选项2', value: 1 }
]
</script>

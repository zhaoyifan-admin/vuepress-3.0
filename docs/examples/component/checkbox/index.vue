<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <el-checkbox-group v-model="form"
                         placeholder="请选择内容">
        <el-checkbox v-for="item in dic"
                     :key="item.value"
                     :label="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{form1}}<br />
      <el-checkbox-group v-model="form1"
                         placeholder="请选择内容">
        <el-checkbox v-for="item in dic"
                     :key="item.value"
                     :label="item.value">{{ item.label }}</el-checkbox>
      </el-checkbox-group>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const form = ref([0, 1]);
const form1 = ref([]);
const dic = [
  { label: '选项1', value: 0 },
  { label: '选项2', value: 1 }
];
</script>

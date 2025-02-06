<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-date v-model="form"
                 format="YYYY年MM月DD日"
                 value-format="YYYY-MM-DD"
                 placeholder="请选择日期"></tvue-date>
      <el-col :span="24"></el-col>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{ form1 }}<br />
      <tvue-date v-model="form1"
                 type="datetime"
                 format="YYYY年MM月DD日 HH:mm:ss"
                 value-format="YYYY-MM-DD HH:mm:ss"
                 placeholder="请选择日期"></tvue-date>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const form = ref('2020-01-01');
const form1 = ref('2020-01-01 12:00:00');
</script>

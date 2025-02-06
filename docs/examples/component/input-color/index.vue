<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-input-color placeholder="请选择颜色"
                        v-model="form"></tvue-input-color>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{ form1 }}<br />
      <tvue-input-color color-format="hex"
                        :show-alpha="false"
                        placeholder="请选择颜色"
                        v-model="form1"></tvue-input-color>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const form = ref('rgba(255, 120, 0, 1)');
const form1 = ref('#AE4141');
</script>

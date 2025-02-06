<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-input v-model="form"
                  placeholder="请输入内容"></tvue-input>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const form = ref('我是内容');
</script>

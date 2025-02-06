<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-array type="img"
                  v-model="form"
                  placeholder="请输入内容"></tvue-array>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const form = ref([
  'https://avuejs.com/images/logo.png',
  'https://avuejs.com/images/logo.png',
]);
</script>

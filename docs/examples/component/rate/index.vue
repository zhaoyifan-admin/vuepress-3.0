<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-rate v-model="form"></tvue-rate>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref(4)
</script>

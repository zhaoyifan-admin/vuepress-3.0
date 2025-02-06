<template>
  <el-row :span="24">
    <el-col :span="6">
      值: {{ form }}<br />
      <tvue-slider v-model="form"
                   :max="100"
                   :min="20"></tvue-slider>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref(52)
</script>

<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-time v-model="form"
                 format="hh时mm分ss秒"
                 value-format="HH:mm:ss"
                 placeholder="请选择时间"></tvue-time>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const form = ref('12:00:00')
</script>

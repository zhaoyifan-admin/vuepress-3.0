<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <tvue-input-number v-model="form"></tvue-input-number>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{form}}<br />
      <tvue-input-number v-model="form"
                         precision="2"
                         controls-position=""></tvue-input-number>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      有最小最大值的数据:{{hasMinMaxForm}}<br />
      <tvue-input-number v-model="hasMinMaxForm"
                         precision="2"
                         controls-position=""
                         :min="min"
                         :max="max"></tvue-input-number>
    </el-col>
  </el-row>
</template>
<script setup>
const form = ref(1)
const hasMinMaxForm = ref(1)
const min = ref(0)
const max = ref(10)

</script>
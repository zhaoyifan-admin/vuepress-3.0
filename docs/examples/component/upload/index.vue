<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-upload :action="action"
                   :propsHttp="propsHttp"
                   v-model="form"></tvue-upload>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{ form1 }}<br />
      <tvue-upload :action="action"
                   :propsHttp="propsHttp"
                   v-model="form1"
                   list-type="picture-img"></tvue-upload>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="6">
      值:{{ form2 }}<br />
      <tvue-upload :action="action"
                   :propsHttp="propsHttp"
                   v-model="form2"
                   list-type="picture-card"></tvue-upload>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue'

const action = 'https://api.avuejs.com/imgupload'
const propsHttp = {
  url: 'url',
  name: 'name',
  res: 'data'
}

const form = ref([])
const form1 = ref([])
const form2 = ref([])
</script>

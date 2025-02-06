<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{ form }}<br />
      <tvue-input-map :params="params"
                      placeholder="请选择地图"
                      v-model="form"></tvue-input-map>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from 'vue';

const params = ref({
  zoom: 10,
  // zoomEnable: false,
  // dragEnable: false,
});

const form = ref([113.10235504165291, 41.03624227495205, "内蒙古自治区乌兰察布市集宁区新体路街道顺达源广告传媒"]);
</script>

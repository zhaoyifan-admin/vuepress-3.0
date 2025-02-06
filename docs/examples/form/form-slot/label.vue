<template>
  <tvue-form v-model="form"
             :option="option">
    <template #text-label="{}">
      <el-tooltip class="item"
                  effect="dark"
                  content="文字提示"
                  placement="top-start">
        <span>姓名</span>
      </el-tooltip>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  text: ''
});

const option = {
  labelWidth: 120,
  column: [{
    label: '姓名',
    prop: 'text',
    rules: [{
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }]
  }]
};
</script>

<template>
  <tvue-form v-model="form"
             :option="option">
    <template #text="{ disabled, size }">
      <div>
        <el-tag>{{ form.text ? form.text : '暂时没有内容' }}</el-tag>
        <el-input :disabled="disabled"
                  :size="size"
                  v-model="form.text"
                  placeholder="这里是自定的表单">
        </el-input>
      </div>
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

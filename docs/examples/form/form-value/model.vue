<template>
  <el-button @click="changeText"
             type="success">改变值</el-button>
  <br /><br />
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: 'small'
});

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    }
  ]
});

const changeText = () => {
  form.value.name = "我改变了";
};
</script>

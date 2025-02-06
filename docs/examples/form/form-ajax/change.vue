<template>
  <el-button type="primary"
             icon="el-icon-sort"
             @click="handleSwitch">切 换</el-button>
  <br /><br />
  <tvue-form :key="reload"
             v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const reload = ref(Math.random());
const type = ref(true);
const form = ref({
  name: '张三',
  sex: '男',
  username: 'smallwei',
  password: 'smallwei'
});
const option = ref({});

const option1 = {
  addBtn: false,
  column: [
    {
      label: '昵称',
      prop: 'name'
    }
  ]
};

const option2 = {
  addBtn: false,
  column: [
    {
      label: '用户名',
      prop: 'username'
    },
    {
      label: '密码',
      prop: 'password',
      type: 'password'
    },
    {
      label: '姓名',
      prop: 'name'
    }
  ]
};

function handleSwitch () {
  type.value = !type.value;
  if (type.value) {
    option.value = option1;
  } else {
    option.value = option2;
  }
  reload.value = Math.random();
}

onMounted(() => {
  handleSwitch();
});
</script>

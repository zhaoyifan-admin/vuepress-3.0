<template>
  权限开关
  <el-switch :active-value="false"
             :inactive-value="true"
             v-model="text"
             active-color="#13ce66"
             inactive-color="#ff4949" />
  <br /><br />
  <tvue-crud :option="option"
             :permission="permission"
             :data="data" />
</template>

<script setup>
import { ref, watch } from 'vue';
const text = ref(false);
const permission = ref({});
const option = ref({
  column: [
    { label: '姓名', prop: 'name' },
    { label: '年龄', prop: 'sex' }
  ]
});
const data = ref([
  { id: 1, name: '张三', sex: 12 },
  { id: 2, name: '李四', sex: 20 }
]);

watch(text, (newVal) => {
  if (newVal === true) {
    permission.value = {
      delBtn: false,
      addBtn: false,
      menu: false
    };
  } else {
    permission.value = {
      delBtn: true,
      addBtn: true,
      menu: true
    };
  }
});
</script>

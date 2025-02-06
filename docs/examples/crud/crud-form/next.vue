<template>
  <tvue-crud ref="crud"
             :data="data"
             v-model="form"
             @row-save="rowSave"
             :before-open="beforeOpen"
             :before-close="beforeClose"
             :option="option">
    <template #menu-form="{ row, index }">
      <el-button type="primary"
                 icon="el-icon-check"
                 plain
                 v-if="type === 'add'"
                 @click="handleNext(row, index)">继续添加</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElButton, ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/el-message.css';

const form = ref({});
const flag = ref(false);
const type = ref('');
const data = ref([]);
const option = ref({
  align: 'center',
  menuAlign: 'center',
  viewBtn: true,
  column: [
    {
      label: '姓名',
      prop: 'name'
    }, {
      label: '性别',
      prop: 'sex'
    }
  ]
});

const handleNext = (row, index) => {
  flag.value = true;
  // @ts-ignore
  crud.value.rowSave();
};

const rowSave = (form, done, loading) => {
  data.value.push(deepClone(form));
  ElMessage.success(JSON.stringify(form));
  if (flag.value) {
    flag.value = false;
    loading();
    form.name = "";
    form.sex = "";
    return;
  }
  done();
};

const beforeClose = (done) => {
  flag.value = false;
  done();
};

const beforeOpen = (done, type) => {
  type.value = type;
  done();
};

const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

const crud = ref(null);
</script>

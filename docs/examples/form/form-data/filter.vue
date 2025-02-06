<template>
  <el-button type="danger"
             @click="filterDic">过滤数据字典</el-button>
  <el-button type="success"
             @click="filterNull">过滤空数据</el-button>
  <el-button type="primary"
             @click="filter">不过滤</el-button>
  <p>{{ form }}</p>
  <tvue-form :key="reload"
             v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref, watch } from 'vue';

// State
const reload = ref(Math.random());
const form = ref({
  cascader: [0, 1],
  tree: 0
});
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '级别',
      prop: 'cascader',
      type: 'cascader',
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            { label: '一级1', value: 1 },
            { label: '一级2', value: 2 }
          ]
        }
      ]
    },
    {
      label: '树型',
      prop: 'tree',
      type: 'tree',
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            { label: '一级1', value: 1 },
            { label: '一级2', value: 2 }
          ]
        }
      ]
    }
  ]
});

// Methods
const refresh = () => {
  reload.value = Math.random();
};

const filter = () => {
  option.value.filterDic = false;
  option.value.filterNull = false;
  refresh();
};

const filterDic = () => {
  option.value.filterDic = true;
  refresh();
};

const filterNull = () => {
  option.value.filterNull = true;
  refresh();
};
</script>

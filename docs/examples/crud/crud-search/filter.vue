<template>
  <el-button type="danger"
             @click="filterDic">过滤数据字典</el-button>
  <el-button type="success"
             @click="filterNull">过滤空数据</el-button>
  <el-button type="primary"
             @click="filter">不过滤</el-button>
  <p>{{ search }}</p>
  <tvue-crud :key="reload"
             :data="data"
             v-model:search="search"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

// 初始化响应式数据
const search = ref({
  cascader: [0, 1],
  tree: 0
});

const reload = ref(Math.random());
const data = ref([
  {
    cascader: [0, 1],
    tree: 0
  }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true
    },
    {
      label: '级别',
      prop: 'cascader',
      type: 'cascader',
      search: true,
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            {
              label: '一级1',
              value: 1
            },
            {
              label: '一级2',
              value: 2
            }
          ]
        }
      ]
    },
    {
      label: '树型',
      prop: 'tree',
      type: 'tree',
      search: true,
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            {
              label: '一级1',
              value: 1
            },
            {
              label: '一级2',
              value: 2
            }
          ]
        }
      ]
    }
  ]
});

// 方法定义
const refresh = () => {
  reload.value = Math.random();
};

const filter = () => {
  option.value.searchFilterDic = false;
  option.value.searchFilterNull = false;
  refresh();
};

const filterDic = () => {
  option.value.searchFilterDic = true;
  refresh();
};

const filterNull = () => {
  option.value.searchFilterNull = true;
  refresh();
};
</script>

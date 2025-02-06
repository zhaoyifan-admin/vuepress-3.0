<template>
  <tvue-crud :key="reload"
             v-model="form"
             :option="option"
             :data="data">
    <template #name-form="{ size }">
      <el-button type="danger"
                 @click="filterDic">过滤数据字典</el-button>
      <el-button type="success"
                 @click="filterNull">过滤空数据</el-button>
      <el-button type="primary"
                 @click="filter">不过滤</el-button>
      <p>{{ form }}</p>
      <el-input v-model="form.name"
                :size="size"></el-input>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref, reactive } from 'vue';

const data = ref([
  {
    cascader: [0, 1],
    tree: 0
  }
]);

const reload = ref(Math.random());

const form = reactive({});

const option = reactive({
  column: [
    {
      label: '姓名',
      span: 24,
      prop: 'name',
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
            {
              label: '一级1',
              value: 1,
            },
            {
              label: '一级2',
              value: 2,
            }
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
            {
              label: '一级1',
              value: 1,
            },
            {
              label: '一级2',
              value: 2,
            }
          ]
        }
      ]
    }
  ]
});

function refresh () {
  reload.value = Math.random();
}

function filter () {
  option.filterDic = false;
  option.filterNull = false;
  refresh();
}

function filterDic () {
  option.filterDic = true;
  refresh();
}

function filterNull () {
  option.filterNull = true;
  refresh();
}
</script>

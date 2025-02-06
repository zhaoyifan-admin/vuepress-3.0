<template>
  <el-container>
    <el-aside width="200px">
      <tvue-tree :option="treeOption"
                 :data="treeData"
                 @node-click="nodeClick"></tvue-tree>
    </el-aside>
    <el-main>
      <tvue-crud :data="loadData"
                 :option="loadOption"
                 v-model="obj"></tvue-crud>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const obj = ref({});
const treeData = ref([
  {
    value: 0,
    label: '一级部门',
    children: [
      {
        value: 1,
        label: '一级部门1',
      }
    ]
  }
]);

const treeOption = {
  defaultExpandAll: true,
  formOption: {
    labelWidth: 100,
    column: [{
      label: '自定义项',
      prop: 'test'
    }],
  },
  props: {
    labelText: '标题',
    label: 'label',
    value: 'value',
    children: 'children'
  }
};

const loadData = ref([]);
const loadData1 = [
  {
    name: '张三',
    sex: '男'
  }
];
const loadData2 = [
  {
    name: '李四2',
    sex: '女'
  }
];
const loadOption = {
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
};

onMounted(() => {
  loadData.value = loadData1;
});

const nodeClick = (data) => {
  if (data.value == 0) {
    loadData.value = loadData1;
  } else if (data.value == 1) {
    loadData.value = loadData2;
  }
  console.log(JSON.stringify(data));
};
</script>

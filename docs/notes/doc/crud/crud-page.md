---
title: 分页
createTime: 2024/12/10 11:23:08
permalink: /doc/crud-page/
---

## 页码和条数
::: demo vue title="页码和条数" desc="`currentPage`当前页码，`total`总条数，`pageSize`每页多少条数据"
```vue
<template>
  <p>
    页码:{{page.currentPage}}
    <el-button type="primary"
               @click="page.currentPage=page.currentPage+1">页码+1</el-button>
  </p>
  <p>
    条数:{{page.pageSize}}
    <el-button type="primary"
               @click="page.pageSize=page.pageSize+10">条数+10</el-button>
  </p>
  <p>
    总数:{{page.total}}
    <el-button type="primary"
               @click="page.total=page.total+10">总页数+10</el-button>
  </p>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>

</template>
<script setup>
import { ref } from 'vue';
const data = ref([])
const page = ref({
  total: 1000,
  currentPage: 1,
  pageSize: 10
})
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
})
</script>
```
:::

## 设置最大页码按钮数
::: demo vue title="设置最大页码按钮数" desc="`pagerCount`属性默认为7"
```vue
<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page" />
</template>

<script setup>
import { ref } from 'vue';

const page = ref({
  pagerCount: 11,
  total: 1000
});
const data = ref([]);
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
});
</script>
```
:::

## 无背景色的分页
::: demo vue title="无背景色的分页" desc="`background`属性默认为`true`"
```vue
<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
const page = ref({
  background: false,
  total: 1000
})
const option = ref({
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
})
const data = ref([])
</script>
```
:::

## 附加功能
::: demo vue title="附加功能" desc="`layout`属性中的每一项都是附加功能，可以自行操作"
```vue
<template>
  <el-button @click="setSimpleMode">简单模式</el-button>
  <el-button @click="setComplexMode">复杂模式</el-button>
  <br /><br />
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue'

const page = ref({
  total: 1000,
  layout: "total, sizes, prev, pager, next, jumper",
})

const data = ref([])
const option = {
  header: false,
  column: [{
    label: '姓名',
    prop: 'name'
  }]
}

const setSimpleMode = () => {
  page.value.layout = 'sizes,pager'
}

const setComplexMode = () => {
  page.value.layout = 'total, sizes, prev, pager, next, jumper'
}
</script>
```
:::

## 综合用法
::: demo vue title="综合用法" desc="首次加载调用`on-load`方法加载数据，返回`page`分页对象信息,赋值`page`的`total`总条数即可,如果`total`为0的话，或者`simplePage`为true只有1页的时候，分页选择器会隐藏"

[//]: # (- 配合[增删改查方法去使用]&#40;/crud/crud-fun.html&#41;实现完整的表格功能)
```vue
<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"
             @on-load="onLoad"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const page = ref({
  pageSize: 20,
  pagerCount: 5
})
const data = ref([])
const option = ref({
  align: 'center',
  menuAlign: 'center',
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
})
function onLoad () {
  
}
</script>
```
:::

## 自定义分页
::: demo vue title="自定义分页" desc="实际的用法要后台配置，将后台返回值赋值给 page 中的属性， `page`就是分页对象注入，page 对象中的`total`为总页数，`pageSizes`为分页信息，`currentPage`为当前第几页，`pageSize`每一页加载多少条数据，点击页码会调用`current-change`方法回调当前页数，返回当前第几页，点击每页多少条会调`size-change`方法回调"
```vue
<template>
  {{ page }}
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"
             @size-change="sizeChange"
             @current-change="currentChange" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const page = ref({
  currentPage: 1,
  total: 0,
  layout: "total,pager,prev,next",
  background: false,
  pageSize: 10
});

const data = ref([]);
const option = ref({
  align: 'center',
  menuAlign: 'center',
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
});

function getList () {
  page.value.total = 40;
  if (page.value.currentPage === 1) {
    data.value = [
      { id: 1, name: '张三', sex: '男' },
      { id: 2, name: '李四', sex: '女' }
    ];
  } else if (page.value.currentPage === 2) {
    data.value = [
      { id: 3, name: '王五', sex: '女' },
      { id: 4, name: '赵六', sex: '女' }
    ];
  }
}

function sizeChange (val) {
  page.value.currentPage = 1;
  page.value.pageSize = val;
  getList();
  ElMessage.success(`行数 ${val}`);
}

function currentChange (val) {
  page.value.currentPage = val;
  getList();
  ElMessage.success(`页码 ${val}`);
}

onMounted(() => {
  getList();
});
</script>
```
:::
<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data">
    <template #empty>
      <tvue-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  desc="自定义的提示语">
        <br />
        <el-button type="primary"
                   @click="handleAdd">新增数据</el-button>
      </tvue-empty>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
const crud = ref(null)
const option = ref({
  emptyText: '自定义暂无数据提示语',
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '年龄',
      prop: 'sex',
    },
  ],
});

const data = ref([]);

const handleAdd = () => {
  if (crud) {
    crud.value.rowAdd();
  }
};
</script>

<template>
  <tvue-crud v-model="form"
             :option="option"
             :data="data"
             ref="crud"
             @row-save="rowSave"
             @row-update="rowUpdate"
             @row-del="rowDel">
    <template #icon="{ row }">
      <i :class="row.icon"
         style="font-size:24px"></i>
    </template>
    <template #menu="{ row, size }">
      <el-button :size="size"
                 text
                 type="primary"
                 @click="handleAdd(row)">新增子级</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const crud = ref(null)
const parentId = ref(undefined);
const form = ref({});
const data = ref([
  {
    id: 10,
    event: '事件1',
    timeLine: 50,
    comment: '无'
  },
  {
    id: 1,
    event: '事件1',
    timeLine: 100,
    comment: '无',
    children: [
      {
        parentId: 1,
        id: 2,
        event: '事件2',
        timeLine: 10,
        comment: '无'
      },
      {
        parentId: 1,
        id: 3,
        event: '事件3',
        timeLine: 90,
        comment: '无',
        children: [
          {
            parentId: 3,
            id: 4,
            event: '事件4',
            timeLine: 5,
            comment: '无'
          },
          {
            parentId: 3,
            id: 5,
            event: '事件5',
            timeLine: 10,
            comment: '无'
          }
        ]
      }
    ]
  }
]);

const option = {
  headerAlign: 'center',
  align: 'center',
  border: true,
  index: true,
  rowKey: 'id',
  rowParentKey: 'parentId',
  column: [
    {
      label: '事件',
      prop: 'event',
      align: 'left',
      width: 200
    },
    {
      label: '时间线',
      prop: 'timeLine'
    },
    {
      label: '备注',
      prop: 'comment'
    }
  ]
};

const rowDel = (row, index, done) => {
  done(row);
};

const rowSave = (row, done) => {
  row.parentId = parentId.value;
  row.id = new Date().getTime();
  parentId.value = undefined;
  done(row);
};

const rowUpdate = (row, index, done) => {
  done(row);
};

const handleAdd = (row) => {
  parentId.value = row.id;
  if (crud) {
    crud.value.rowAdd();
  }
};
</script>

<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  table: [0, 2]
});

const option = ref({
  column: [
    {
      label: '表格选择器',
      prop: 'table',
      type: 'table',
      multiple: true,
      children: {
        border: true,
        column: [
          {
            label: '姓名',
            width: 120,
            search: true,
            searchSpan: 24,
            prop: 'name'
          },
          {
            label: '性别',
            prop: 'sex'
          }
        ],
      },
      formatter: (row) => {
        if (Array.isArray(row)) {
          return row.map(ele => ele.name + '格式化').join(',');
        } else {
          return row.name + '格式化';
        }
      },
      onLoad: ({ page, value, data }, callback) => {
        if (value) {
          ElMessage.success('首次查询' + value);
          callback([
            { id: '0', name: '张三', sex: '男', age: 18 },
            { id: '2', name: '王五', sex: '女' }
          ]);
          return;
        }
        if (data) {
          ElMessage.success('搜索查询参数' + JSON.stringify(data));
        }
        if (page) {
          ElMessage.success('分页参数' + JSON.stringify(page));
        }
        callback({
          total: 2,
          data: [
            { id: '0', name: '张三', sex: '男', age: 18 },
            { id: '1', name: '李四', sex: '女', disabled: true, age: 18 },
            { id: '2', name: '王五', sex: '女' }
          ]
        });
      },
      props: {
        disabled: 'disabled',
        label: 'name',
        value: 'id'
      }
    }
  ]
});
</script>

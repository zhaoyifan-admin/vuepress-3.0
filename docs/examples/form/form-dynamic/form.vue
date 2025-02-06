<template>
  <tvue-form :option="option"
             v-model="form">
    <template #input="{ row }">
      <el-tag>序号:{{ row.$index }}-数据:{{ row.input }}</el-tag>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'; // 导入 ElMessage

const form = ref({
  dynamic: [
    { input: 1, select: 1 },
    { input: 2, select: 2 }
  ]
});

const option = ref({
  column: [
    {
      label: '子表单',
      prop: 'dynamic',
      type: 'dynamic',
      span: 24,
      children: {
        index: false,
        align: 'center',
        type: 'form',
        headerAlign: 'center',
        rowAdd: (done) => {
          ElMessage.success('新增回调'); // 使用 ElMessage
          done({ input: '默认值' });
        },
        rowDel: (row, done) => {
          ElMessage.success('删除回调' + JSON.stringify(row)); // 使用 ElMessage
          done();
        },
        column: [
          {
            width: 200,
            label: '输入框',
            prop: 'input'
          },
          {
            label: '选择框',
            prop: 'select',
            type: 'select',
            dicData: [
              { label: '测试1', value: 1 },
              { label: '测试2', value: 2 }
            ]
          }
        ]
      }
    }
  ]
});
</script>

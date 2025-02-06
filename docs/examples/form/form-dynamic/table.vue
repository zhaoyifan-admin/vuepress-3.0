<template>
  <el-button @click="addAll"
             type="primary">添加10条子表单数据</el-button>
  <br /><br />
  <tvue-form :option="option"
             v-model="form">
    <template #input="{row}">
      <el-tag>序号:{{row.$index}}-数据:{{row.input}}</el-tag>
    </template>
  </tvue-form>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  dynamic: [
    { input: 1, select: 1 },
    { input: 2, select: 2 }
  ]
});

const option = {
  column: [
    {
      label: '子表单',
      prop: 'dynamic',
      type: 'dynamic',
      span: 24,
      children: {
        align: 'center',
        headerAlign: 'center',
        rowAdd: (done) => {
          ElMessage.success('新增回调');
          done({ input: '默认值' });
        },
        rowDel: (row, done) => {
          ElMessage.success('删除回调' + JSON.stringify(row));
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
};

function addAll () {
  for (let i = 0; i < 10; i++) {
    form.value.dynamic.push({ input: 1, select: 1 });
  }
}
</script>
<template>
  <tvue-crud :data="data"
             :option="option">
    <template #name-label="{}">
      <span>姓名&nbsp;&nbsp;</span>
      <el-tooltip class="item"
                  effect="dark"
                  content="文字提示"
                  placement="top-start">
        <i class="el-icon-warning"></i>
      </el-tooltip>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  { name: '张三', sex: '男' },
  { name: '李四', sex: '女' }
]);

const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      rules: [
        {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
});
</script>

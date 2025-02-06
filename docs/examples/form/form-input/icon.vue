<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const form = ref({})
const option = ref({
  column: [
    {
      label: '输入框',
      prop: 'input',
      appendClick: () => {
        ElMessage.success('appendClick')
      },
      prependClick: () => {
        ElMessage.success('prependClick')
      },
      prepend: 'HTTP',
      append: 'COM'
    },
    {
      label: '输入框',
      prop: 'input1',
      suffixIcon: "el-icon-date",
      prefixIcon: "el-icon-search"
    }
  ]
})
</script>

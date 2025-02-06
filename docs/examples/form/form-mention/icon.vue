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
      label: '提及框',
      prop: 'mention',
      type: 'mention',
      value: '@',
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
      prop: 'tag1',
      type: 'tag',
      value: '@',
      suffixIcon: "el-icon-date",
      prefixIcon: "el-icon-search"
    }
  ]
})
</script>

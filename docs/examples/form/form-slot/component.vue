<template>
  {{ form }}
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({});
const option = ref({
  column: [
    {
      label: '文本1',
      prop: 'text1'
    },
    {
      label: '',
      labelWidth: 40,
      prop: 'divider',
      component: 'elDivider',
      span: 24,
      event: {
        click: () => {
          ElMessage.success('点击方法');
        }
      },
      params: {
        html: '<h2 style="color:red">自定义html标签,点我触发方法</h2>',
        contentPosition: 'left'
      }
    },
    {
      label: '文本2',
      prop: 'text2'
    },
    {
      label: '',
      labelWidth: 40,
      prop: 'calendar',
      component: 'elCalendar',
      span: 24,
      params: {}
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"
             v-model="form"
             @submit="handleSubmit"
             @tab-click="handleTabClick">
    <template #group1-header="{ column }">
      <svg aria-hidden="true"
           style="width:30px;height:30px;">
        <use xlink:href="#icon-duanxinguanli"></use>
      </svg>
      {{ column.label }}
    </template>
    <template #text3="{}">
      <el-input placeholder="自定义"
                v-model="form.text3"></el-input>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const form = ref({
  text: '文本',
  text1: '文本1',
  text2: '文本2',
  text3: '文本3'
});

const option = ref({
  column: [{
    label: '内容',
    prop: 'text'
  }],
  group: [
    {
      icon: 'el-icon-info',
      label: '分组1',
      collapse: false,
      prop: 'group1',
      column: [{
        label: '内容1',
        prop: 'text1'
      }]
    },
    {
      icon: 'el-icon-info',
      label: '分组2',
      arrow: false,
      prop: 'group2',
      column: [{
        label: '选项卡2',
        prop: 'text2'
      }, {
        label: '选项卡3',
        prop: 'text3'
      }]
    }
  ]
});

const handleSubmit = () => {
  ElMessage.success(JSON.stringify(form.value));
};

const handleTabClick = (event) => {
  ElMessage.success(event);
};
</script>

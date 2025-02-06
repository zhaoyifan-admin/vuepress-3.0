<template>
  <el-button @click="detail = !detail">{{ title }}</el-button>
  <br /><br />
  <tvue-form :option="option"
             v-model="obj"
             @submit="submit">
    <template #datetime="{}">
      <span v-if="detail">
        这是我要选择的日期{{ datetime[0] }}年{{ datetime[1] }}月{{ datetime[2] }}日
      </span>
      <el-input v-else
                v-model="obj.datetime"></el-input>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';

const detail = ref(true);
const obj = ref({ datetime: '2020-05-01' });

const datetime = computed(() => obj.value.datetime.split('-'));

const option = computed(() => ({
  detail: detail.value,
  column: [
    {
      label: '选择日期',
      span: 12,
      prop: 'datetime',
      type: 'datetime',
      format: "YYYY-MM-DD",
      valueFormat: "YYYY-MM-DD"
    },
    {
      label: '',
      labelWidth: 10,
      prop: 'divider',
      display: !detail.value,
      component: 'elDivider',
      span: 24,
      params: {
        html: '这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成',
        contentPosition: "left",
      }
    }
  ]
}));

const title = computed(() => detail.value ? '编辑' : '保存');

const submit = () => {
  ElMessage.success(JSON.stringify(obj.value));
};
</script>

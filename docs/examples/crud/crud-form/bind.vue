<template>
  <tvue-crud :option="option"
             :data="data"
             v-model="form">
    <template #bind-form="{}">
      <el-button type="primary"
                 @click="changeDeepValue">改变deep.deep.deep.value值</el-button>
      <el-button type="primary"
                 @click="changeTestValue">改变test值</el-button>
      <br /><br />
      {{ form }}
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue';
import { ElButton } from 'element-plus';

const form = ref({});
const data = ref([{
  deep: {
    deep: {
      deep: {
        value: '我是深结构'
      }
    }
  }
}]);
const option = {
  labelWidth: 120,
  column: [
    {
      label: '深结构',
      prop: 'test',
      bind: 'deep.deep.deep.value'
    },
    {
      label: '',
      prop: 'bind',
      span: 24,
      hide: true
    }
  ]
};

const changeDeepValue = () => {
  form.value.deep.deep.deep.value = '改变deep.deep.deep.value值';
};

const changeTestValue = () => {
  form.value.test = '改变test值';
};
</script>

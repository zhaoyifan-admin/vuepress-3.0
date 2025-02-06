<template>
  <el-button type="primary"
             @click="form.deep.deep.deep.value = '改变deep.deep.deep.value值'">改变deep.deep.deep.value值</el-button>
  <el-button type="primary"
             @click="form.test = '改变test值'">改变test值</el-button>
  <br /><br />
  {{ form }}
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  deep: {
    deep: {
      deep: {
        value: 1
      }
    }
  },
  test: ''
});

const option = ref({
  labelWidth: 120,
  column: [
    {
      label: '我是深结构',
      prop: 'test',
      bind: 'deep.deep.deep.value'
    }
  ]
});
</script>

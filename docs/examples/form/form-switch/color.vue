<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const option = ref({
  column: [{
    label: '开关',
    prop: 'switch',
    type: 'switch',
    dicData: [
      { label: '关', value: 0 },
      { label: '开', value: 1 }
    ]
  }]
});
</script>

<style>
:root {
  --el-switch-on-color: #13ce66;
  --el-switch-off-color: #ff4949;
}
</style>

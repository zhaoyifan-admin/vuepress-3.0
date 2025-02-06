<template>
  <tvue-crud :option="option"
             :data="data"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([{
  deep: {
    deep: {
      deep: {
        value: '我是深结构'
      }
    }
  }
}]);

const option = ref({
  labelWidth: 120,
  column: [
    {
      label: '深结构',
      prop: 'test',
      bind: 'deep.deep.deep.value'
    }
  ]
});
</script>

<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  select: ['Shanghai', 'Beijing', 'Shenzhen']
});

const option = ref({
  column: [
    {
      label: '拖拽',
      prop: 'select',
      type: 'select',
      drag: true,
      multiple: true,
      dicData: [
        { value: 'Shanghai', label: '上海' },
        { value: 'Beijing', label: '北京' },
        { value: 'Shenzhen', label: '深圳' }
      ]
    }
  ]
});
</script>

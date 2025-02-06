<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  select: 'Shanghai'
});

const option = ref({
  column: [
    {
      label: '分组',
      prop: 'select',
      type: 'select',
      group: true,
      dicData: [
        {
          label: '热门城市',
          groups: [
            { value: 'Shanghai', label: '上海', desc: '描述' },
            { value: 'Beijing', label: '北京' }
          ]
        },
        {
          label: '城市名',
          groups: [
            { value: 'Chengdu', label: '成都' },
            { value: 'Shenzhen', label: '深圳' },
            { value: 'Guangzhou', label: '广州' },
            { value: 'Dalian', label: '大连' }
          ]
        }
      ]
    }
  ]
});
</script>

<template>
  <tvue-crud :data="data"
             :option="option"
             v-model="form"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue';

const data = ref([{
  text1: 0
}]);

const form = ref({});

const option = {
  column: [{
    label: '内容1',
    prop: 'text1',
    type: 'radio',
    dicData: [{
      label: '显示',
      value: 0
    }, {
      label: '隐藏',
      value: 1,
    }],
    control: (val, form) => {
      if (val === 0) {
        return {
          text2: {
            display: true
          },
          text3: {
            label: '内容3'
          }
        };
      } else {
        return {
          text2: {
            display: false
          },
          text3: {
            label: '有没有发现我变了'
          }
        };
      }
    },
  }, {
    label: '内容2',
    prop: 'text2',
    display: true
  }, {
    label: '内容3',
    prop: 'text3'
  }]
};
</script>

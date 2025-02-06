<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref, h } from 'vue';

const form = ref({});

const option = {
  column: [{
    label: '姓名',
    prop: 'text',
    render: (params) => {
      return h('p',
        {
          id: 'box',
          class: { 'demo': true },
          style: { color: 'pink', lineHeight: '30px' },
        }, 'Hello World Avue');
    }
  }]
};
</script>

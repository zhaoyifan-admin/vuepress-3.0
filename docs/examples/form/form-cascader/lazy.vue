<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const baseUrl = 'https://cli.avuejs.com/api/area';

const dic = [
  {
    value: 'zhinan',
    label: '指南',
    children: [
      {
        value: 'shejiyuanze',
        label: '设计原则',
        children: [
          { value: 'yizhi', label: '一致' },
          { value: 'fankui', label: '反馈' }
        ]
      }
    ]
  }
];

const form = ref({
  cascader: ["110000", "110100", "110101"]
});

const option = ref({
  column: [
    {
      label: '级联',
      prop: 'cascader',
      type: 'cascader',
      props: {
        label: 'name',
        value: 'code'
      },
      lazy: true,
      lazyLoad (node, resolve) {
        const stopLevel = 2;
        const level = node.level;
        const data = node.data || {};
        const code = data.code;
        let list = [];
        const callback = () => {
          resolve((list || []).map(ele => ({
            ...ele,
            leaf: level >= stopLevel
          })));
        };

        if (level === 0) {
          axios.get(`${baseUrl}/getProvince`).then(res => {
            list = res.data;
            callback();
          });
        } else if (level === 1) {
          axios.get(`${baseUrl}/getCity/${code}`).then(res => {
            list = res.data;
            callback();
          });
        } else if (level === 2) {
          axios.get(`${baseUrl}/getArea/${code}`).then(res => {
            list = res.data;
            callback();
          });
        } else {
          callback();
        }
      }
    }
  ]
});
</script>

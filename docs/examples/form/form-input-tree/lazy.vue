<template>
  <tvue-form :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const baseUrl = 'https://cli.avuejs.com/api/area';

const option = ref({
  column: [
    {
      label: '懒加载',
      prop: 'id',
      type: 'tree',
      dicUrl: `${baseUrl}/getProvince?id={{key}}`,
      props: {
        label: 'name',
        value: 'code'
      },
      lazy: true,
      cacheData: [
        {
          name: '未加载数据',
          code: -1
        }
      ],
      treeLoad: (node, resolve) => {
        const stop_level = 2;
        const level = node.level;
        const data = node.data || {};
        const code = data.code;
        let list = [];

        const callback = () => {
          resolve((list || []).map(ele => ({
            ...ele,
            leaf: level >= stop_level
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
          list = [];
          callback();
        }
      }
    }
  ]
});
</script>

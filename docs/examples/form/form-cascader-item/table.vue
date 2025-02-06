<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000',
  city: '110100'
});

const option = ref({
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'table',
      cascader: ['city'],
      children: {
        border: true,
        column: [
          {
            label: '名称',
            search: true,
            searchSpan: 24,
            prop: 'name'
          }
        ]
      },
      formatter: (row) => {
        if (!row.name) return '';
        return row.id + '-' + row.name;
      },
      onLoad: ({ page, value, data }, callback) => {
        if (value) {
          console.log('首次查询' + value);
          callback({
            id: '110000',
            name: '北京市'
          });
          return;
        }
        if (data) {
          console.log('搜索查询参数' + JSON.stringify(data));
        }
        if (page) {
          console.log('分页参数' + JSON.stringify(page));
        }
        callback({
          total: 2,
          data: [
            {
              id: '110000',
              name: '北京市'
            },
            {
              id: '130000',
              name: '河北省'
            }
          ]
        });
      },
      props: {
        label: 'name',
        value: 'id'
      }
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/{{key}}`,
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'blur'
        }
      ]
    }
  ]
});
</script>

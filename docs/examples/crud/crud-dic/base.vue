<template>
  <tvue-crud :data="data"
             :option="option" />
</template>

<script setup>
import { ref } from 'vue';

const data = ref([
  {
    province: '110000',
    cascader: [0, 1],
  },
  {
    province: '130000',
    cascader: [0, 2],
  }
]);

const baseUrl = 'https://cli.avuejs.com/api/area';

const option = ref({
  column: [
    {
      label: '本地字典',
      prop: 'cascader',
      type: 'cascader',
      dicData: [
        {
          label: '一级',
          value: 0,
          children: [
            {
              label: '一级1',
              value: 1,
            },
            {
              label: '一级2',
              value: 2,
            }
          ]
        }
      ],
    },
    {
      label: '网络字典',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicFlag: true,
      dicUrl: `${baseUrl}/getProvince`
    }
  ]
});
</script>

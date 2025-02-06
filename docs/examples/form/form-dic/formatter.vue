<template>
  <tvue-form v-model="form"
             :option="option"></tvue-form>
</template>

<script setup>
import { ref } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({
  province: '110000'
});

const option = ref({
  column: [
    {
      label: '城市',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicFormatter: (data) => {
        data.forEach(ele => {
          ele.name = ele.name + '字典格式化';
        });
        data.unshift({ name: '追加字典', code: -1 });
        return data;
      },
      dicUrl: `${baseUrl}/getProvince`
    }
  ]
});
</script>

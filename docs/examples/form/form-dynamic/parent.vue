<template>
  <tvue-form :key="reload"
             :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const baseUrl = 'https://cli.avuejs.com/api/area';

const form = ref({});
const reload = ref(Math.random());

watch(() => form.value.province, () => {
  reload.value = Math.random();
});

const option = computed(() => ({
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`,
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    },
    {
      label: '子表单',
      prop: 'dynamic',
      type: 'dynamic',
      span: 24,
      children: {
        column: [
          {
            label: '城市',
            prop: 'city',
            type: 'select',
            props: {
              label: 'name',
              value: 'code'
            },
            dicUrl: `${baseUrl}/getCity/` + form.value.province,
            rules: [
              {
                required: true,
                message: '请选择城市',
                trigger: 'blur'
              }
            ]
          }
        ]
      }
    }
  ]
}));
</script>

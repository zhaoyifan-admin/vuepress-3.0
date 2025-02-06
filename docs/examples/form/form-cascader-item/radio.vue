<template>
  <tvue-form :option="option"
             v-model="form"></tvue-form>
</template>

<script setup>
import { ref } from 'vue'

const baseUrl = 'https://cli.avuejs.com/api/area'

const form = ref({
  province: '110000',
  city: '110100'
})

const option = ref({
  column: [
    {
      label: '省份',
      prop: 'province',
      type: 'radio',
      cascader: ['city'],
      span: 24,
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getProvince`
    },
    {
      label: '城市',
      prop: 'city',
      type: 'select',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: `${baseUrl}/getCity/${form.value.province}`,
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'blur'
        }
      ]
    }
  ]
})
</script>

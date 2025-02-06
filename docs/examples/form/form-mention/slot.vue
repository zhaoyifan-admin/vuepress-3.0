<template>
  <tvue-form :option="option"
             v-model:form="form"
             ref="formRef">
    <template #province-type="{ item, value, label }">
      <img src="/logo.png"
           style="width:20px" />
      <span>{{ item.label }}</span>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const form = ref({
  province: '120000'
});

const option = ref({
  column: [
    {
      label: '提及框',
      prop: 'province',
      type: 'mention',
      value: '@',
      props: {
        label: 'name',
        value: 'code'
      },
      dicUrl: 'https://cli.avuejs.com/api/area/getProvince',
      typeformat (item, label, value) {
        return `值:${item[label]}-名:${item[value]}`;
      },
      change (val) {
        setSelectImg(val);
      },
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    }
  ]
});

function setSelectImg (val) {
  nextTick(() => {
    const provinceRef = formRef.value.getPropRef('province');
    if (provinceRef) {
      const img = provinceRef.$el.querySelector('img');
      if (img) {
        img.setAttribute('style', `
          background: url('/logo.png') no-repeat;
          background-position: 10px center;
          background-size: 20px 20px;
          padding-left:20px;
          text-indent: 30px;
        `);
      }
    }
  });
}

const formRef = ref(null);
</script>

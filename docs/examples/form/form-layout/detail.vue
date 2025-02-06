<template>
  <el-button @click="handle"
             style="margin-left: 20px">{{ title }}</el-button>
  <br /><br />
  <tvue-form :option="option"
             v-model="form"
             @submit="submit"></tvue-form>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const form = ref({});
const option = ref({
  detail: true,
  labelWidth: 110,
  group: [
    {
      label: '用户信息',
      prop: 'jbxx',
      icon: 'el-icon-edit-outline',
      column: [
        {
          label: '姓名',
          prop: 'name',
          rules: [
            {
              required: true,
              message: '请输入姓名',
              trigger: 'blur'
            }
          ]
        },
        {
          label: '性别',
          prop: 'sex',
        }
      ]
    },
    {
      label: '退款申请',
      prop: 'tksq',
      icon: 'el-icon-view',
      column: [
        {
          label: '省份',
          span: 24,
          prop: 'province',
          type: 'select',
          props: {
            label: 'name',
            value: 'code'
          },
          dicUrl: `https://cli.avuejs.com/api/area/getProvince`,
          rules: [
            {
              required: true,
              message: '请选择省份',
              trigger: 'blur'
            }
          ]
        },
        {
          label: '多选',
          prop: 'checkbox',
          type: 'checkbox',
          all: true,
          props: {
            label: 'name',
            value: 'code'
          },
          span: 24,
          dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
        }
      ]
    },
    {
      label: '用户信息',
      prop: 'yhxx',
      icon: 'el-icon-edit-outline',
      column: [
        {
          label: '测试长度',
          prop: 'len',
          value: 3,
          maxlength: 5,
        },
        {
          label: '测试自定义',
          prop: 'lens',
          value: 3
        }
      ]
    }
  ]
});

const title = computed(() => option.value.detail ? '编 辑' : '保 存');

function handle () {
  option.value.detail = !option.value.detail;
}

function submit () {
  console.log('Form submitted with data:', form.value);
}

onMounted(() => {
  setTimeout(() => {
    form.value = {
      name: 'small',
      province: '110000',
      checkbox: ['110000']
    };
  }, 100);
});
</script>

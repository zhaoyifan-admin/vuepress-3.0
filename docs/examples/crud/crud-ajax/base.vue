<template>
  <el-button type="primary"
             icon="el-icon-sort"
             @click="getOption">服务端加载</el-button>
  <br /> <br />
  <tvue-crud :key="reload"
             :data="data"
             :option="option"
             :table-loading="loading" />
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const reload = ref(Math.random())
const loading = ref(true)
const data = ref([])
const option = ref({})

function getOption () {
  ElMessage.success('模拟2s后服务端动态加载')
  setTimeout(() => {
    option.value = {
      border: true,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex'
        }, {
          label: '省份',
          prop: 'province',
          type: 'select',
          props: {
            label: 'name',
            value: 'code'
          },
          dicUrl: 'https://cli.avuejs.com/api/area/getProvince',
          rules: [
            {
              required: true,
              message: '请选择省份',
              trigger: 'blur'
            }
          ]
        }]
    }
    data.value = [
      {
        name: '张三',
        sex: '男',
        province: '110000'
      }, {
        name: '李四',
        sex: '女',
        province: '120000'
      }
    ]
    loading.value = false
    reload.value = Math.random()
  }, 2000)
}
</script>
<template>
  <el-button type="primary"
             @click="handleReload">Key初始化</el-button>
  <el-button type="primary"
             @click="handleReload1">内置方法初始化</el-button>
  <br /><br />
  <tvue-crud :key="reload"
             ref="crud"
             :data="data"
             :option="option"></tvue-crud>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const reload = ref(Math.random())
const data = ref([
  {
    username: 'smallwei',
    password: 'smallwei'
  }, {
    username: 'avue',
    password: 'avue'
  }
])
const option = ref({
  column: [
    {
      label: '用户名',
      prop: 'username'
    }, {
      label: '密码',
      prop: 'password',
      type: 'password'
    }
  ]
})

const crud = ref(null)

function handleReload () {
  reload.value = Math.random()
  ElMessage.success('初始化完成')
}

function handleReload1 () {
  if (crud.value) {
    crud.value.refreshTable()
    ElMessage.success('初始化完成')
  }
}

</script>

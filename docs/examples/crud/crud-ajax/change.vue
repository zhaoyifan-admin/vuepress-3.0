<template>
  <tvue-crud ref="crud"
             :data="data"
             :option="option">
    <template #menu-left="{}">
      <el-button type="primary"
                 @click="handleSwitch"
                 icon="el-icon-sort">切 换</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const crud = ref(null)
const type = ref(true)

const data = ref([
  {
    name: '张三',
    sex: '男',
    username: 'smallwei',
    password: 'smallwei'
  }, {
    name: '李四',
    sex: '女',
    username: 'avue',
    password: 'avue'
  }
])

const option = ref({})

const option1 = {
  addBtn: false,
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true
    }
  ]
}

const option2 = {
  addBtn: false,
  column: [
    {
      label: '用户名',
      prop: 'username',
      search: true
    }, {
      label: '密码',
      prop: 'password',
      type: 'password',
      search: true
    }, {
      label: '姓名',
      prop: 'name',
      search: true
    }
  ]
}

function handleSwitch () {
  type.value = !type.value
  option.value = type.value ? option1 : option2
  if (crud.value) {
    crud.value.refreshTable()
  }
}

onMounted(() => {
  handleSwitch()
})
</script>

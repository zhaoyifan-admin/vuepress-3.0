<template>
  {{form}}
  <tvue-crud ref="crudRef"
             v-model="form"
             :option="option"
             @row-save="rowSave"
             @row-update="rowUpdate"
             @row-del="rowDel"
             :data="data"></tvue-crud>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
//获取this
let { proxy } = getCurrentInstance()
const option = ref(null)
const data = ref(null)
const form = ref({})
option.value = {
  index: true,
  column: [{
    label: '姓名',
    prop: 'name'
  }, {
    label: '年龄',
    prop: 'sex'
  }]
}
data.value = [{
  id: 1,
  name: '张三',
  sex: 12
}, {
  id: 2,
  name: '李四',
  sex: 13
}]
function rowSave (row, done, loading) {
  done(row)
}
function rowDel (row, index, done) {
  done(row)
}
function rowUpdate (row, index, done, loading) {
  done(row)
}
</script>
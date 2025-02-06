<template>
  <ul>
    <li v-for="(item,index) in list"
        :key="index"
        class="el-dropdown-menu__item"
        v-contextmenu="{id:'dialog',event:handleEvent,value:item,hide:handleHide}">
      {{item.name}}
    </li>
  </ul>
  <ul class="el-dropdown-menu el-popper"
      id="dialog"
      style="display:none">
    <li class="el-dropdown-menu__item"
        @click="handleClick1">
      <i class="el-icon-eleme"></i>菜单1
    </li>
    <li class="el-dropdown-menu__item"
        @click="handleClick2">
      <i class="el-icon-user"></i>菜单2
    </li>
    <li class="el-dropdown-menu__item"
        @click="handleClick3">
      <i class="el-icon-goods"></i>菜单3
    </li>
    <li class="el-dropdown-menu__item el-dropdown-menu__item--divided"
        @click="handleClick4">
      <i class="el-icon-circle-check"></i>菜单4
    </li>
    <li class="el-dropdown-menu__item"
        @click="handleClick4">
      菜单5
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const form = ref({})
const list = ref([{ name: '张三' }, { name: '李四' }, { name: '王五' }])

onMounted(() => {
  setTimeout(() => {
    list.value[0].name = 'small'
  }, 1000)
})

const handleHide = (row, e) => {
  ElMessage.success('隐藏回调信息' + JSON.stringify(row))
}

const handleEvent = (row, done, e) => {
  form.value = row
  done()
  ElMessage.success('打开回调信息' + JSON.stringify(row))
}

const handleClick1 = () => {
  ElMessage.success('菜单1' + JSON.stringify(form.value))
}

const handleClick2 = () => {
  ElMessage.success('菜单2' + JSON.stringify(form.value))
}

const handleClick3 = () => {
  ElMessage.success('菜单3' + JSON.stringify(form.value))
}

const handleClick4 = () => {
  ElMessage.success('菜单4' + JSON.stringify(form.value))
}
</script>

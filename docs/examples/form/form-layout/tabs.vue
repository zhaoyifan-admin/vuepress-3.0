<template>
  <el-button @click="tabs.value = !tabs.value">转化</el-button><br /><br />
  <tvue-form @tab-click="handleTabClick"
             :option="option"
             v-model="form"
             @submit="handleSubmit">
    <template #group1-header>
      <h4>自定义表头</h4>
    </template>
  </tvue-form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

const tabs = ref(true)
const form = ref({
  text: '文本',
  text1: '文本1',
  text2: '文本2',
  text3: '文本3',
})

const option = computed(() => ({
  tabs: tabs.value,
  tabsActive: 2,
  column: [{
    label: '内容1',
    prop: 'text1',
  }],
  group: [
    {
      icon: 'el-icon-info',
      label: '分组1',
      prop: 'group1',
      column: [{
        label: '内容1',
        prop: 'text1',
      }]
    }, {
      icon: 'el-icon-info',
      label: '分组2',
      prop: 'group2',
      column: [{
        label: '选项卡2',
        prop: 'text2',
      }, {
        label: '选项卡3',
        prop: 'text3',
      }]
    }
  ]
}))

function handleSubmit () {
  ElMessage.success(JSON.stringify(form.value))
  setTimeout(() => {
    done()
  }, 2000)
}

function handleTabClick (tabs, event) {
  ElMessage.success('序号为:' + tabs.index)
}
</script>

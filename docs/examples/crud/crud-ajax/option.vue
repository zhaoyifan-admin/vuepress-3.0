<template>
  <tvue-crud v-model:defaults="defaults"
             :option="option"
             :data="data">
    <template #menu-left>
      <el-button type="primary"
                 @click="handleChange">点击改变</el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue'

const defaults = ref({
  text2: { display: true },
  text3: { label: '内容3' }
})

const data = ref([
  { text1: 0 }
])

const option = ref({
  column: [
    { label: '内容2', prop: 'text2', display: true },
    { label: '内容3', prop: 'text3' }
  ]
})

const flag = ref(true)

function handleChange () {
  flag.value = !flag.value
  if (flag.value) {
    defaults.value.text2.display = true
    defaults.value.text3.label = '内容3'
  } else {
    defaults.value.text2.display = false
    defaults.value.text3.label = '有没有发现我变了'
  }
}
</script>

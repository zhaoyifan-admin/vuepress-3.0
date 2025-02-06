<template>
  <tvue-tree :option="option"
             v-model="form">
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({})
const option = ref({
  formOption: {
    labelWidth: 100,
    column: [{ label: '自定义项', prop: 'label' }],
  },
  lazy: true,
  treeLoad: (node, resolve) => {
    if (node.level === 0) {
      return resolve([{ is_show: true, label: 'region', value: new Date().getTime() }])
    }
    if (node.level > 2) return resolve([])
    setTimeout(() => {
      const data = [
        { label: 'leaf', is_show: true, value: new Date().getTime(), leaf: true },
        { is_show: true, value: new Date().getTime(), label: 'zone' }
      ]
      resolve(data)
    }, 500)
  }
})
</script>

<template>
  <tvue-tree :option="option"
             :data="data"
             v-model="form">
  </tvue-tree>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({})
const data = ref([])

const option = ref({
  virtualize: true,
  formOption: {
    labelWidth: 100,
    column: [
      { label: '自定义项', prop: 'label' }
    ],
  }
})

const getKey = (prefix, id) => `${prefix}-${id}`

const createData = (maxDeep, maxChildren, minNodesNumber, deep = 1, key = 'node') => {
  let id = 0
  return Array.from({ length: minNodesNumber })
    .fill(deep)
    .map(() => {
      const childrenNumber = deep === maxDeep ? 0 : Math.round(Math.random() * maxChildren)
      const nodeKey = getKey(key, ++id)
      return {
        id: nodeKey,
        label: nodeKey,
        children: childrenNumber
          ? createData(maxDeep, maxChildren, childrenNumber, deep + 1, nodeKey)
          : undefined,
      }
    })
}

onMounted(() => {
  data.value = createData(4, 30, 40)
})
</script>

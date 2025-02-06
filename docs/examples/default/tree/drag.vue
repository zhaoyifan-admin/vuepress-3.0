<template>
  <tvue-tree @node-drag-start="handleDragStart"
             @node-drag-enter="handleDragEnter"
             @node-drag-leave="handleDragLeave"
             @node-drag-over="handleDragOver"
             @node-drag-end="handleDragEnd"
             @node-drop="handleDrop"
             :option="option"
             :data="data">
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const data = ref([
  {
    value: 0,
    label: '一级部门',
    children: [
      { value: 1, label: '一级部门1' },
      { value: 2, label: '一级部门2' }
    ]
  },
  {
    value: 3,
    label: '二级部门',
    children: [
      { value: 4, label: '二级部门1' },
      { value: 5, label: '二级部门2' }
    ]
  }
])

const option = ref({
  draggable: true,
  defaultExpandAll: true,
  allowDrop: (draggingNode, dropNode, type) => {
    if (dropNode.data.label === '一级部门2') {
      return type !== 'inner'
    } else {
      return true
    }
  },
  allowDrag: (draggingNode) => {
    return draggingNode.data.label.indexOf('一级部门2') === -1
  },
  formOption: {
    labelWidth: 100,
    column: [{ label: '自定义项', prop: 'label' }]
  }
})

const handleDragStart = (node, ev) => {
  console.log('drag start', node)
}

const handleDragEnter = (draggingNode, dropNode, ev) => {
  console.log('tree drag enter: ', dropNode.label)
}

const handleDragLeave = (draggingNode, dropNode, ev) => {
  console.log('tree drag leave: ', dropNode.label)
}

const handleDragOver = (draggingNode, dropNode, ev) => {
  console.log('tree drag over: ', dropNode.label)
}

const handleDragEnd = (draggingNode, dropNode, dropType, ev) => {
  console.log('tree drag end: ', dropNode && dropNode.label, dropType)
}

const handleDrop = (draggingNode, dropNode, dropType, ev) => {
  console.log('tree drop: ', dropNode.label, dropType)
}
</script>

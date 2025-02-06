<template>
  <el-button type="primary"
             @click="$refs.flow.addNode('测试节点')">添加节点</el-button>
  <el-button type="primary"
             @click="handleNext">下一个节点</el-button>
  <br /><br />
  <tvue-flow :height="600"
             :width="1200"
             ref="flow"
             :option="option"
             v-model="form">
    <template #header="{node}">
      <i class="el-icon-delete"
         @click="$refs.flow.deleteNode(node.id)"></i>
      自定义头部
    </template>
    <template #="{node}">
      <span>自定义{{(node || {}).name}}</span>
    </template>
  </tvue-flow>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { ElMessage } from 'element-plus'

const count = ref(0)
const form = ref('')
const option = ref({
  "name": "流程A",
  "nodeList": [
    { "id": "nodeA", "name": "流程A-节点A", "left": 39, "top": 110 },
    { "id": "nodeB", "name": "流程A-节点B", "left": 340, "top": 161 },
    { "id": "nodeC", "name": "流程A-节点C", "left": 739, "top": 161 },
    { "id": "nodeD", "name": "节点D", "left": 739, "top": 20 }
  ],
  "lineList": [
    { "from": "nodeA", "to": "nodeB" },
    { "from": "nodeB", "to": "nodeC" },
    { "from": "nodeC", "to": "nodeD" }
  ]
})

const nodeList = computed(() => option.value.nodeList)

onMounted(() => {
  form.value = nodeList.value[count.value].id
})

const handleClick = (node) => {
  ElMessage.success(JSON.stringify(node))
}

const handleNext = () => {
  count.value++
  if (count.value >= nodeList.value.length) {
    count.value = 0
  }
  form.value = nodeList.value[count.value].id
}
</script>

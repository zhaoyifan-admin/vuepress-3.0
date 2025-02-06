<template>
  <tvue-tree :option="option"
             :data="data"
             :filter-node-method="filterNodeMethod"
             @update="update"
             @save="save"
             @del="del"
             v-model="form">
    <template #="{ node, data }">
      <span class="el-tree-node__label">
        <i class="el-icon-user-solid"></i>
        {{ (node || {}).label }}
      </span>
    </template>
    <template #menu="{node}">
      <div class="tvue-tree__item"
           @click="tip(node)">自定义按钮</div>
    </template>
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const form = ref({})
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
  defaultExpandAll: true,
  formOption: {
    labelWidth: 100,
    column: [{ label: '自定义项', prop: 'label' }]
  }
})

const filterNodeMethod = (value, data) => {
  return !value || data.label.indexOf(value) !== -1
}

const tip = (node) => {
  ElMessage.success(JSON.stringify(node.data))
}

const del = (data, done) => {
  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage.success('删除回调')
    done()
  }).catch(() => {
    ElMessage.info('已取消删除')
  })
}

const update = (node, data, done, loading) => {
  ElMessage.success('更新回调')
  done()
}

const save = (node, data, done, loading) => {
  ElMessage.success('新增回调')
  form.value.id = new Date().getTime()
  form.value.value = new Date().getTime()
  form.value.children = []
  done()
}
</script>

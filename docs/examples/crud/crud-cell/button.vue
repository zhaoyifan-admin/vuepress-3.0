<template>
  <tvue-crud ref="crud"
             :option="option"
             :data="data"
             @row-update="rowUpdate"
             @row-save="rowSave"
             @row-click="handleRowClick">
    <template #menu="{ row, index }">
      <el-button text
                 type="primary"
                 :icon="row.$cellEdit ? 'el-icon-plus' : 'el-icon-edit'"
                 @click="rowCell(row, index)">
        {{ row.$cellEdit ? '自定义保存' : '自定义修改' }}
      </el-button>
      <el-button v-if="row.$cellEdit"
                 text
                 icon="el-icon-cancel"
                 type="primary"
                 @click="rowCancel(row, index)">
        取消
      </el-button>
    </template>
  </tvue-crud>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const data = ref([
  { id: 0, name: '张三', sex: 1, $cellEdit: true },
  { id: 1, name: '李四', sex: 0 }
])

const option = ref({
  addBtn: false,
  editBtn: false,
  addRowBtn: true,
  cellBtn: false,
  cancelBtn: false,
  column: [
    {
      label: '姓名',
      prop: 'name',
      cell: true,
      rules: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
      ]
    },
    {
      label: '性别',
      prop: 'sex',
      type: 'select',
      dicData: [
        { label: '男', value: 0 },
        { label: '女', value: 1 }
      ],
      cell: true
    },
    {
      label: '开关',
      prop: 'switch',
      type: 'switch',
      cell: true
    }
  ]
})

const crud = ref(null)
const rowCell = (row, index) => {
  crud.value.rowCell(row, index)
}

const rowCancel = (row, index) => {
  crud.value.rowCancel(row, index)
}

const rowSave = (form, done) => {
  ElMessage.success('新增数据: ' + JSON.stringify(form))
  done()
}

const rowUpdate = (form, index, done) => {
  ElMessage.success('编辑数据: ' + JSON.stringify(form) + ' 数据序号: ' + index)
  done()
}

const handleRowClick = (row, event, column) => {
  ElMessage({
    showClose: true,
    message: '序号: ' + row.id,
    type: 'success'
  })
}
</script>

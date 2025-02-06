<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <tvue-input-table :props="props"
                        :children="children"
                        :on-load="onLoad"
                        v-model="form"
                        placeholder="请选择数据"></tvue-input-table>
      格式化值:{{form}}<br />
      <tvue-input-table :props="props"
                        :children="children"
                        :formatter="formatter"
                        :on-load="onLoad"
                        v-model="form"
                        placeholder="请选择数据"></tvue-input-table>
      值:{{form1}}<br />
      <tvue-input-table multiple
                        :props="props"
                        :children="children"
                        :formatter="formatter1"
                        :on-load="onLoad1"
                        v-model="form1"
                        placeholder="请选择数据"></tvue-input-table>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const children = ref({
  border: true,
  column: [{
    label: '姓名',
    width: 120,
    search: true,
    prop: 'name'
  }, {
    label: '性别',
    search: true,
    prop: 'sex'
  }],
})
const props = ref({
  label: 'name',
  value: 'id'
})
const form = ref('0')
const form1 = ref([0, 1])
function formatter1 (row) {
  if (Array.isArray(row)) {
    return row.map(ele => ele.name + '格式化').join(',')
  } else {
    return row.name + '格式化'
  }
}
function onLoad1 ({ page, value, data }, callback) {
  if (value) {
    ElMessage.success('首次查询' + value)
    callback([{
      id: '0',
      name: '张三',
      sex: '男',
      age: 18
    }, {
      id: '2',
      name: '王五',
      sex: '女'
    }])
    return
  }
  if (data) {
    ElMessage.success('搜索查询参数' + JSON.stringify(data))
  }
  if (page) {
    ElMessage.success('分页参数' + JSON.stringify(page))
  }
  //分页查询信息
  callback({
    total: 2,
    data: [{
      id: '0',
      name: '张三',
      sex: '男',
      age: 18
    }, {
      id: '1',
      name: '李四',
      sex: '女',
      disabled: true,
      age: 18
    }, {
      id: '2',
      name: '王五',
      sex: '女'
    }]
  })
}
function formatter (row) {
  if (!row.name) return ''
  return row.name + '-' + row.sex
}
function onLoad ({ page, value, data }, callback) {
  //首次加载去查询对应的值
  if (value) {
    ElMessage.success('首次查询' + value)
    callback({
      id: '0',
      name: '张三',
      sex: '男'
    })
    return
  }
  if (data) {
    ElMessage.success('搜索查询参数' + JSON.stringify(data))
  }
  if (page) {
    ElMessage.success('分页参数' + JSON.stringify(page))
  }
  //分页查询信息
  callback({
    total: 2,
    data: [{
      id: '0',
      name: '张三',
      sex: '男'
    }, {
      id: '1',
      name: '李四',
      sex: '女'
    }]
  })
}
</script>
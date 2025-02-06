<template>
  <el-button type="primary"
             @click="showDialog"> 弹窗表单</el-button>
  <el-button type="primary"
             @click="showDialog('drawer')"> 抽屉表单</el-button>
  <el-button type="success"
             @click="showDialog1"> 弹窗表单（带上数据）</el-button>
</template>
<script setup>
import { ref, getCurrentInstance } from 'vue'
import { $DialogForm } from '@smallwei/avue'
import { ElMessage } from 'element-plus'

const { appContext } = getCurrentInstance();
const option = ref({
  submitText: '完成',
  span: 24,
  column: [
    {
      label: "姓名",
      prop: "name",
      rules: [{
        required: true,
        message: "请输入姓名",
        trigger: "blur"
      }],
    },
    {
      label: "年龄",
      prop: "age"
    }
  ]
})
const form = ref({})

const showDialog = (type) => {
  let dialogForm = $DialogForm(appContext)({
    title: '弹窗页面',
    width: '30%',
    type: type,
    menuPosition: 'right',
    option: option.value,
    beforeClose: (done) => {
      ElMessage.success('关闭前方法')
      done()
    },
    callback: (res) => {
      console.log(res.data)
      ElMessage.success('关闭等待框')
      setTimeout(() => {
        res.done()
        setTimeout(() => {
          ElMessage.success('关闭弹窗')
          res.close()
        }, 1000)
      }, 1000)
    }
  })
  //dialogForm.close()
}

const showDialog1 = () => {
  $DialogForm(appContext)({
    title: '弹窗页面（带上数据)',
    width: '50%',
    data: { name: 'small', age: 18 },
    option: option.value,
    callback: (res) => {
      console.log(res.data)
      ElMessage.success('关闭等待框')
      setTimeout(() => {
        res.done()
        setTimeout(() => {
          ElMessage.success('关闭弹窗')
          res.close()
        }, 1000)
      }, 1000)
    }
  })
}
</script>

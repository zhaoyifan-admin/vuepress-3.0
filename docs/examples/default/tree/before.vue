<template>
  <tvue-tree :before-open="beforeOpen"
             :before-close="beforeClose"
             :option="option"
             :data="data"
             v-model="form">
  </tvue-tree>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const form = ref({})
const data = [
  {
    value: 0,
    label: '一级部门',
    children: [
      {
        value: 1,
        label: '一级部门1',
      }, {
        value: 2,
        label: '一级部门2',
      }
    ]
  }, {
    value: 3,
    label: '二级部门',
    children: [
      {
        value: 4,
        label: '二级部门1',
      }, {
        value: 5,
        label: '二级部门2',
      }
    ]
  }
]
const option = {
  defaultExpandAll: true,
  formOption: {
    labelWidth: 100,
    column: [{
      label: '自定义项',
      prop: 'label'
    }, {
      label: '测试',
      prop: 'test'
    }],
  }
}

const beforeOpen = (done, type) => {
  ElMessageBox.alert(`我是${type}`, {
    confirmButtonText: '确定'
  }).then(() => {
    if (['view', 'edit'].includes(type)) {
      // 查看和编辑逻辑
    } else {
      //新增逻辑
      form.value.test = '初始化赋值'
    }
    done()
  })
}

const beforeClose = (done) => {
  ElMessageBox.confirm('确认关闭？')
    .then(() => {
      done()
    })
    .catch(() => { })
}
</script>

<template>
  <tvue-crud :data="data"
             :option="option"
             v-model:page="page"
             @on-load="onLoad"></tvue-crud>
</template>
<script setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
const page = ref({
  pageSize: 20,
  pagerCount: 5
})
const data = ref([])
const option = ref({
  align: 'center',
  menuAlign: 'center',
  column: [
    {
      label: '姓名',
      prop: 'name'
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
})
function onLoad () {
  // ElMessage.success('分页信息:' + JSON.stringify(page))
  page.value.total = 40
  //模拟分页
  if (page.value.currentPage === 1) {
    data.value = [
      {
        id: 1,
        name: '张三',
        sex: '男'
      }, {
        id: 2,
        name: '李四',
        sex: '女'
      }
    ]
  } else if (page.value.currentPage == 2) {
    data.value = [
      {
        id: 3,
        name: '王五',
        sex: '女'
      }, {
        id: 4,
        name: '赵六',
        sex: '女'
      }
    ]
  }
}
</script>
<template>
  <tvue-crud :data="data"
             :option="option"></tvue-crud>
</template>
<script setup>
import { ref, h } from 'vue'
const data = ref([
  {
    name: '张三',
    sex: '男'
  }, {
    name: '李四',
    sex: '女'
  }
])
const option = ref({
  column: [
    {
      label: '姓名',
      prop: 'name',
      render: ({ row }) => {
        return h('p',
          {
            attrs: { id: 'box' },
            class: { 'demo': true },
            style: { color: 'pink', lineHeight: '30px' },
          }, row.name + 'Hello World Avue')
      }
    },
    {
      label: '性别',
      prop: 'sex'
    }
  ]
},)
</script>
<template>
  <tvue-crud :data="data"
             :option="option">
    <template #index="{row,index}">
      <el-tag>{{index+1}}</el-tag>
    </template>
  </tvue-crud>
</template>
  <script>
export default {
  data () {
    return {
      data: [
        {
          name: '张三',
          sex: '男'
        }, {
          name: '李四',
          sex: '女'
        }
      ],
      option: {
        column: [{
          label: '序号',
          prop: 'index',
          fixed: true
        },
        {
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别',
          prop: 'sex'
        }
        ]
      },
    };
  }
}
  </script>
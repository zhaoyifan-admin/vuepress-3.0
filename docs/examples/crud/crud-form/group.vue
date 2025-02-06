<template>
  <tvue-crud :option="option"
             v-model="form"
             :data="data"></tvue-crud>
</template>
<script>
let baseUrl = 'https://cli.avuejs.com/api/area'
export default {
  data () {
    return {
      form: {
        name: '11'
      },
      data: [{
        name: '张三',
        sex: 15,
        province: '110000',
        city: '110100',
        area: '110101',
        checkbox: ['110000']
      }],
      option: {
        column: [{
          label: '姓名',
          prop: 'name',
          display: false
        },
        {
          label: '年龄',
          prop: 'sex',
          display: false
        }],
        group: [
          {
            label: '用户信息',
            prop: 'jbxx',
            icon: 'el-icon-edit-outline',
            column: [
              {
                label: '姓名',
                prop: 'name'
              },
              {
                label: '年龄',
                prop: 'sex'
              }
            ]
          }, {
            label: '退款申请',
            prop: 'tksq',
            icon: 'el-icon-view',
            column: [
              {
                label: '省份',
                prop: 'province',
                type: 'select',
                props: {
                  label: 'name',
                  value: 'code'
                },
                cascader: ['city'],
                dicUrl: `${baseUrl}/getProvince`,
                rules: [
                  {
                    required: true,
                    message: '请选择省份',
                    trigger: 'blur'
                  }
                ]
              },
              {
                label: '城市',
                prop: 'city',
                type: 'select',
                cascader: ['area'],
                props: {
                  label: 'name',
                  value: 'code'
                },
                cascaderIndex: 0,
                dicUrl: `${baseUrl}/getCity/{{key}}`,
                rules: [
                  {
                    required: true,
                    message: '请选择城市',
                    trigger: 'blur'
                  }
                ]
              },
              {
                label: '地区',
                prop: 'area',
                type: 'select',
                props: {
                  label: 'name',
                  value: 'code'
                },
                cascaderIndex: 0,
                dicUrl: `${baseUrl}/getArea/{{key}}`,
                rules: [
                  {
                    required: true,
                    message: '请选择地区',
                    trigger: 'blur'
                  }
                ]
              }
            ]
          }
          , {
            label: '用户信息',
            prop: 'yhxxs',
            icon: 'el-icon-edit-outline',
            column: [
              {
                label: '测试长度',
                prop: 'len',
                maxlength: 5,
              }, {
                labelWidth: 120,
                label: '测试自定义',
                prop: 'names'
              }
            ]
          }
        ]
      }
    }
  }
}
</script>
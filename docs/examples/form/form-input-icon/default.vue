<template>
  <tvue-form :option="option"> </tvue-form>
</template>
<script setup>
import { ref } from 'vue';
const option = ref({
  column: [
    {
      label: '图标选择器',
      prop: 'icon',
      type: 'icon',
      iconList: [{
        label: '阿里图标-Symbol图标',
        list: [
          {
            label: '机构',
            value: '#icon-jigou'
          },
          {
            label: '短信管理',
            value: '#icon-duanxinguanli'
          },
          {
            label: '发票管理系统',
            value: '#icon-fapiaoguanlixitong'
          },
          {
            label: '角色',
            value: '#icon-jiaose'
          },
          {
            label: '黑名单',
            value: '#icon-heimingdan2'
          },
          {
            label: 'KHCFDC_附件',
            value: '#icon-fujian4'
          },
          {
            label: '文档',
            value: '#icon-wendang3'
          },
          {
            label: '刷卡',
            value: '#icon-shuaka'
          },
          {
            label: '停车',
            value: '#icon-tingche3'
          },
          {
            label: '对象存储OSS',
            value: '#icon-duixiangcunchuOSS'
          },
          {
            label: '反馈',
            value: '#icon-fankui2'
          },
          {
            label: '短信',
            value: '#icon-ziyuan1'
          },
          {
            label: '对象存储服务',
            value: '#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu'
          },
          {
            label: '数据库_jurassic',
            value: '#icon-jurassic_data'
          },
          {
            label: '日志',
            value: '#icon-rizhi1'
          },
          {
            label: '权限',
            value: '#icon-quanxian4'
          },
          {
            label: '订单',
            value: '#icon-5'
          },
          {
            label: '机构',
            value: '#icon-jigou1'
          },
          {
            label: '机构人员',
            value: '#icon-jigourenyuan'
          },
          {
            label: '角色管理',
            value: '#icon-jiaoseguanli4'
          },
          {
            label: '角色管理',
            value: '#icon-jiaoseguanli5'
          },
          {
            label: '数据监控',
            value: '#icon-shujujiankong'
          },
          {
            label: '活动展示',
            value: '#icon-huodongzhanshi'
          },
          {
            label: 'vip invitation',
            value: '#icon-vipinvitation'
          }]
      }, {
        label: '阿里云图标',
        list: [
          'iconfont icon-zhongyingwen',
          'iconfont icon-rizhi1',
          'iconfont icon-bug',
          'iconfont icon-qq1',
          'iconfont icon-weixin1'
        ]
      }]
    }
  ]
})
</script>

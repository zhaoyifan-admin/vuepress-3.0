import{_ as g,b as t,r as v,o as f,h as _,g as a,a as i,f as l,c as h,e as n}from"./app-Cibr2ptE.js";const y={__name:"default",setup(d,{expose:s}){s();const u=t({total:40}),e=t([{name:"张三",age:18}]),r=t({column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"age"}]}),b={page:u,data:e,option:r,ref:t};return Object.defineProperty(b,"__isScriptSetup",{enumerable:!1,value:!0}),b}};function j(d,s,u,e,r,b){const c=v("el-tag"),m=v("tvue-crud");return f(),_(m,{option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=p=>e.page=p),data:e.data},{header:a(()=>[i(c,null,{default:a(()=>s[1]||(s[1]=[l("头部卡槽")])),_:1})]),body:a(()=>[i(c,null,{default:a(()=>s[2]||(s[2]=[l("中部卡槽")])),_:1})]),footer:a(()=>[i(c,null,{default:a(()=>s[3]||(s[3]=[l("尾部卡槽")])),_:1})]),page:a(()=>[i(c,null,{default:a(()=>s[4]||(s[4]=[l("分页卡槽")])),_:1})]),_:1},8,["option","page","data"])}const w=g(y,[["render",j],["__file","default.vue"]]),x={__name:"base",setup(d,{expose:s}){s();const u=t([{icon:"el-icon-platform-eleme",color:"rgba(201, 37, 37, 1)",array:"1,2,3",video:"/images/logo-bg.jpg",href:"https://www.baidu.com",string:"/images/logo-bg.jpg,/images/logo-bg.jpg",img:"https://avuejs.com/images/logo-bg.jpg,https://avuejs.com/images/logo-bg.jpg"}]),e=t({align:"center",menuAlign:"center",border:!0,column:[{label:"超链接",prop:"href",type:"url"},{label:"图标",prop:"icon",type:"icon",iconList:[{label:"阿里图标-Symbol图标",list:[{label:"机构",value:"#icon-jigou"},{label:"短信管理",value:"#icon-duanxinguanli"},{label:"发票管理系统",value:"#icon-fapiaoguanlixitong"},{label:"角色",value:"#icon-jiaose"},{label:"黑名单",value:"#icon-heimingdan2"},{label:"KHCFDC_附件",value:"#icon-fujian4"},{label:"文档",value:"#icon-wendang3"},{label:"刷卡",value:"#icon-shuaka"},{label:"停车",value:"#icon-tingche3"},{label:"对象存储OSS",value:"#icon-duixiangcunchuOSS"},{label:"反馈",value:"#icon-fankui2"},{label:"短信",value:"#icon-ziyuan1"},{label:"对象存储服务",value:"#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu"},{label:"数据库_jurassic",value:"#icon-jurassic_data"},{label:"日志",value:"#icon-rizhi1"},{label:"权限",value:"#icon-quanxian4"},{label:"订单",value:"#icon-5"},{label:"机构",value:"#icon-jigou1"},{label:"机构人员",value:"#icon-jigourenyuan"},{label:"角色管理",value:"#icon-jiaoseguanli4"},{label:"角色管理",value:"#icon-jiaoseguanli5"},{label:"数据监控",value:"#icon-shujujiankong"},{label:"活动展示",value:"#icon-huodongzhanshi"},{label:"vip invitation",value:"#icon-vipinvitation"}]},{label:"基本图标",list:[{label:"名称1",value:"el-icon-info"},{label:"名称2",value:"el-icon-error"},{label:"名称3",value:"el-icon-success"},{label:"名称4",value:"el-icon-warning"},{label:"名称5",value:"el-icon-question"}]},{label:"方向图标",list:["el-icon-info","el-icon-back","el-icon-arrow-left","el-icon-arrow-down","el-icon-arrow-right","el-icon-arrow-up"]},{label:"符号图标",list:["el-icon-plus","el-icon-minus","el-icon-close","el-icon-check"]},{label:"阿里云图标",list:["iconfont icon-zhongyingwen","iconfont icon-rizhi1","iconfont icon-bug","iconfont icon-qq1","iconfont icon-weixin1"]}]},{label:"颜色",prop:"color",type:"color"},{label:"单图",prop:"video",type:"upload",listType:"picture-img",span:24,propsHttp:{home:"https://avuejs.com"},tip:"只能上传jpg/png用户头像，且不超过500kb",action:"/imgupload"},{label:"图片",prop:"img",dataType:"string",type:"img"},{label:"图片上传组件",prop:"string",dataType:"string",type:"upload",propsHttp:{home:"https://avuejs.com",res:"data"},span:24,listType:"picture-card",tip:"只能上传jpg/png文件，且不超过500kb",action:"/imgupload"},{label:"数组",prop:"array",dataType:"number",propsHttp:{home:"http://demo.cssmoban.com"},type:"array"}]}),r={data:u,option:e,ref:t};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function k(d,s,u,e,r,b){const c=v("tvue-crud");return f(),_(c,{ref:"crud",option:e.option,data:e.data},null,8,["option","data"])}const S=g(x,[["render",k],["__file","base.vue"]]),T={__name:"index.html",setup(d,{expose:s}){s();const u={DemoDefault_vue:w,DemoBase_vue:S};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function z(d,s,u,e,r,b){const c=v("VPDemoBasic"),m=v("Tabs");return f(),h("div",null,[i(m,{id:"0",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:o})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:p,isActive:o})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:p,isActive:o})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:o})=>[i(c,{type:"vue"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,'  icon: "el-icon-platform-eleme",')]),l(`
`),n("span",{class:"line"},[n("span",null,"  color: 'rgba(201, 37, 37, 1)',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  array: '1,2,3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  video: '/images/logo-bg.jpg',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  href: 'https://www.baidu.com',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  string: '/images/logo-bg.jpg,/images/logo-bg.jpg',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  img: 'https://avuejs.com/images/logo-bg.jpg,https://avuejs.com/images/logo-bg.jpg'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '超链接',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'href',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'url'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    iconList: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '阿里图标-Symbol图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      list: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '机构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jigou'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '短信管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-duanxinguanli'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '发票管理系统',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-fapiaoguanlixitong'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '角色',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jiaose'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '黑名单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-heimingdan2'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'KHCFDC_附件',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-fujian4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '文档',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-wendang3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '刷卡',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-shuaka'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '停车',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-tingche3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '对象存储OSS',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-duixiangcunchuOSS'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '反馈',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-fankui2'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '短信',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-ziyuan1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '对象存储服务',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '数据库_jurassic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jurassic_data'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '日志',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-rizhi1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-quanxian4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '订单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-5'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '机构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jigou1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '机构人员',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jigourenyuan'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '角色管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jiaoseguanli4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '角色管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-jiaoseguanli5'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '数据监控',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-shujujiankong'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '活动展示',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-huodongzhanshi'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'vip invitation',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '#icon-vipinvitation'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '基本图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      list: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '名称1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'el-icon-info'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '名称2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'el-icon-error'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '名称3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'el-icon-success'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '名称4',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'el-icon-warning'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '名称5',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'el-icon-question'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '方向图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '符号图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '阿里云图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      list: ['iconfont icon-zhongyingwen', 'iconfont icon-rizhi1', 'iconfont icon-bug', 'iconfont icon-qq1', 'iconfont icon-weixin1']")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '颜色',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'color',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'color'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '单图',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'video',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'upload',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    listType: 'picture-img',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    propsHttp: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      home: 'https://avuejs.com',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tip: '只能上传jpg/png用户头像，且不超过500kb',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    action: '/imgupload'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '图片',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'img',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dataType: 'string',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'img'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '图片上传组件',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'string',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dataType: 'string',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'upload',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    propsHttp: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      home: 'https://avuejs.com',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      res: 'data'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    listType: 'picture-card',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tip: '只能上传jpg/png文件，且不超过500kb',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    action: '/imgupload'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '数组',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'array',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dataType: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    propsHttp: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      home: 'http://demo.cssmoban.com',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'array'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[i(e.DemoBase_vue)]),_:1})]),_:1}),s[8]||(s[8]=n("h1",{id:"其它自定义卡槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其它自定义卡槽"},[n("span",null,"其它自定义卡槽")])],-1)),i(m,{id:"13",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:o})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:p,isActive:o})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:p,isActive:o})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:o})=>[i(c,{type:"vue"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #header>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>头部卡槽</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #body>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>中部卡槽</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #footer>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>尾部卡槽</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #page>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>分页卡槽</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 40")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  age: 18,")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'age'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[i(e.DemoDefault_vue)]),_:1})]),_:1})])}const A=g(T,[["render",z],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/doc/crud-default/","title":"其它类型","lang":"zh-CN","frontmatter":{"title":"其它类型","createTime":"2025/02/06 09:43:17","permalink":"/doc/crud-default/"},"headers":[],"readingTime":{"minutes":0.14,"words":42},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-default.md","bulletin":false}');export{A as comp,D as data};

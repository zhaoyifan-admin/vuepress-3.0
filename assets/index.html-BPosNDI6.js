import{_ as h,b as d,r as v,o as _,h as f,g as e,a as c,f as s,t as x,c as k,e as n,d as g}from"./app-Cibr2ptE.js";const y={__name:"menu-right",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),t={data:r,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function w(m,l,r,a,t,b){const u=v("el-button"),o=v("tvue-crud");return _(),f(o,{data:a.data,option:a.option},{"menu-right":e(({size:i})=>[c(u,{type:"primary",icon:"el-icon-edit",circle:"",size:i},null,8,["size"])]),_:1},8,["data","option"])}const A=h(y,[["render",w],["__file","menu-right.vue"]]),S={__name:"menu-left",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),t={data:r,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function C(m,l,r,a,t,b){const u=v("el-button"),o=v("tvue-crud");return _(),f(o,{data:a.data,option:a.option},{"menu-left":e(({size:i})=>[c(u,{type:"primary",size:i},{default:e(()=>l[0]||(l[0]=[s("自定义按钮")])),_:2},1032,["size"])]),_:1},8,["data","option"])}const D=h(S,[["render",C],["__file","menu-left.vue"]]),$={__name:"headerslot",setup(m,{expose:l}){l();const r=d({column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),a=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),t={option:r,data:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function B(m,l,r,a,t,b){const u=v("el-tag"),o=v("tvue-crud");return _(),f(o,{ref:"crud",option:a.option,data:a.data},{"name-header":e(({column:i})=>[c(u,null,{default:e(()=>[s(x((i||{}).label)+"-"+x((i||{}).prop),1)]),_:2},1024)]),_:1},8,["option","data"])}const N=h($,[["render",B],["__file","headerslot.vue"]]),z={__name:"cell-style",setup(m,{expose:l}){l();const r=d([{name:"张三",money:3e3},{name:"李四",sex:!1,money:4e3},{name:"王五",sex:!1,money:2e3}]),a=d({column:[{label:"姓名",prop:"name"},{label:"工资",prop:"money"}]}),u={data:r,option:a,headerRowStyle:({rowIndex:o})=>{console.log({rowIndex:o})},headerCellStyle:({column:o,columnIndex:i,row:p,rowIndex:G})=>i===0?{color:"green",fontWeight:"bold",fontSize:"20px"}:{color:"red",fontWeight:"bold",fontSize:"20px"},ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function P(m,l,r,a,t,b){const u=v("tvue-crud");return _(),f(u,{data:a.data,option:a.option,"header-row-style":a.headerRowStyle,"header-cell-style":a.headerCellStyle},null,8,["data","option"])}const R=h(z,[["render",P],["__file","cell-style.vue"]]),j={__name:"row-class-name",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),u={data:r,option:a,headerRowClassName:({rowIndex:o})=>{console.log({rowIndex:o})},headerCellClassName:({column:o,columnIndex:i})=>{if(i===0)return"warning-row";if(i===1)return"success-row"},ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function H(m,l,r,a,t,b){const u=v("tvue-crud");return _(),f(u,{data:a.data,option:a.option,"header-cell-class-name":a.headerCellClassName,"header-row-class-name":a.headerRowClassName},null,8,["data","option"])}const I=h(j,[["render",H],["__file","row-class-name.vue"]]),O={__name:"children",setup(m,{expose:l}){l();const r=d({excelBtn:!0,border:!0,index:!0,expandLevel:3,headerAlign:"center",align:"center",tree:!0,labelWidth:100,column:[{label:"姓名",prop:"name",width:140},{label:"性别1",prop:"sex"},{label:"自定义图标",prop:"icon",type:"icon",iconList:[{label:"基本图表",list:["el-icon-time","el-icon-bell","el-icon-star-on"]}]},{label:"多级表头",children:[{label:"信息",children:[{label:"年龄",prop:"age"},{label:"手机号",prop:"phone"}]},{label:"地区",prop:"address",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]},{label:"测试",prop:"test"},{label:"手机信息1",prop:"phone1"}]}),a=d([{name:"张三",age:14,address:"110000",phone1:"17547400800",phone:"17547400800",icon:"el-icon-time",test:1,sex:"男"},{name:"王五",age:10,address:"120000",test:1,sex:"女",icon:"el-icon-star-on",phone1:"17547400800",phone:"17547400800"}]),t={option:r,data:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function E(m,l,r,a,t,b){const u=v("tvue-crud");return _(),f(u,{option:a.option,data:a.data},null,8,["option","data"])}const T=h(O,[["render",E],["__file","children.vue"]]),V={__name:"showHeader",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({showHeader:!1,column:[{label:"姓名",prop:"name",width:200,fixed:!0},{label:"性别",prop:"sex",width:300},{label:"日期",prop:"datetime",width:300},{label:"地址",prop:"address",width:300}]}),t={data:r,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function W(m,l,r,a,t,b){const u=v("tvue-crud");return _(),f(u,{data:a.data,option:a.option},null,8,["data","option"])}const L=h(V,[["render",W],["__file","showHeader.vue"]]),M={__name:"height",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"},{name:"张三",sex:"男"},{name:"李四",sex:"女"},{name:"张三",sex:"男"},{name:"李四",sex:"女"},{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({height:300,column:[{label:"姓名",prop:"name",width:200,fixed:!0},{label:"性别",prop:"sex",width:300},{label:"日期",prop:"datetime",width:300},{label:"地址",prop:"address",width:300}]}),t={data:r,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function F(m,l,r,a,t,b){const u=v("tvue-crud");return _(),f(u,{data:a.data,option:a.option},null,8,["data","option"])}const q=h(M,[["render",F],["__file","height.vue"]]),U={__name:"index.html",setup(m,{expose:l}){l();const r={DemoMenu_right_vue:A,DemoMenu_left_vue:D,DemoHeaderslot_vue:N,DemoCell_style_vue:R,DemoRow_class_name_vue:I,DemoChildren_vue:T,DemoShowHeader_vue:L,DemoHeight_vue:q};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function J(m,l,r,a,t,b){const u=v("VPDemoBasic"),o=v("Tabs");return _(),k("div",null,[l[32]||(l[32]=n("h2",{id:"固定表头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#固定表头"},[n("span",null,"固定表头")])],-1)),c(o,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"设置`height`时当表格的高度超过设定值，就会出现滚动条，从而达到固定表头的效果"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  height: 300,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name', width: 200, fixed: true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex', width: 300 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '日期', prop: 'datetime', width: 300 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '地址', prop: 'address', width: 300 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoHeight_vue)]),_:1})]),_:1}),l[33]||(l[33]=n("h2",{id:"隐藏表头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#隐藏表头"},[n("span",null,"隐藏表头")])],-1)),c(o,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"设`showHeader`属性为`false`即可隐藏表头"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  showHeader: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name', width: 200, fixed: true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex', width: 300 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '日期', prop: 'datetime', width: 300 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '地址', prop: 'address', width: 300 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoShowHeader_vue)]),_:1})]),_:1}),l[34]||(l[34]=n("h2",{id:"多级表头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多级表头"},[n("span",null,"多级表头")])],-1)),c(o,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[8]||(l[8]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[9]||(l[9]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"只要在配置中添加children层级嵌套即可"},{code:e(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  excelBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandLevel: 3,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  headerAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  tree: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 100,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name', width: 140 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别1', prop: 'sex' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '自定义图标',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'icon',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'icon',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      iconList: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '基本图表',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          list: ['el-icon-time', 'el-icon-bell', 'el-icon-star-on']")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '多级表头',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      children: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '信息',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { label: '年龄', prop: 'age' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { label: '手机号', prop: 'phone' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '地区',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'address',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          props: { label: 'name', value: 'code' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '测试', prop: 'test' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '手机信息1', prop: 'phone1' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    age: 14,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    address: '110000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    phone1: '17547400800',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    phone: '17547400800',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    icon: 'el-icon-time',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    test: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王五',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    age: 10,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    address: '120000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    test: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    icon: 'el-icon-star-on',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    phone1: '17547400800',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    phone: '17547400800'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoChildren_vue)]),_:1})]),_:1}),l[35]||(l[35]=g(`<h2 id="自定义表头样式" tabindex="-1"><a class="header-anchor" href="#自定义表头样式"><span>自定义表头样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">warning-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">F56C6C</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> !important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">fff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">success-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">67C23A</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> !important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">fff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),c(o,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[12]||(l[12]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[13]||(l[13]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以通过指定 组件的 `header-class-name`"},{code:e(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :header-cell-class-name="headerCellClassName"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :header-row-class-name="headerRowClassName"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const headerRowClassName = ({ rowIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log({ rowIndex });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const headerCellClassName = ({ column, columnIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (columnIndex === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return 'warning-row';")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else if (columnIndex === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return 'success-row';")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoRow_class_name_vue)]),_:1})]),_:1}),l[36]||(l[36]=n("h2",{id:"表头单元格样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表头单元格样式"},[n("span",null,"表头单元格样式")])],-1)),c(o,{id:"56",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[16]||(l[16]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[17]||(l[17]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"对开开放了`header-cell-style`和`header-row-style`方法"},{code:e(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :header-row-style="headerRowStyle"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :header-cell-style="headerCellStyle"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', money: 3000 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: false, money: 4000 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '王五', sex: false, money: 2000 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '工资', prop: 'money' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const headerRowStyle = ({ rowIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log({ rowIndex });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const headerCellStyle = ({ column, columnIndex, row, rowIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return columnIndex === 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ? { color: 'green', fontWeight: 'bold', fontSize: '20px' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    : { color: 'red', fontWeight: 'bold', fontSize: '20px' };")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoCell_style_vue)]),_:1})]),_:1}),l[37]||(l[37]=n("h2",{id:"自定义列表头",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义列表头"},[n("span",null,"自定义列表头")])],-1)),c(o,{id:"69",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[20]||(l[20]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[21]||(l[21]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"在卡槽中指定列的`prop`加上`-header`作为卡槽的名称即可自定义"},{code:e(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-header="{ column }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>{{ (column || {}).label }}-{{ (column || {}).prop }}</el-tag>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoHeaderslot_vue)]),_:1})]),_:1}),l[38]||(l[38]=n("h2",{id:"自定义菜单栏左边",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义菜单栏左边"},[n("span",null,"自定义菜单栏左边")])],-1)),c(o,{id:"82",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[24]||(l[24]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[25]||(l[25]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"卡槽为`menu-left`为表格菜单左边的位置"},{code:e(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-left="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size">自定义按钮</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoMenu_left_vue)]),_:1})]),_:1}),l[39]||(l[39]=n("h2",{id:"自定义菜单栏右边",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义菜单栏右边"},[n("span",null,"自定义菜单栏右边")])],-1)),c(o,{id:"95",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:p})=>l[28]||(l[28]=[s("vue2")])),title1:e(({value:i,isActive:p})=>l[29]||(l[29]=[s("vue3")])),tab0:e(({value:i,isActive:p})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"卡槽为`menu-right`为表格菜单右边的位置"},{code:e(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-right="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-edit"')]),s(`
`),n("span",{class:"line"},[n("span",null,"                 circle")]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"></el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[c(a.DemoMenu_right_vue)]),_:1})]),_:1})])}const Q=h(U,[["render",J],["__file","index.html.vue"]]),X=JSON.parse('{"path":"/doc/crud-head/","title":"表头配置","lang":"zh-CN","frontmatter":{"title":"表头配置","createTime":"2025/2/5 13:46:37","permalink":"/doc/crud-head/"},"headers":[],"readingTime":{"minutes":1.06,"words":319},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-head.md","bulletin":false}');export{Q as comp,X as data};

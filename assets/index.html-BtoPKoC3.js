import{_ as v,b as d,r as o,o as b,h as B,c as T,a as m,g as i,f as e,e as n}from"./app-Cibr2ptE.js";const f={__name:"index",setup(c,{expose:s}){s();const l=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({align:"center",menuAlign:"center",menuWidth:400,viewBtn:!0,menuTitle:"其它",addTitle:"保存标题",editTitle:"编辑标题",viewTitle:"查看标题",searchBtnText:"搜索文案",emptyBtnText:"清空文案",addBtnText:"新增文案",addBtnIcon:"el-icon-user",delBtnText:"删除文案",delBtnIcon:" ",editBtnIcon:" ",editBtnText:"编辑文案",viewBtnText:"查看文案",printBtnText:"打印文案",excelBtnText:"导出文案",updateBtnText:"修改文案",saveBtnText:"保存文案",cancelBtnText:"取消文案",printBtn:!0,excelBtn:!0,column:[{label:"姓名",prop:"name",search:!0},{label:"性别",prop:"sex",search:!0}]}),t={data:l,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function h(c,s,l,a,t,x){const u=o("tvue-crud");return b(),B(u,{data:a.data,option:a.option},null,8,["data","option"])}const g=v(f,[["render",h],["__file","index.vue"]]),w={__name:"index.html",setup(c,{expose:s}){s();const l={DemoIndex_vue:g};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function I(c,s,l,a,t,x){const u=o("VPDemoBasic"),_=o("Tabs");return b(),T("div",null,[m(_,{id:"0",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:r,isActive:p})=>s[0]||(s[0]=[e("vue2")])),title1:i(({value:r,isActive:p})=>s[1]||(s[1]=[e("vue3")])),tab0:i(({value:r,isActive:p})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:i(({value:r,isActive:p})=>[m(u,{type:"vue"},{code:i(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),e(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),e(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),e(`
`),n("span",{class:"line"},[n("span",null,"]);")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 400,")]),e(`
`),n("span",{class:"line"},[n("span",null,"  viewBtn: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,"  menuTitle: '其它',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  addTitle: '保存标题',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  editTitle: '编辑标题',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  viewTitle: '查看标题',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  searchBtnText: '搜索文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  emptyBtnText: '清空文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  addBtnText: '新增文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  addBtnIcon: 'el-icon-user',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  delBtnText: '删除文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  delBtnIcon: ' ',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  editBtnIcon: ' ',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  editBtnText: '编辑文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  viewBtnText: '查看文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  printBtnText: '打印文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  excelBtnText: '导出文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  updateBtnText: '修改文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  saveBtnText: '保存文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  cancelBtnText: '取消文案',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  printBtn: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,"  excelBtn: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name', search: true },")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex', search: true }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[m(a.DemoIndex_vue)]),_:1})]),_:1})])}const y=v(w,[["render",I],["__file","index.html.vue"]]),$=JSON.parse('{"path":"/doc/crud-text/","title":"按钮文案和图标","lang":"zh-CN","frontmatter":{"title":"按钮文案和图标","createTime":"2025/2/5 16:55:45","permalink":"/doc/crud-text/"},"headers":[],"readingTime":{"minutes":0.09,"words":27},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-text.md","bulletin":false}');export{y as comp,$ as data};

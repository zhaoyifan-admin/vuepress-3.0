import{_ as x,b as r,i as _,r as p,o as g,c as k,a as o,g as i,f as s,e as n,h as B,F as y,E as f}from"./app-Cibr2ptE.js";const M={__name:"base",setup(d,{expose:l}){l();const a=r(Math.random()),e=r(!0),c=r([]),m=r({border:!0,align:"center",menuAlign:"center",loadingText:"Loading...",loadingSpinner:"svg",loadingSvgViewBox:"-10, -10, 50, 50",loadingBackground:"rgba(122, 122, 122, 0.8)",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),t=()=>{e.value=!0,f.success("模拟2s后服务端动态加载"),setTimeout(()=>{c.value=[{name:"张三",sex:"男",province:"110000"},{name:"李四",sex:"女",province:"120000"}],e.value=!1,a.value=Math.random()},2e3)};_(()=>{t()});const u={reload:a,loading:e,data:c,option:m,getOption:t,ref:r,onMounted:_,get ElMessage(){return f}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function h(d,l,a,e,c,m){const t=p("el-button"),u=p("tvue-crud");return g(),k(y,null,[o(t,{type:"primary",icon:"el-icon-sort",onClick:e.getOption},{default:i(()=>l[0]||(l[0]=[s("加载等待框")])),_:1}),l[1]||(l[1]=n("br",null,null,-1)),l[2]||(l[2]=s()),l[3]||(l[3]=n("br",null,null,-1)),(g(),B(u,{key:e.reload,data:e.data,option:e.option,"table-loading":e.loading},null,8,["data","option","table-loading"]))],64)}const T=x(M,[["render",h],["__file","base.vue"]]),S={__name:"index.html",setup(d,{expose:l}){l();const a={DemoBase_vue:T};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function O(d,l,a,e,c,m){const t=p("VPDemoBasic"),u=p("Tabs");return g(),k("div",null,[l[4]||(l[4]=n("h2",{id:"普通用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通用法"},[n("span",null,"普通用法")])],-1)),o(u,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:v,isActive:b})=>l[0]||(l[0]=[s("vue2")])),title1:i(({value:v,isActive:b})=>l[1]||(l[1]=[s("vue3")])),tab0:i(({value:v,isActive:b})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:i(({value:v,isActive:b})=>[o(t,{type:"vue",desc:"`table-loading`属性可以配置等待加载状态"},{code:i(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             icon="el-icon-sort"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @click="getOption">加载等待框</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"  <br /> <br />")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :key="reload"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :table-loading="loading"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),s(`
`),n("span",{class:"line"},[n("span",null,"const loading = ref(true);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,'  loadingText: "Loading...",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  loadingSpinner: "svg",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  loadingSvgViewBox: "-10, -10, 50, 50",')]),s(`
`),n("span",{class:"line"},[n("span",null,'  loadingBackground: "rgba(122, 122, 122, 0.8)",')]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const getOption = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  loading.value = true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟2s后服务端动态加载');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { name: '张三', sex: '男', province: '110000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { name: '李四', sex: '女', province: '120000' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    loading.value = false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    reload.value = Math.random();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  getOption();")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[o(e.DemoBase_vue)]),_:1})]),_:1})])}const A=x(S,[["render",O],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/doc/crud-loading/","title":"等待加载","lang":"zh-CN","frontmatter":{"title":"等待加载","createTime":"2025/02/06 09:36:04","permalink":"/doc/crud-loading/"},"headers":[],"readingTime":{"minutes":0.14,"words":43},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-loading.md","bulletin":false}');export{A as comp,E as data};

import{_ as y,b as r,r as f,o as x,h as C,c as B,e as n,a as m,g as u,f as s}from"./app-Cibr2ptE.js";const $={__name:"slot",setup(o,{expose:l}){l();const t=r([]),e=r([{sum:5,avg:10,count:2},{sum:15,avg:20,count:1}]),c=r({selection:!0,index:!0,showSummary:!0,column:[{label:"相加",prop:"sum"},{label:"平均值",prop:"avg"},{label:"统计",prop:"count"}]}),d={selectList:t,data:e,option:c,selectionChange:i=>{t.value=i},summaryMethod:({columns:i})=>{const a=[];return i.length>0&&i.forEach((k,_)=>{let v=k.property;if(["sum","avg","count"].includes(v)){let b=t.value.map(h=>Number(h[v]||0)),S=b.length!==0?b.reduce((h,A)=>h+A):0;v==="sum"?a[_]=S:v==="avg"?a[_]=b.length?S/b.length:0:v==="count"&&(a[_]=b.length)}else a[_]="-"}),a},ref:r};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function w(o,l,t,e,c,g){const p=f("tvue-crud");return x(),C(p,{option:e.option,data:e.data,"summary-method":e.summaryMethod,onSelectionChange:e.selectionChange},null,8,["option","data"])}const L=y($,[["render",w],["__file","slot.vue"]]),N={__name:"base",setup(o,{expose:l}){l();const t=r([{sum:5,avg:10,count:2},{sum:15,avg:20,count:1}]),e=r({index:!0,showSummary:!0,sumColumnList:[{label:"自定义前缀:",name:"sum",type:"sum",decimals:1},{name:"avg",type:"avg"},{name:"count",type:"count"}],column:[{label:"相加",prop:"sum"},{label:"平均值",prop:"avg"},{label:"统计",prop:"count"}]}),c={data:t,option:e,ref:r};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function D(o,l,t,e,c,g){const p=f("tvue-crud");return x(),C(p,{option:e.option,data:e.data},null,8,["option","data"])}const P=y(N,[["render",D],["__file","base.vue"]]),T={__name:"index.html",setup(o,{expose:l}){l();const t={DemoSlot_vue:L,DemoBase_vue:P};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function M(o,l,t,e,c,g){const p=f("VPDemoBasic"),d=f("Tabs");return x(),B("div",null,[l[8]||(l[8]=n("p",null,"配置相应的属性后，在表格末尾即可达到统计合计功能",-1)),l[9]||(l[9]=n("h2",{id:"普通用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通用法"},[n("span",null,"普通用法")])],-1)),m(d,{id:"6",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:u(({value:i,isActive:a})=>l[0]||(l[0]=[s("vue2")])),title1:u(({value:i,isActive:a})=>l[1]||(l[1]=[s("vue3")])),tab0:u(({value:i,isActive:a})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:u(({value:i,isActive:a})=>[m(p,{type:"vue",desc:"`showSummary`设置为`true`即可开启统计合计功能，`sumColumnList`属性配置需要计算的表格列配置，其中`name`为列的`prop`值，`type`为需要计算的类型，目前支持（合计 / 平均 / 统计）三个大功能，后期将会加强表格的计算能力"},{code:u(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { sum: 5, avg: 10, count: 2 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { sum: 15, avg: 20, count: 1 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  showSummary: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  sumColumnList: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '自定义前缀:', name: 'sum', type: 'sum', decimals: 1 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { name: 'avg', type: 'avg' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { name: 'count', type: 'count' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '相加', prop: 'sum' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '平均值', prop: 'avg' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '统计', prop: 'count' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:u(()=>[m(e.DemoBase_vue)]),_:1})]),_:1}),l[10]||(l[10]=n("h2",{id:"自定义计算",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义计算"},[n("span",null,"自定义计算")])],-1)),m(d,{id:"19",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:u(({value:i,isActive:a})=>l[4]||(l[4]=[s("vue2")])),title1:u(({value:i,isActive:a})=>l[5]||(l[5]=[s("vue3")])),tab0:u(({value:i,isActive:a})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:u(({value:i,isActive:a})=>[m(p,{type:"vue"},{code:u(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :summary-method="summaryMethod"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @selection-change="selectionChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectList = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { sum: 5, avg: 10, count: 2 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { sum: 15, avg: 20, count: 1 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  showSummary: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '相加', prop: 'sum' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '平均值', prop: 'avg' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '统计', prop: 'count' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectionChange = (list) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectList.value = list;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const summaryMethod = ({ columns }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  const sums = [];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (columns.length > 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    columns.forEach((column, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let prop = column.property;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (['sum', 'avg', 'count'].includes(prop)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let values = selectList.value.map(item => Number(item[prop] || 0));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let all = values.length !== 0 ? values.reduce((a, b) => a + b) : 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (prop === 'sum') {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          sums[index] = all;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else if (prop === 'avg') {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          sums[index] = values.length ? all / values.length : 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else if (prop === 'count') {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          sums[index] = values.length;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        sums[index] = '-';")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    });")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return sums;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:u(()=>[m(e.DemoSlot_vue)]),_:1})]),_:1})])}const O=y(T,[["render",M],["__file","index.html.vue"]]),j=JSON.parse('{"path":"/doc/crud-sum/","title":"统计合计","lang":"zh-CN","frontmatter":{"title":"统计合计","createTime":"2025/02/06 09:23:10","permalink":"/doc/crud-sum/"},"headers":[],"readingTime":{"minutes":0.48,"words":145},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-sum.md","bulletin":false}');export{O as comp,j as data};

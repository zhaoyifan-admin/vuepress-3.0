import{_ as v,b as d,r as m,o as b,h,c as x,a as o,g as i,f as e,e as n}from"./app-Cibr2ptE.js";const g={__name:"crud-bind",setup(u,{expose:s}){s();const l=d([{deep:{deep:{deep:{value:"我是深结构"}}}}]),a=d({labelWidth:120,column:[{label:"深结构",prop:"test",bind:"deep.deep.deep.value"}]}),t={data:l,option:a,ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function k(u,s,l,a,t,_){const p=m("tvue-crud");return b(),h(p,{option:a.option,data:a.data},null,8,["option","data"])}const $=v(g,[["render",k],["__file","crud-bind.vue"]]),B={__name:"index.html",setup(u,{expose:s}){s();const l={DemoCrud_bind_vue:$};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function T(u,s,l,a,t,_){const p=m("VPDemoBasic"),f=m("Tabs");return b(),x("div",null,[o(f,{id:"0",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:c,isActive:r})=>s[0]||(s[0]=[e("vue2")])),title1:i(({value:c,isActive:r})=>s[1]||(s[1]=[e("vue3")])),tab0:i(({value:c,isActive:r})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:i(({value:c,isActive:r})=>[o(p,{type:"vue",desc:"`bing`绑定深层次的结构对象，`prop`也是需要填写"},{code:i(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),e(`
`),n("span",{class:"line"},[n("span",null,"  deep: {")]),e(`
`),n("span",{class:"line"},[n("span",null,"    deep: {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      deep: {")]),e(`
`),n("span",{class:"line"},[n("span",null,"        value: '我是深结构'")]),e(`
`),n("span",{class:"line"},[n("span",null,"      }")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  }")]),e(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '深结构',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'test',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      bind: 'deep.deep.deep.value'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[o(a.DemoCrud_bind_vue)]),_:1})]),_:1})])}const C=v(B,[["render",T],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/doc/crud-bind/","title":"深层结构数据","lang":"zh-CN","frontmatter":{"title":"深层结构数据","createTime":"2025/02/06 09:16:35","permalink":"/doc/crud-bind/"},"headers":[],"readingTime":{"minutes":0.15,"words":45},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-bind.md","bulletin":false}');export{C as comp,N as data};

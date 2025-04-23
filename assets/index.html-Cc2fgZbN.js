import{_ as b,b as m,r as v,o as f,h as x,c as h,a as d,g as i,f as l,e as n}from"./app-Cibr2ptE.js";const y={__name:"base",setup(p,{expose:s}){s();const a=m({title:"我是头部标题",title1:"我是尾部标题"}),e=m({column:[{label:"",labelWidth:20,type:"title",prop:"title",span:24,styles:{color:"red",fontSize:"24px"}},{label:"输入框",prop:"text"},{label:"",labelWidth:20,type:"title",prop:"title1",span:24,styles:{color:"green",fontSize:"18px"}}]}),t={form:a,option:e,ref:m};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function g(p,s,a,e,t,_){const r=v("tvue-form");return f(),x(r,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=u=>e.form=u),option:e.option},null,8,["modelValue","option"])}const S=b(y,[["render",g],["__file","base.vue"]]),B={__name:"index.html",setup(p,{expose:s}){s();const a={DemoBase_vue:S};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function T(p,s,a,e,t,_){const r=v("VPDemoBasic"),u=v("Tabs");return f(),h("div",null,[d(u,{id:"0",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:c,isActive:o})=>s[0]||(s[0]=[l("vue2")])),title1:i(({value:c,isActive:o})=>s[1]||(s[1]=[l("vue3")])),tab0:i(({value:c,isActive:o})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:i(({value:c,isActive:o})=>[d(r,{type:"vue"},{code:i(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  title: '我是头部标题',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  title1: '我是尾部标题'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 20,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'title',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "title",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      styles: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        color: 'red',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        fontSize: '24px'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 20,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'title',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "title1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      styles: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        color: 'green',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        fontSize: '18px'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(e.DemoBase_vue)]),_:1})]),_:1})])}const k=b(B,[["render",T],["__file","index.html.vue"]]),$=JSON.parse('{"path":"/form/form-title/","title":"Title标题","lang":"zh-CN","frontmatter":{"title":"Title标题","createTime":"2025/02/06 14:23:33","permalink":"/form/form-title/"},"headers":[],"readingTime":{"minutes":0.08,"words":23},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-title.md","bulletin":false}');export{k as comp,$ as data};

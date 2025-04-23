import{_ as v,b as c,r as d,o as m,h as y,c as x,e as n,a as p,g as a,f as e}from"./app-Cibr2ptE.js";const $={__name:"color",setup(o,{expose:s}){s();const l={option:c({column:[{label:"颜色选择器",prop:"color",type:"color",predefine:["#ff4500","#ff8c00","#ffd700"]}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function g(o,s,r,l,b,f){const u=d("tvue-form");return m(),y(u,{option:l.option},null,8,["option"])}const A=v($,[["render",g],["__file","color.vue"]]),h={__name:"format",setup(o,{expose:s}){s();const l={option:c({column:[{label:"颜色选择器",prop:"color",type:"color",colorFormat:"hex",showAlpha:!1}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function k(o,s,r,l,b,f){const u=d("tvue-form");return m(),y(u,{option:l.option},null,8,["option"])}const D=v(h,[["render",k],["__file","format.vue"]]),S={__name:"disabled",setup(o,{expose:s}){s();const l={option:c({column:[{label:"颜色选择器",prop:"color",type:"color",disabled:!0}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function P(o,s,r,l,b,f){const u=d("tvue-form");return m(),y(u,{option:l.option},null,8,["option"])}const B=v(S,[["render",P],["__file","disabled.vue"]]),C={__name:"value",setup(o,{expose:s}){s();const l={option:c({column:[{label:"颜色选择器",prop:"color",type:"color",value:"rgba(71, 46, 46, 1)"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function O(o,s,r,l,b,f){const u=d("tvue-form");return m(),y(u,{option:l.option},null,8,["option"])}const V=v(C,[["render",O],["__file","value.vue"]]),j={__name:"base",setup(o,{expose:s}){s();const l={option:c({column:[{label:"颜色选择器",prop:"color",type:"color"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function T(o,s,r,l,b,f){const u=d("tvue-form");return m(),y(u,{option:l.option},null,8,["option"])}const N=v(j,[["render",T],["__file","base.vue"]]),w={__name:"index.html",setup(o,{expose:s}){s();const r={DemoColor_vue:A,DemoFormat_vue:D,DemoDisabled_vue:B,DemoValue_vue:V,DemoBase_vue:N};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function F(o,s,r,l,b,f){const u=d("VPDemoBasic"),_=d("Tabs");return m(),x("div",null,[s[20]||(s[20]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(_,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[0]||(s[0]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[1]||(s[1]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"通过将`type`属性的值指定为`color`"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '颜色选择器',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'color'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoBase_vue)]),_:1})]),_:1}),s[21]||(s[21]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(_,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[4]||(s[4]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[5]||(s[5]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '颜色选择器',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      value: 'rgba(71, 46, 46, 1)'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoValue_vue)]),_:1})]),_:1}),s[22]||(s[22]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(_,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[8]||(s[8]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[9]||(s[9]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '颜色选择器',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoDisabled_vue)]),_:1})]),_:1}),s[23]||(s[23]=n("h2",{id:"颜色格式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#颜色格式"},[n("span",null,"颜色格式")])],-1)),p(_,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[12]||(s[12]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[13]||(s[13]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '颜色选择器',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      colorFormat: 'hex',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      showAlpha: false")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoFormat_vue)]),_:1})]),_:1}),s[24]||(s[24]=n("h2",{id:"预定义颜色",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#预定义颜色"},[n("span",null,"预定义颜色")])],-1)),p(_,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[16]||(s[16]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[17]||(s[17]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '颜色选择器',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'color',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      predefine: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"        '#ff4500',")]),e(`
`),n("span",{class:"line"},[n("span",null,"        '#ff8c00',")]),e(`
`),n("span",{class:"line"},[n("span",null,"        '#ffd700'")]),e(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoColor_vue)]),_:1})]),_:1})])}const z=v(w,[["render",F],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/form/form-input-color/","title":"Color颜色选择器","lang":"zh-CN","frontmatter":{"title":"Color颜色选择器","createTime":"2025/02/06 11:43:40","permalink":"/form/form-input-color/"},"headers":[],"readingTime":{"minutes":0.46,"words":138},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input-color.md","bulletin":false}');export{z as comp,E as data};

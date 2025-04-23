import{_ as d,b as o,r as v,o as m,h as y,c as g,e as n,a as p,g as a,f as s}from"./app-Cibr2ptE.js";const x={__name:"url",setup(c,{expose:e}){e();const l={option:o({column:[{label:"超链接框",prop:"array",type:"url",value:["http://avuejs.com"]},{label:"单个超链接框",prop:"array",alone:!0,type:"url",value:["http://avuejs.com"]}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function $(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const A=d(x,[["render",$],["__file","url.vue"]]),k={__name:"img",setup(c,{expose:e}){e();const l={option:o({column:[{label:"图片框",prop:"array",type:"img",value:["/logo.png"]},{label:"单个图片框",prop:"array",alone:!0,type:"img",value:["/logo.png"]}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function h(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const D=d(k,[["render",h],["__file","img.vue"]]),S={__name:"disabled",setup(c,{expose:e}){e();const l={option:o({column:[{label:"数组框",prop:"array",type:"array",disabled:!0,value:[0,1]}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function j(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const P=d(S,[["render",j],["__file","disabled.vue"]]),B={__name:"limit",setup(c,{expose:e}){e();const l={option:o({column:[{label:"数组框",prop:"array",type:"array",limit:3,value:[0,1,2]}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function O(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const V=d(B,[["render",O],["__file","limit.vue"]]),T={__name:"value",setup(c,{expose:e}){e();const l={option:o({column:[{label:"数组框",prop:"array",type:"array",value:[0,1]}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function N(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const C=d(T,[["render",N],["__file","value.vue"]]),q={__name:"base",setup(c,{expose:e}){e();const l={option:o({column:[{label:"数组框",prop:"array",type:"array"}]}),ref:o};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function w(c,e,r,l,b,_){const t=v("tvue-form");return m(),y(t,{option:l.option},null,8,["option"])}const I=d(q,[["render",w],["__file","base.vue"]]),L={__name:"index.html",setup(c,{expose:e}){e();const r={DemoUrl_vue:A,DemoImg_vue:D,DemoDisabled_vue:P,DemoLimit_vue:V,DemoValue_vue:C,DemoBase_vue:I};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function U(c,e,r,l,b,_){const t=v("VPDemoBasic"),f=v("Tabs");return m(),g("div",null,[e[24]||(e[24]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(f,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[0]||(e[0]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[1]||(e[1]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[2]||(e[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过将`type`属性的值指定为`array`"},{code:a(()=>e[3]||(e[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数组框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'array'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoBase_vue)]),_:1})]),_:1}),e[25]||(e[25]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(f,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[4]||(e[4]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[5]||(e[5]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[6]||(e[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>e[7]||(e[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数组框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: [0, 1]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoValue_vue)]),_:1})]),_:1}),e[26]||(e[26]=n("h2",{id:"最大限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最大限制"},[n("span",null,"最大限制")])],-1)),p(f,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[8]||(e[8]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[9]||(e[9]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[10]||(e[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`limit`限制最大个数"},{code:a(()=>e[11]||(e[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数组框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      limit: 3,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: [0, 1, 2]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoLimit_vue)]),_:1})]),_:1}),e[27]||(e[27]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(f,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[12]||(e[12]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[13]||(e[13]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[14]||(e[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>e[15]||(e[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数组框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: [0, 1]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoDisabled_vue)]),_:1})]),_:1}),e[28]||(e[28]=n("h2",{id:"图片框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图片框"},[n("span",null,"图片框")])],-1)),p(f,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[16]||(e[16]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[17]||(e[17]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[18]||(e[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过将`type`属性的值指定为`img`"},{code:a(()=>e[19]||(e[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '图片框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'img',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: ['/logo.png']")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '单个图片框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      alone: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'img',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: ['/logo.png']")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoImg_vue)]),_:1})]),_:1}),e[29]||(e[29]=n("h2",{id:"超链接框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#超链接框"},[n("span",null,"超链接框")])],-1)),p(f,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>e[20]||(e[20]=[s("vue2")])),title1:a(({value:i,isActive:u})=>e[21]||(e[21]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>e[22]||(e[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过将`type`属性的值指定为`url`"},{code:a(()=>e[23]||(e[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '超链接框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'url',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: ['http://avuejs.com']")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '单个超链接框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'array',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      alone: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'url',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: ['http://avuejs.com']")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoUrl_vue)]),_:1})]),_:1})])}const E=d(L,[["render",U],["__file","index.html.vue"]]),J=JSON.parse('{"path":"/form/form-array/","title":"Array数组框","lang":"zh-CN","frontmatter":{"title":"Array数组框","createTime":"2025/02/06 14:24:44","permalink":"/form/form-array/"},"headers":[],"readingTime":{"minutes":0.59,"words":177},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-array.md","bulletin":false}');export{E as comp,J as data};

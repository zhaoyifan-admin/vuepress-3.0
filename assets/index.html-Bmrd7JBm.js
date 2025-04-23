import{_ as b,b as c,r as m,o as f,h as g,c as y,e as n,a as p,g as a,f as e}from"./app-Cibr2ptE.js";const x={__name:"drag",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag",value:[1,2,3],drag:!0}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function $(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const A=b(x,[["render",$],["__file","drag.vue"]]),k={__name:"len",setup(o,{expose:s}){s();const r=c({}),l=c({column:[{label:"标签",prop:"tag",type:"tag",maxlength:10,showWordLimit:!0}]}),v={form:r,option:l,ref:c};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function h(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option,modelValue:l.form,"onUpdate:modelValue":s[0]||(s[0]=d=>l.form=d)},null,8,["option","modelValue"])}const D=b(k,[["render",h],["__file","len.vue"]]),S={__name:"size",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag",size:"large"},{label:"标签",prop:"tag1",type:"tag",size:"small"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function P(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const z=b(S,[["render",P],["__file","size.vue"]]),V={__name:"clearable",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag",clearable:!1}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function O(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const j=b(V,[["render",O],["__file","clearable.vue"]]),B={__name:"disabled",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag",disabled:!0}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function T(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const w=b(B,[["render",T],["__file","disabled.vue"]]),C={__name:"value",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag",value:[1,2,3]}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function L(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const N=b(C,[["render",L],["__file","value.vue"]]),W={__name:"base",setup(o,{expose:s}){s();const l={option:c({column:[{label:"标签",prop:"tag",type:"tag"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function q(o,s,r,l,v,_){const u=m("tvue-form");return f(),g(u,{option:l.option},null,8,["option"])}const E=b(W,[["render",q],["__file","base.vue"]]),I={__name:"index.html",setup(o,{expose:s}){s();const r={DemoDrag_vue:A,DemoLen_vue:D,DemoSize_vue:z,DemoClearable_vue:j,DemoDisabled_vue:w,DemoValue_vue:N,DemoBase_vue:E};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function J(o,s,r,l,v,_){const u=m("VPDemoBasic"),d=m("Tabs");return f(),y("div",null,[s[28]||(s[28]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(d,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[0]||(s[0]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[1]||(s[1]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"按 Enter 回车键添加输入内容为标签"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoBase_vue)]),_:1})]),_:1}),s[29]||(s[29]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(d,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[4]||(s[4]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[5]||(s[5]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      value: [1, 2, 3],")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoValue_vue)]),_:1})]),_:1}),s[30]||(s[30]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(d,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[8]||(s[8]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[9]||(s[9]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoDisabled_vue)]),_:1})]),_:1}),s[31]||(s[31]=n("h2",{id:"可清空",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可清空"},[n("span",null,"可清空")])],-1)),p(d,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[12]||(s[12]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[13]||(s[13]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      clearable: false")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoClearable_vue)]),_:1})]),_:1}),s[32]||(s[32]=n("h2",{id:"尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#尺寸"},[n("span",null,"尺寸")])],-1)),p(d,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[16]||(s[16]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[17]||(s[17]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"可通过`size`属性指定输入框的尺寸，还提供了`large`,`small`"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      size: 'large',")]),e(`
`),n("span",{class:"line"},[n("span",null,"    },")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag1',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      size: 'small'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoSize_vue)]),_:1})]),_:1}),s[33]||(s[33]=n("h2",{id:"输入长度限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入长度限制"},[n("span",null,"输入长度限制")])],-1)),p(d,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[20]||(s[20]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[21]||(s[21]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `showWordLimit` 属性来展示字数统计"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({})")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      maxlength: 10,")]),e(`
`),n("span",{class:"line"},[n("span",null,"      showWordLimit: true")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoLen_vue)]),_:1})]),_:1}),s[34]||(s[34]=n("h2",{id:"拖拽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#拖拽"},[n("span",null,"拖拽")])],-1)),p(d,{id:"81",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[24]||(s[24]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[25]||(s[25]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"配置`drag`为`true`即可开启拖拽模式"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '标签',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      value: [1, 2, 3],")]),e(`
`),n("span",{class:"line"},[n("span",null,"      drag: true")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoDrag_vue)]),_:1})]),_:1})])}const U=b(I,[["render",J],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/form/form-tag/","title":"InputTag 输标签输入框","lang":"zh-CN","frontmatter":{"title":"InputTag 输标签输入框","createTime":"2025/02/06 11:45:47","permalink":"/form/form-tag/"},"headers":[],"readingTime":{"minutes":0.97,"words":290},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input-tag.md","bulletin":false}');export{U as comp,F as data};

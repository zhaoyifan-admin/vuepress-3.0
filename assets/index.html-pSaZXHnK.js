import{_ as m,b as o,r as d,o as b,h as y,c as x,e as n,a as t,g as l,f as s}from"./app-Cibr2ptE.js";import{D as A,a as g}from"./base-CHK62xeN.js";const k={__name:"controlsPosition",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",controlsPosition:"",type:"number"}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function $(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const S=m(k,[["render",$],["__file","controlsPosition.vue"]]),D={__name:"precision",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",type:"number",precision:2}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function P(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const h=m(D,[["render",P],["__file","precision.vue"]]),z={__name:"size",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"input",type:"number",size:"large"},{label:"数字输入框",prop:"input1",type:"number",size:"small"}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function B(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const O=m(z,[["render",B],["__file","size.vue"]]),j={__name:"controls",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",type:"number",controls:!1}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function N(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const C=m(j,[["render",N],["__file","controls.vue"]]),V={__name:"stepStrictly",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",type:"number",step:2,stepStrictly:!0}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function T(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const q=m(V,[["render",T],["__file","stepStrictly.vue"]]),w={__name:"step",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",type:"number",step:2}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function M(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const E=m(w,[["render",M],["__file","step.vue"]]),J={__name:"max",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",min:1,max:2,type:"number"}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function R(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const F=m(J,[["render",R],["__file","max.vue"]]),G={__name:"disabled",setup(c,{expose:e}){e();const a={option:o({column:[{label:"数字输入框",prop:"num",type:"number",disabled:!0}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function H(c,e,r,a,f,_){const p=d("tvue-form");return b(),y(p,{option:a.option},null,8,["option"])}const I=m(G,[["render",H],["__file","disabled.vue"]]),K={__name:"index.html",setup(c,{expose:e}){e();const r={DemoControlsPosition_vue:S,DemoPrecision_vue:h,DemoSize_vue:O,DemoControls_vue:C,DemoStepStrictly_vue:q,DemoStep_vue:E,DemoMax_vue:F,DemoDisabled_vue:I,DemoValue_vue:A,DemoBase_vue:g};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function L(c,e,r,a,f,_){const p=d("VPDemoBasic"),v=d("Tabs");return b(),x("div",null,[e[40]||(e[40]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),t(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[0]||(e[0]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[1]||(e[1]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[2]||(e[2]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过将`type`属性的值指定为`number`"},{code:l(()=>e[3]||(e[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'input'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoBase_vue)]),_:1})]),_:1}),e[41]||(e[41]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),t(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[4]||(e[4]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[5]||(e[5]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[6]||(e[6]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:l(()=>e[7]||(e[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: '默认值'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoValue_vue)]),_:1})]),_:1}),e[42]||(e[42]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),t(v,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[8]||(e[8]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[9]||(e[9]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[10]||(e[10]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`disabled`属性接受一个 Boolean，设置为`true`即可禁用整个组件"},{code:l(()=>e[11]||(e[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoDisabled_vue)]),_:1})]),_:1}),e[43]||(e[43]=n("h2",{id:"最大值最小值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最大值最小值"},[n("span",null,"最大值最小值")])],-1)),t(v,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[12]||(e[12]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[13]||(e[13]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[14]||(e[14]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 `0`"},{code:l(()=>e[15]||(e[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      min: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      max: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoMax_vue)]),_:1})]),_:1}),e[44]||(e[44]=n("h2",{id:"步数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#步数"},[n("span",null,"步数")])],-1)),t(v,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[16]||(e[16]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[17]||(e[17]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[18]||(e[18]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`step`属性可以控制步长，接受一个`Number`"},{code:l(()=>e[19]||(e[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoStep_vue)]),_:1})]),_:1}),e[45]||(e[45]=n("h2",{id:"严格步数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#严格步数"},[n("span",null,"严格步数")])],-1)),t(v,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[20]||(e[20]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[21]||(e[21]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[22]||(e[22]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`stepStrictly`属性接受一个`Boolean`。如果这个属性被设置为`true`，则只能输入步数的倍数"},{code:l(()=>e[23]||(e[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      stepStrictly: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoStepStrictly_vue)]),_:1})]),_:1}),e[46]||(e[46]=n("h2",{id:"隐藏控制器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#隐藏控制器"},[n("span",null,"隐藏控制器")])],-1)),t(v,{id:"81",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[24]||(e[24]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[25]||(e[25]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[26]||(e[26]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`controls`属性是否使用控制按钮"},{code:l(()=>e[27]||(e[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      controls: false")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoControls_vue)]),_:1})]),_:1}),e[47]||(e[47]=n("h2",{id:"尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#尺寸"},[n("span",null,"尺寸")])],-1)),t(v,{id:"94",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[28]||(e[28]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[29]||(e[29]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[30]||(e[30]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"可通过`size`属性指定输入框的尺寸，还提供了`large`,`small`"},{code:l(()=>e[31]||(e[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      size: 'large'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      size: 'small'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoSize_vue)]),_:1})]),_:1}),e[48]||(e[48]=n("h2",{id:"精度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#精度"},[n("span",null,"精度")])],-1)),t(v,{id:"107",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[32]||(e[32]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[33]||(e[33]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[34]||(e[34]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`precision`属性可以控制数值精度，接收一个`Number`"},{code:l(()=>e[35]||(e[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 使用 ref 创建响应式的数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      precision: 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoPrecision_vue)]),_:1})]),_:1}),e[49]||(e[49]=n("h2",{id:"按钮位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮位置"},[n("span",null,"按钮位置")])],-1)),t(v,{id:"120",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:l(({value:i,isActive:u})=>e[36]||(e[36]=[s("vue2")])),title1:l(({value:i,isActive:u})=>e[37]||(e[37]=[s("vue3")])),tab0:l(({value:i,isActive:u})=>e[38]||(e[38]=[n("p",null,null,-1)])),tab1:l(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置 `controlsPosition`属性可以控制按钮位置"},{code:l(()=>e[39]||(e[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字输入框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'num',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      controlsPosition: '',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:l(()=>[t(a.DemoControlsPosition_vue)]),_:1})]),_:1})])}const W=m(K,[["render",L],["__file","index.html.vue"]]),X=JSON.parse('{"path":"/form/form-number/","title":"Number 数字输入框","lang":"zh-CN","frontmatter":{"title":"Number 数字输入框","createTime":"2025/02/06 10:21:12","permalink":"/form/form-number/"},"headers":[],"readingTime":{"minutes":1.22,"words":367},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-number.md","bulletin":false}');export{W as comp,X as data};

import{_ as m,b as o,r as v,o as b,h as y,c as g,e as n,a as t,g as a,f as s}from"./app-Cibr2ptE.js";const x={__name:"marks",setup(c,{expose:l}){l();const e={option:o({column:[{label:"滑块",prop:"slider",type:"slider",range:!0,value:[30,60],marks:{0:"0°C",8:"8°C",37:"37°C",50:{style:{color:"#1989FA"},label:"50%"}}}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function k(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const h=m(x,[["render",k],["__file","marks.vue"]]),$={__name:"vertical",setup(c,{expose:l}){l();const e={option:o({column:[{label:"滑块",prop:"slider",type:"slider",vertical:!0,height:200}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function S(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const A=m($,[["render",S],["__file","vertical.vue"]]),w={__name:"range",setup(c,{expose:l}){l();const e={option:o({column:[{label:"滑块",prop:"slider",type:"slider",showStops:!0,max:10,range:!0,value:[4,8]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function D(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const P=m(w,[["render",D],["__file","range.vue"]]),T={__name:"showInput",setup(c,{expose:l}){l();const e={option:o({column:[{label:"滑块",prop:"slider",type:"slider",showInput:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function C(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const B=m(T,[["render",C],["__file","showInput.vue"]]),O={__name:"step",setup(c,{expose:l}){l();const e={option:o({column:[{label:"滑块",prop:"slider",type:"slider",step:10,showStops:!0},{label:"滑块",prop:"slider",type:"slider",step:10}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function j(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const I=m(O,[["render",j],["__file","step.vue"]]),V={__name:"base",setup(c,{expose:l}){l();const e={option:o({column:[{label:"普通滑块",prop:"slider",type:"slider"},{label:"初始化值",prop:"slider",type:"slider",value:2},{label:"隐藏提示",prop:"slider",type:"slider",showTooltip:!1},{label:"格式化值",prop:"slider",type:"slider",formatTooltip(d){return"格式化的值"+d}},{label:"禁用",prop:"slider",type:"slider",disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function q(c,l,r,e,d,f){const p=v("tvue-form");return b(),y(p,{option:e.option},null,8,["option"])}const N=m(V,[["render",q],["__file","base.vue"]]),R={__name:"index.html",setup(c,{expose:l}){l();const r={DemoMarks_vue:h,DemoVertical_vue:A,DemoRange_vue:P,DemoShowInput_vue:B,DemoStep_vue:I,DemoBase_vue:N};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function F(c,l,r,e,d,f){const p=v("VPDemoBasic"),_=v("Tabs");return b(),g("div",null,[l[24]||(l[24]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),t(_,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过将`type`属性的值指定为`slider`"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "普通滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "初始化值",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "隐藏提示",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      showTooltip: false")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "格式化值",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatTooltip (val) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return '格式化的值' + val;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "禁用",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoBase_vue)]),_:1})]),_:1}),l[25]||(l[25]=n("h2",{id:"离散值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#离散值"},[n("span",null,"离散值")])],-1)),l[26]||(l[26]=n("blockquote",null,[n("p",null,"选项可以是离散的")],-1)),t(_,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"改变`step`的值可以改变步长，通过设置`showStops`属性可以显示间断点"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: 10,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      showStops: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoStep_vue)]),_:1})]),_:1}),l[27]||(l[27]=n("h2",{id:"带有输入框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#带有输入框"},[n("span",null,"带有输入框")])],-1)),l[28]||(l[28]=n("blockquote",null,[n("p",null,"通过输入框设置精确数值")],-1)),t(_,{id:"39",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`showInput`属性会在右侧显示一个输入框"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      showInput: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoShowInput_vue)]),_:1})]),_:1}),l[29]||(l[29]=n("h2",{id:"范围选择",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#范围选择"},[n("span",null,"范围选择")])],-1)),l[30]||(l[30]=n("blockquote",null,[n("p",null,"支持选择某一数值范围")],-1)),t(_,{id:"57",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      showStops: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      max: 10,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      range: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: [4, 8]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRange_vue)]),_:1})]),_:1}),l[31]||(l[31]=n("h2",{id:"竖向模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#竖向模式"},[n("span",null,"竖向模式")])],-1)),t(_,{id:"70",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      vertical: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      height: 200")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoVertical_vue)]),_:1})]),_:1}),l[32]||(l[32]=n("h2",{id:"展示标记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#展示标记"},[n("span",null,"展示标记")])],-1)),t(_,{id:"83",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`marks`属性可以展示标记"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "滑块",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "slider",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'slider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      range: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: [30, 60],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      marks: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        0: '0°C',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        8: '8°C',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        37: '37°C',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        50: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          style: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            color: '#1989FA'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '50%',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoMarks_vue)]),_:1})]),_:1})])}const z=m(R,[["render",F],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/form/form-slider/","title":"Slider滑块","lang":"zh-CN","frontmatter":{"title":"Slider滑块","createTime":"2025/02/06 14:52:37","permalink":"/form/form-slider/"},"headers":[],"readingTime":{"minutes":0.87,"words":262},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-slider.md","bulletin":false}');export{z as comp,E as data};

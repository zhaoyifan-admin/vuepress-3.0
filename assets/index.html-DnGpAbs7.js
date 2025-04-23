import{_ as b,b as o,r as m,o as f,h as x,E as g,c as k,e as n,a as p,g as e,f as l}from"./app-Cibr2ptE.js";import{D as A,a as D}from"./base-CHK62xeN.js";const w={__name:"len",setup(d,{expose:s}){s();const r=o({}),a=o({column:[{label:"单文本框",prop:"input",maxlength:10,showWordLimit:!0},{label:"多文本框",prop:"textarea",type:"textarea",minRows:3,maxRows:5,maxlength:20,span:24,showWordLimit:!0}]}),c={form:r,option:a,ref:o};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function $(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:a.option,modelValue:a.form,"onUpdate:modelValue":s[0]||(s[0]=v=>a.form=v)},null,8,["option","modelValue"])}const C=b(w,[["render",$],["__file","len.vue"]]),h={__name:"icon",setup(d,{expose:s}){s();const r=o({}),a=o({column:[{label:"输入框",prop:"input",appendClick:()=>{g.success("appendClick")},prependClick:()=>{g.success("prependClick")},prepend:"HTTP",append:"COM"},{label:"输入框",prop:"input1",suffixIcon:"el-icon-date",prefixIcon:"el-icon-search"}]}),c={form:r,option:a,ref:o,get ElMessage(){return g}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function S(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:a.option,modelValue:a.form,"onUpdate:modelValue":s[0]||(s[0]=v=>a.form=v)},null,8,["option","modelValue"])}const V=b(h,[["render",S],["__file","icon.vue"]]),P={__name:"size",setup(d,{expose:s}){s();const a={option:o({column:[{label:"输入框",prop:"input",size:"large"},{label:"输入框",prop:"input1",size:"small"}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function T(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:a.option},null,8,["option"])}const R=b(P,[["render",T],["__file","size.vue"]]),z={data(){return{option:{column:[{label:"文本域",prop:"input",type:"textarea",minRows:3,maxRows:5},{label:"文本域",prop:"input1",type:"textarea",rows:5}]}}}};function I(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:c.option},null,8,["option"])}const L=b(z,[["render",I],["__file","textarea.vue"]]),O=o({jsLib:[],cssLib:[],script:"",css:"",html:""}),B={__name:"clearable",setup(d,{expose:s}){s();const a={option:o({column:[{label:"输入框",prop:"input",clearable:!1}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function j(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:a.option},null,8,["option"])}const E=b(B,[["render",j],["__file","clearable.vue"]]),M={__name:"disabled",setup(d,{expose:s}){s();const a={option:o({column:[{label:"输入框",prop:"input",disabled:!0}]}),ref:o};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function N(d,s,r,a,c,_){const t=m("tvue-form");return f(),x(t,{option:a.option},null,8,["option"])}const q=b(M,[["render",N],["__file","disabled.vue"]]),W={__name:"index.html",setup(d,{expose:s}){s();const r={DemoLen_vue:C,DemoIcon_vue:V,DemoSize_vue:R,DemoTextarea_vue:L,get DemoContainer59(){return O},DemoClearable_vue:E,DemoDisabled_vue:q,DemoValue_vue:A,DemoBase_vue:D};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function H(d,s,r,a,c,_){const t=m("VPDemoBasic"),v=m("Tabs"),y=m("VPDemoNormal");return f(),k("div",null,[s[34]||(s[34]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"当`type`为`input`时可以不写,默认为`input`"},{code:e(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'input'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoBase_vue)]),_:1})]),_:1}),s[35]||(s[35]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:e(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '默认值'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoValue_vue)]),_:1})]),_:1}),s[36]||(s[36]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(v,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:e(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoDisabled_vue)]),_:1})]),_:1}),s[37]||(s[37]=n("h2",{id:"可清空",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可清空"},[n("span",null,"可清空")])],-1)),p(v,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"},{code:e(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      clearable: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoClearable_vue)]),_:1})]),_:1}),s[38]||(s[38]=n("h2",{id:"密码框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#密码框"},[n("span",null,"密码框")])],-1)),n("blockquote",null,[s[17]||(s[17]=n("p",null,"用于密码，通过将 type 属性的值指定为 password",-1)),p(y,{config:a.DemoContainer59},{default:e(()=>s[16]||(s[16]=[n("p",null,"form/form-input/password",-1)])),_:1},8,["config"])]),s[39]||(s[39]=n("h2",{id:"文本域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文本域"},[n("span",null,"文本域")])],-1)),s[40]||(s[40]=n("blockquote",null,[n("p",null,"用于文本域，通过将 type 属性的值指定为 textarea,文本域高度可通过 rows 属性控制")],-1)),p(v,{id:"73",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[18]||(s[18]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[19]||(s[19]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[20]||(s[20]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过设置`maxRows`和`minRows`，指定最小行数和最大行数,使得文本域的高度能够根据文本内容自动进行调整"},{code:e(()=>s[21]||(s[21]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script>")]),l(`
`),n("span",{class:"line"},[n("span",null,"export default {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      option: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '文本域',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            type: 'textarea',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            minRows: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            maxRows: 5")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '文本域',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'input1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            type: 'textarea',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            rows: 5")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoTextarea_vue)]),_:1})]),_:1}),s[41]||(s[41]=n("h2",{id:"尺寸",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#尺寸"},[n("span",null,"尺寸")])],-1)),p(v,{id:"86",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[22]||(s[22]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[23]||(s[23]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[24]||(s[24]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"可通过`size`属性指定输入框的尺寸，还提供了`large`,`small`"},{code:e(()=>s[25]||(s[25]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      size: 'large',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      size: 'small'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoSize_vue)]),_:1})]),_:1}),s[42]||(s[42]=n("h2",{id:"复合型输入框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#复合型输入框"},[n("span",null,"复合型输入框")])],-1)),s[43]||(s[43]=n("blockquote",null,[n("p",null,"带有图标标记输入类型")],-1)),p(v,{id:"104",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[26]||(s[26]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[27]||(s[27]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[28]||(s[28]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"可以通过 `prefixIcon` 和 `suffixIcon`以及`prepend`和`append`属性在 `input` 组件首部和尾部增加显示图标"},{code:e(()=>s[29]||(s[29]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      appendClick: () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ElMessage.success('appendClick')")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prependClick: () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ElMessage.success('prependClick')")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prepend: 'HTTP',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      append: 'COM'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input1',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      suffixIcon: "el-icon-date",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prefixIcon: "el-icon-search"')]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoIcon_vue)]),_:1})]),_:1}),s[44]||(s[44]=n("h2",{id:"输入长度限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#输入长度限制"},[n("span",null,"输入长度限制")])],-1)),p(v,{id:"117",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>s[30]||(s[30]=[l("vue2")])),title1:e(({value:i,isActive:u})=>s[31]||(s[31]=[l("vue3")])),tab0:e(({value:i,isActive:u})=>s[32]||(s[32]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `showWordLimit` 属性来展示字数统计"},{code:e(()=>s[33]||(s[33]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单文本框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxlength: 10,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      showWordLimit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多文本框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'textarea',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'textarea',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      minRows: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxRows: 5,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxlength: 20,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      showWordLimit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoLen_vue)]),_:1})]),_:1})])}const F=b(W,[["render",H],["__file","index.html.vue"]]),G=JSON.parse('{"path":"/form/form-input/","title":"Input 输入框","lang":"zh-CN","frontmatter":{"title":"Input 输入框","createTime":"2025/02/06 10:16:04","permalink":"/form/form-input/"},"headers":[],"readingTime":{"minutes":1.48,"words":445},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input.md","bulletin":false}');export{F as comp,G as data};

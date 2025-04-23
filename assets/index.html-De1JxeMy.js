import{_ as b,b as o,r as m,o as f,h as x,c as k,e as n,a as c,g as a,f as l}from"./app-Cibr2ptE.js";const y={__name:"border",setup(r,{expose:s}){s();const e={option:o({column:[{label:"空心多选",prop:"checkbox",type:"checkbox",border:!0,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function h(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const D=b(y,[["render",h],["__file","border.vue"]]),A={__name:"button",setup(r,{expose:s}){s();const t=o({checkbox:[0,1]}),e=o({column:[{label:"实心多选",prop:"checkbox",type:"checkbox",button:!0,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),v={form:t,option:e,ref:o};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function $(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const g=b(A,[["render",$],["__file","button.vue"]]),S={__name:"max",setup(r,{expose:s}){s();const e={option:o({column:[{label:"空心多选",prop:"checkbox",type:"checkbox",min:0,max:2,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function P(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const j=b(S,[["render",P],["__file","max.vue"]]),B={__name:"all",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选",prop:"checkbox",type:"checkbox",all:!0,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function O(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const V=b(B,[["render",O],["__file","all.vue"]]),T={__name:"disabled-item",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选框",prop:"checkbox",type:"checkbox",dicData:[{label:"男",value:0},{label:"女",value:1,disabled:!0},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function C(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const N=b(T,[["render",C],["__file","disabled-item.vue"]]),q={__name:"disabled",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选框",prop:"checkbox",type:"checkbox",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}],disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function U(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const w=b(q,[["render",U],["__file","disabled.vue"]]),M={__name:"value",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选框",prop:"checkbox",type:"checkbox",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}],value:[0]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function z(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const E=b(M,[["render",z],["__file","value.vue"]]),J={__name:"dic",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选框",prop:"checkbox",type:"checkbox",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function R(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const F=b(J,[["render",R],["__file","dic.vue"]]),G={__name:"base",setup(r,{expose:s}){s();const e={option:o({column:[{label:"多选",prop:"checkbox",type:"checkbox",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function H(r,s,t,e,v,_){const p=m("tvue-form");return f(),x(p,{option:e.option},null,8,["option"])}const I=b(G,[["render",H],["__file","base.vue"]]),K={__name:"index.html",setup(r,{expose:s}){s();const t={DemoBorder_vue:D,DemoButton_vue:g,DemoMax_vue:j,DemoAll_vue:V,DemoDisabled_item_vue:N,DemoDisabled_vue:w,DemoValue_vue:E,DemoDic_vue:F,DemoBase_vue:I};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function L(r,s,t,e,v,_){const p=m("VPDemoBasic"),d=m("Tabs");return f(),k("div",null,[s[36]||(s[36]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),s[37]||(s[37]=n("blockquote",null,[n("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。")],-1)),c(d,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"通过将`type`属性的值指定为`checkbox`,同时配置`dicData`为字典值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),s[38]||(s[38]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[39]||(s[39]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),c(d,{id:"26",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '多选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDic_vue)]),_:1})]),_:1}),s[40]||(s[40]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),c(d,{id:"39",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: [0]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoValue_vue)]),_:1})]),_:1}),s[41]||(s[41]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),c(d,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDisabled_vue)]),_:1})]),_:1}),s[42]||(s[42]=n("h2",{id:"禁用选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用选项"},[n("span",null,"禁用选项")])],-1)),c(d,{id:"65",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"返回的字典中数据配置`disabled`属性指定是否禁用"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDisabled_item_vue)]),_:1})]),_:1}),s[43]||(s[43]=n("h2",{id:"全选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#全选"},[n("span",null,"全选")])],-1)),c(d,{id:"78",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"配置`all`为`true`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    all: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoAll_vue)]),_:1})]),_:1}),s[44]||(s[44]=n("h2",{id:"数量限制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数量限制"},[n("span",null,"数量限制")])],-1)),c(d,{id:"91",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"使用`min`和`max`属性能够限制可以被勾选的项目的数量"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '空心多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      min: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      max: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoMax_vue)]),_:1})]),_:1}),s[45]||(s[45]=n("h2",{id:"按钮样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮样式"},[n("span",null,"按钮样式")])],-1)),c(d,{id:"104",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"配置`button`为`true`"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  checkbox: [0, 1],")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '实心多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    button: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoButton_vue)]),_:1})]),_:1}),s[46]||(s[46]=n("h2",{id:"空心样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#空心样式"},[n("span",null,"空心样式")])],-1)),c(d,{id:"117",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[32]||(s[32]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[33]||(s[33]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[c(p,{type:"vue",desc:"配置`border`为`true`"},{code:a(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '空心多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '未知',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBorder_vue)]),_:1})]),_:1})])}const W=b(K,[["render",L],["__file","index.html.vue"]]),X=JSON.parse('{"path":"/form/form-checkbox/","title":"Checkbox多选框","lang":"zh-CN","frontmatter":{"title":"Checkbox多选框","createTime":"2025/02/06 13:23:40","permalink":"/form/form-checkbox/"},"headers":[],"readingTime":{"minutes":1.03,"words":310},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-checkbox.md","bulletin":false}');export{W as comp,X as data};

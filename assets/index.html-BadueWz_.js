import{_ as m,b as o,r as d,o as b,h,c as y,e as n,a as p,g as a,f as l}from"./app-Cibr2ptE.js";const w={__name:"loading",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",beforeChange:v=>{setTimeout(()=>{v(!0)},1e3)},dicData:[{label:"关",value:0},{label:"开",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function D(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const x=m(w,[["render",D],["__file","loading.vue"]]),g={__name:"icon",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",activeIcon:"el-icon-check",inactiveIcon:"el-icon-close",dicData:[{label:"关",value:0},{label:"开",value:1}]},{label:"开关",prop:"switch",type:"switch",activeIcon:"el-icon-check",inactiveIcon:"el-icon-close",inlinePrompt:!0,dicData:[{label:"关",value:0},{label:"开",value:1}]},{label:"开关",prop:"switch",type:"switch",activeActionIcon:"el-icon-check",inactiveActionIcon:"el-icon-close",dicData:[{label:"关",value:0},{label:"开",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function k(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const A=m(g,[["render",k],["__file","icon.vue"]]),$={__name:"color",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",dicData:[{label:"关",value:0},{label:"开",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function S(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const I=m($,[["render",S],["__file","color.vue"]]),P={__name:"dic-net",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function j(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const O=m(P,[["render",j],["__file","dic-net.vue"]]),C={__name:"dic",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",props:{label:"name",value:"code"},dicData:[{name:"关",code:0},{name:"开",code:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function B(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const T=m(C,[["render",B],["__file","dic.vue"]]),V={__name:"disabled",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",dicData:[{label:"关",value:0},{label:"开",value:1}],disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function q(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const N=m(V,[["render",q],["__file","disabled.vue"]]),U={__name:"value",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",dicData:[{label:"关",value:0},{label:"开",value:1}],value:1}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function L(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option},null,8,["option"])}const z=m(U,[["render",L],["__file","value.vue"]]),E={__name:"base",setup(r,{expose:s}){s();const e={option:o({column:[{label:"开关",prop:"switch",type:"switch",dicData:[{label:"关",value:0},{label:"开",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function J(r,s,c,e,v,f){const t=d("tvue-form");return b(),h(t,{option:e.option.value},null,8,["option"])}const R=m(E,[["render",J],["__file","base.vue"]]),F={__name:"index.html",setup(r,{expose:s}){s();const c={DemoLoading_vue:x,DemoIcon_vue:A,DemoColor_vue:I,DemoDic_net_vue:O,DemoDic_vue:T,DemoDisabled_vue:N,DemoValue_vue:z,DemoBase_vue:R};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function G(r,s,c,e,v,f){const t=d("VPDemoBasic"),_=d("Tabs");return b(),y("div",null,[s[32]||(s[32]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),s[33]||(s[33]=n("blockquote",null,[n("p",null,"表示两种相互对立的状态间的切换，多用于触发「开/关」")],-1)),p(_,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过将`type`属性的值指定为`switch`,同时配置`dicData`为字典值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option.value"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBase_vue)]),_:1})]),_:1}),s[34]||(s[34]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(_,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoValue_vue)]),_:1})]),_:1}),s[35]||(s[35]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(_,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '开',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDisabled_vue)]),_:1})]),_:1}),s[36]||(s[36]=n("h2",{id:"字典属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典属性"},[n("span",null,"字典属性")])],-1)),s[37]||(s[37]=n("blockquote",null,[n("p",null,"指定标签文本和值，默认为label和value")],-1)),p(_,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`props`属性来指定标签文本和值，默认为`label`和`value`"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      code: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '开',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      code: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDic_vue)]),_:1})]),_:1}),s[38]||(s[38]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[39]||(s[39]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),p(_,{id:"70",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址，默认只会取前2项"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDic_net_vue)]),_:1})]),_:1}),s[40]||(s[40]=n("h2",{id:"按钮颜色",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮颜色"},[n("span",null,"按钮颜色")])],-1)),p(_,{id:"83",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"使用使用 CSS var `--el-switch-on-color`和`--el-switch-off-color`控制颜色"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<style>")]),l(`
`),n("span",{class:"line"},[n("span",null,":root {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  --el-switch-on-color: #13ce66;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  --el-switch-off-color: #ff4949;")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"</style>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoColor_vue)]),_:1})]),_:1}),s[41]||(s[41]=n("h2",{id:"图标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图标"},[n("span",null,"图标")])],-1)),p(_,{id:"96",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"使用`activeIcon`属性与`inactiveIcon`属性来设置状态的图标`inlinePrompt`属性可以让图标内置。使用`activeActionIcon`属性与`inactiveActionIcon`属性来设置按钮状态图标。当使用图标时，文字属性就不会展示"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      activeIcon: "el-icon-check",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      inactiveIcon: "el-icon-close",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      activeIcon: "el-icon-check",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      inactiveIcon: "el-icon-close",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      inlinePrompt: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      activeActionIcon: "el-icon-check",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      inactiveActionIcon: "el-icon-close",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoIcon_vue)]),_:1})]),_:1}),s[42]||(s[42]=n("h2",{id:"阻止切换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#阻止切换"},[n("span",null,"阻止切换")])],-1)),p(_,{id:"109",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`beforeChange`函数回调done方法传入`true/false`"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      beforeChange: (done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          done(true);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '关', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '开', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoLoading_vue)]),_:1})]),_:1})])}const K=m(F,[["render",G],["__file","index.html.vue"]]),M=JSON.parse('{"path":"/form/form-switch/","title":"Switch开关","lang":"zh-CN","frontmatter":{"title":"Switch开关","createTime":"2025/02/06 11:23:08","permalink":"/form/form-switch/"},"headers":[],"readingTime":{"minutes":1.23,"words":369},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-switch.md","bulletin":false}');export{K as comp,M as data};

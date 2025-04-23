import{_ as f,b as o,r as b,o as _,h as g,p as x,g as a,e as n,t as $,E as y,c as A,a as t,f as l}from"./app-Cibr2ptE.js";import{_ as D}from"./logo-CuOPLjxS.js";const k="https://cli.avuejs.com/api/area",S={__name:"remote",setup(v,{expose:s}){s();const r=o({province:"110000",province1:"110000,120000,130000,140000"}),e=o({column:[{label:"提及框",prop:"province",type:"mention",remote:!0,value:"@",props:{label:"name",value:"code"},dicUrl:`${k}/getProvince?id={{key}}`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]}),d={baseUrl:k,form:r,option:e,ref:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function P(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c)},null,8,["option","modelValue"])}const j=f(S,[["render",P],["__file","remote.vue"]]),C={__name:"slot",setup(v,{expose:s}){s();const r=o({province:"120000"}),e=o({column:[{label:"提及框",prop:"province",type:"mention",value:"@",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince",typeformat(c,i,u){return`值:${c[i]}-名:${c[u]}`},change(c){d()},rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]});function d(c){x(()=>{const i=m.value.getPropRef("province");if(i){const u=i.$el.querySelector("img");u&&u.setAttribute("style",`
          background: url('/logo.png') no-repeat;
          background-position: 10px center;
          background-size: 20px 20px;
          padding-left:20px;
          text-indent: 30px;
        `)}})}const m=o(null),p={form:r,option:e,setSelectImg:d,formRef:m,ref:o,nextTick:x};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function R(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option,form:e.form,"onUpdate:form":s[0]||(s[0]=c=>e.form=c),ref:"formRef"},{"province-type":a(({item:c,value:i,label:u})=>[s[1]||(s[1]=n("img",{src:D,style:{width:"20px"}},null,-1)),n("span",null,$(c.label),1)]),_:1},8,["option","form"])}const T=f(C,[["render",R],["__file","slot.vue"]]),U={__name:"dic-net",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",value:"@",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function O(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const V=f(U,[["render",O],["__file","dic-net.vue"]]),q={__name:"dic-local",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",value:"@",props:{label:"name",value:"code"},dicData:[{name:"字典1",code:0},{name:"字典2",code:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function h(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const I=f(q,[["render",h],["__file","dic-local.vue"]]),M={__name:"icon",setup(v,{expose:s}){s();const r=o({}),e=o({column:[{label:"提及框",prop:"mention",type:"mention",value:"@",appendClick:()=>{y.success("appendClick")},prependClick:()=>{y.success("prependClick")},prepend:"HTTP",append:"COM"},{label:"输入框",prop:"tag1",type:"tag",value:"@",suffixIcon:"el-icon-date",prefixIcon:"el-icon-search"}]}),d={form:r,option:e,ref:o,get ElMessage(){return y}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function B(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c)},null,8,["option","modelValue"])}const E=f(M,[["render",B],["__file","icon.vue"]]),N={__name:"clearable",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",value:"@",clearable:!1,dicData:[{label:"字典1",value:0},{label:"字典2",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function w(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const z=f(N,[["render",w],["__file","clearable.vue"]]),H={__name:"disabled",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}],disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function J(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const F=f(H,[["render",J],["__file","disabled.vue"]]),G={__name:"value",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}],value:"@"}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function K(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const L=f(G,[["render",K],["__file","value.vue"]]),Q={__name:"base",setup(v,{expose:s}){s();const e={option:o({column:[{label:"提及框",prop:"mention",type:"mention",value:"@",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function W(v,s,r,e,d,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const X=f(Q,[["render",W],["__file","base.vue"]]),Y={__name:"index.html",setup(v,{expose:s}){s();const r={DemoRemote_vue:j,DemoSlot_vue:T,DemoDic_net_vue:V,DemoDic_local_vue:I,DemoIcon_vue:E,DemoClearable_vue:z,DemoDisabled_vue:F,DemoValue_vue:L,DemoBase_vue:X};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function Z(v,s,r,e,d,m){const p=b("VPDemoBasic"),c=b("Tabs");return _(),A("div",null,[s[36]||(s[36]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),t(c,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"用于在输入中提及某人或某事,同时配置`dicData`为字典值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoBase_vue)]),_:1})]),_:1}),s[37]||(s[37]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),t(c,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典1', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典2', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoValue_vue)]),_:1})]),_:1}),s[38]||(s[38]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),t(c,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDisabled_vue)]),_:1})]),_:1}),s[39]||(s[39]=n("h2",{id:"可清空",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可清空"},[n("span",null,"可清空")])],-1)),t(c,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      clearable: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典1', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典2', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoClearable_vue)]),_:1})]),_:1}),s[40]||(s[40]=n("h2",{id:"复合型输入框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#复合型输入框"},[n("span",null,"复合型输入框")])],-1)),s[41]||(s[41]=n("blockquote",null,[n("p",null,"带有图标标记输入类型")],-1)),t(c,{id:"60",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"可以通过 `prefixIcon` 和 `suffixIcon`以及`prepend`和`append`属性在 `input` 组件首部和尾部增加显示图标"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"      prop: 'tag1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tag',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      suffixIcon: "el-icon-date",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prefixIcon: "el-icon-search"')]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoIcon_vue)]),_:1})]),_:1}),s[42]||(s[42]=n("h2",{id:"字典属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典属性"},[n("span",null,"字典属性")])],-1)),s[43]||(s[43]=n("blockquote",null,[n("p",null,"指定标签文本和值，默认为 label 和 value")],-1)),t(c,{id:"78",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`props`属性来指定标签文本和值，默认为`label`和`value`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      code: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      code: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDic_local_vue)]),_:1})]),_:1}),s[44]||(s[44]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[45]||(s[45]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),t(c,{id:"96",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDic_net_vue)]),_:1})]),_:1}),s[46]||(s[46]=n("h2",{id:"自定义模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义模板"},[n("span",null,"自定义模板")])],-1)),t(c,{id:"109",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:form="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="formRef">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #province-type="{ item, value, label }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <img src="/logo.png"')]),l(`
`),n("span",{class:"line"},[n("span",null,'           style="width:20px" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <span>{{ item.label }}</span>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, nextTick } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '120000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: 'https://cli.avuejs.com/api/area/getProvince',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      typeformat (item, label, value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return `值:${item[label]}-名:${item[value]}`;")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      change (val) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        setSelectImg(val);")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function setSelectImg (val) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  nextTick(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    const provinceRef = formRef.value.getPropRef('province');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (provinceRef) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      const img = provinceRef.$el.querySelector('img');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      if (img) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        img.setAttribute('style', `")]),l(`
`),n("span",{class:"line"},[n("span",null,"          background: url('/logo.png') no-repeat;")]),l(`
`),n("span",{class:"line"},[n("span",null,"          background-position: 10px center;")]),l(`
`),n("span",{class:"line"},[n("span",null,"          background-size: 20px 20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"          padding-left:20px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"          text-indent: 30px;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        `);")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const formRef = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSlot_vue)]),_:1})]),_:1}),s[47]||(s[47]=n("h2",{id:"远程搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#远程搜索"},[n("span",null,"远程搜索")])],-1)),s[48]||(s[48]=n("blockquote",null,[n("p",null,"当你的下拉框数据量很大的时候，你可以启动远程搜索")],-1)),t(c,{id:"127",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[32]||(s[32]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[33]||(s[33]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`remote`为`true`即可开启远程搜索，其中`dicUrl`中`'{{key}}'`为用户输入的关键字"},{code:a(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province1: '110000,120000,130000,140000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '提及框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'mention',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      remote: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: '@',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince?id={{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRemote_vue)]),_:1})]),_:1})])}const sn=f(Y,[["render",Z],["__file","index.html.vue"]]),en=JSON.parse('{"path":"/form/form-mention/","title":"Mention 提及框","lang":"zh-CN","frontmatter":{"title":"Mention 提及框","createTime":"2025/02/06 14:49:37","permalink":"/form/form-mention/"},"headers":[],"readingTime":{"minutes":1.42,"words":425},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-mention.md","bulletin":false}');export{sn as comp,en as data};

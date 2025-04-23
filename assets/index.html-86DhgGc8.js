import{_ as f,b as t,m as $,r as b,o as _,h as y,g as a,e as n,t as S,E as x,c as C,a as c,d as P,f as l}from"./app-Cibr2ptE.js";const g="https://cli.avuejs.com/api/area",j={__name:"lazy",setup(d,{expose:s}){s();const r=t({column:[{label:"懒加载",prop:"id",type:"tree",dicUrl:`${g}/getProvince?id={{key}}`,props:{label:"name",value:"code"},lazy:!0,cacheData:[{name:"未加载数据",code:-1}],treeLoad:(o,m)=>{const v=o.level,i=(o.data||{}).code;let h=[];const D=()=>{m((h||[]).map(k=>({...k,leaf:v>=2})))};v===0?$.get(`${g}/getProvince`).then(k=>{h=k.data,D()}):v===1?$.get(`${g}/getCity/${i}`).then(k=>{h=k.data,D()}):v===2?$.get(`${g}/getArea/${i}`).then(k=>{h=k.data,D()}):(h=[],D())}}]}),e={baseUrl:g,option:r,ref:t,get axios(){return $}};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function O(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const T=f(j,[["render",O],["__file","lazy.vue"]]),A="https://cli.avuejs.com/api/area",U={__name:"slot",setup(d,{expose:s}){s();const r=t({}),e=t({column:[{label:"单选",prop:"code",type:"tree",props:{label:"name",value:"code"},dicUrl:`${A}/getProvince`,typeformat(m,p,v){return`值:${m[p]}-名:${m[v]}`},rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"多选",prop:"codes",type:"tree",props:{label:"name",value:"code"},multiple:!0,dicUrl:`${A}/getProvince`,typeformat(m,p,v){return`值:${m[p]}-名:${m[v]}`},rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]}),o={baseUrl:A,form:r,option:e,ref:t};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function N(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v)},{"code-type":a(({item:v,value:u,label:i})=>[n("span",null,S(v),1)]),_:1},8,["option","modelValue"])}const B=f(U,[["render",N],["__file","slot.vue"]]),V={__name:"node",setup(d,{expose:s}){s();const r=[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}],e=t({column:[{label:"多选",prop:"tree",type:"tree",multiple:!0,nodeClick:(m,p,v)=>{x.success(JSON.stringify(m))},checked:(m,p,v,u)=>{x.success(JSON.stringify(p))},dicData:r}]}),o={dicData:r,option:e,ref:t,get ElMessage(){return x}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function q(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const z=f(V,[["render",q],["__file","node.vue"]]),E={__name:"accordion",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",accordion:!0,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1,children:[{label:"字典4",value:3}]}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function M(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const F=f(E,[["render",M],["__file","accordion.vue"]]),J={__name:"filter",setup(d,{expose:s}){s();const e={option:t({column:[{label:"多选",prop:"tree",type:"tree",filterable:!0,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]},{label:"父类不可选",prop:"tree1",type:"tree",parent:!1,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2,children:[{label:"字典4",value:3}]}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function K(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const L=f(J,[["render",K],["__file","filter.vue"]]),w={__name:"checkStrictly",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",checkStrictly:!0,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]},{label:"树型选择框1",prop:"tree1",type:"tree",multiple:!0,checkStrictly:!0,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function R(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const G=f(w,[["render",R],["__file","checkStrictly.vue"]]),H={__name:"multiple",setup(d,{expose:s}){s();const r=[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}],e=t({tree:[0,1,2,3,4]}),o=t({column:[{label:"多选",prop:"tree",type:"tree",multiple:!0,dicData:r},{label:"多选",prop:"tree",type:"tree",multiple:!0,collapseTags:!0,maxCollapseTags:3,collapseTagsTooltip:!0,dicData:r}]}),m={dicData:r,form:e,option:o,ref:t};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function I(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const Q=f(H,[["render",I],["__file","multiple.vue"]]),W={__name:"dic-net",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树形下拉框",prop:"tree",type:"tree",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function X(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const Y=f(W,[["render",X],["__file","dic-net.vue"]]),Z={__name:"dic",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树形下拉框",prop:"tree",type:"tree",props:{label:"name",value:"code",children:"list"},dicData:[{name:"字典1",code:0,list:[{name:"字典3",code:2}]},{name:"字典2",code:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function nn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const ln=f(Z,[["render",nn],["__file","dic.vue"]]),sn={__name:"popperClass",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",popperClass:"popperClass",dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function en(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const an=f(sn,[["render",en],["__file","popperClass.vue"]]),un={__name:"desc",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",dicData:[{label:"字典1",value:0,desc:"字典描述",children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function pn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const cn=f(un,[["render",pn],["__file","desc.vue"]]),rn={__name:"clearable",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",clearable:!1,dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function tn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const dn=f(rn,[["render",tn],["__file","clearable.vue"]]),vn={__name:"disabled-item",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",dicData:[{label:"字典1",value:0,disabled:!0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function mn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const on=f(vn,[["render",mn],["__file","disabled-item.vue"]]),bn={__name:"disabled",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}],disabled:!0}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function fn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const _n=f(bn,[["render",fn],["__file","disabled.vue"]]),yn={__name:"value",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}],value:0}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function kn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const hn=f(yn,[["render",kn],["__file","value.vue"]]),gn={__name:"base",setup(d,{expose:s}){s();const e={option:t({column:[{label:"树型选择框",prop:"tree",type:"tree",dicData:[{label:"字典1",value:0,children:[{label:"字典3",value:2}]},{label:"字典2",value:1}]}]}),ref:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Dn(d,s,r,e,o,m){const p=b("tvue-form");return _(),y(p,{option:e.option},null,8,["option"])}const $n=f(gn,[["render",Dn],["__file","base.vue"]]),xn={__name:"index.html",setup(d,{expose:s}){s();const r={DemoLazy_vue:T,DemoSlot_vue:B,DemoNode_vue:z,DemoAccordion_vue:F,DemoFilter_vue:L,DemoCheckStrictly_vue:G,DemoMultiple_vue:Q,DemoDic_net_vue:Y,DemoDic_vue:ln,DemoPopperClass_vue:an,DemoDesc_vue:cn,DemoClearable_vue:dn,DemoDisabled_item_vue:on,DemoDisabled_vue:_n,DemoValue_vue:hn,DemoBase_vue:$n};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function An(d,s,r,e,o,m){const p=b("VPDemoBasic"),v=b("Tabs");return _(),C("div",null,[s[64]||(s[64]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),c(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),s[65]||(s[65]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),c(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoValue_vue)]),_:1})]),_:1}),s[66]||(s[66]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),c(v,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDisabled_vue)]),_:1})]),_:1}),s[67]||(s[67]=n("h2",{id:"禁用选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用选项"},[n("span",null,"禁用选项")])],-1)),c(v,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"返回的字典中数据配置`disabled`属性指定是否禁用"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          disabled: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDisabled_item_vue)]),_:1})]),_:1}),s[68]||(s[68]=n("h2",{id:"可清空",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可清空"},[n("span",null,"可清空")])],-1)),c(v,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      clearable: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoClearable_vue)]),_:1})]),_:1}),s[69]||(s[69]=n("h2",{id:"辅助语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#辅助语"},[n("span",null,"辅助语")])],-1)),c(v,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"配置下拉数据中`desc`字段"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          desc: '字典描述',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDesc_vue)]),_:1})]),_:1}),s[70]||(s[70]=P(`<h2 id="下拉框样式" tabindex="-1"><a class="header-anchor" href="#下拉框样式"><span>下拉框样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">popperClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el-tree-node__content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),c(v,{id:"82",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"`popperClass`属性配置样式的`class`名字"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    popperClass: 'popperClass',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoPopperClass_vue)]),_:1})]),_:1}),s[71]||(s[71]=n("h2",{id:"字典属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典属性"},[n("span",null,"字典属性")])],-1)),s[72]||(s[72]=n("blockquote",null,[n("p",null,"指定标签文本和值，默认为label和value")],-1)),c(v,{id:"100",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"配置`props`属性来指定标签文本和值，默认为`label`和`value`"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树形下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: 'list'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          name: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          code: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          list: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              name: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              code: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          name: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          code: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDic_vue)]),_:1})]),_:1}),s[73]||(s[73]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[74]||(s[74]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),c(v,{id:"118",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[32]||(s[32]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[33]||(s[33]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:a(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树形下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDic_net_vue)]),_:1})]),_:1}),s[75]||(s[75]=n("h2",{id:"基础多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础多选"},[n("span",null,"基础多选")])],-1)),c(v,{id:"131",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[36]||(s[36]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[37]||(s[37]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[38]||(s[38]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"设置`multiple`属性即可启用多选，此时值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示"},{code:a(()=>s[39]||(s[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tree: [0, 1, 2, 3, 4]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTags: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxCollapseTags: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTagsTooltip: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoMultiple_vue)]),_:1})]),_:1}),s[76]||(s[76]=n("h2",{id:"选择任意级别",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选择任意级别"},[n("span",null,"选择任意级别")])],-1)),c(v,{id:"144",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[40]||(s[40]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[41]||(s[41]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[42]||(s[42]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"当属性`checkStrictly`为`true` 时，任何节点都可以被选择，否则只有子节点可被选择"},{code:a(()=>s[43]||(s[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    checkStrictly: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '树型选择框1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'tree1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    checkStrictly: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoCheckStrictly_vue)]),_:1})]),_:1}),s[77]||(s[77]=n("h2",{id:"基础过滤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础过滤"},[n("span",null,"基础过滤")])],-1)),c(v,{id:"157",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[44]||(s[44]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[45]||(s[45]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[46]||(s[46]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"filterable 属性即可启用筛选功能"},{code:a(()=>s[47]||(s[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      filterable: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '父类不可选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      parent: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"                {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  label: '字典4',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  value: 3")]),l(`
`),n("span",{class:"line"},[n("span",null,"                }")]),l(`
`),n("span",{class:"line"},[n("span",null,"              ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoFilter_vue)]),_:1})]),_:1}),s[78]||(s[78]=n("h2",{id:"手风琴模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#手风琴模式"},[n("span",null,"手风琴模式")])],-1)),c(v,{id:"170",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[48]||(s[48]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[49]||(s[49]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[50]||(s[50]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"设置`accordion`对于同一级的节点，每次只能展开一个"},{code:a(()=>s[51]||(s[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '树型选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    accordion: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典4',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 3")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoAccordion_vue)]),_:1})]),_:1}),s[79]||(s[79]=n("h2",{id:"节点事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#节点事件"},[n("span",null,"节点事件")])],-1)),c(v,{id:"183",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[52]||(s[52]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[53]||(s[53]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[54]||(s[54]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue"},{code:a(()=>s[55]||(s[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 2")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      nodeClick: (data, node, nodeComp) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ElMessage.success(JSON.stringify(data));")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      checked: (checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ElMessage.success(JSON.stringify(checkedKeys));")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoNode_vue)]),_:1})]),_:1}),s[80]||(s[80]=n("h2",{id:"自定义模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义模板"},[n("span",null,"自定义模板")])],-1)),c(v,{id:"196",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[56]||(s[56]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[57]||(s[57]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[58]||(s[58]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"配置`prop`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"},{code:a(()=>s[59]||(s[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #code-type="{ item, value, label }">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <span>{{ item }}</span>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'code',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    typeformat (item, label, value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      return `值:${item[label]}-名:${item[value]}`;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'codes',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    typeformat (item, label, value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      return `值:${item[label]}-名:${item[value]}`;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1}),s[81]||(s[81]=n("h2",{id:"懒加载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#懒加载"},[n("span",null,"懒加载")])],-1)),c(v,{id:"209",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[60]||(s[60]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[61]||(s[61]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[62]||(s[62]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[c(p,{type:"vue",desc:"`cacheData`懒加载节点的缓存数据，结构与数据相同，用于获取未加载数据的标签"},{code:a(()=>s[63]||(s[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import axios from 'axios';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '懒加载',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince?id={{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      lazy: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cacheData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          name: '未加载数据',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          code: -1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      treeLoad: (node, resolve) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const stop_level = 2;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const level = node.level;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const data = node.data || {};")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const code = data.code;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let list = [];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const callback = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          resolve((list || []).map(ele => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ...ele,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            leaf: level >= stop_level")]),l(`
`),n("span",{class:"line"},[n("span",null,"          })));")]),l(`
`),n("span",{class:"line"},[n("span",null,"        };")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (level === 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          axios.get(`${baseUrl}/getProvince`).then(res => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            list = res.data;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"          });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        } else if (level === 1) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          axios.get(`${baseUrl}/getCity/${code}`).then(res => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            list = res.data;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"          });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        } else if (level === 2) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          axios.get(`${baseUrl}/getArea/${code}`).then(res => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            list = res.data;")]),l(`
`),n("span",{class:"line"},[n("span",null,"            callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"          });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          list = [];")]),l(`
`),n("span",{class:"line"},[n("span",null,"          callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoLazy_vue)]),_:1})]),_:1})])}const Cn=f(xn,[["render",An],["__file","index.html.vue"]]),Pn=JSON.parse('{"path":"/form/form-input-tree/","title":"Tree树型选择框","lang":"zh-CN","frontmatter":{"title":"Tree树型选择框","createTime":"2025/02/06 14:39:44","permalink":"/form/form-input-tree/"},"headers":[],"readingTime":{"minutes":2.21,"words":663},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input-tree.md","bulletin":false}');export{Cn as comp,Pn as data};

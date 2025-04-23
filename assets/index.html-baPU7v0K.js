import{_ as f,b as c,r as b,o as _,h as g,p as x,g as a,e as n,t as A,c as $,a as t,d as D,f as l}from"./app-Cibr2ptE.js";import{_ as S}from"./logo-CuOPLjxS.js";const C={__name:"drag",setup(o,{expose:s}){s();const r=c({select:["Shanghai","Beijing","Shenzhen"]}),e=c({column:[{label:"拖拽",prop:"select",type:"select",drag:!0,multiple:!0,dicData:[{value:"Shanghai",label:"上海"},{value:"Beijing",label:"北京"},{value:"Shenzhen",label:"深圳"}]}]}),v={form:r,option:e,ref:c};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function P(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const j=f(C,[["render",P],["__file","drag.vue"]]),U={__name:"group",setup(o,{expose:s}){s();const r=c({select:"Shanghai"}),e=c({column:[{label:"分组",prop:"select",type:"select",group:!0,dicData:[{label:"热门城市",groups:[{value:"Shanghai",label:"上海",desc:"描述"},{value:"Beijing",label:"北京"}]},{label:"城市名",groups:[{value:"Chengdu",label:"成都"},{value:"Shenzhen",label:"深圳"},{value:"Guangzhou",label:"广州"},{value:"Dalian",label:"大连"}]}]}]}),v={form:r,option:e,ref:c};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function V(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const B=f(U,[["render",V],["__file","group.vue"]]),h="https://cli.avuejs.com/api/area",T={__name:"remote",setup(o,{expose:s}){s();const r=c({province:"110000",province1:"110000,120000,130000,140000"}),e=c({column:[{label:"省份单选",prop:"province",type:"select",remote:!0,props:{label:"name",value:"code"},dicUrl:`${h}/getProvince?id={{key}}`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"省份多选",prop:"province1",type:"select",multiple:!0,remote:!0,props:{label:"name",value:"code"},dicUrl:`${h}/getProvince?id={{key}}`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]}),v={baseUrl:h,form:r,option:e,ref:c};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function q(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const O=f(T,[["render",q],["__file","remote.vue"]]),k="https://cli.avuejs.com/api/area",z={__name:"cascader",setup(o,{expose:s}){s();const r=c({province:"110000",city:"110100",area:"110101"}),e=c({column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cascader:["city"],dicUrl:`${k}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",cascader:["area"],props:{label:"name",value:"code"},row:!0,dicUrl:`${k}/getCity/{{key}}?province={{province}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",type:"select",props:{label:"name",value:"code"},dicUrl:`${k}/getArea/{{key}}?city={{city}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]}),v={baseUrl:k,form:r,option:e,ref:c};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function R(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const w=f(z,[["render",R],["__file","cascader.vue"]]),N={__name:"slot",setup(o,{expose:s}){s();const r=c({province:"120000"}),e=c({column:[{label:"单选",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince",typeformat(d,y,i){return`值:${d[y]}-名:${d[i]}`},change(d){v()},rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]});function v(d){x(()=>{const y=m.value.getPropRef("province");if(y){const i=y.$el.querySelector("img");i&&i.setAttribute("style",`
          background: url('/logo.png') no-repeat;
          background-position: 10px center;
          background-size: 20px 20px;
          padding-left:20px;
          text-indent: 30px;
        `)}})}const m=c(null),p={form:r,option:e,setSelectImg:v,formRef:m,ref:c,nextTick:x};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function F(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option,form:e.form,"onUpdate:form":s[0]||(s[0]=d=>e.form=d),ref:"formRef"},{"province-type":a(({item:d,value:y,label:i})=>[s[1]||(s[1]=n("img",{src:S,style:{width:"20px"}},null,-1)),n("span",null,A(d.name),1)]),_:1},8,["option","form"])}const G=f(N,[["render",F],["__file","slot.vue"]]),E={__name:"search",setup(o,{expose:s}){s();const e={option:c({column:[{label:"创建",prop:"select",type:"select",allowCreate:!0,filterable:!0,dicData:[{label:"字典1",value:0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function I(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const M=f(E,[["render",I],["__file","search.vue"]]),L={__name:"multiple",setup(o,{expose:s}){s();const r=[{label:"字典1",value:0},{label:"字典2",value:1},{label:"字典3",value:2}],e=c({select:[0,1,2]}),v=c({column:[{label:"下拉框",prop:"select",type:"select",multiple:!0,limit:3,dicData:r},{label:"下拉框",prop:"select",type:"select",multiple:!0,collapseTags:!0,maxCollapseTags:3,limit:3,collapseTagsTooltip:!0,dicData:r}]}),m={dicData:r,form:e,option:v,ref:c};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function J(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d),option:e.option},null,8,["modelValue","option"])}const H=f(L,[["render",J],["__file","multiple.vue"]]),K={__name:"dic-net",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select2",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Q(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const W=f(K,[["render",Q],["__file","dic-net.vue"]]),X={__name:"popperClass",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",popperClass:"popperClass",dicData:[{label:"字典1",class:"test",value:0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Y(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const Z=f(X,[["render",Y],["__file","popperClass.vue"]]),nn=c({jsLib:[],cssLib:[],script:"",css:"",html:""}),ln={__name:"desc",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",dicData:[{label:"字典1",desc:"字典描述",value:0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function sn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const en=f(ln,[["render",sn],["__file","desc.vue"]]),an={__name:"clearable",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"input",type:"select",clearable:!1,dicData:[{label:"字典1",value:0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function un(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const pn=f(an,[["render",un],["__file","clearable.vue"]]),tn={__name:"disabled-item",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",dicData:[{label:"字典1",value:0,disabled:!0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function rn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const cn=f(tn,[["render",rn],["__file","disabled-item.vue"]]),dn={__name:"disabled",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}],disabled:!0}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function vn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const on=f(dn,[["render",vn],["__file","disabled.vue"]]),mn={__name:"value",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}],value:0}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function bn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const fn=f(mn,[["render",bn],["__file","value.vue"]]),_n={__name:"virtualize",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",virtualize:!0,dicData:Array.from({length:1e4},(v,m)=>({label:"选项"+(m+1),value:m+1}))}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function gn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const yn=f(_n,[["render",gn],["__file","virtualize.vue"]]),kn={__name:"base",setup(o,{expose:s}){s();const e={option:c({column:[{label:"下拉框",prop:"select",type:"select",dicData:[{label:"字典1",value:0},{label:"字典2",value:1}]}]}),ref:c};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function hn(o,s,r,e,v,m){const p=b("tvue-form");return _(),g(p,{option:e.option},null,8,["option"])}const xn=f(kn,[["render",hn],["__file","base.vue"]]),Dn={__name:"index.html",setup(o,{expose:s}){s();const r={DemoDrag_vue:j,DemoGroup_vue:B,DemoRemote_vue:O,DemoCascader_vue:w,DemoSlot_vue:G,DemoSearch_vue:M,DemoMultiple_vue:H,DemoDic_net_vue:W,DemoPopperClass_vue:Z,get DemoContainer104(){return nn},DemoDesc_vue:en,DemoClearable_vue:pn,DemoDisabled_item_vue:cn,DemoDisabled_vue:on,DemoValue_vue:fn,DemoVirtualize_vue:yn,DemoBase_vue:xn};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function An(o,s,r,e,v,m){const p=b("VPDemoBasic"),d=b("Tabs"),y=b("VPDemoNormal");return _(),$("div",null,[s[65]||(s[65]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),t(d,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过将`type`属性的值指定为`select`,同时配置`dicData`为字典值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoBase_vue)]),_:1})]),_:1}),s[66]||(s[66]=n("h2",{id:"虚拟",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#虚拟"},[n("span",null,"虚拟")])],-1)),s[67]||(s[67]=n("blockquote",null,[n("p",null,"在某些使用情况下，单个选择器可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。 为了更好的用户和开发者体验")],-1)),t(d,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`virtualize`为`true`即可开启虚拟Dom模式"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      virtualize: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: Array.from({ length: 10000 }, (_, index) => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '选项' + (index + 1),")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: index + 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }))")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoVirtualize_vue)]),_:1})]),_:1}),s[68]||(s[68]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),t(d,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典1', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典2', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoValue_vue)]),_:1})]),_:1}),s[69]||(s[69]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),t(d,{id:"47",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDisabled_vue)]),_:1})]),_:1}),s[70]||(s[70]=n("h2",{id:"禁用选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用选项"},[n("span",null,"禁用选项")])],-1)),t(d,{id:"60",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"返回的字典中数据配置`disabled`属性指定是否禁用"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDisabled_item_vue)]),_:1})]),_:1}),s[71]||(s[71]=n("h2",{id:"可清空",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#可清空"},[n("span",null,"可清空")])],-1)),t(d,{id:"73",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'input',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      clearable: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典1', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '字典2', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoClearable_vue)]),_:1})]),_:1}),s[72]||(s[72]=n("h2",{id:"辅助语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#辅助语"},[n("span",null,"辅助语")])],-1)),t(d,{id:"86",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置下拉数据中`desc`字段"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      desc: '字典描述',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDesc_vue)]),_:1})]),_:1}),s[73]||(s[73]=n("h2",{id:"字典属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典属性"},[n("span",null,"字典属性")])],-1)),s[74]||(s[74]=n("blockquote",null,[n("p",null,"指定标签文本和值，默认为label和value")],-1)),t(y,{config:e.DemoContainer104},{default:a(()=>s[28]||(s[28]=[n("p",null,"form/form-select/dic-local",-1)])),_:1},8,["config"]),s[75]||(s[75]=D(`<h2 id="下拉框样式" tabindex="-1"><a class="header-anchor" href="#下拉框样式"><span>下拉框样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">popperClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el-select-dropdown__item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(d,{id:"113",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[29]||(s[29]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[30]||(s[30]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[31]||(s[31]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`popperClass`属性配置样式的`class`名字,字典中`class`属性为单个框下拉样式"},{code:a(()=>s[32]||(s[32]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      popperClass: 'popperClass',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          class: 'test',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoPopperClass_vue)]),_:1})]),_:1}),s[76]||(s[76]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[77]||(s[77]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),t(d,{id:"131",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[33]||(s[33]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[34]||(s[34]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[35]||(s[35]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:a(()=>s[36]||(s[36]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'select2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDic_net_vue)]),_:1})]),_:1}),s[78]||(s[78]=n("h2",{id:"基础多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础多选"},[n("span",null,"基础多选")])],-1)),t(d,{id:"144",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[37]||(s[37]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[38]||(s[38]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[39]||(s[39]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`multiple`属性即可启用多选，此时值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示,`limit`限制选择个数"},{code:a(()=>s[40]||(s[40]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { label: '字典1', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { label: '字典2', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { label: '字典3', value: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  select: [0, 1, 2]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      limit: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '下拉框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTags: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxCollapseTags: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      limit: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTagsTooltip: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoMultiple_vue)]),_:1})]),_:1}),s[79]||(s[79]=n("h2",{id:"创建条目和搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#创建条目和搜索"},[n("span",null,"创建条目和搜索")])],-1)),t(d,{id:"157",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[41]||(s[41]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[42]||(s[42]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[43]||(s[43]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"使用`allowCreate`属性即可通过在输入框中输入文字来创建新的条目。注意此时`filterable`必须为真"},{code:a(()=>s[44]||(s[44]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '创建',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      allowCreate: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      filterable: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '字典2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSearch_vue)]),_:1})]),_:1}),s[80]||(s[80]=n("h2",{id:"自定义模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义模板"},[n("span",null,"自定义模板")])],-1)),t(d,{id:"170",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[45]||(s[45]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[46]||(s[46]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[47]||(s[47]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"},{code:a(()=>s[48]||(s[48]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:form="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="formRef">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #province-type="{ item, value, label }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <img src="/logo.png"')]),l(`
`),n("span",{class:"line"},[n("span",null,'           style="width:20px" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <span>{{ item.name }}</span>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"      label: '单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSlot_vue)]),_:1})]),_:1}),s[81]||(s[81]=n("h2",{id:"多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多级联动"},[n("span",null,"多级联动")])],-1)),t(d,{id:"183",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[49]||(s[49]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[50]||(s[50]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[51]||(s[51]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系"},{code:a(()=>s[52]||(s[52]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  area: '110101'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cascader: ['area'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    row: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: `${baseUrl}/getCity/{{key}}?province={{province}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'area',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: `${baseUrl}/getArea/{{key}}?city={{city}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请选择地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoCascader_vue)]),_:1})]),_:1}),s[82]||(s[82]=n("h2",{id:"远程搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#远程搜索"},[n("span",null,"远程搜索")])],-1)),s[83]||(s[83]=n("blockquote",null,[n("p",null,"当你的下拉框数据量很大的时候，你可以启动远程搜索")],-1)),t(d,{id:"201",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[53]||(s[53]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[54]||(s[54]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[55]||(s[55]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`remote`为`true`即可开启远程搜索，其中`dicUrl`中`'{{key}}'`为用户输入的关键字"},{code:a(()=>s[56]||(s[56]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"      label: '省份单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      remote: true,")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      remote: true,")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRemote_vue)]),_:1})]),_:1}),s[84]||(s[84]=n("h2",{id:"分组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分组"},[n("span",null,"分组")])],-1)),t(d,{id:"214",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[57]||(s[57]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[58]||(s[58]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[59]||(s[59]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`group`为`true`即可开启分组模式"},{code:a(()=>s[60]||(s[60]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  select: 'Shanghai'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '分组',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      group: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '热门城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          groups: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Shanghai', label: '上海', desc: '描述' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Beijing', label: '北京' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '城市名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          groups: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Chengdu', label: '成都' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Shenzhen', label: '深圳' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Guangzhou', label: '广州' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { value: 'Dalian', label: '大连' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoGroup_vue)]),_:1})]),_:1}),s[85]||(s[85]=D(`<h2 id="拖拽" tabindex="-1"><a class="header-anchor" href="#拖拽"><span>拖拽</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(d,{id:"228",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[61]||(s[61]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[62]||(s[62]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[63]||(s[63]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`drag`为`true`即可开启拖拽模式"},{code:a(()=>s[64]||(s[64]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  select: ['Shanghai', 'Beijing', 'Shenzhen']")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '拖拽',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      drag: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { value: 'Shanghai', label: '上海' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { value: 'Beijing', label: '北京' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { value: 'Shenzhen', label: '深圳' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDrag_vue)]),_:1})]),_:1})])}const Cn=f(Dn,[["render",An],["__file","index.html.vue"]]),Pn=JSON.parse('{"path":"/form/form-select/","title":"Select选择框","lang":"zh-CN","frontmatter":{"title":"Select选择框","createTime":"2025/02/06 10:26:20","permalink":"/form/form-select/"},"headers":[],"readingTime":{"minutes":2.82,"words":847},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-select.md","bulletin":false}');export{Cn as comp,Pn as data};

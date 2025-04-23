import{_ as h,b as d,m as z,r as b,o as f,h as _,g as e,e as n,t as x,c as $,n as j,a as t,d as S,f as l}from"./app-Cibr2ptE.js";const D="https://cli.avuejs.com/api/area",P={__name:"lazy",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({cascader:["110000","110100","110101"]}),c=d({column:[{label:"级联",prop:"cascader",type:"cascader",props:{label:"name",value:"code"},lazy:!0,lazyLoad(r,m){const i=r.level,A=(r.data||{}).code;let k=[];const g=()=>{m((k||[]).map(y=>({...y,leaf:i>=2})))};i===0?z.get(`${D}/getProvince`).then(y=>{k=y.data,g()}):i===1?z.get(`${D}/getCity/${A}`).then(y=>{k=y.data,g()}):i===2?z.get(`${D}/getArea/${A}`).then(y=>{k=y.data,g()}):g()}}]}),o={baseUrl:D,dic:p,form:a,option:c,ref:d,get axios(){return z}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function C(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{modelValue:a.form,"onUpdate:modelValue":s[0]||(s[0]=m=>a.form=m),option:a.option},null,8,["modelValue","option"])}const T=h(P,[["render",C],["__file","lazy.vue"]]),L={__name:"slot",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p}]}),c={dic:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},V={key:0};function B(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},{"cascader-type":e(({node:m,data:u})=>[n("span",null,x((u||{}).label),1),m.isLeaf?j("",!0):(f(),$("span",V," ("+x(((u||{}).children||[]).length)+") ",1))]),_:1},8,["option"])}const O=h(L,[["render",B],["__file","slot.vue"]]),w={__name:"checkStrictly",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p,checkStrictly:!0}]}),c={dic:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function U(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const q=h(w,[["render",U],["__file","checkStrictly.vue"]]),N={__name:"emitPath",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",emitPath:!1,dicData:p}]}),c={dic:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function F(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const E=h(N,[["render",F],["__file","emitPath.vue"]]),M={__name:"showAllLevels",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p,showAllLevels:!1}]}),c={dicData:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function J(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const R=h(M,[["render",J],["__file","showAllLevels.vue"]]),G={__name:"dic",setup(v,{expose:s}){s();const a={option:d({column:[{label:"级联框",prop:"cascader",type:"cascader",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:d};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function H(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const I=h(G,[["render",H],["__file","dic.vue"]]),K={__name:"popperClass",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({}),c=d({column:[{label:"级联",prop:"cascader",type:"cascader",popperClass:"popperClass",dicData:p}]}),o={dicData:p,form:a,option:c,ref:d};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function Q(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option,modelValue:a.form,"onUpdate:modelValue":s[0]||(s[0]=m=>a.form=m)},null,8,["option","modelValue"])}const W=h(K,[["render",Q],["__file","popperClass.vue"]]),X={__name:"disabled-item",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{disabled:!0,value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p}]}),c={dicData:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function Y(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const Z=h(X,[["render",Y],["__file","disabled-item.vue"]]),nn={__name:"disabled",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p,disabled:!0}]}),c={dicData:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function ln(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const sn=h(nn,[["render",ln],["__file","disabled.vue"]]),en={__name:"multiple",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({cascader:[["zhinan","shejiyuanze","yizhi"],["zhinan","shejiyuanze","fankui"]]}),c=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p,multiple:!0},{label:"级联",prop:"cascader",type:"cascader",dicData:p,collapseTags:!0,maxCollapseTags:3,collapseTagsTooltip:!0,multiple:!0}]}),o={dic:p,form:a,option:c,ref:d};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function an(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{modelValue:a.form,"onUpdate:modelValue":s[0]||(s[0]=m=>a.form=m),option:a.option},null,8,["modelValue","option"])}const un=h(en,[["render",an],["__file","multiple.vue"]]),pn={__name:"value",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",value:["zhinan","shejiyuanze","yizhi"],dicData:p}]}),c={dicData:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function cn(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const rn=h(pn,[["render",cn],["__file","value.vue"]]),tn={__name:"base",setup(v,{expose:s}){s();const p=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"}]}]}],a=d({column:[{label:"级联",prop:"cascader",type:"cascader",dicData:p},{label:"级联",prop:"cascader1",type:"cascader",expandTrigger:"click",dicData:p}]}),c={dicData:p,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function dn(v,s,p,a,c,o){const r=b("tvue-form");return f(),_(r,{option:a.option},null,8,["option"])}const vn=h(tn,[["render",dn],["__file","base.vue"]]),mn={__name:"index.html",setup(v,{expose:s}){s();const p={DemoLazy_vue:T,DemoSlot_vue:O,DemoCheckStrictly_vue:q,DemoEmitPath_vue:E,DemoShowAllLevels_vue:R,DemoDic_vue:I,DemoPopperClass_vue:W,DemoDisabled_item_vue:Z,DemoDisabled_vue:sn,DemoMultiple_vue:un,DemoValue_vue:rn,DemoBase_vue:vn};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function on(v,s,p,a,c,o){const r=b("VPDemoBasic"),m=b("Tabs");return f(),$("div",null,[s[52]||(s[52]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),t(m,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[0]||(s[0]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[1]||(s[1]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"通过将`type`属性的值指定为`cascader`,同时配置`dicData`为字典值,通过`expandTrigger`可以定义展开子级菜单的触发方式,默认为`hover`"},{code:e(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'yizhi',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '一致'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'fankui',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '反馈'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'cascader1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    expandTrigger: 'click',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoBase_vue)]),_:1})]),_:1}),s[53]||(s[53]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),t(m,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[4]||(s[4]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[5]||(s[5]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:e(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: ['zhinan', 'shejiyuanze', 'yizhi'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoValue_vue)]),_:1})]),_:1}),s[54]||(s[54]=n("h2",{id:"多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多选"},[n("span",null,"多选")])],-1)),t(m,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[8]||(s[8]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[9]||(s[9]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"`multiple`为`true`在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用`collapseTags`为`true`来折叠Tag,你也可以设置`collapseTags`属性将它们合并为一段文字,同时配合`maxCollapseTags`最大显示个数和`collapseTagsTooltip`是否折叠提示"},{code:e(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dic = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,'  cascader: [["zhinan", "shejiyuanze", "yizhi"], ["zhinan", "shejiyuanze", "fankui"]]')]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTags: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      maxCollapseTags: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapseTagsTooltip: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoMultiple_vue)]),_:1})]),_:1}),s[55]||(s[55]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),t(m,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[12]||(s[12]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[13]||(s[13]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:e(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'yizhi',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '一致'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'fankui',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '反馈'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoDisabled_vue)]),_:1})]),_:1}),s[56]||(s[56]=n("h2",{id:"禁用选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用选项"},[n("span",null,"禁用选项")])],-1)),t(m,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[16]||(s[16]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[17]||(s[17]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"返回的字典中数据配置`disabled`属性指定是否禁用"},{code:e(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'yizhi',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '一致'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'fankui',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '反馈'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoDisabled_item_vue)]),_:1})]),_:1}),s[57]||(s[57]=S(`<h2 id="下拉框样式" tabindex="-1"><a class="header-anchor" href="#下拉框样式"><span>下拉框样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">popperClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el-cascader-node</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(m,{id:"69",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[20]||(s[20]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[21]||(s[21]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"`popperClass`属性配置样式的`class`名字"},{code:e(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      popperClass: 'popperClass',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoPopperClass_vue)]),_:1})]),_:1}),s[58]||(s[58]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[59]||(s[59]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),t(m,{id:"87",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[24]||(s[24]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[25]||(s[25]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:e(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '级联框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoDic_vue)]),_:1})]),_:1}),s[60]||(s[60]=n("h2",{id:"仅显示最后一级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#仅显示最后一级"},[n("span",null,"仅显示最后一级")])],-1)),s[61]||(s[61]=n("blockquote",null,[n("p",null,"可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。")],-1)),t(m,{id:"105",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[28]||(s[28]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[29]||(s[29]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"属性`showAllLevels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级"},{code:e(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      showAllLevels: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoShowAllLevels_vue)]),_:1})]),_:1}),s[62]||(s[62]=n("h2",{id:"选中单节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选中单节点"},[n("span",null,"选中单节点")])],-1)),s[63]||(s[63]=n("blockquote",null,[n("p",null,[l("在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置"),n("code",null,"false"),l("，则只返回该节点的值")])],-1)),t(m,{id:"123",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[32]||(s[32]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[33]||(s[33]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue"},{code:e(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dic = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'yizhi',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '一致'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'fankui',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '反馈'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      emitPath: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoEmitPath_vue)]),_:1})]),_:1}),s[64]||(s[64]=n("h2",{id:"任意一级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任意一级"},[n("span",null,"任意一级")])],-1)),s[65]||(s[65]=n("blockquote",null,[n("p",null,"在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。")],-1)),t(m,{id:"141",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[36]||(s[36]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[37]||(s[37]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[38]||(s[38]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"可通过`checkStrictly` 为`true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的"},{code:e(()=>s[39]||(s[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dic = [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'yizhi',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '一致'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'fankui',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '反馈'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: dic,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    checkStrictly: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoCheckStrictly_vue)]),_:1})]),_:1}),s[66]||(s[66]=n("h2",{id:"搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索"},[n("span",null,"搜索")])],-1)),s[67]||(s[67]=n("blockquote",null,[n("p",null,"可以快捷地搜索选项并选择。")],-1)),t(m,{id:"159",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[40]||(s[40]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[41]||(s[41]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[42]||(s[42]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"将`filterable`赋值为true即可打开搜索功能，默认会匹配节点的label或所有父节点的label(由`showAllLevels`决定)中包含输入值的选项"},{code:e(()=>s[43]||(s[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dicData = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dicData,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      showAllLevels: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoShowAllLevels_vue)]),_:1})]),_:1}),s[68]||(s[68]=n("h2",{id:"自定义模版",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义模版"},[n("span",null,"自定义模版")])],-1)),t(m,{id:"172",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[44]||(s[44]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[45]||(s[45]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[46]||(s[46]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue",desc:"配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容"},{code:e(()=>s[47]||(s[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #cascader-type="{ node, data }">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <span>{{ (data || {}).label }}</span>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <span v-if="!node.isLeaf"> ({{ ((data || {}).children || []).length }}) </span>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dic = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoSlot_vue)]),_:1})]),_:1}),s[69]||(s[69]=n("h2",{id:"懒加载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#懒加载"},[n("span",null,"懒加载")])],-1)),t(m,{id:"185",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:i})=>s[48]||(s[48]=[l("vue2")])),title1:e(({value:u,isActive:i})=>s[49]||(s[49]=[l("vue3")])),tab0:e(({value:u,isActive:i})=>s[50]||(s[50]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:i})=>[t(r,{type:"vue"},{code:e(()=>s[51]||(s[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import axios from 'axios';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const dic = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'zhinan',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '指南',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'shejiyuanze',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '设计原则',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'yizhi', label: '一致' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          { value: 'fankui', label: '反馈' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,'  cascader: ["110000", "110100", "110101"]')]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      lazy: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      lazyLoad (node, resolve) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const stopLevel = 2;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const level = node.level;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const data = node.data || {};")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const code = data.code;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        let list = [];")]),l(`
`),n("span",{class:"line"},[n("span",null,"        const callback = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          resolve((list || []).map(ele => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ...ele,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            leaf: level >= stopLevel")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"          callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoLazy_vue)]),_:1})]),_:1})])}const hn=h(mn,[["render",on],["__file","index.html.vue"]]),_n=JSON.parse('{"path":"/form/form-cascader/","title":"Cascader级联选择器","lang":"zh-CN","frontmatter":{"title":"Cascader级联选择器","createTime":"2025/02/06 13:18:15","permalink":"/form/form-cascader/"},"headers":[],"readingTime":{"minutes":2.4,"words":719},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-cascader.md","bulletin":false}');export{hn as comp,_n as data};

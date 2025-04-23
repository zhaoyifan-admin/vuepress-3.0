import{_ as b,b as o,r as m,o as f,h as y,c as x,e as n,a as p,g as a,f as l}from"./app-Cibr2ptE.js";const D={__name:"border",setup(c,{expose:s}){s();const e={option:o({column:[{label:"空心单选",prop:"radio",type:"radio",border:!0,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function g(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const $=b(D,[["render",g],["__file","border.vue"]]),k={__name:"button",setup(c,{expose:s}){s();const r=o({radio:[0,1]}),e=o({column:[{label:"实心单选",prop:"radio",type:"radio",button:!0,dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),d={form:r,option:e,ref:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function A(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v)},null,8,["option","modelValue"])}const S=b(k,[["render",A],["__file","button.vue"]]),P={__name:"disabled-item",setup(c,{expose:s}){s();const e={option:o({column:[{label:"单选框",prop:"radio",type:"radio",dicData:[{label:"男",value:0},{label:"女",value:1,disabled:!0},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function B(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const h=b(P,[["render",B],["__file","disabled-item.vue"]]),j={__name:"disabled",setup(c,{expose:s}){s();const e={option:o({column:[{label:"单选框",prop:"radio",type:"radio",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}],disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function V(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const O=b(j,[["render",V],["__file","disabled.vue"]]),T={__name:"value",setup(c,{expose:s}){s();const e={option:o({column:[{label:"单选框",prop:"radio",type:"radio",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}],value:0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function N(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const q=b(T,[["render",N],["__file","value.vue"]]),U={__name:"dic",setup(c,{expose:s}){s();const e={option:o({column:[{label:"多选框",prop:"radio",type:"radio",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function C(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const R=b(U,[["render",C],["__file","dic.vue"]]),w={__name:"base",setup(c,{expose:s}){s();const e={option:o({column:[{label:"单选",prop:"radio",type:"radio",dicData:[{label:"男",value:0},{label:"女",value:1},{label:"未知",value:""}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function z(c,s,r,e,d,_){const t=m("tvue-form");return f(),y(t,{option:e.option},null,8,["option"])}const E=b(w,[["render",z],["__file","base.vue"]]),J={__name:"index.html",setup(c,{expose:s}){s();const r={DemoBorder_vue:$,DemoButton_vue:S,DemoDisabled_item_vue:h,DemoDisabled_vue:O,DemoValue_vue:q,DemoDic_vue:R,DemoBase_vue:E};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function F(c,s,r,e,d,_){const t=m("VPDemoBasic"),v=m("Tabs");return f(),x("div",null,[s[28]||(s[28]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),s[29]||(s[29]=n("blockquote",null,[n("p",null,"由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。")],-1)),p(v,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过将`type`属性的值指定为`radio`,同时配置`dicData`为字典值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBase_vue)]),_:1})]),_:1}),s[30]||(s[30]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),s[31]||(s[31]=n("blockquote",null,[n("p",null,[l("更多用法参考"),n("a",{href:"/form/form-dic",target:"_blank",rel:"noopener noreferrer"},"表单数据字典")])],-1)),p(v,{id:"26",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`dicUrl`指定后台接口的地址"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDic_vue)]),_:1})]),_:1}),s[32]||(s[32]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(v,{id:"39",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoValue_vue)]),_:1})]),_:1}),s[33]||(s[33]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(v,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDisabled_vue)]),_:1})]),_:1}),s[34]||(s[34]=n("h2",{id:"禁用选项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用选项"},[n("span",null,"禁用选项")])],-1)),p(v,{id:"65",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"返回的字典中数据配置`disabled`属性指定是否禁用"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1, disabled: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDisabled_item_vue)]),_:1})]),_:1}),s[35]||(s[35]=n("h2",{id:"按钮样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮样式"},[n("span",null,"按钮样式")])],-1)),p(v,{id:"78",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`button`为`true`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  radio: [0, 1]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '实心单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      button: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoButton_vue)]),_:1})]),_:1}),s[36]||(s[36]=n("h2",{id:"空心样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#空心样式"},[n("span",null,"空心样式")])],-1)),p(v,{id:"91",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`border`为`true`"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '空心单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '未知', value: '' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBorder_vue)]),_:1})]),_:1})])}const H=b(J,[["render",F],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/form/form-radio/","title":"Radio单选框","lang":"zh-CN","frontmatter":{"title":"Radio单选框","createTime":"2025/02/06 13:23:40","permalink":"/form/form-radio/"},"headers":[],"readingTime":{"minutes":0.84,"words":253},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-radio.md","bulletin":false}');export{H as comp,I as data};

import{_ as d,b as c,r as v,o as m,h as x,c as y,e as n,a as p,g as a,f as e}from"./app-Cibr2ptE.js";const A={__name:"disabled",setup(o,{expose:s}){s();const l={option:c({column:[{label:"评价",prop:"rate",type:"rate",value:3.7,disabled:!0,showScore:!0,scoreTemplate:"{value}"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function $(o,s,r,l,b,_){const u=v("tvue-form");return m(),x(u,{option:l.option},null,8,["option"])}const k=d(A,[["render",$],["__file","disabled.vue"]]),g={__name:"max",setup(o,{expose:s}){s();const l={option:c({column:[{label:"评价",prop:"rate",type:"rate",max:40}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function S(o,s,r,l,b,_){const u=v("tvue-form");return m(),x(u,{option:l.option},null,8,["option"])}const D=d(g,[["render",S],["__file","max.vue"]]),h={__name:"icon",setup(o,{expose:s}){s();const l={option:c({column:[{label:"评价",prop:"rate",type:"rate",iconClasses:["el-icon-circle-close","el-icon-remove","el-icon-circle-plus"],voidIconClass:"el-icon-circle-plus-outline"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function T(o,s,r,l,b,_){const u=v("tvue-form");return m(),x(u,{option:l.option},null,8,["option"])}const B=d(h,[["render",T],["__file","icon.vue"]]),C={__name:"text",setup(o,{expose:s}){s();const l={option:c({column:[{label:"评价",prop:"rate",type:"rate",showText:!0,texts:["极差","失望","一般","满意","惊喜"]}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function P(o,s,r,l,b,_){const u=v("tvue-form");return m(),x(u,{option:l.option},null,8,["option"])}const F=d(C,[["render",P],["__file","text.vue"]]),w={__name:"base",setup(o,{expose:s}){s();const l={option:c({column:[{label:"评价",prop:"rate",type:"rate"},{label:"评价",prop:"rate",type:"rate",colors:["#99A9BF","#F7BA2A","#FF9900"]}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function O(o,s,r,l,b,_){const u=v("tvue-form");return m(),x(u,{option:l.option},null,8,["option"])}const j=d(w,[["render",O],["__file","base.vue"]]),q={__name:"index.html",setup(o,{expose:s}){s();const r={DemoDisabled_vue:k,DemoMax_vue:D,DemoIcon_vue:B,DemoText_vue:F,DemoBase_vue:j};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function I(o,s,r,l,b,_){const u=v("VPDemoBasic"),f=v("Tabs");return m(),y("div",null,[s[20]||(s[20]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(f,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[0]||(s[0]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[1]||(s[1]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"通过将`type`属性的值指定为`rate`"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"    },")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      colors: ['#99A9BF', '#F7BA2A', '#FF9900']")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoBase_vue)]),_:1})]),_:1}),s[21]||(s[21]=n("h2",{id:"辅助文字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#辅助文字"},[n("span",null,"辅助文字")])],-1)),s[22]||(s[22]=n("blockquote",null,[n("p",null,"用辅助文字直接地表达对应分数")],-1)),p(f,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[4]||(s[4]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[5]||(s[5]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"通过将`type`属性的值指定为`rate`"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      showText: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,"      texts: ['极差', '失望', '一般', '满意', '惊喜']")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoText_vue)]),_:1})]),_:1}),s[23]||(s[23]=n("h2",{id:"自定义图标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义图标"},[n("span",null,"自定义图标")])],-1)),s[24]||(s[24]=n("blockquote",null,[n("p",null,"当有多层评价时，可以用不同类型的 icon 区分评分层级")],-1)),p(f,{id:"39",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[8]||(s[8]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[9]||(s[9]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"设置`iconClasses`属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用`voidIconClass`指定了未选中时的图标类名"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      iconClasses: ['el-icon-circle-close', 'el-icon-remove', 'el-icon-circle-plus'],")]),e(`
`),n("span",{class:"line"},[n("span",null,'      voidIconClass: "el-icon-circle-plus-outline"')]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoIcon_vue)]),_:1})]),_:1}),s[25]||(s[25]=n("h2",{id:"自定义个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义个数"},[n("span",null,"自定义个数")])],-1)),p(f,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[12]||(s[12]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[13]||(s[13]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"长度应等于最大值`max`"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      max: 40")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoMax_vue)]),_:1})]),_:1}),s[26]||(s[26]=n("h2",{id:"只读",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#只读"},[n("span",null,"只读")])],-1)),s[27]||(s[27]=n("blockquote",null,[n("p",null,"只读的评分用来展示分数，允许出现半星")],-1)),p(f,{id:"70",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>s[16]||(s[16]=[e("vue2")])),title1:a(({value:i,isActive:t})=>s[17]||(s[17]=[e("vue3")])),tab0:a(({value:i,isActive:t})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[p(u,{type:"vue",desc:"为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `showScore`，则会在右侧显示目前的分值。可以提供 `scoreTemplate` 作为显示模板，模板为一个包含了 `{value}` 的字符串，`{value}` 会被解析为分值"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '评价',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      type: 'rate',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      value: 3.7,")]),e(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,"      showScore: true,")]),e(`
`),n("span",{class:"line"},[n("span",null,'      scoreTemplate: "{value}"')]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"})")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(l.DemoDisabled_vue)]),_:1})]),_:1})])}const V=d(q,[["render",I],["__file","index.html.vue"]]),R=JSON.parse('{"path":"/form/form-rate/","title":"Rate评价","lang":"zh-CN","frontmatter":{"title":"Rate评价","createTime":"2025/02/06 14:50:37","permalink":"/form/form-rate/"},"headers":[],"readingTime":{"minutes":1.11,"words":334},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-rate.md","bulletin":false}');export{V as comp,R as data};

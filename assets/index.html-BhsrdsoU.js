import{_ as b,b as c,r as v,o as f,h as k,l as h,c as y,e as n,a as u,g as a,d as g,f as s}from"./app-Cibr2ptE.js";const A={__name:"fun",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间",prop:"time",type:"time",visibleChange:()=>{console.log("=====")}}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function x(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const $=b(A,[["render",x],["__file","fun.vue"]]),H={__name:"default",setup(o,{expose:e}){e();const r=c({}),l=h(()=>({column:[{label:"开始时间",prop:"start",type:"time",format:"HH:mm:ss",start:"08:30",step:"00:15",end:"18:30"},{label:"结束时间",prop:"end",type:"time",format:"HH:mm:ss",start:"08:30",step:"00:15",end:"18:30",minTime:r.value.start}]})),m={form:r,option:l,ref:c,computed:h};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function D(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{modelValue:l.form,"onUpdate:modelValue":e[0]||(e[0]=d=>l.form=d),option:l.option},null,8,["modelValue","option"])}const C=b(H,[["render",D],["__file","default.vue"]]),S={__name:"range",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间范围",prop:"timerange",type:"timerange",format:"HH:mm:ss",valueFormat:"HH:mm:ss",startPlaceholder:"时间开始范围自定义",endPlaceholder:"时间结束范围自定义"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function P(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const B=b(S,[["render",P],["__file","range.vue"]]),F={__name:"format",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间",prop:"time",type:"time",format:"HH时mm分ss秒",valueFormat:"HH:mm:ss"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function O(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const T=b(F,[["render",O],["__file","format.vue"]]),V={__name:"step",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间",prop:"time",type:"time",pickerOptions:{start:"08:30",step:"00:15",end:"18:30"}}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function j(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const N=b(V,[["render",j],["__file","step.vue"]]),R={__name:"popperClass",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间",prop:"time",popperClass:"popperClass",type:"time"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function q(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const w=b(R,[["render",q],["__file","popperClass.vue"]]),z={__name:"base",setup(o,{expose:e}){e();const l={option:c({column:[{label:"时间",prop:"time",type:"time"}]}),ref:c};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}};function E(o,e,r,l,m,_){const p=v("tvue-form");return f(),k(p,{option:l.option},null,8,["option"])}const J=b(z,[["render",E],["__file","base.vue"]]),U={__name:"index.html",setup(o,{expose:e}){e();const r={DemoFun_vue:$,DemoDefault_vue:C,DemoRange_vue:B,DemoFormat_vue:T,DemoStep_vue:N,DemoPopperClass_vue:w,DemoBase_vue:J};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function G(o,e,r,l,m,_){const p=v("VPDemoBasic"),d=v("Tabs");return f(),y("div",null,[e[28]||(e[28]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),u(d,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[0]||(e[0]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[1]||(e[1]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[2]||(e[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue"},{code:a(()=>e[3]||(e[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoBase_vue)]),_:1})]),_:1}),e[29]||(e[29]=g(`<h2 id="下拉框样式" tabindex="-1"><a class="header-anchor" href="#下拉框样式"><span>下拉框样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">popperClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">el-time-spinner__item</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),u(d,{id:"17",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[4]||(e[4]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[5]||(e[5]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[6]||(e[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue",desc:"`popperClass`属性配置样式的`class`名字"},{code:a(()=>e[7]||(e[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    popperClass: 'popperClass',")]),s(`
`),n("span",{class:"line"},[n("span",null,'    type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoPopperClass_vue)]),_:1})]),_:1}),e[30]||(e[30]=n("h2",{id:"固定时间点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#固定时间点"},[n("span",null,"固定时间点")])],-1)),u(d,{id:"30",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[8]||(e[8]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[9]||(e[9]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[10]||(e[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue",desc:"可设置`pickerOptions`中分别通过`start`、`end`和`step`指定可选的起始时间、结束时间和步长"},{code:a(()=>e[11]||(e[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    pickerOptions: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      start: '08:30',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: '00:15',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      end: '18:30'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoStep_vue)]),_:1})]),_:1}),e[31]||(e[31]=n("h2",{id:"格式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#格式化"},[n("span",null,"格式化")])],-1)),u(d,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[12]||(e[12]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[13]||(e[13]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[14]||(e[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue",desc:"使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式"},{code:a(()=>e[15]||(e[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    format: 'HH时mm分ss秒',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    valueFormat: 'HH:mm:ss'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoFormat_vue)]),_:1})]),_:1}),e[32]||(e[32]=n("h2",{id:"时间范围",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#时间范围"},[n("span",null,"时间范围")])],-1)),u(d,{id:"56",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[16]||(e[16]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[17]||(e[17]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[18]||(e[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue"},{code:a(()=>e[19]||(e[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "时间范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'timerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'timerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    format: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    valueFormat: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    startPlaceholder: '时间开始范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    endPlaceholder: '时间结束范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoRange_vue)]),_:1})]),_:1}),e[33]||(e[33]=n("h2",{id:"固定时间范围",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#固定时间范围"},[n("span",null,"固定时间范围")])],-1)),u(d,{id:"69",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[20]||(e[20]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[21]||(e[21]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[22]||(e[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue",desc:"若先选择开始时间，则结束时间内备选项的状态会随之改变"},{code:a(()=>e[23]||(e[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = computed(() => ({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "开始时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'start',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'time',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      start: '08:30',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: '00:15',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      end: '18:30'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "结束时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'end',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'time',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      start: '08:30',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      step: '00:15',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      end: '18:30',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      minTime: form.value.start")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"}));")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoDefault_vue)]),_:1})]),_:1}),e[34]||(e[34]=n("h2",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法"},[n("span",null,"方法")])],-1)),u(d,{id:"82",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:t})=>e[24]||(e[24]=[s("vue2")])),title1:a(({value:i,isActive:t})=>e[25]||(e[25]=[s("vue3")])),tab0:a(({value:i,isActive:t})=>e[26]||(e[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:t})=>[u(p,{type:"vue",desc:"`visibleChange` 下拉列表出现/消失时触发"},{code:a(()=>e[27]||(e[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      visibleChange: () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        console.log('=====')")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(l.DemoFun_vue)]),_:1})]),_:1})])}const K=b(U,[["render",G],["__file","index.html.vue"]]),L=JSON.parse('{"path":"/form/form-time/","title":"Time 时间","lang":"zh-CN","frontmatter":{"title":"Time 时间","createTime":"2025/02/06 13:34:13","permalink":"/form/form-time/"},"headers":[],"readingTime":{"minutes":0.78,"words":235},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-time.md","bulletin":false}');export{K as comp,L as data};

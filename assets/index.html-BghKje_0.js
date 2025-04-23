import{_ as f,b as o,r as b,o as Y,h as _,g as a,e as n,t as y,c as k,a as c,d as h,f as s}from"./app-Cibr2ptE.js";const g={__name:"slot",setup(v,{expose:l}){l();const u=o({}),e=o({column:[{label:"日期",prop:"datetime",type:"datetime"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function D(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r)},{"datetime-type":a(({item:r})=>[n("span",null,y(r.text)+"日",1)]),_:1},8,["option","modelValue"])}const M=f(g,[["render",D],["__file","slot.vue"]]),x={__name:"datetimerange",setup(v,{expose:l}){l();const u=o({}),e=o({labelWidth:110,column:[{label:"时间日期范围",type:"datetimerange",prop:"datetimerange",span:24,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss",startPlaceholder:"时间日期开始范围自定义",endPlaceholder:"时间日期结束范围自定义"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function A(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const H=f(x,[["render",A],["__file","datetimerange.vue"]]),F={__name:"popperClass",setup(v,{expose:l}){l();const u=o({}),e=o({column:[{label:"日期",prop:"datetime",popperClass:"popperClass",type:"datetime"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function V(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const P=f(F,[["render",V],["__file","popperClass.vue"]]),S={__name:"range",setup(v,{expose:l}){l();const u=o({}),e=o({labelWidth:110,column:[{label:"时间日期范围",type:"datetimerange",prop:"datetimerange",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss",startPlaceholder:"时间日期开始范围自定义",endPlaceholder:"时间日期结束范围自定义"},{label:"日期范围",prop:"daterange",type:"daterange",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",startPlaceholder:"日期开始范围自定义",endPlaceholder:"日期结束范围自定义"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function T(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const $=f(S,[["render",T],["__file","range.vue"]]),C={__name:"default",setup(v,{expose:l}){l();const u=o({}),e=o({labelWidth:110,column:[{label:"时间",prop:"time",type:"time",format:"HH:mm:ss",valueFormat:"HH:mm:ss"},{label:"周",prop:"week",type:"week",format:"YYYY 第 WW 周"},{label:"月",prop:"month",type:"month"},{label:"月范围",prop:"monthrange",type:"monthrange",format:"YYYY-MM",valueFormat:"YYYY-MM"},{label:"年",prop:"year",type:"year"},{label:"年范围",prop:"yearrange",type:"yearrange"},{label:"多个年份",prop:"years",type:"years",format:"YYYY",valueFormat:"YYYY"},{label:"多个月份",prop:"months",type:"months",format:"YYYY-MM",valueFormat:"YYYY-MM"},{label:"多个日期",prop:"dates",type:"dates",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function w(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const B=f(C,[["render",w],["__file","default.vue"]]),W={__name:"format",setup(v,{expose:l}){l();const u=o({}),e=o({column:[{label:"日期",prop:"datetime",type:"datetime",format:"YYYY年MM月DD日 HH时mm分ss秒",valueFormat:"YYYY-MM-DD HH:mm:ss"},{label:"时间戳",prop:"datetime",type:"datetime",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"x"}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function O(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const j=f(W,[["render",O],["__file","format.vue"]]),U={__name:"base",setup(v,{expose:l}){l();const u=o({}),e=o({column:[{label:"日期",prop:"datetime",type:"datetime"},{label:"快捷方式",prop:"date",type:"date",shortcuts:[{text:"今天",value:new Date},{text:"昨天",value:()=>{const m=new Date;return m.setTime(m.getTime()-3600*1e3*24),m}},{text:"一周前",value:()=>{const m=new Date;return m.setTime(m.getTime()-3600*1e3*24*7),m}}]},{label:"禁止日期",prop:"date",type:"date",disabledDate(m){return m.getTime()<Date.now()}}]}),i={form:u,option:e,ref:o};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function N(v,l,u,e,i,m){const d=b("tvue-form");return Y(),_(d,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue","option"])}const R=f(U,[["render",N],["__file","base.vue"]]),q={__name:"index.html",setup(v,{expose:l}){l();const u={DemoSlot_vue:M,DemoDatetimerange_vue:H,DemoPopperClass_vue:P,DemoRange_vue:$,DemoDefault_vue:B,DemoFormat_vue:j,DemoBase_vue:R};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function J(v,l,u,e,i,m){const d=b("VPDemoBasic"),r=b("Tabs");return Y(),k("div",null,[l[28]||(l[28]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),c(r,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue",desc:"基本单位由type属性指定。快捷选项需配置`shortcuts`，禁用日期通过 `disabledDate` 设置，传入函数"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "日期",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "快捷方式",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "date",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "date",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      shortcuts: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          text: '今天',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: new Date(),")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          text: '昨天',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            const date = new Date();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            date.setTime(date.getTime() - 3600 * 1000 * 24);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return date;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          text: '一周前',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            const date = new Date();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);")]),s(`
`),n("span",{class:"line"},[n("span",null,"            return date;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "禁止日期",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "date",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "date",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      disabledDate (time) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return time.getTime() < Date.now();")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),l[29]||(l[29]=h('<h2 id="日期格式化" tabindex="-1"><a class="header-anchor" href="#日期格式化"><span>日期格式化</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>请注意大小写</p></div><table><thead><tr><th>格式</th><th>含义</th><th>备注</th><th>举例</th></tr></thead><tbody><tr><td><code>YYYY</code></td><td>年</td><td></td><td>2017</td></tr><tr><td><code>M</code></td><td>月</td><td>不补0</td><td>1</td></tr><tr><td><code>MM</code></td><td>月</td><td></td><td>01</td></tr><tr><td><code>W</code></td><td>周</td><td>仅周选择器的<code>format</code>可用；不补0</td><td>1</td></tr><tr><td><code>WW</code></td><td>周</td><td>仅周选择器的<code>format</code>可用</td><td>01</td></tr><tr><td><code>D</code></td><td>日</td><td>不补0</td><td>2</td></tr><tr><td><code>DD</code></td><td>日</td><td></td><td>02</td></tr><tr><td><code>H</code></td><td>小时</td><td>24小时制；不补0</td><td>3</td></tr><tr><td><code>HH</code></td><td>小时</td><td>24小时制</td><td>03</td></tr><tr><td><code>h</code></td><td>小时</td><td>12小时制，须和<code>A</code>或<code>a</code>使用；不补0</td><td>3</td></tr><tr><td><code>hh</code></td><td>小时</td><td>12小时制，须和<code>A</code>或<code>a</code>使用</td><td>03</td></tr><tr><td><code>m</code></td><td>分钟</td><td>不补0</td><td>4</td></tr><tr><td><code>mm</code></td><td>分钟</td><td></td><td>04</td></tr><tr><td><code>s</code></td><td>秒</td><td>不补0</td><td>5</td></tr><tr><td><code>ss</code></td><td>秒</td><td></td><td>05</td></tr><tr><td><code>A</code></td><td>AM/PM</td><td>仅<code>format</code>可用，大写</td><td>AM</td></tr><tr><td><code>a</code></td><td>am/pm</td><td>仅<code>format</code>可用，小写</td><td>am</td></tr><tr><td><code>X</code></td><td>JS时间戳</td><td>仅<code>value-format</code>可用；组件绑定值为<code>number</code>类型</td><td>1483326245000</td></tr></tbody></table><h2 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化"><span>格式化</span></a></h2>',4)),c(r,{id:"296",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue",desc:"使用`format`指定输入框的格式；使用`valueFormat`指定绑定值的格式"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "日期",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY年MM月DD日 HH时mm分ss秒',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD HH:mm:ss'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间戳",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY-MM-DD HH:mm:ss",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      valueFormat: "x",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoFormat_vue)]),_:1})]),_:1}),l[30]||(l[30]=n("h2",{id:"其他日期单位",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其他日期单位"},[n("span",null,"其他日期单位")])],-1)),c(r,{id:"309",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 110,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "time",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "周",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "week",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "week",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY 第 WW 周"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "月",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "month",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "month",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "月范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "monthrange",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "monthrange",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "年",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "year",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "year",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "年范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "yearrange",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "yearrange",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "多个年份",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "years",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "years",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      valueFormat: "YYYY",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "多个月份",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "months",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "months",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY-MM",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      valueFormat: "YYYY-MM",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "多个日期",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "dates",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "dates",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY-MM-DD",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      valueFormat: "YYYY-MM-DD",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDefault_vue)]),_:1})]),_:1}),l[31]||(l[31]=n("h2",{id:"日期范围",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#日期范围"},[n("span",null,"日期范围")])],-1)),c(r,{id:"322",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 110,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间日期范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetimerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'datetimerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      startPlaceholder: '时间日期开始范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      endPlaceholder: '时间日期结束范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "日期范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "daterange",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "daterange",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM-DD',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      startPlaceholder: '日期开始范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      endPlaceholder: '日期结束范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoRange_vue)]),_:1})]),_:1}),l[32]||(l[32]=h(`<h2 id="下拉框样式" tabindex="-1"><a class="header-anchor" href="#下拉框样式"><span>下拉框样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">popperClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">available</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> rgba</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">.2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),c(r,{id:"336",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue",desc:"`popperClass`属性配置样式的`class`名字"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "日期",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      popperClass: 'popperClass',")]),s(`
`),n("span",{class:"line"},[n("span",null,'      type: "datetime",')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoPopperClass_vue)]),_:1})]),_:1}),l[33]||(l[33]=n("h2",{id:"默认的起始与结束时刻",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认的起始与结束时刻"},[n("span",null,"默认的起始与结束时刻")])],-1)),c(r,{id:"349",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue",desc:"使用`datetimerange`进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的`00:00:00`作为起始与结束的时刻；通过选项`defaultTime`可以控制选中起始与结束日期时所使用的具体时刻。`defaultTime`接受一个数组，数组每项值为字符串，形如`12:00:00`，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 110,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "时间日期范围",')]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetimerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'datetimerange',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      startPlaceholder: '时间日期开始范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      endPlaceholder: '时间日期结束范围自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDatetimerange_vue)]),_:1})]),_:1}),l[34]||(l[34]=n("h2",{id:"自定义模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义模板"},[n("span",null,"自定义模板")])],-1)),c(r,{id:"362",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:p})=>l[24]||(l[24]=[s("vue2")])),title1:a(({value:t,isActive:p})=>l[25]||(l[25]=[s("vue3")])),tab0:a(({value:t,isActive:p})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:p})=>[c(d,{type:"vue",desc:"配置`props`名称加`Type`卡槽开启即可自定义日期框的内容"},{code:a(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #datetime-type="{ item }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <span>{{ item.text }}日</span>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'datetime',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1})])}const E=f(q,[["render",J],["__file","index.html.vue"]]),X=JSON.parse('{"path":"/form/form-date/","title":"Date日期","lang":"zh-CN","frontmatter":{"title":"Date日期","createTime":"2025/02/06 13:31:31","permalink":"/form/form-date/"},"headers":[],"readingTime":{"minutes":1.78,"words":533},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-date.md","bulletin":false}');export{E as comp,X as data};

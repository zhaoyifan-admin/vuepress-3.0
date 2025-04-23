import{_ as g,b as d,r as b,o as h,h as k,g as a,e as n,E as f,c as x,a as c,d as A,f as s}from"./app-Cibr2ptE.js";const B={__name:"slot",setup(o,{expose:l}){l();const p=d([{name:"张三",sex:"男",img:"https://avuejs.com/images/logo.png",age:18},{name:"李四",sex:"女",img:"https://avuejs.com/images/logo.png",age:18}]),e=d({grid:!0,gridSpan:12,gridBackgroundImage:"/images/grid.png",column:[{label:"姓名",prop:"name",gridRow:!0},{label:"性别",prop:"sex",gridRow:!0},{label:"年龄",prop:"age",gridRow:!0},{label:"",className:"imgbox",prop:"img"}]}),u={data:p,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},S=["src"];function $(o,l,p,e,u,v){const i=b("tvue-crud");return h(),k(i,{option:e.option,data:e.data},{img:a(({row:m})=>[n("img",{src:m.img,alt:""},null,8,S)]),_:1},8,["option","data"])}const C=g(B,[["render",$],["__file","slot.vue"]]),D="https://cli.avuejs.com/api/area",w={__name:"fun",setup(o,{expose:l}){l();const p=d([{name:"张三",sex:"男",age:18,province:"110000"},{name:"李四",sex:"女",age:18,province:"130000"}]),e=d({grid:!0,gridSpan:12,gridBackground:(v,i)=>i===1?"linear-gradient(to right, rgba(255,255,255,255.2), rgba(255,0,0,0.2))":"linear-gradient(to right, rgba(255,255,255,255.2), rgba(0,255,0,0.2))",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",gridRow:!0},{label:"年龄",prop:"age"}]}),u={baseUrl:D,data:p,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function j(o,l,p,e,u,v){const i=b("tvue-crud");return h(),k(i,{option:e.option,data:e.data},null,8,["option","data"])}const U=g(w,[["render",j],["__file","fun.vue"]]),_="https://cli.avuejs.com/api/area",P={__name:"option",setup(o,{expose:l}){l();const p=d([{name:"张三",sex:"男",age:18,province:"110000"},{name:"李四",sex:"女",age:18,province:"130000"}]),e=d({grid:!0,gridSpan:12,gridBackgroundImage:"/images/grid.png",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",gridRow:!0},{label:"年龄",prop:"age"},{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:`${_}/getProvince`}]}),u={data:p,baseUrl:_,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function R(o,l,p,e,u,v){const i=b("tvue-crud");return h(),k(i,{option:e.option,data:e.data},null,8,["option","data"])}const E=g(P,[["render",R],["__file","option.vue"]]),y="https://cli.avuejs.com/api/area",N={__name:"base",setup(o,{expose:l}){l();const p=d([{name:"张三",sex:"男",age:18,province:"110000"},{name:"李四",sex:"女",age:18,province:"130000"}]),e=d({grid:!0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"年龄",prop:"age"},{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:`${y}/getProvince`}]}),v={baseUrl:y,data:p,option:e,gridStatusChange:i=>{console.log("status",i)},ref:d,get ElMessage(){return f}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function O(o,l,p,e,u,v){const i=b("tvue-crud");return h(),k(i,{option:e.option,data:e.data,onGridStatusChange:e.gridStatusChange},null,8,["option","data"])}const F=g(N,[["render",O],["__file","base.vue"]]),T={__name:"index.html",setup(o,{expose:l}){l();const p={DemoSlot_vue:C,DemoFun_vue:U,DemoOption_vue:E,DemoBase_vue:F};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function V(o,l,p,e,u,v){const i=b("VPDemoBasic"),m=b("Tabs");return h(),x("div",null,[l[16]||(l[16]=n("h2",{id:"基本用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本用法"},[n("span",null,"基本用法")])],-1)),c(m,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:r,isActive:t})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:r,isActive:t})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:r,isActive:t})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:r,isActive:t})=>[c(i,{type:"vue",desc:"设置`grid`配置为卡片模式,`gridBtn`和列表切换按钮，默认为`true`，在`v3.4.7+`新增  `grid-status-change`切换状态回调方法"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @grid-status-change="gridStatusChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男', age: 18, province: '110000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女', age: 18, province: '130000' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  grid: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'age' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 处理网格状态变化")]),s(`
`),n("span",{class:"line"},[n("span",null,"const gridStatusChange = (val) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log('status', val);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),l[17]||(l[17]=n("h2",{id:"配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置"},[n("span",null,"配置")])],-1)),c(m,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:r,isActive:t})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:r,isActive:t})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:r,isActive:t})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:r,isActive:t})=>[c(i,{type:"vue",desc:"一些配置用来改变布局和颜色"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男', age: 18, province: '110000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女', age: 18, province: '130000' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  grid: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridSpan: 12,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridBackgroundImage: '/images/grid.png',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex', gridRow: true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'age' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoOption_vue)]),_:1})]),_:1}),l[18]||(l[18]=n("h2",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法"},[n("span",null,"方法")])],-1)),c(m,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:r,isActive:t})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:r,isActive:t})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:r,isActive:t})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:r,isActive:t})=>[c(i,{type:"vue",desc:"`gridBackground`方法可以根据条件设置背景色"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男', age: 18, province: '110000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女', age: 18, province: '130000' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  grid: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridSpan: 12,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridBackground: (row, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (index === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return 'linear-gradient(to right, rgba(255,255,255,255.2), rgba(255,0,0,0.2))';")]),s(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return 'linear-gradient(to right, rgba(255,255,255,255.2), rgba(0,255,0,0.2))';")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex', gridRow: true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'age' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoFun_vue)]),_:1})]),_:1}),l[19]||(l[19]=A(`<h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义"><span>自定义</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">imgbox</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  position</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> absolute</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 80</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  right</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  bottom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 60</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">imgbox</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> img</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">imgbox</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">avue-crud__grid__label</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  display</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> none</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),c(m,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:r,isActive:t})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:r,isActive:t})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:r,isActive:t})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:r,isActive:t})=>[c(i,{type:"vue",desc:"利用插槽自定义"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #img="{ row }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <img :src="row.img"')]),s(`
`),n("span",{class:"line"},[n("span",null,'           alt="" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    img: 'https://avuejs.com/images/logo.png',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    img: 'https://avuejs.com/images/logo.png',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  grid: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridSpan: 12,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  gridBackgroundImage: '/images/grid.png',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      gridRow: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      gridRow: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'age',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      gridRow: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      className: 'imgbox',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'img'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1})])}const M=g(T,[["render",V],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/doc/crud-grid/","title":"卡片模式","lang":"zh-CN","frontmatter":{"title":"卡片模式","createTime":"2025/02/06 09:19:45","permalink":"/doc/crud-grid/"},"headers":[],"readingTime":{"minutes":0.54,"words":162},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-grid.md","bulletin":false}');export{M as comp,q as data};

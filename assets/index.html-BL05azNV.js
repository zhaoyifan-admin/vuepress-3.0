import{_ as d,b as o,r as v,o as b,h as k,c as _,e as n,a as p,g as a,d as g,f as l}from"./app-Cibr2ptE.js";const y={__name:"default",setup(r,{expose:s}){s();const e={option:o({column:[{label:"图标选择器",prop:"icon",type:"icon",iconList:[{label:"阿里图标-Symbol图标",list:[{label:"机构",value:"#icon-jigou"},{label:"短信管理",value:"#icon-duanxinguanli"},{label:"发票管理系统",value:"#icon-fapiaoguanlixitong"},{label:"角色",value:"#icon-jiaose"},{label:"黑名单",value:"#icon-heimingdan2"},{label:"KHCFDC_附件",value:"#icon-fujian4"},{label:"文档",value:"#icon-wendang3"},{label:"刷卡",value:"#icon-shuaka"},{label:"停车",value:"#icon-tingche3"},{label:"对象存储OSS",value:"#icon-duixiangcunchuOSS"},{label:"反馈",value:"#icon-fankui2"},{label:"短信",value:"#icon-ziyuan1"},{label:"对象存储服务",value:"#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu"},{label:"数据库_jurassic",value:"#icon-jurassic_data"},{label:"日志",value:"#icon-rizhi1"},{label:"权限",value:"#icon-quanxian4"},{label:"订单",value:"#icon-5"},{label:"机构",value:"#icon-jigou1"},{label:"机构人员",value:"#icon-jigourenyuan"},{label:"角色管理",value:"#icon-jiaoseguanli4"},{label:"角色管理",value:"#icon-jiaoseguanli5"},{label:"数据监控",value:"#icon-shujujiankong"},{label:"活动展示",value:"#icon-huodongzhanshi"},{label:"vip invitation",value:"#icon-vipinvitation"}]},{label:"阿里云图标",list:["iconfont icon-zhongyingwen","iconfont icon-rizhi1","iconfont icon-bug","iconfont icon-qq1","iconfont icon-weixin1"]}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function D(r,s,t,e,m,h){const c=v("tvue-form");return b(),k(c,{option:e.option},null,8,["option"])}const x=d(y,[["render",D],["__file","default.vue"]]),A={__name:"disabled",setup(r,{expose:s}){s();const e={option:o({column:[{label:"图标",prop:"icon",type:"icon",disabled:!0}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function j(r,s,t,e,m,h){const c=v("tvue-form");return b(),k(c,{option:e.option},null,8,["option"])}const w=d(A,[["render",j],["__file","disabled.vue"]]),B={__name:"value",setup(r,{expose:s}){s();const e={option:o({column:[{label:"图标",prop:"icon",type:"icon",value:"el-icon-user",iconList:[{label:"符号图标",list:["el-icon-plus","el-icon-minus","el-icon-close","el-icon-check"]}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function S(r,s,t,e,m,h){const c=v("tvue-form");return b(),k(c,{option:e.option},null,8,["option"])}const $=d(B,[["render",S],["__file","value.vue"]]),q={__name:"base",setup(r,{expose:s}){s();const e={option:o({column:[{label:"图标选择器",prop:"icon",type:"icon",iconList:[{label:"基本图标",list:[{label:"名称1",value:"el-icon-info"},{label:"名称2",value:"el-icon-error"},{label:"名称3",value:"el-icon-success"},{label:"名称4",value:"el-icon-warning"},{label:"名称5",value:"el-icon-question"}]},{label:"方向图标",list:["el-icon-info","el-icon-back","el-icon-arrow-left","el-icon-arrow-down","el-icon-arrow-right","el-icon-arrow-up"]},{label:"符号图标",list:["el-icon-plus","el-icon-minus","el-icon-close","el-icon-check"]}]}]}),ref:o};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function C(r,s,t,e,m,h){const c=v("tvue-form");return b(),k(c,{option:e.option},null,8,["option"])}const z=d(q,[["render",C],["__file","base.vue"]]),O={__name:"index.html",setup(r,{expose:s}){s();const t={DemoDefault_vue:x,DemoDisabled_vue:w,DemoValue_vue:$,DemoBase_vue:z};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function P(r,s,t,e,m,h){const c=v("VPDemoBasic"),f=v("Tabs");return b(),_("div",null,[s[16]||(s[16]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),p(f,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(c,{type:"vue",desc:"图标集合参考例子配置`iconList`属性"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"> </tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '图标选择器',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      iconList: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '基本图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '名称1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 'el-icon-info'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '名称2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 'el-icon-error'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '名称3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 'el-icon-success'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '名称4',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 'el-icon-warning'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '名称5',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 'el-icon-question'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '方向图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '符号图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBase_vue)]),_:1})]),_:1}),s[17]||(s[17]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),p(f,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(c,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'el-icon-user',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      iconList: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '符号图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoValue_vue)]),_:1})]),_:1}),s[18]||(s[18]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),p(f,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(c,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDisabled_vue)]),_:1})]),_:1}),s[19]||(s[19]=g(`<h2 id="其他图标库" tabindex="-1"><a class="header-anchor" href="#其他图标库"><span>其他图标库</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 引入阿里巴巴的图表库iconfont和svg图标后，直接使用图标名即可，记得加前缀 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">link</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> rel</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">stylesheet</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> href</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://at.alicdn.com/t/font_567566_pwc3oottzol.css</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">//at.alicdn.com/t/font_2621503_zcbiqy2g1i.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),p(f,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(c,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"> </tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '图标选择器',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'icon',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      iconList: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '阿里图标-Symbol图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '机构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jigou'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '短信管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-duanxinguanli'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '发票管理系统',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-fapiaoguanlixitong'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '角色',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jiaose'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '黑名单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-heimingdan2'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'KHCFDC_附件',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-fujian4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '文档',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-wendang3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '刷卡',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-shuaka'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '停车',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-tingche3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '对象存储OSS',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-duixiangcunchuOSS'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '反馈',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-fankui2'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '短信',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-ziyuan1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '对象存储服务',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '数据库_jurassic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jurassic_data'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '日志',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-rizhi1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-quanxian4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '订单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-5'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '机构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jigou1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '机构人员',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jigourenyuan'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '角色管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jiaoseguanli4'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '角色管理',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-jiaoseguanli5'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '数据监控',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-shujujiankong'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '活动展示',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-huodongzhanshi'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'vip invitation',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: '#icon-vipinvitation'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '阿里云图标',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        list: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          'iconfont icon-zhongyingwen',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          'iconfont icon-rizhi1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          'iconfont icon-bug',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          'iconfont icon-qq1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          'iconfont icon-weixin1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDefault_vue)]),_:1})]),_:1})])}const L=d(O,[["render",P],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/form/form-input-icon/","title":"Icon图标选择器","lang":"zh-CN","frontmatter":{"title":"Icon图标选择器","createTime":"2025/02/06 14:39:56","permalink":"/form/form-input-icon/"},"headers":[],"readingTime":{"minutes":0.65,"words":194},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input-icon.md","bulletin":false}');export{L as comp,N as data};

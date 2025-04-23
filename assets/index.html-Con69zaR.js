import{_ as f,b as d,r as b,o as y,c as x,a as t,g as a,f as l,e as n,F as A,E as h,h as _,d as U}from"./app-Cibr2ptE.js";const $={__name:"data",setup(m,{expose:s}){s();const r=d({}),e=d(null),u=d({column:[{label:"字典",span:24,type:"checkbox",prop:"checkbox",dicUrl:"https://cli.avuejs.com/api/area/getProvince",props:{label:"name",value:"code"}}]}),p={form:r,formRef:e,option:u,updateUrlDic:()=>{h.success("先设置本地字典1s后请求url"),e.value.updateDic("checkbox",[{name:"字典1",code:1},{name:"字典0",code:2}]),setTimeout(()=>{e.value.updateDic("checkbox")},1e3)},ref:d,get ElMessage(){return h}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function V(m,s,r,e,u,o){const p=b("el-button"),v=b("tvue-form");return y(),x(A,null,[t(p,{type:"primary",onClick:e.updateUrlDic},{default:a(()=>s[1]||(s[1]=[l("更新字典")])),_:1}),s[2]||(s[2]=n("br",null,null,-1)),s[3]||(s[3]=n("br",null,null,-1)),t(v,{ref:"formRef",option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form=i)},null,8,["option","modelValue"])],64)}const P=f($,[["render",V],["__file","data.vue"]]),k="https://cli.avuejs.com/api/area",j={__name:"cascader",setup(m,{expose:s}){s();const r=d({province:"110000",city1:"110100",city2:"110100",area:"110101"}),e=d({column:[{label:"省份",prop:"province",type:"select",cascader:["city1","city2"],cascaderIndex:1,props:{label:"name",value:"code"},dicUrl:`${k}/getProvince`},{width:120,label:"城市1",prop:"city1",type:"select",cascader:["area"],cascaderIndex:1,cell:!0,props:{label:"name",value:"code"},dicUrl:`${k}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市1",trigger:"blur"}]},{width:120,label:"城市2",prop:"city2",type:"select",cascaderIndex:2,cell:!0,props:{label:"name",value:"code"},dicUrl:`${k}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市2",trigger:"blur"}]},{width:120,label:"地区",prop:"area",cell:!0,props:{label:"name",value:"code"},type:"select",dicUrl:`${k}/getArea/{{key}}?province={{province}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]}),u={baseUrl:k,form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function B(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const S=f(j,[["render",B],["__file","cascader.vue"]]),C={__name:"disabled",setup(m,{expose:s}){s();const r=d({grade:1}),e=d({column:[{label:"权限",prop:"grade",type:"select",dicData:[{label:"有权限",value:1},{label:"无权限",value:0},{label:"禁止项",disabled:!0,value:-1}]}]}),u={form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function T(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const q=f(C,[["render",T],["__file","disabled.vue"]]),D="https://cli.avuejs.com/api/area",w={__name:"formatter",setup(m,{expose:s}){s();const r=d({province:"110000"}),e=d({column:[{label:"城市",prop:"province",type:"select",props:{label:"name",value:"code"},dicFormatter:o=>(o.forEach(p=>{p.name=p.name+"字典格式化"}),o.unshift({name:"追加字典",code:-1}),o),dicUrl:`${D}/getProvince`}]}),u={baseUrl:D,form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function E(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const O=f(w,[["render",E],["__file","formatter.vue"]]),g="https://cli.avuejs.com/api/area",F={__name:"net",setup(m,{expose:s}){s();const r=d({province:"110000",city:"110000"}),e=d({column:[{label:"get请求",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:`${g}/getProvince`},{label:"post请求",prop:"city",type:"tree",dicMethod:"post",props:{label:"name",value:"code"},dicUrl:`${g}/getProvince`}]}),u={baseUrl:g,form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function R(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const N=f(F,[["render",R],["__file","net.vue"]]),I={__name:"props",setup(m,{expose:s}){s();const r=d({grade:1}),e=d({column:[{label:"权限",prop:"grade",type:"select",props:{label:"name",value:"code"},dicData:[{name:"有权限",code:1},{name:"无权限",code:0},{name:"禁止项",code:-1}]},{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code",res:"data.list"},dicUrl:"https://cli.avuejs.com/api/area/getProvince?isRes=true"}]}),u={form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function M(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const L=f(I,[["render",M],["__file","props.vue"]]),z={__name:"type",setup(m,{expose:s}){s();const r=d({data:1}),e=d({column:[{label:"字符串字典",prop:"data",type:"select",dataType:"string",dicData:[{label:"一级",value:"1"}]}]}),u={form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function J(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const Q=f(z,[["render",J],["__file","type.vue"]]),G={__name:"local",setup(m,{expose:s}){s();const r=d({cascader:[0,1],tree:0}),e=d({column:[{label:"array",prop:"cascader",type:"cascader",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"function",prop:"tree",type:"tree",dicData:o=>[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"promise",prop:"select",type:"select",dicData:o=>new Promise(p=>{p([{label:"一级1",value:1},{label:"一级2",value:2}])})}]}),u={form:r,option:e,ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function H(m,s,r,e,u,o){const p=b("tvue-form");return y(),_(p,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"])}const K=f(G,[["render",H],["__file","local.vue"]]),W={__name:"index.html",setup(m,{expose:s}){s();const r={DemoData_vue:P,DemoCascader_vue:S,DemoDisabled_vue:q,DemoFormatter_vue:O,DemoNet_vue:N,DemoProps_vue:L,DemoType_vue:Q,DemoLocal_vue:K};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function X(m,s,r,e,u,o){const p=b("VPDemoBasic"),v=b("Tabs");return y(),x("div",null,[s[32]||(s[32]=U(`<div class="hint-container tip"><p class="hint-container-title">提示</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//使用字典需要引入axios</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">axios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({});</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Avue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="本地字典" tabindex="-1"><a class="header-anchor" href="#本地字典"><span>本地字典</span></a></h2>`,2)),t(v,{id:"6",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"注意返回的数据必须为`array`数组，返回数据中 value 类型和数据的类型必须要对应，比如都是字符串或者都是数字"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cascader: [0, 1],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tree: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "array",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "cascader",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      type: "cascader",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,'          label: "一级",')]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "一级1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "一级2",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "function",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "tree",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      type: "tree",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: (ele) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,'            label: "一级",')]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                label: "一级1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"                value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                label: "一级2",')]),l(`
`),n("span",{class:"line"},[n("span",null,"                value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ];")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "promise",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "select",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      type: "select",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: (ele) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return new Promise((resolve) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          resolve([")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "一级1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "一级2",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoLocal_vue)]),_:1})]),_:1}),s[33]||(s[33]=n("h2",{id:"字段类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字段类型"},[n("span",null,"字段类型")])],-1)),t(v,{id:"19",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"`dataType`可以指定数据或者字典的数据类型"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '字符串字典',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'data',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dataType: 'string',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: '1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoType_vue)]),_:1})]),_:1}),s[34]||(s[34]=n("h2",{id:"字段配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字段配置"},[n("span",null,"字段配置")])],-1)),t(v,{id:"32",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"配置`props`对应的`label`和`value`即可，字典返回的是无任何层级包裹的，如果有层级需要配置`res`字段"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  grade: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'grade',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { name: '有权限', code: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { name: '无权限', code: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { name: '禁止项', code: -1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        res: 'data.list'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: 'https://cli.avuejs.com/api/area/getProvince?isRes=true'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoProps_vue)]),_:1})]),_:1}),s[35]||(s[35]=n("h2",{id:"网络字典",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网络字典"},[n("span",null,"网络字典")])],-1)),t(v,{id:"45",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"网络字典不需要配置`dicData`属性，直接配置`dicUrl`字典接口即可，`dicMethod`指定请求类型,默认为 get 请求,`dicQuery`为请求携带的参数"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city: '110000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'get请求',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'post请求',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicMethod: 'post',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoNet_vue)]),_:1})]),_:1}),s[36]||(s[36]=n("h2",{id:"字典格式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典格式化"},[n("span",null,"字典格式化")])],-1)),t(v,{id:"58",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"`dicFormatter`为字典数据返回的执行函数，对字典处理完返回即可"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicFormatter: (data) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        data.forEach(ele => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ele.name = ele.name + '字典格式化';")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        data.unshift({ name: '追加字典', code: -1 });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return data;")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoFormatter_vue)]),_:1})]),_:1}),s[37]||(s[37]=n("h2",{id:"禁止字典某项",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁止字典某项"},[n("span",null,"禁止字典某项")])],-1)),t(v,{id:"71",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"禁止的项目配置`disabled`为`true`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  grade: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'grade',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '有权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '无权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '禁止项',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          disabled: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: -1")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDisabled_vue)]),_:1})]),_:1}),s[38]||(s[38]=n("h2",{id:"字典联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典联动"},[n("span",null,"字典联动")])],-1)),t(v,{id:"84",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系,`cascaderIndex`设置默认选择第几项"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city1: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city2: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  area: '110101',")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city1', 'city2'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascaderIndex: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      width: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['area'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascaderIndex: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      width: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascaderIndex: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      width: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'area',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getArea/{{key}}?province={{province}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoCascader_vue)]),_:1})]),_:1}),s[39]||(s[39]=n("h2",{id:"修改数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改数据"},[n("span",null,"修改数据")])],-1)),t(v,{id:"98",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[t(p,{type:"vue",desc:"和上面方法一样，只是再调用`updateDic`时不需要传新的字典，他会自己调用`dicUrl`去请求字典"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="updateUrlDic">更新字典</el-button><br /><br />')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="formRef"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const formRef = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '字典',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicUrl: 'https://cli.avuejs.com/api/area/getProvince',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const updateUrlDic = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('先设置本地字典1s后请求url')")]),l(`
`),n("span",{class:"line"},[n("span",null,"  formRef.value.updateDic('checkbox', [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { name: '字典1', code: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { name: '字典0', code: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    formRef.value.updateDic('checkbox');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoData_vue)]),_:1})]),_:1})])}const Z=f(W,[["render",X],["__file","index.html.vue"]]),nn=JSON.parse('{"path":"/form/form-dic/","title":"表单数据字典","lang":"zh-CN","frontmatter":{"title":"表单数据字典","createTime":"2025/02/06 15:20:40","permalink":"/form/form-dic/"},"headers":[],"readingTime":{"minutes":1.5,"words":449},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-dic.md","bulletin":false}');export{Z as comp,nn as data};

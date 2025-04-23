import{_ as f,b as m,r as b,o as g,h as _,l as A,c as S,a as d,g as a,f as l,F as V,d as h,e as n}from"./app-Cibr2ptE.js";const U="https://cli.avuejs.com/api/area",q={__name:"params",setup(o,{expose:s}){s();const p=m({province:"110000",city:"110100",params:"test"}),e=m({column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cascader:["city"],dicUrl:`${U}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"参数",prop:"params"},{label:"城市",prop:"city",type:"select",props:{label:"name",value:"code"},dicUrl:`${U}/getCity/${p.value.province}?params=${p.value.params}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]}]}),u={baseUrl:U,form:p,option:e,ref:m,computed:A};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function P(o,s,p,e,u,v){const c=b("tvue-form");return g(),_(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form=t)},null,8,["option","modelValue"])}const j=f(q,[["render",P],["__file","params.vue"]]),k="https://cli.avuejs.com/api/area",C={__name:"input",setup(o,{expose:s}){s();const p=m({province:"110000",city:"110100"}),e=m({column:[{label:"省份",prop:"province",cascader:["city"]},{label:"城市",prop:"city",type:"select",props:{label:"name",value:"code"},dicUrl:`${k}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]}]}),u={baseUrl:k,form:p,option:e,ref:m};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function D(o,s,p,e,u,v){const c=b("el-tag"),t=b("tvue-form");return g(),S(V,null,[d(c,null,{default:a(()=>s[1]||(s[1]=[l("110000-北京市")])),_:1}),d(c,null,{default:a(()=>s[2]||(s[2]=[l("130000-河北省")])),_:1}),d(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form=i)},null,8,["option","modelValue"])],64)}const O=f(C,[["render",D],["__file","input.vue"]]),$="https://cli.avuejs.com/api/area",N={__name:"radio",setup(o,{expose:s}){s();const p=m({province:"110000",city:"110100"}),e=m({column:[{label:"省份",prop:"province",type:"radio",cascader:["city"],span:24,props:{label:"name",value:"code"},dicUrl:`${$}/getProvince`},{label:"城市",prop:"city",type:"select",props:{label:"name",value:"code"},dicUrl:`${$}/getCity/${p.value.province}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]}]}),u={baseUrl:$,form:p,option:e,ref:m};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function T(o,s,p,e,u,v){const c=b("tvue-form");return g(),_(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form=t)},null,8,["option","modelValue"])}const B=f(N,[["render",T],["__file","radio.vue"]]),x="https://cli.avuejs.com/api/area",J={__name:"table",setup(o,{expose:s}){s();const p=m({province:"110000",city:"110100"}),e=m({column:[{label:"省份",prop:"province",type:"table",cascader:["city"],children:{border:!0,column:[{label:"名称",search:!0,searchSpan:24,prop:"name"}]},formatter:v=>v.name?v.id+"-"+v.name:"",onLoad:({page:v,value:c,data:t},i)=>{if(c){console.log("首次查询"+c),i({id:"110000",name:"北京市"});return}t&&console.log("搜索查询参数"+JSON.stringify(t)),v&&console.log("分页参数"+JSON.stringify(v)),i({total:2,data:[{id:"110000",name:"北京市"},{id:"130000",name:"河北省"}]})},props:{label:"name",value:"id"}},{label:"城市",prop:"city",type:"select",props:{label:"name",value:"code"},dicUrl:`${x}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]}]}),u={baseUrl:x,form:p,option:e,ref:m};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function w(o,s,p,e,u,v){const c=b("tvue-form");return g(),_(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form=t)},null,8,["option","modelValue"])}const I=f(J,[["render",w],["__file","table.vue"]]),y="https://cli.avuejs.com/api/area",R={__name:"select",setup(o,{expose:s}){s();const p=m({province:"110000",city:"110100",area:"110101"}),e=m({column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cascader:["city"],dicUrl:`${y}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",cascader:["area"],props:{label:"name",value:"code"},dicUrl:`${y}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",type:"select",props:{label:"name",value:"code"},dicUrl:`${y}/getArea/{{key}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]}),u={baseUrl:y,form:p,option:e,ref:m};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function F(o,s,p,e,u,v){const c=b("tvue-form");return g(),_(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=t=>e.form=t)},null,8,["option","modelValue"])}const L=f(R,[["render",F],["__file","select.vue"]]),z={__name:"index.html",setup(o,{expose:s}){s();const p={DemoParams_vue:j,DemoInput_vue:O,DemoRadio_vue:B,DemoTable_vue:I,DemoSelect_vue:L};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function E(o,s,p,e,u,v){const c=b("VPDemoBasic"),t=b("Tabs");return g(),S("div",null,[s[20]||(s[20]=h('<div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>cascader</code>为需要联动的子选择框<code>prop</code>值，填写多个就会形成一对多的关系,<code>key</code>为上一级传递下来的值，你也可以直接写其他<code>form</code>的值</p></div><h2 id="select多级联动" tabindex="-1"><a class="header-anchor" href="#select多级联动"><span>Select多级联动</span></a></h2>',2)),d(t,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:r})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:r})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:r})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:r})=>[d(c,{type:"vue"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"  city: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  area: '110101'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['area'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'area',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getArea/{{key}}`,")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[d(e.DemoSelect_vue)]),_:1})]),_:1}),s[21]||(s[21]=n("h2",{id:"select-inputtable多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#select-inputtable多级联动"},[n("span",null,"Select+InputTable多级联动")])],-1)),d(t,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:r})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:r})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:r})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:r})=>[d(c,{type:"vue"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"  city: '110100'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '名称',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            search: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            searchSpan: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (!row.name) return '';")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return row.id + '-' + row.name;")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      onLoad: ({ page, value, data }, callback) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          console.log('首次查询' + value);")]),l(`
`),n("span",{class:"line"},[n("span",null,"          callback({")]),l(`
`),n("span",{class:"line"},[n("span",null,"            id: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            name: '北京市'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          });")]),l(`
`),n("span",{class:"line"},[n("span",null,"          return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (data) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          console.log('搜索查询参数' + JSON.stringify(data));")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (page) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          console.log('分页参数' + JSON.stringify(page));")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        callback({")]),l(`
`),n("span",{class:"line"},[n("span",null,"          total: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          data: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              id: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              name: '北京市'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              id: '130000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              name: '河北省'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'id'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[d(e.DemoTable_vue)]),_:1})]),_:1}),s[22]||(s[22]=n("h2",{id:"select-radio多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#select-radio多级联动"},[n("span",null,"Select+Radio多级联动")])],-1)),d(t,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:r})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:r})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:r})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:r})=>[d(c,{type:"vue"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city: '110100'")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/${form.value.province}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[d(e.DemoRadio_vue)]),_:1})]),_:1}),s[23]||(s[23]=n("h2",{id:"select-input多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#select-input多级联动"},[n("span",null,"Select+Input多级联动")])],-1)),d(t,{id:"47",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:r})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:r})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:r})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:r})=>[d(c,{type:"vue"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <el-tag>110000-北京市</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <el-tag>130000-河北省</el-tag>")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"  city: '110100'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[d(e.DemoInput_vue)]),_:1})]),_:1}),s[24]||(s[24]=n("h2",{id:"传递其他参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#传递其他参数"},[n("span",null,"传递其他参数")])],-1)),d(t,{id:"60",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:r})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:r})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:r})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:r})=>[d(c,{type:"vue"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  city: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  params: 'test'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '参数',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'params'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/${form.value.province}?params=${form.value.params}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[d(e.DemoParams_vue)]),_:1})]),_:1})])}const H=f(z,[["render",E],["__file","index.html.vue"]]),K=JSON.parse('{"path":"/form/form-cascader-item/","title":"表单多级联动","lang":"zh-CN","frontmatter":{"title":"表单多级联动","createTime":"2025/02/06 15:23:45","permalink":"/form/form-cascader-item/"},"headers":[],"readingTime":{"minutes":0.52,"words":156},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-cascader-item.md","bulletin":false}');export{H as comp,K as data};

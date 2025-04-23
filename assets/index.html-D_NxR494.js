import{_,b as v,r as o,o as f,h as x,c as y,a as p,g as a,f as l,e as n,t as g,F as D,w as h}from"./app-Cibr2ptE.js";const P={__name:"filterParams",setup(m,{expose:s}){s();const r=v({name:"smallwei",cascader:[0,1],tree:0}),e=v({filterParams:["name"],column:[{label:"姓名",prop:"name"},{label:"级别",prop:"cascader",type:"cascader",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"树型",prop:"tree",type:"tree",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]}]}),u={form:r,option:e,ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function T(m,s,r,e,u,b){const t=o("tvue-form");return f(),x(t,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d),option:e.option},null,8,["modelValue","option"])}const V=_(P,[["render",T],["__file","filterParams.vue"]]),A={__name:"filter",setup(m,{expose:s}){s();const r=v(Math.random()),e=v({cascader:[0,1],tree:0}),u=v({column:[{label:"姓名",prop:"name"},{label:"级别",prop:"cascader",type:"cascader",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"树型",prop:"tree",type:"tree",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]}]}),b=()=>{r.value=Math.random()},c={reload:r,form:e,option:u,refresh:b,filter:()=>{u.value.filterDic=!1,u.value.filterNull=!1,b()},filterDic:()=>{u.value.filterDic=!0,b()},filterNull:()=>{u.value.filterNull=!0,b()},ref:v,watch:h};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function N(m,s,r,e,u,b){const t=o("el-button"),d=o("tvue-form");return f(),y(D,null,[p(t,{type:"danger",onClick:e.filterDic},{default:a(()=>s[1]||(s[1]=[l("过滤数据字典")])),_:1}),p(t,{type:"success",onClick:e.filterNull},{default:a(()=>s[2]||(s[2]=[l("过滤空数据")])),_:1}),p(t,{type:"primary",onClick:e.filter},{default:a(()=>s[3]||(s[3]=[l("不过滤")])),_:1}),n("p",null,g(e.form),1),(f(),x(d,{key:e.reload,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form=i),option:e.option},null,8,["modelValue","option"]))],64)}const j=_(A,[["render",N],["__file","filter.vue"]]),S={__name:"bind",setup(m,{expose:s}){s();const r=v({deep:{deep:{deep:{value:1}}},test:""}),e=v({labelWidth:120,column:[{label:"我是深结构",prop:"test",bind:"deep.deep.deep.value"}]}),u={form:r,option:e,ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function B(m,s,r,e,u,b){const t=o("el-button"),d=o("tvue-form");return f(),y(D,null,[p(t,{type:"primary",onClick:s[0]||(s[0]=i=>e.form.deep.deep.deep.value="改变deep.deep.deep.value值")},{default:a(()=>s[3]||(s[3]=[l("改变deep.deep.deep.value值")])),_:1}),p(t,{type:"primary",onClick:s[1]||(s[1]=i=>e.form.test="改变test值")},{default:a(()=>s[4]||(s[4]=[l("改变test值")])),_:1}),s[5]||(s[5]=n("br",null,null,-1)),s[6]||(s[6]=n("br",null,null,-1)),l(" "+g(e.form)+" ",1),p(d,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[2]||(s[2]=i=>e.form=i)},null,8,["option","modelValue"])],64)}const U=_(S,[["render",B],["__file","bind.vue"]]),k="https://cli.avuejs.com/api/area",w={__name:"base",setup(m,{expose:s}){s();const r=v({cascader:"1,2",province:12e4,radio:1,checkbox:"1,2,3",selects:"1|2|3"}),e=v({column:[{label:"单选",prop:"radio",type:"radio",dataType:"number",dicData:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]},{label:"多选",prop:"checkbox",type:"checkbox",dataType:"number",dicData:[{label:"选项1",value:1},{label:"选项2",value:2},{label:"选项3",value:3}]},{label:"多选",prop:"selects",type:"select",separator:"|",multiple:!0,dicData:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"}]},{label:"级联",prop:"cascader",type:"cascader",dataType:"string",dicData:[{label:"级别1",value:1,children:[{label:"级别2",value:2}]}],rules:[{required:!0,message:"请选择级联",trigger:"blur"}]},{label:"省份",prop:"province",type:"select",dataType:"number",props:{label:"name",value:"code"},dicUrl:`${k}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]}),u={baseUrl:k,obj:r,option:e,ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function C(m,s,r,e,u,b){const t=o("tvue-form");return f(),y(D,null,[l(g(e.obj)+" ",1),p(t,{option:e.option,modelValue:e.obj,"onUpdate:modelValue":s[0]||(s[0]=d=>e.obj=d)},null,8,["option","modelValue"])],64)}const $=_(w,[["render",C],["__file","base.vue"]]),q={__name:"index.html",setup(m,{expose:s}){s();const r={DemoFilterParams_vue:V,DemoFilter_vue:j,DemoBind_vue:U,DemoBase_vue:$};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function F(m,s,r,e,u,b){const t=o("VPDemoBasic"),d=o("Tabs");return f(),y("div",null,[s[16]||(s[16]=n("h2",{id:"数据类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据类型"},[n("span",null,"数据类型")])],-1)),s[17]||(s[17]=n("ul",null,[n("li",null,"组件正常接受数据格式为数组[1,2,3,4],而后台返回的类型为字符串1,2,3,4,设置dataType来进行数据转化"),n("li",null,"数据为字符串，字典类型为数字，设置dataType统一数据类型")],-1)),p(d,{id:"15",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[p(t,{type:"vue",desc:"有些数据是数组形式的，我们传入字符串是无法识别的，解决数据字典和字段类型不匹配问题,配置`dataType`属性(string / number),`separator`配置分隔符，默认为`,`"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {{ obj }}")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="obj"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const obj = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cascader: '1,2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  province: 120000,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  radio: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  checkbox: '1,2,3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  selects: '1|2|3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dataType: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项2', value: 2 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项3', value: 3 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dataType: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项2', value: 2 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项3', value: 3 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'selects',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      separator: '|',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项1', value: '1' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项2', value: '2' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '选项3', value: '3' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dataType: 'string',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '级别1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [{ label: '级别2', value: 2 }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择级联',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dataType: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBase_vue)]),_:1})]),_:1}),s[18]||(s[18]=n("h2",{id:"深层结构数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#深层结构数据"},[n("span",null,"深层结构数据")])],-1)),p(d,{id:"28",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[p(t,{type:"vue",desc:"`bind`绑定的对象数据是双向的，改变任意一个，另外一个也会改变"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,`             @click="form.deep.deep.deep.value = '改变deep.deep.deep.value值'">改变deep.deep.deep.value值</el-button>`)]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,`             @click="form.test = '改变test值'">改变test值</el-button>`)]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {{ form }}")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  test: ''")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '我是深结构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'test',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      bind: 'deep.deep.deep.value'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoBind_vue)]),_:1})]),_:1}),s[19]||(s[19]=n("h2",{id:"数据过滤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据过滤"},[n("span",null,"数据过滤")])],-1)),p(d,{id:"41",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[p(t,{type:"vue",desc:"`filterDic`设置为`true`返回的对象不会包含`$`前缀的字典翻译, `filterNull`设置为`true`返回的对象不会包含空数据的字段"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="danger"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="filterDic">过滤数据字典</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="success"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="filterNull">过滤空数据</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="filter">不过滤</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <p>{{ form }}</p>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// State")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cascader: [0, 1],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tree: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { label: '一级1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { label: '一级2', value: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { label: '一级1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            { label: '一级2', value: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// Methods")]),l(`
`),n("span",{class:"line"},[n("span",null,"const refresh = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const filter = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.filterDic = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.filterNull = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const filterDic = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.filterDic = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const filterNull = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.filterNull = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoFilter_vue)]),_:1})]),_:1}),s[20]||(s[20]=n("h2",{id:"清空过滤字段",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#清空过滤字段"},[n("span",null,"清空过滤字段")])],-1)),p(d,{id:"54",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[p(t,{type:"vue",desc:"`filterParams`为点击清空按钮，表单不会清除的数据，默认主键`rowKey`是不会清空的，默认为`id`"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"// 创建响应式数据")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: 'smallwei',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cascader: [0, 1],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tree: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  filterParams: ['name'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoFilterParams_vue)]),_:1})]),_:1})])}const M=_(q,[["render",F],["__file","index.html.vue"]]),W=JSON.parse('{"path":"/form/form-data/","title":"表单数据格式","lang":"zh-CN","frontmatter":{"title":"表单数据格式","createTime":"2025/02/06 15:25:48","permalink":"/form/form-data/"},"headers":[],"readingTime":{"minutes":1.01,"words":303},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-data.md","bulletin":false}');export{M as comp,W as data};

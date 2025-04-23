import{_ as g,b as o,w as x,l as w,r as v,o as y,h as A,E as f,g as a,a as t,f as l,t as _,c as k,e as n,F as D,d as M}from"./app-Cibr2ptE.js";const h="https://cli.avuejs.com/api/area",$={__name:"parent",setup(b,{expose:s}){s();const c=o({}),e=o(Math.random());x(()=>c.value.province,()=>{e.value=Math.random()});const m=w(()=>({column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:`${h}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"子表单",prop:"dynamic",type:"dynamic",span:24,children:{column:[{label:"城市",prop:"city",type:"select",props:{label:"name",value:"code"},dicUrl:`${h}/getCity/`+c.value.province,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]}]}}]})),r={baseUrl:h,form:c,reload:e,option:m,ref:o,computed:w,watch:x};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function S(b,s,c,e,m,r){const i=v("tvue-form");return y(),A(i,{key:e.reload,option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=d=>e.form=d)},null,8,["option","modelValue"])}const V=g($,[["render",S],["__file","parent.vue"]]),E={__name:"form",setup(b,{expose:s}){s();const c=o({dynamic:[{input:1,select:1},{input:2,select:2}]}),e=o({column:[{label:"子表单",prop:"dynamic",type:"dynamic",span:24,children:{index:!1,align:"center",type:"form",headerAlign:"center",rowAdd:r=>{f.success("新增回调"),r({input:"默认值"})},rowDel:(r,i)=>{f.success("删除回调"+JSON.stringify(r)),i()},column:[{width:200,label:"输入框",prop:"input"},{label:"选择框",prop:"select",type:"select",dicData:[{label:"测试1",value:1},{label:"测试2",value:2}]}]}}]}),m={form:c,option:e,ref:o,get ElMessage(){return f}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function P(b,s,c,e,m,r){const i=v("el-tag"),d=v("tvue-form");return y(),A(d,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=u=>e.form=u)},{input:a(({row:u})=>[t(i,null,{default:a(()=>[l("序号:"+_(u.$index)+"-数据:"+_(u.input),1)]),_:2},1024)]),_:1},8,["option","modelValue"])}const U=g(E,[["render",P],["__file","form.vue"]]),N={__name:"table",setup(b,{expose:s}){s();const c=o({dynamic:[{input:1,select:1},{input:2,select:2}]}),e={column:[{label:"子表单",prop:"dynamic",type:"dynamic",span:24,children:{align:"center",headerAlign:"center",rowAdd:i=>{f.success("新增回调"),i({input:"默认值"})},rowDel:(i,d)=>{f.success("删除回调"+JSON.stringify(i)),d()},column:[{width:200,label:"输入框",prop:"input"},{label:"选择框",prop:"select",type:"select",dicData:[{label:"测试1",value:1},{label:"测试2",value:2}]}]}}]};function m(){for(let i=0;i<10;i++)c.value.dynamic.push({input:1,select:1})}const r={form:c,option:e,addAll:m,ref:o,get ElMessage(){return f}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function q(b,s,c,e,m,r){const i=v("el-button"),d=v("el-tag"),u=v("tvue-form");return y(),k(D,null,[t(i,{onClick:e.addAll,type:"primary"},{default:a(()=>s[1]||(s[1]=[l("添加10条子表单数据")])),_:1}),s[2]||(s[2]=n("br",null,null,-1)),s[3]||(s[3]=n("br",null,null,-1)),t(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=p=>e.form=p)},{input:a(({row:p})=>[t(d,null,{default:a(()=>[l("序号:"+_(p.$index)+"-数据:"+_(p.input),1)]),_:2},1024)]),_:1},8,["modelValue"])],64)}const O=g(N,[["render",q],["__file","table.vue"]]),C={__name:"index.html",setup(b,{expose:s}){s();const c={DemoParent_vue:V,DemoForm_vue:U,DemoTable_vue:O};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function T(b,s,c,e,m,r){const i=v("VPDemoBasic"),d=v("Tabs");return y(),k("div",null,[s[12]||(s[12]=M('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里子子表单只能用于简单的场景，复杂的场景可以利用<a href="/form/form-slot/" target="_blank" rel="noopener noreferrer">Form自定义</a>嵌入一个<a href="/crud/crud-cell" target="_blank" rel="noopener noreferrer">Crud行编辑</a></p></div><h2 id="表格用法" tabindex="-1"><a class="header-anchor" href="#表格用法"><span>表格用法</span></a></h2><blockquote><p>内部组件为crud组件，大部分属性参考Crud文档</p></blockquote>',3)),t(d,{id:"13",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:p})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:u,isActive:p})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:u,isActive:p})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:p})=>[t(i,{type:"vue",desc:"配置`dynamic`的`children`字段即可"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="addAll"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             type="primary">添加10条子表单数据</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #input="{row}">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>序号:{{row.$index}}-数据:{{row.input}}</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dynamic: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { input: 1, select: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { input: 2, select: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '子表单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        headerAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        rowAdd: (done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('新增回调');")]),l(`
`),n("span",{class:"line"},[n("span",null,"          done({ input: '默认值' });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        rowDel: (row, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('删除回调' + JSON.stringify(row));")]),l(`
`),n("span",{class:"line"},[n("span",null,"          done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 200,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'input'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              { label: '测试1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              { label: '测试2', value: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function addAll () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  for (let i = 0; i < 10; i++) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    form.value.dynamic.push({ input: 1, select: 1 });")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoTable_vue)]),_:1})]),_:1}),s[13]||(s[13]=n("h2",{id:"表单用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表单用法"},[n("span",null,"表单用法")])],-1)),s[14]||(s[14]=n("blockquote",null,[n("p",null,"内部组件为form组件，大部分属性参考Form文档")],-1)),t(d,{id:"31",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:p})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:u,isActive:p})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:u,isActive:p})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:p})=>[t(i,{type:"vue",desc:"配置`type`为`form`类型即可转化为表单格式，配置`index`为`false`即可隐藏序号"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #input="{ row }">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>序号:{{ row.$index }}-数据:{{ row.input }}</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'; // 导入 ElMessage")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dynamic: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { input: 1, select: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { input: 2, select: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '子表单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        index: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        type: 'form',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        headerAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        rowAdd: (done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('新增回调'); // 使用 ElMessage")]),l(`
`),n("span",{class:"line"},[n("span",null,"          done({ input: '默认值' });")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        rowDel: (row, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('删除回调' + JSON.stringify(row)); // 使用 ElMessage")]),l(`
`),n("span",{class:"line"},[n("span",null,"          done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            width: 200,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '输入框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'input'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '选择框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              { label: '测试1', value: 1 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              { label: '测试2', value: 2 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoForm_vue)]),_:1})]),_:1}),s[15]||(s[15]=n("h2",{id:"父子联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#父子联动"},[n("span",null,"父子联动")])],-1)),t(d,{id:"44",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:p})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:u,isActive:p})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:u,isActive:p})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:p})=>[t(i,{type:"vue"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"watch(() => form.value.province, () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random();")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = computed(() => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '子表单',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'dynamic',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            dicUrl: `${baseUrl}/getCity/` + form.value.province,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"              }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}));")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoParent_vue)]),_:1})]),_:1})])}const B=g(C,[["render",T],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/form/form-dynamic/","title":"Dynamic子表单","lang":"zh-CN","frontmatter":{"title":"Dynamic子表单","createTime":"2025/02/06 14:24:44","permalink":"/form/form-dynamic/"},"headers":[],"readingTime":{"minutes":0.58,"words":173},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-dynamic.md","bulletin":false}');export{B as comp,F as data};

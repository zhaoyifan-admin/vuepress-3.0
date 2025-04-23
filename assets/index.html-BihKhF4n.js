import{_,b as r,w as h,r as b,o as x,h as g,i as k,c as y,a as o,g as i,f as l,e as n,F as D,j,k as A,E as w}from"./app-Cibr2ptE.js";const V={__name:"option",setup(f,{expose:s}){s();const a=r({}),e=r({text1:0}),m={column:[{label:"内容1",prop:"text1",type:"radio",dicData:[{label:"显示",value:0},{label:"隐藏",value:1}]},{label:"内容2",prop:"text2",display:!0},{label:"内容3",prop:"text3"}]};h(()=>e.value.text1,t=>{t==0?(a.value.text2={...a.value.text2,display:!0},a.value.text3={...a.value.text3,label:"内容3"}):(a.value.text2={...a.value.text2,display:!1},a.value.text3={...a.value.text3,label:"有没有发现我变了"})});const c={defaults:a,form:e,option:m,ref:r,watch:h};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function M(f,s,a,e,m,c){const t=b("tvue-form");return x(),g(t,{defaults:e.defaults,"onUpdate:defaults":s[0]||(s[0]=u=>e.defaults=u),option:e.option,modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=u=>e.form=u)},null,8,["defaults","modelValue"])}const S=_(V,[["render",M],["__file","option.vue"]]),O={__name:"change",setup(f,{expose:s}){s();const a=r(Math.random()),e=r(!0),m=r({name:"张三",sex:"男",username:"smallwei",password:"smallwei"}),c=r({}),t={addBtn:!1,column:[{label:"昵称",prop:"name"}]},u={addBtn:!1,column:[{label:"用户名",prop:"username"},{label:"密码",prop:"password",type:"password"},{label:"姓名",prop:"name"}]};function v(){e.value=!e.value,e.value?c.value=t:c.value=u,a.value=Math.random()}k(()=>{v()});const p={reload:a,type:e,form:m,option:c,option1:t,option2:u,handleSwitch:v,ref:r,onMounted:k};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function P(f,s,a,e,m,c){const t=b("el-button"),u=b("tvue-form");return x(),y(D,null,[o(t,{type:"primary",icon:"el-icon-sort",onClick:e.handleSwitch},{default:i(()=>s[1]||(s[1]=[l("切 换")])),_:1}),s[2]||(s[2]=n("br",null,null,-1)),s[3]||(s[3]=n("br",null,null,-1)),(x(),g(u,{key:e.reload,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=v=>e.form=v),option:e.option},null,8,["modelValue","option"]))],64)}const B=_(O,[["render",P],["__file","change.vue"]]),C={__name:"ajax",setup(f,{expose:s}){s();const a=r(Math.random()),e=r(!0),m=r({}),c=r({});function t(){w.success("模拟2s后服务端动态加载"),setTimeout(()=>{c.value={border:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince",rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]},m.value={name:"张三",sex:"男",province:"110000"},a.value=Math.random(),e.value=!1},2e3)}const u={reload:a,loading:e,form:m,option:c,getOption:t,ref:r,get ElMessage(){return w}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function T(f,s,a,e,m,c){const t=b("el-button"),u=b("tvue-form"),v=j("loading");return x(),y(D,null,[o(t,{type:"primary",icon:"el-icon-sort",onClick:e.getOption},{default:i(()=>s[1]||(s[1]=[l("服务端加载")])),_:1}),A((x(),g(u,{key:e.reload,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=p=>e.form=p),option:e.option},null,8,["modelValue","option"])),[[v,e.loading]])],64)}const N=_(C,[["render",T],["__file","ajax.vue"]]),E=r({jsLib:[],cssLib:[],script:"",css:"",html:""}),U={__name:"index.html",setup(f,{expose:s}){s();const a={DemoOption_vue:S,DemoChange_vue:B,DemoAjax_vue:N,get DemoContainer3(){return E}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function q(f,s,a,e,m,c){const t=b("VPDemoNormal"),u=b("VPDemoBasic"),v=b("Tabs");return x(),y("div",null,[s[13]||(s[13]=n("h2",{id:"表单初始化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表单初始化"},[n("span",null,"表单初始化")])],-1)),o(t,{config:e.DemoContainer3},{default:i(()=>s[0]||(s[0]=[n("p",null,"form/form-ajax/init",-1)])),_:1},8,["config"]),s[14]||(s[14]=n("h2",{id:"配置项服务端加载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项服务端加载"},[n("span",null,"配置项服务端加载")])],-1)),s[15]||(s[15]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("ul",null,[n("li",null,"这里没有走真真的服务器请求，而是做了一个模拟")])],-1)),o(v,{id:"20",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:d})=>s[1]||(s[1]=[l("vue2")])),title1:i(({value:p,isActive:d})=>s[2]||(s[2]=[l("vue3")])),tab0:i(({value:p,isActive:d})=>s[3]||(s[3]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:d})=>[o(u,{type:"vue",desc:"目前组件有 5 个事件`change`,`click`,`focus`,`blur`,`enter`"},{code:i(()=>s[4]||(s[4]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             icon="el-icon-sort"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="getOption">服务端加载</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-loading="loading"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loading = ref(true);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function getOption () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟2s后服务端动态加载');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    option.value = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          dicUrl: `https://cli.avuejs.com/api/area/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    form.value = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      sex: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      province: '110000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    reload.value = Math.random();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading.value = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[o(e.DemoAjax_vue)]),_:1})]),_:1}),s[16]||(s[16]=n("h2",{id:"配置项切换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项切换"},[n("span",null,"配置项切换")])],-1)),o(v,{id:"33",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:d})=>s[5]||(s[5]=[l("vue2")])),title1:i(({value:p,isActive:d})=>s[6]||(s[6]=[l("vue3")])),tab0:i(({value:p,isActive:d})=>s[7]||(s[7]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:d})=>[o(u,{type:"vue"},{code:i(()=>s[8]||(s[8]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             icon="el-icon-sort"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="handleSwitch">切 换</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),l(`
`),n("span",{class:"line"},[n("span",null,"const type = ref(true);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  username: 'smallwei',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  password: 'smallwei'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option1 = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '昵称',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option2 = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'username'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '密码',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'password',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'password'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleSwitch () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  type.value = !type.value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (type.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    option.value = option1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    option.value = option2;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  handleSwitch();")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[o(e.DemoChange_vue)]),_:1})]),_:1}),s[17]||(s[17]=n("h2",{id:"动态改变结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态改变结构"},[n("span",null,"动态改变结构")])],-1)),o(v,{id:"46",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:d})=>s[9]||(s[9]=[l("vue2")])),title1:i(({value:p,isActive:d})=>s[10]||(s[10]=[l("vue3")])),tab0:i(({value:p,isActive:d})=>s[11]||(s[11]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:d})=>[o(u,{type:"vue"},{code:i(()=>s[12]||(s[12]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model:defaults="defaults"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const defaults = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '显示', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '隐藏', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      display: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"watch(() => form.value.text1, (val) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (val == 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2 = { ...defaults.value.text2, display: true };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3 = { ...defaults.value.text3, label: '内容3' };")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2 = { ...defaults.value.text2, display: false };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3 = { ...defaults.value.text3, label: '有没有发现我变了' };")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[o(e.DemoOption_vue)]),_:1})]),_:1})])}const L=_(U,[["render",q],["__file","index.html.vue"]]),$=JSON.parse('{"path":"/form/form-ajax/","title":"表单高级用法","lang":"zh-CN","frontmatter":{"title":"表单高级用法","createTime":"2025/02/06 15:29:33","permalink":"/form/form-ajax/"},"headers":[],"readingTime":{"minutes":0.37,"words":112},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-ajax.md","bulletin":false}');export{L as comp,$ as data};

import{_ as g,b as r,r as m,o as f,h as y,g as a,a as o,f as l,i as h,c as x,e as n,F as w,E as _}from"./app-Cibr2ptE.js";const k={__name:"option",setup(b,{expose:s}){s();const i=r({text2:{display:!0},text3:{label:"内容3"}}),e=r([{text1:0}]),v=r({column:[{label:"内容2",prop:"text2",display:!0},{label:"内容3",prop:"text3"}]}),t=r(!0);function c(){t.value=!t.value,t.value?(i.value.text2.display=!0,i.value.text3.label="内容3"):(i.value.text2.display=!1,i.value.text3.label="有没有发现我变了")}const u={defaults:i,data:e,option:v,flag:t,handleChange:c,ref:r};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function A(b,s,i,e,v,t){const c=m("el-button"),u=m("tvue-crud");return f(),y(u,{defaults:e.defaults,"onUpdate:defaults":s[0]||(s[0]=p=>e.defaults=p),option:e.option,data:e.data},{"menu-left":a(()=>[o(c,{type:"primary",onClick:e.handleChange},{default:a(()=>s[1]||(s[1]=[l("点击改变")])),_:1})]),_:1},8,["defaults","option","data"])}const M=g(k,[["render",A],["__file","option.vue"]]),C={__name:"change",setup(b,{expose:s}){s();const i=r(null),e=r(!0),v=r([{name:"张三",sex:"男",username:"smallwei",password:"smallwei"},{name:"李四",sex:"女",username:"avue",password:"avue"}]),t=r({}),c={addBtn:!1,column:[{label:"姓名",prop:"name",search:!0}]},u={addBtn:!1,column:[{label:"用户名",prop:"username",search:!0},{label:"密码",prop:"password",type:"password",search:!0},{label:"姓名",prop:"name",search:!0}]};function p(){e.value=!e.value,t.value=e.value?c:u,i.value&&i.value.refreshTable()}h(()=>{p()});const d={crud:i,type:e,data:v,option:t,option1:c,option2:u,handleSwitch:p,ref:r,onMounted:h};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function S(b,s,i,e,v,t){const c=m("el-button"),u=m("tvue-crud");return f(),y(u,{ref:"crud",data:e.data,option:e.option},{"menu-left":a(({})=>[o(c,{type:"primary",onClick:e.handleSwitch,icon:"el-icon-sort"},{default:a(()=>s[0]||(s[0]=[l("切 换")])),_:1})]),_:1},8,["data","option"])}const j=g(C,[["render",S],["__file","change.vue"]]),B={__name:"base",setup(b,{expose:s}){s();const i=r(Math.random()),e=r(!0),v=r([]),t=r({});function c(){_.success("模拟2s后服务端动态加载"),setTimeout(()=>{t.value={border:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince",rules:[{required:!0,message:"请选择省份",trigger:"blur"}]}]},v.value=[{name:"张三",sex:"男",province:"110000"},{name:"李四",sex:"女",province:"120000"}],e.value=!1,i.value=Math.random()},2e3)}const u={reload:i,loading:e,data:v,option:t,getOption:c,ref:r,get ElMessage(){return _}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function O(b,s,i,e,v,t){const c=m("el-button"),u=m("tvue-crud");return f(),x(w,null,[o(c,{type:"primary",icon:"el-icon-sort",onClick:e.getOption},{default:a(()=>s[0]||(s[0]=[l("服务端加载")])),_:1}),s[1]||(s[1]=n("br",null,null,-1)),s[2]||(s[2]=l()),s[3]||(s[3]=n("br",null,null,-1)),(f(),y(u,{key:e.reload,data:e.data,option:e.option,"table-loading":e.loading},null,8,["data","option","table-loading"]))],64)}const T=g(B,[["render",O],["__file","base.vue"]]),D={__name:"crud-reload",setup(b,{expose:s}){s();const i=r(Math.random()),e=r([{username:"smallwei",password:"smallwei"},{username:"avue",password:"avue"}]),v=r({column:[{label:"用户名",prop:"username"},{label:"密码",prop:"password",type:"password"}]}),t=r(null);function c(){i.value=Math.random(),_.success("初始化完成")}function u(){t.value&&(t.value.refreshTable(),_.success("初始化完成"))}const p={reload:i,data:e,option:v,crud:t,handleReload:c,handleReload1:u,ref:r,get ElMessage(){return _}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function E(b,s,i,e,v,t){const c=m("el-button"),u=m("tvue-crud");return f(),x(w,null,[o(c,{type:"primary",onClick:e.handleReload},{default:a(()=>s[0]||(s[0]=[l("Key初始化")])),_:1}),o(c,{type:"primary",onClick:e.handleReload1},{default:a(()=>s[1]||(s[1]=[l("内置方法初始化")])),_:1}),s[2]||(s[2]=n("br",null,null,-1)),s[3]||(s[3]=n("br",null,null,-1)),(f(),y(u,{key:e.reload,ref:"crud",data:e.data,option:e.option},null,8,["data","option"]))],64)}const P=g(D,[["render",E],["__file","crud-reload.vue"]]),R={__name:"crud-ajax.html",setup(b,{expose:s}){s();const i={DemoOption_vue:M,DemoChange_vue:j,DemoBase_vue:T,DemoCrud_reload_vue:P};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function $(b,s,i,e,v,t){const c=m("VPDemoBasic"),u=m("Tabs");return f(),x("div",null,[s[16]||(s[16]=n("h2",{id:"表格初始化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表格初始化"},[n("span",null,"表格初始化")])],-1)),o(u,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:d})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:p,isActive:d})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:p,isActive:d})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:d})=>[o(c,{type:"vue"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="handleReload">Key初始化</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="handleReload1">内置方法初始化</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random())")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    username: 'smallwei',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    password: 'smallwei'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    username: 'avue',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    password: 'avue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'username'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '密码',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'password',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'password'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleReload () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random()")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('初始化完成')")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleReload1 () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.refreshTable()")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('初始化完成')")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[o(e.DemoCrud_reload_vue)]),_:1})]),_:1}),s[17]||(s[17]=n("h2",{id:"配置项服务端加载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项服务端加载"},[n("span",null,"配置项服务端加载")])],-1)),s[18]||(s[18]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("ul",null,[n("li",null,"这里没有走真真的服务器请求，而是做了一个模拟")])],-1)),o(u,{id:"25",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:d})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:p,isActive:d})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:p,isActive:d})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:d})=>[o(c,{type:"vue"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             icon="el-icon-sort"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @click="getOption">服务端加载</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /> <br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :table-loading="loading" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random())")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loading = ref(true)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function getOption () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟2s后服务端动态加载')")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    option.value = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          dicUrl: 'https://cli.avuejs.com/api/area/getProvince',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        province: '110000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        province: '120000'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading.value = false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    reload.value = Math.random()")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[o(e.DemoBase_vue)]),_:1})]),_:1}),s[19]||(s[19]=n("h2",{id:"配置项切换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置项切换"},[n("span",null,"配置项切换")])],-1)),o(u,{id:"38",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:d})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:p,isActive:d})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:p,isActive:d})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:d})=>[o(c,{type:"vue"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-left="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleSwitch"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-sort">切 换</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const type = ref(true)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    username: 'smallwei',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    password: 'smallwei'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    username: 'avue',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    password: 'avue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option1 = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option2 = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'username',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '密码',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'password',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'password',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleSwitch () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  type.value = !type.value")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value = type.value ? option1 : option2")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.refreshTable()")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  handleSwitch()")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[o(e.DemoChange_vue)]),_:1})]),_:1}),s[20]||(s[20]=n("h2",{id:"动态改变结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动态改变结构"},[n("span",null,"动态改变结构")])],-1)),o(u,{id:"51",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:p,isActive:d})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:p,isActive:d})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:p,isActive:d})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:p,isActive:d})=>[o(c,{type:"vue"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud v-model:defaults="defaults"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #menu-left>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleChange">点击改变</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const defaults = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text2: { display: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text3: { label: '内容3' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { text1: 0 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '内容2', prop: 'text2', display: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '内容3', prop: 'text3' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const flag = ref(true)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleChange () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  flag.value = !flag.value")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (flag.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2.display = true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3.label = '内容3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2.display = false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3.label = '有没有发现我变了'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[o(e.DemoOption_vue)]),_:1})]),_:1})])}const V=g(R,[["render",$],["__file","crud-ajax.html.vue"]]),q=JSON.parse('{"path":"/doc/crud-ajax","title":"表格高级用法","lang":"zh-CN","frontmatter":{"title":"表格高级用法","createTime":"2025/02/06 09:43:17","permalink":"/doc/crud-ajax"},"headers":[],"readingTime":{"minutes":0.35,"words":106},"git":{"updatedTime":1738898538000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-ajax.md","bulletin":false}');export{V as comp,q as data};

import{_ as g,b as o,i as P,r as b,o as f,c as y,f as l,t as _,a as c,F as S,E as x,h as k,g as a,e as n}from"./app-Cibr2ptE.js";const C={__name:"slot",setup(m,{expose:s}){s();const u=o({currentPage:1,total:0,layout:"total,pager,prev,next",background:!1,pageSize:10}),e=o([]),v=o({align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]});function r(){u.value.total=40,u.value.currentPage===1?e.value=[{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]:u.value.currentPage===2&&(e.value=[{id:3,name:"王五",sex:"女"},{id:4,name:"赵六",sex:"女"}])}function t(p){u.value.currentPage=1,u.value.pageSize=p,r(),x.success(`行数 ${p}`)}function d(p){u.value.currentPage=p,r(),x.success(`页码 ${p}`)}P(()=>{r()});const i={page:u,data:e,option:v,getList:r,sizeChange:t,currentChange:d,ref:o,onMounted:P,get ElMessage(){return x}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function z(m,s,u,e,v,r){const t=b("tvue-crud");return f(),y(S,null,[l(_(e.page)+" ",1),c(t,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=d=>e.page=d),onSizeChange:e.sizeChange,onCurrentChange:e.currentChange},null,8,["data","option","page"])],64)}const A=g(C,[["render",z],["__file","slot.vue"]]),M={__name:"crud",setup(m,{expose:s}){s();const u=o({pageSize:20,pagerCount:5}),e=o([]),v=o({align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]});function r(){u.value.total=40,u.value.currentPage===1?e.value=[{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]:u.value.currentPage==2&&(e.value=[{id:3,name:"王五",sex:"女"},{id:4,name:"赵六",sex:"女"}])}const t={page:u,data:e,option:v,onLoad:r,ref:o,get ElMessage(){return x}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function D(m,s,u,e,v,r){const t=b("tvue-crud");return f(),k(t,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=d=>e.page=d),onOnLoad:e.onLoad},null,8,["data","option","page"])}const L=g(M,[["render",D],["__file","crud.vue"]]),j={__name:"layout",setup(m,{expose:s}){s();const u=o({total:1e3,layout:"total, sizes, prev, pager, next, jumper"}),e=o([]),d={page:u,data:e,option:{header:!1,column:[{label:"姓名",prop:"name"}]},setSimpleMode:()=>{u.value.layout="sizes,pager"},setComplexMode:()=>{u.value.layout="total, sizes, prev, pager, next, jumper"},ref:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function B(m,s,u,e,v,r){const t=b("el-button"),d=b("tvue-crud");return f(),y(S,null,[c(t,{onClick:e.setSimpleMode},{default:a(()=>s[1]||(s[1]=[l("简单模式")])),_:1}),c(t,{onClick:e.setComplexMode},{default:a(()=>s[2]||(s[2]=[l("复杂模式")])),_:1}),s[3]||(s[3]=n("br",null,null,-1)),s[4]||(s[4]=n("br",null,null,-1)),c(d,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=i=>e.page=i)},null,8,["data","page"])],64)}const E=g(j,[["render",B],["__file","layout.vue"]]),O={__name:"background",setup(m,{expose:s}){s();const u=o({background:!1,total:1e3}),e=o({header:!1,column:[{label:"姓名",prop:"name"}]}),v=o([]),r={page:u,option:e,data:v,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function N(m,s,u,e,v,r){const t=b("tvue-crud");return f(),k(t,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=d=>e.page=d)},null,8,["data","option","page"])}const T=g(O,[["render",N],["__file","background.vue"]]),U={__name:"pagerCount",setup(m,{expose:s}){s();const u=o({pagerCount:11,total:1e3}),e=o([]),v=o({header:!1,column:[{label:"姓名",prop:"name"}]}),r={page:u,data:e,option:v,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function V(m,s,u,e,v,r){const t=b("tvue-crud");return f(),k(t,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[0]||(s[0]=d=>e.page=d)},null,8,["data","option","page"])}const h=g(U,[["render",V],["__file","pagerCount.vue"]]),q={__name:"base",setup(m,{expose:s}){s();const u=o([]),e=o({total:1e3,currentPage:1,pageSize:10}),v=o({header:!1,column:[{label:"姓名",prop:"name"}]}),r={data:u,page:e,option:v,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function w(m,s,u,e,v,r){const t=b("el-button"),d=b("tvue-crud");return f(),y(S,null,[n("p",null,[l(" 页码:"+_(e.page.currentPage)+" ",1),c(t,{type:"primary",onClick:s[0]||(s[0]=i=>e.page.currentPage=e.page.currentPage+1)},{default:a(()=>s[4]||(s[4]=[l("页码+1")])),_:1})]),n("p",null,[l(" 条数:"+_(e.page.pageSize)+" ",1),c(t,{type:"primary",onClick:s[1]||(s[1]=i=>e.page.pageSize=e.page.pageSize+10)},{default:a(()=>s[5]||(s[5]=[l("条数+10")])),_:1})]),n("p",null,[l(" 总数:"+_(e.page.total)+" ",1),c(t,{type:"primary",onClick:s[2]||(s[2]=i=>e.page.total=e.page.total+10)},{default:a(()=>s[6]||(s[6]=[l("总页数+10")])),_:1})]),c(d,{data:e.data,option:e.option,page:e.page,"onUpdate:page":s[3]||(s[3]=i=>e.page=i)},null,8,["data","option","page"])],64)}const F=g(q,[["render",w],["__file","base.vue"]]),J={__name:"index.html",setup(m,{expose:s}){s();const u={DemoSlot_vue:A,DemoCrud_vue:L,DemoLayout_vue:E,DemoBackground_vue:T,DemoPagerCount_vue:h,DemoBase_vue:F};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function $(m,s,u,e,v,r){const t=b("VPDemoBasic"),d=b("Tabs");return f(),y("div",null,[s[24]||(s[24]=n("h2",{id:"页码和条数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#页码和条数"},[n("span",null,"页码和条数")])],-1)),c(d,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"`currentPage`当前页码，`total`总条数，`pageSize`每页多少条数据"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <p>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    页码:{{page.currentPage}}")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'               @click="page.currentPage=page.currentPage+1">页码+1</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </p>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <p>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    条数:{{page.pageSize}}")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'               @click="page.pageSize=page.pageSize+10">条数+10</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </p>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <p>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    总数:{{page.total}}")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'               @click="page.total=page.total+10">总页数+10</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </p>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 1000,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  currentPage: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pageSize: 10")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  header: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),s[25]||(s[25]=n("h2",{id:"设置最大页码按钮数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#设置最大页码按钮数"},[n("span",null,"设置最大页码按钮数")])],-1)),c(d,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"`pagerCount`属性默认为7"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pagerCount: 11,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 1000")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  header: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoPagerCount_vue)]),_:1})]),_:1}),s[26]||(s[26]=n("h2",{id:"无背景色的分页",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#无背景色的分页"},[n("span",null,"无背景色的分页")])],-1)),c(d,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"无背景色的分页"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  background: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 1000")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  header: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([])")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBackground_vue)]),_:1})]),_:1}),s[27]||(s[27]=n("h2",{id:"附加功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#附加功能"},[n("span",null,"附加功能")])],-1)),c(d,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"`layout`属性中的每一项都是附加功能，可以自行操作"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="setSimpleMode">简单模式</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="setComplexMode">复杂模式</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 1000,")]),l(`
`),n("span",{class:"line"},[n("span",null,'  layout: "total, sizes, prev, pager, next, jumper",')]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  header: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const setSimpleMode = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.layout = 'sizes,pager'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const setComplexMode = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.layout = 'total, sizes, prev, pager, next, jumper'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoLayout_vue)]),_:1})]),_:1}),s[28]||(s[28]=n("h2",{id:"综合用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#综合用法"},[n("span",null,"综合用法")])],-1)),c(d,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"首次加载调用`on-load`方法加载数据，返回`page`分页对象信息,赋值`page`的`total`总条数即可,如果`total`为0的话，或者`simplePage`为true只有1页的时候，分页选择器会隐藏"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @on-load="onLoad"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pageSize: 20,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pagerCount: 5")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([])")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"function onLoad () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // ElMessage.success('分页信息:' + JSON.stringify(page))")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.total = 40")]),l(`
`),n("span",{class:"line"},[n("span",null,"  //模拟分页")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (page.value.currentPage === 1) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else if (page.value.currentPage == 2) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '王五',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 4,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '赵六',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoCrud_vue)]),_:1})]),_:1}),s[29]||(s[29]=n("h2",{id:"自定义分页",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义分页"},[n("span",null,"自定义分页")])],-1)),c(d,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:p})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:p})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(t,{type:"vue",desc:"实际的用法要后台配置，将后台返回值赋值给 page 中的属性， `page`就是分页对象注入，page 对象中的`total`为总页数，`pageSizes`为分页信息，`currentPage`为当前第几页，`pageSize`每一页加载多少条数据，点击页码会调用`current-change`方法回调当前页数，返回当前第几页，点击每页多少条会调`size-change`方法回调"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {{ page }}")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model:page="page"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @size-change="sizeChange"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @current-change="currentChange" />')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  currentPage: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  total: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,'  layout: "total,pager,prev,next",')]),l(`
`),n("span",{class:"line"},[n("span",null,"  background: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  pageSize: 10")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function getList () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.total = 40;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (page.value.currentPage === 1) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { id: 1, name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { id: 2, name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ];")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else if (page.value.currentPage === 2) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { id: 3, name: '王五', sex: '女' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      { id: 4, name: '赵六', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ];")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function sizeChange (val) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.currentPage = 1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.pageSize = val;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  getList();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(`行数 ${val}`);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function currentChange (val) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  page.value.currentPage = val;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  getList();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(`页码 ${val}`);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  getList();")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1})])}const G=g(J,[["render",$],["__file","index.html.vue"]]),H=JSON.parse('{"path":"/doc/crud-page/","title":"分页","lang":"zh-CN","frontmatter":{"title":"分页","createTime":"2024/12/10 11:23:08","permalink":"/doc/crud-page/"},"headers":[],"readingTime":{"minutes":1.17,"words":350},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-page.md","bulletin":false}');export{G as comp,H as data};

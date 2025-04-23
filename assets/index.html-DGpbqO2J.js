import{_ as f,b as d,r as b,o as _,h as g,g as i,a as r,f as s,w as B,c as y,e as n,F as h,d as k}from"./app-Cibr2ptE.js";const w={__name:"slot",setup(v,{expose:l}){l();const t=d({editBtn:!1,delBtn:!1,column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),e=d([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:20}]),o=d(null),u={option:t,data:e,crud:o,handleEdit:(c,a)=>{o.value&&o.value.rowEdit(c,a)},ref:d};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function A(v,l,t,e,o,m){const u=b("el-button"),c=b("tvue-crud");return _(),g(c,{option:e.option,ref:"crud",data:e.data},{menu:i(({size:a,row:p,index:x})=>[r(u,{text:"",type:"primary",icon:"el-icon-edit",size:a,disabled:x===0,onClick:T=>e.handleEdit(p,x)},{default:i(()=>l[0]||(l[0]=[s("编辑")])),_:2},1032,["size","disabled","onClick"]),r(u,{text:"",type:"primary",icon:"el-icon-delete",size:a},{default:i(()=>l[1]||(l[1]=[s("删除")])),_:2},1032,["size"])]),_:1},8,["option","data"])}const E=f(w,[["render",A],["__file","slot.vue"]]),P={__name:"fun",setup(v,{expose:l}){l();const t=d({column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),e=d([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:20}]),m={option:t,data:e,getPermission:(u,c,a)=>u==="editBtn"&&a===0?!1:!(u==="delBtn"&&a===1),ref:d};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function S(v,l,t,e,o,m){const u=b("tvue-crud");return _(),g(u,{option:e.option,permission:e.getPermission,data:e.data},null,8,["option","data"])}const V=f(P,[["render",S],["__file","fun.vue"]]),z={__name:"base",setup(v,{expose:l}){l();const t=d(!1),e=d({}),o=d({column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),m=d([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:20}]);B(t,c=>{c===!0?e.value={delBtn:!1,addBtn:!1,menu:!1}:e.value={delBtn:!0,addBtn:!0,menu:!0}});const u={text:t,permission:e,option:o,data:m,ref:d,watch:B};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function $(v,l,t,e,o,m){const u=b("el-switch"),c=b("tvue-crud");return _(),y(h,null,[l[1]||(l[1]=s(" 权限开关 ")),r(u,{"active-value":!1,"inactive-value":!0,modelValue:e.text,"onUpdate:modelValue":l[0]||(l[0]=a=>e.text=a),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),l[2]||(l[2]=n("br",null,null,-1)),l[3]||(l[3]=n("br",null,null,-1)),r(c,{option:e.option,permission:e.permission,data:e.data},null,8,["option","permission","data"])],64)}const D=f(z,[["render",$],["__file","base.vue"]]),C={__name:"index.html",setup(v,{expose:l}){l();const t={DemoSlot_vue:E,DemoFun_vue:V,DemoBase_vue:D};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function N(v,l,t,e,o,m){const u=b("VPDemoBasic"),c=b("Tabs");return _(),y("div",null,[l[12]||(l[12]=n("h2",{id:"普通用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通用法"},[n("span",null,"普通用法")])],-1)),r(c,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:p})=>l[0]||(l[0]=[s("vue2")])),title1:i(({value:a,isActive:p})=>l[1]||(l[1]=[s("vue3")])),tab0:i(({value:a,isActive:p})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:p})=>[r(u,{type:"vue"},{code:i(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  权限开关")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-switch :active-value="false"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :inactive-value="true"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="text"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             active-color="#13ce66"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             inactive-color="#ff4949" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :permission="permission"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const text = ref(false);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const permission = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: 12 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: 20 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"watch(text, (newVal) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (newVal === true) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    permission.value = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      addBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      menu: false")]),s(`
`),n("span",{class:"line"},[n("span",null,"    };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    permission.value = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      delBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      addBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      menu: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[r(e.DemoBase_vue)]),_:1})]),_:1}),l[13]||(l[13]=n("h2",{id:"函数用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数用法"},[n("span",null,"函数用法")])],-1)),r(c,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:p})=>l[4]||(l[4]=[s("vue2")])),title1:i(({value:a,isActive:p})=>l[5]||(l[5]=[s("vue3")])),tab0:i(({value:a,isActive:p})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:p})=>[r(u,{type:"vue"},{code:i(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :permission="getPermission"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: 12 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: 20 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const getPermission = (key, row, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (key === 'editBtn' && index === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else if (key === 'delBtn' && index === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[r(e.DemoFun_vue)]),_:1})]),_:1}),l[14]||(l[14]=k('<h2 id="自定义用法" tabindex="-1"><a class="header-anchor" href="#自定义用法"><span>自定义用法</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><a href="/crud/crud-btn-slot.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E7%AA%97%E5%86%85%E6%8C%89%E9%92%AE" target="_blank" rel="noopener noreferrer">自定义按钮</a></li><li><a href="/crud/crud-fun.html" target="_blank" rel="noopener noreferrer">按钮方法</a></li></ul></div>',2)),r(c,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:p})=>l[8]||(l[8]=[s("vue2")])),title1:i(({value:a,isActive:p})=>l[9]||(l[9]=[s("vue3")])),tab0:i(({value:a,isActive:p})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:p})=>[r(u,{type:"vue"},{code:i(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ size, row, index }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-button text")]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-edit"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :disabled="index === 0"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleEdit(row, index)">编辑</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-button text")]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-delete"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size">删除</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: 12 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: 20 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleEdit = (row, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowEdit(row, index);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[r(e.DemoSlot_vue)]),_:1})]),_:1})])}const j=f(C,[["render",N],["__file","index.html.vue"]]),F=JSON.parse('{"path":"/doc/crud-permission/","title":"权限控制","lang":"zh-CN","frontmatter":{"title":"权限控制","createTime":"2025/02/06 09:33:51","permalink":"/doc/crud-permission/"},"headers":[],"readingTime":{"minutes":0.27,"words":82},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-permission.md","bulletin":false}');export{j as comp,F as data};

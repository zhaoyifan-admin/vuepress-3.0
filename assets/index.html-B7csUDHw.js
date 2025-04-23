import{_ as y,b as v,r as m,o as f,h as x,g as e,a as r,f as l,n as g,E as k,c as D,e as n}from"./app-Cibr2ptE.js";const B={__name:"dialog",setup(b,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a={saveBtn:!1,updateBtn:!1,cancelBtn:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},u=v(null);function o(){u.value&&u.value.rowSave()}function p(){u.value&&u.value.rowUpdate()}function t(){u.value&&u.value.closeDialog()}const i={data:d,option:a,crud:u,rowSave:o,rowUpdate:p,closeDialog:t,ref:v};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function A(b,s,d,a,u,o){const p=m("el-tag"),t=m("el-button"),i=m("tvue-crud");return f(),x(i,{data:a.data,option:a.option,ref:"crud"},{"menu-form-before":e(({row:c,index:_,type:w})=>[r(p,{type:"primary",size:b.size},{default:e(()=>s[0]||(s[0]=[l("提示")])),_:1},8,["size"])]),"menu-form":e(({row:c,index:_,type:w})=>[w==="add"?(f(),x(t,{key:0,type:"primary",icon:"el-icon-check",onClick:a.rowSave},{default:e(()=>s[1]||(s[1]=[l("自定义新增")])),_:1})):g("",!0),w==="edit"?(f(),x(t,{key:1,type:"primary",icon:"el-icon-check",onClick:a.rowUpdate},{default:e(()=>s[2]||(s[2]=[l("自定义修改")])),_:1})):g("",!0),r(t,{type:"primary",icon:"el-icon-check",onClick:a.closeDialog},{default:e(()=>s[3]||(s[3]=[l("取消")])),_:1})]),_:1},8,["data"])}const z=y(B,[["render",A],["__file","dialog.vue"]]),S={__name:"view",setup(b,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a={delBtn:!1,editBtn:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},u=v(null);function o(t,i){u.value&&u.value.rowView(t,i)}const p={data:d,option:a,crud:u,rowView:o,ref:v};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function C(b,s,d,a,u,o){const p=m("el-button"),t=m("tvue-crud");return f(),x(t,{data:a.data,option:a.option,ref:"crud"},{menu:e(({row:i,index:c,size:_})=>[r(p,{type:"success",icon:"el-icon-delete",size:_,onClick:w=>a.rowView(i,c)},{default:e(()=>s[0]||(s[0]=[l("查看")])),_:2},1032,["size","onClick"])]),_:1},8,["data"])}const V=y(S,[["render",C],["__file","view.vue"]]),E={__name:"menu",setup(b,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a={delBtn:!1,editBtn:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},u=v(null);function o(i,c){u.value&&u.value.rowEdit(i,c)}function p(i,c){u.value&&u.value.rowDel(i,c)}const t={data:d,option:a,crud:u,rowEdit:o,rowDel:p,ref:v};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function $(b,s,d,a,u,o){const p=m("el-button"),t=m("tvue-crud");return f(),x(t,{data:a.data,option:a.option,ref:"crud"},{menu:e(({row:i,index:c,size:_})=>[r(p,{type:"danger",size:_,icon:"el-icon-edit",onClick:w=>a.rowEdit(i,c)},{default:e(()=>s[0]||(s[0]=[l("编辑")])),_:2},1032,["size","onClick"]),r(p,{type:"success",size:_,icon:"el-icon-delete",onClick:w=>a.rowDel(i,c)},{default:e(()=>s[1]||(s[1]=[l("删除")])),_:2},1032,["size","onClick"])]),_:1},8,["data"])}const P=y(E,[["render",$],["__file","menu.vue"]]),U={__name:"add",setup(b,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a={addBtn:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},u=v(null);function o(){u.value?u.value.rowAdd():k.error("CRUD组件未加载")}const p={data:d,option:a,crud:u,addRow:o,ref:v,get ElMessage(){return k}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function R(b,s,d,a,u,o){const p=m("el-button"),t=m("tvue-crud");return f(),x(t,{data:a.data,option:a.option,ref:"crud"},{"menu-left":e(()=>[r(p,{type:"danger",icon:"el-icon-plus",onClick:a.addRow},{default:e(()=>s[0]||(s[0]=[l("新增")])),_:1})]),_:1},8,["data"])}const M=y(U,[["render",R],["__file","add.vue"]]),N={__name:"index.html",setup(b,{expose:s}){s();const d={DemoDialog_vue:z,DemoView_vue:V,DemoMenu_vue:P,DemoAdd_vue:M};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function O(b,s,d,a,u,o){const p=m("VPDemoBasic"),t=m("Tabs");return f(),D("div",null,[s[16]||(s[16]=n("h2",{id:"自定义新增按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义新增按钮"},[n("span",null,"自定义新增按钮")])],-1)),r(t,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:c})=>s[0]||(s[0]=[l("vue2")])),title1:e(({value:i,isActive:c})=>s[1]||(s[1]=[l("vue3")])),tab0:e(({value:i,isActive:c})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:c})=>[r(p,{type:"vue",desc:"这里利用了`menu-left`卡槽,同时设置`addBtn`为`false`，调用内置的新增打开弹窗方法`rowAdd`"},{code:e(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud">')]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #menu-left>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="danger"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-plus"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="addRow">新增</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function addRow () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowAdd();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.error('CRUD组件未加载');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[r(a.DemoAdd_vue)]),_:1})]),_:1}),s[17]||(s[17]=n("h2",{id:"自定义编辑和删除按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义编辑和删除按钮"},[n("span",null,"自定义编辑和删除按钮")])],-1)),r(t,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:c})=>s[4]||(s[4]=[l("vue2")])),title1:e(({value:i,isActive:c})=>s[5]||(s[5]=[l("vue3")])),tab0:e(({value:i,isActive:c})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:c})=>[r(p,{type:"vue",desc:"这里利用了`menu`卡槽,同时设置`editBtn`和`delBtn`为`false`，调用内置的编辑和删除方法`rowEdit`和`rowDel`,这里需要传入卡槽返回的2个值`{row,index}`当前行的数据和当前行的序号"},{code:e(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ row, index, size }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="danger"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-edit"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowEdit(row, index)">编辑</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-delete"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowDel(row, index)">删除</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowEdit (row, index) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowEdit(row, index);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowDel (row, index) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowDel(row, index);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[r(a.DemoMenu_vue)]),_:1})]),_:1}),s[18]||(s[18]=n("h2",{id:"自定义查看按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义查看按钮"},[n("span",null,"自定义查看按钮")])],-1)),r(t,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:c})=>s[8]||(s[8]=[l("vue2")])),title1:e(({value:i,isActive:c})=>s[9]||(s[9]=[l("vue3")])),tab0:e(({value:i,isActive:c})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:c})=>[r(p,{type:"vue",desc:"这里利用了`menu`卡槽,调用内置查看方法`rowView`,这里需要传入卡槽返回的2个值`{row,index}`当前行的数据和当前行的序号"},{code:e(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ row, index, size }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-delete"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowView(row, index)">查看</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowView (row, index) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowView(row, index);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[r(a.DemoView_vue)]),_:1})]),_:1}),s[19]||(s[19]=n("h2",{id:"自定义弹窗内按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义弹窗内按钮"},[n("span",null,"自定义弹窗内按钮")])],-1)),r(t,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:c})=>s[12]||(s[12]=[l("vue2")])),title1:e(({value:i,isActive:c})=>s[13]||(s[13]=[l("vue3")])),tab0:e(({value:i,isActive:c})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:c})=>[r(p,{type:"vue",desc:"新增和更新按钮要根据返回的`type`值判断，在`menu-form`卡槽中自定义按钮，调用内置方法即可"},{code:e(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form-before="{ row, index, type }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-tag type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'              :size="size">提示</el-tag>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form="{ row, index, type }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),l(`
`),n("span",{class:"line"},[n("span",null,`                 v-if="type === 'add'"`)]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowSave">自定义新增</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),l(`
`),n("span",{class:"line"},[n("span",null,`                 v-if="type === 'edit'"`)]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowUpdate">自定义修改</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="closeDialog">取消</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  saveBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  updateBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cancelBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowSave () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowSave();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowUpdate () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowUpdate();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function closeDialog () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.closeDialog();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[r(a.DemoDialog_vue)]),_:1})]),_:1})])}const j=y(N,[["render",O],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/doc/crud-btn-slot/","title":"按钮自定义","lang":"zh-CN","frontmatter":{"title":"按钮自定义","createTime":"2025/2/5 16:56:05","permalink":"/doc/crud-btn-slot/"},"headers":[],"readingTime":{"minutes":0.89,"words":268},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-btn-slot.md","bulletin":false}');export{j as comp,h as data};

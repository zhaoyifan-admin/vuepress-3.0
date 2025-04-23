import{_ as g,b as o,r as f,o as _,h,E as p,s as B,c as S,d as T,a as d,g as i,e as n,f as s}from"./app-Cibr2ptE.js";const M={__name:"crud",setup(m,{expose:e}){e();const t=o([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),l=o({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),u={data:t,option:l,refreshChange:()=>{p.success("刷新回调")},rowSave:(a,w,x)=>{a.id=new Date().getTime(),p.success("模拟网络请求"),setTimeout(()=>{p.success("关闭按钮等待"),x()},1e3),setTimeout(()=>{p.success("新增数据: "+JSON.stringify(a)),w(a)},2e3)},rowDel:(a,w,x)=>{B.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{x(a),p.success("删除成功!")}).catch(()=>{})},rowUpdate:(a,w,x,E)=>{p.success("模拟网络请求"),setTimeout(()=>{p.success("关闭按钮等待"),E()},1e3),setTimeout(()=>{p.success("编辑数据: "+JSON.stringify(a)+" 数据序号: "+w),x(a)},2e3)},ref:o,get ElMessage(){return p},get ElMessageBox(){return B}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function y(m,e,t,l,b,r){const c=f("tvue-crud");return _(),h(c,{data:l.data,option:l.option,onRefreshChange:l.refreshChange,onRowSave:l.rowSave,onRowUpdate:l.rowUpdate,onRowDel:l.rowDel},null,8,["data","option"])}const D=g(M,[["render",y],["__file","crud.vue"]]),A={__name:"refresh",setup(m,{expose:e}){e();const t=o([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),l=o({addBtn:!1,menu:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),r={data:t,option:l,refreshChange:()=>{p.success("刷新回调")},ref:o,get ElMessage(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function k(m,e,t,l,b,r){const c=f("tvue-crud");return _(),h(c,{data:l.data,option:l.option,onRefreshChange:l.refreshChange},null,8,["data","option"])}const C=g(A,[["render",k],["__file","refresh.vue"]]),O={__name:"del",setup(m,{expose:e}){e();const t=o([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),l=o({editBtn:!1,addBtn:!1,delBtnText:"删除数据",delBtnIcon:"el-icon-user",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),r={data:t,option:l,rowDel:(c,v)=>{B.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{p.success("删除成功!")}).catch(()=>{})},ref:o,get ElMessage(){return p},get ElMessageBox(){return B}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function U(m,e,t,l,b,r){const c=f("tvue-crud");return _(),h(c,{data:l.data,option:l.option,onRowDel:l.rowDel},null,8,["data","option"])}const $=g(O,[["render",U],["__file","del.vue"]]),N={__name:"update",setup(m,{expose:e}){e();const t=o([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),l=o({addBtn:!1,delBtn:!1,editBtnText:"修改数据",editBtnIcon:"el-icon-user",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),r={data:t,option:l,rowUpdate:(c,v,u,a)=>{p.success("模拟网络请求"),setTimeout(()=>{p.success("关闭按钮等待"),a()},1e3),setTimeout(()=>{p.success(`编辑数据 ${JSON.stringify(c)} 数据序号 ${v}`),u(c)},2e3)},ref:o,get ElMessage(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function R(m,e,t,l,b,r){const c=f("tvue-crud");return _(),h(c,{data:l.data,option:l.option,onRowUpdate:l.rowUpdate},null,8,["data","option"])}const J=g(N,[["render",R],["__file","update.vue"]]),P={__name:"add",setup(m,{expose:e}){e();const t=o([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),l=o({editBtn:!1,delBtn:!1,addBtnText:"新增数据",addBtnIcon:"el-icon-user",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),r={data:t,option:l,rowSave:(c,v,u)=>{p.success("模拟网络请求"),c.id=new Date().getTime(),setTimeout(()=>{p.success("关闭按钮等待"),u()},1e3),setTimeout(()=>{p.success("新增数据: "+JSON.stringify(c)),v(c)},2e3)},ref:o,get ElMessage(){return p}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function j(m,e,t,l,b,r){const c=f("tvue-crud");return _(),h(c,{data:l.data,option:l.option,onRowSave:l.rowSave},null,8,["data","option"])}const I=g(P,[["render",j],["__file","add.vue"]]),V={__name:"index.html",setup(m,{expose:e}){e();const t={DemoCrud_vue:D,DemoRefresh_vue:C,DemoDel_vue:$,DemoUpdate_vue:J,DemoAdd_vue:I};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function q(m,e,t,l,b,r){const c=f("VPDemoBasic"),v=f("Tabs");return _(),S("div",null,[e[20]||(e[20]=T('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以参考<a href="/crud/crud-btn-slot.html" target="_blank" rel="noopener noreferrer">自定义按钮</a>更加灵活</p></div><h2 id="新增数据" tabindex="-1"><a class="header-anchor" href="#新增数据"><span>新增数据</span></a></h2>',2)),d(v,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:u,isActive:a})=>e[0]||(e[0]=[s("vue2")])),title1:i(({value:u,isActive:a})=>e[1]||(e[1]=[s("vue3")])),tab0:i(({value:u,isActive:a})=>e[2]||(e[2]=[n("p",null,null,-1)])),tab1:i(({value:u,isActive:a})=>[d(c,{type:"vue",desc:"新增数据保存回调`rowSave`方法,执行`done`关闭当前表单,`loading`用于添加失败后不关闭弹窗，重新提交"},{code:i(()=>e[3]||(e[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtnText: '新增数据',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtnIcon: 'el-icon-user',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (form, done, loading) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  form.id = new Date().getTime()")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('新增数据: ' + JSON.stringify(form));")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done(form);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(l.DemoAdd_vue)]),_:1})]),_:1}),e[21]||(e[21]=n("h2",{id:"修改数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#修改数据"},[n("span",null,"修改数据")])],-1)),d(v,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:u,isActive:a})=>e[4]||(e[4]=[s("vue2")])),title1:i(({value:u,isActive:a})=>e[5]||(e[5]=[s("vue3")])),tab0:i(({value:u,isActive:a})=>e[6]||(e[6]=[n("p",null,null,-1)])),tab1:i(({value:u,isActive:a})=>[d(c,{type:"vue",desc:"修改数据保存回调`rowUpdate`方法,执行`done`关闭当前表单,`loading`用于添加失败后不关闭弹窗，重新提交"},{code:i(()=>e[7]||(e[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="rowUpdate"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtnText: '修改数据',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtnIcon: 'el-icon-user',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 编辑数据处理")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowUpdate = (form, index, done, loading) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success(`编辑数据 ${JSON.stringify(form)} 数据序号 ${index}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done(form);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(l.DemoUpdate_vue)]),_:1})]),_:1}),e[22]||(e[22]=n("h2",{id:"删除数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#删除数据"},[n("span",null,"删除数据")])],-1)),d(v,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:u,isActive:a})=>e[8]||(e[8]=[s("vue2")])),title1:i(({value:u,isActive:a})=>e[9]||(e[9]=[s("vue3")])),tab0:i(({value:u,isActive:a})=>e[10]||(e[10]=[n("p",null,null,-1)])),tab1:i(({value:u,isActive:a})=>[d(c,{type:"vue",desc:"修改数据保存回调`rowDel`方法"},{code:i(()=>e[11]||(e[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-del="rowDel"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage, ElMessageBox } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtnText: '删除数据',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtnIcon: 'el-icon-user',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 删除处理")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowDel = (form, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    confirmButtonText: '确定',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    cancelButtonText: '取消',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'warning'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }).then(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('删除成功!');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }).catch(() => { });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(l.DemoDel_vue)]),_:1})]),_:1}),e[23]||(e[23]=T('<h2 id="刷新数据" tabindex="-1"><a class="header-anchor" href="#刷新数据"><span>刷新数据</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里刷新按钮回调可以配合<a href="/crud/crud-page.html" target="_blank" rel="noopener noreferrer">分页参数和方法</a>去请求数据</p></div>',2)),d(v,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:u,isActive:a})=>e[12]||(e[12]=[s("vue2")])),title1:i(({value:u,isActive:a})=>e[13]||(e[13]=[s("vue3")])),tab0:i(({value:u,isActive:a})=>e[14]||(e[14]=[n("p",null,null,-1)])),tab1:i(({value:u,isActive:a})=>[d(c,{type:"vue",desc:"点击刷新按钮回调`refresh-change`方法"},{code:i(()=>e[15]||(e[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @refresh-change="refreshChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 刷新回调处理")]),s(`
`),n("span",{class:"line"},[n("span",null,"const refreshChange = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('刷新回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(l.DemoRefresh_vue)]),_:1})]),_:1}),e[24]||(e[24]=n("h2",{id:"综合用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#综合用法"},[n("span",null,"综合用法")])],-1)),d(v,{id:"65",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:u,isActive:a})=>e[16]||(e[16]=[s("vue2")])),title1:i(({value:u,isActive:a})=>e[17]||(e[17]=[s("vue3")])),tab0:i(({value:u,isActive:a})=>e[18]||(e[18]=[n("p",null,null,-1)])),tab1:i(({value:u,isActive:a})=>[d(c,{type:"vue",desc:"在操作过程中吧数据放入`done`中,可以直接修改本地数据，做到及时刷新"},{code:i(()=>e[19]||(e[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @refresh-change="refreshChange"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="rowUpdate"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-del="rowDel"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage, ElMessageBox } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const refreshChange = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('刷新回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (form, done, loading) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  form.id = new Date().getTime();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('新增数据: ' + JSON.stringify(form));")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done(form);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowDel = (form, index, done) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    confirmButtonText: '确定',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    cancelButtonText: '取消',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'warning'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }).then(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done(form);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('删除成功!');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }).catch(() => { });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowUpdate = (form, index, done, loading) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('编辑数据: ' + JSON.stringify(form) + ' 数据序号: ' + index);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done(form);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[d(l.DemoCrud_vue)]),_:1})]),_:1})])}const F=g(V,[["render",q],["__file","index.html.vue"]]),G=JSON.parse('{"path":"/doc/crud-fun/","title":"增删改查方法","lang":"zh-CN","frontmatter":{"title":"增删改查方法","createTime":"2025/2/5 16:47:22","permalink":"/doc/crud-fun/"},"headers":[],"readingTime":{"minutes":0.88,"words":265},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-fun.md","bulletin":false}');export{F as comp,G as data};

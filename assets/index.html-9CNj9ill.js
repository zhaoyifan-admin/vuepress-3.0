import{_ as k,b as v,r as _,o as x,h as y,g as a,a as r,f as l,t as h,n as B,E as f,e as n,c as $,d as S}from"./app-Cibr2ptE.js";const D={__name:"dbClick",setup(g,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=v({menu:!1,dialogType:"drawer",dialogWidth:800,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),m=v(null),u={data:d,option:e,crud:m,handleRowDBLClick:(t,i)=>{m.value.rowEdit(t,t.$index)},ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function U(g,s,d,e,m,w){const u=_("tvue-crud");return x(),y(u,{ref:"crud",data:e.data,option:e.option,onRowDblclick:e.handleRowDBLClick},null,8,["data","option"])}const A=k(D,[["render",U],["__file","dbClick.vue"]]),N={__name:"click",setup(g,{expose:s}){s();const d=v([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=v({menu:!1,dialogType:"drawer",dialogWidth:800,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),m=v(null),u={data:d,option:e,crud:m,handleRowClick:(t,i,c)=>{m.value.rowEdit(t,t.$index)},ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function M(g,s,d,e,m,w){const u=_("tvue-crud");return x(),y(u,{ref:"crud",data:e.data,option:e.option,onRowClick:e.handleRowClick},null,8,["data","option"])}const O=k(N,[["render",M],["__file","click.vue"]]),R="https://cli.avuejs.com/api/area",T={__name:"cascader",setup(g,{expose:s}){s();const d=v([{id:1,province:"130000",city:"130200",area:"130202",$cellEdit:!0},{id:2,province:"110000",city:"110100",area:"110101",$cellEdit:!0}]),e=v({addRowBtn:!0,addBtn:!1,cellBtn:!0,column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cell:!0,cascader:["city"],dicUrl:`${R}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",cell:!0,cascader:["area"],props:{label:"name",value:"code"},dicUrl:`${R}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",cell:!0,props:{label:"name",value:"code"},type:"select",dicUrl:`${R}/getArea/{{key}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]}),m=v(null),u={baseUrl:R,data:d,option:e,crud:m,addRow:()=>{m.value.rowCellAdd({id:3,province:"110000",$cellEdit:!0})},ref:v};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function q(g,s,d,e,m,w){const u=_("tvue-crud");return x(),y(u,{ref:"crud",option:e.option,data:e.data},null,8,["option","data"])}const V=k(T,[["render",q],["__file","cascader.vue"]]),J={__name:"button",setup(g,{expose:s}){s();const d=v([{id:0,name:"张三",sex:1,$cellEdit:!0},{id:1,name:"李四",sex:0}]),e=v({addBtn:!1,editBtn:!1,addRowBtn:!0,cellBtn:!1,cancelBtn:!1,column:[{label:"姓名",prop:"name",cell:!0,rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",type:"select",dicData:[{label:"男",value:0},{label:"女",value:1}],cell:!0},{label:"开关",prop:"switch",type:"switch",cell:!0}]}),m=v(null),o={data:d,option:e,crud:m,rowCell:(p,b)=>{m.value.rowCell(p,b)},rowCancel:(p,b)=>{m.value.rowCancel(p,b)},rowSave:(p,b)=>{f.success("新增数据: "+JSON.stringify(p)),b()},rowUpdate:(p,b,C)=>{f.success("编辑数据: "+JSON.stringify(p)+" 数据序号: "+b),C()},handleRowClick:(p,b,C)=>{f({showClose:!0,message:"序号: "+p.id,type:"success"})},ref:v,get ElMessage(){return f}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function P(g,s,d,e,m,w){const u=_("el-button"),t=_("tvue-crud");return x(),y(t,{ref:"crud",option:e.option,data:e.data,onRowUpdate:e.rowUpdate,onRowSave:e.rowSave,onRowClick:e.handleRowClick},{menu:a(({row:i,index:c})=>[r(u,{text:"",type:"primary",icon:i.$cellEdit?"el-icon-plus":"el-icon-edit",onClick:o=>e.rowCell(i,c)},{default:a(()=>[l(h(i.$cellEdit?"自定义保存":"自定义修改"),1)]),_:2},1032,["icon","onClick"]),i.$cellEdit?(x(),y(u,{key:0,text:"",icon:"el-icon-cancel",type:"primary",onClick:o=>e.rowCancel(i,c)},{default:a(()=>s[0]||(s[0]=[l(" 取消 ")])),_:2},1032,["onClick"])):B("",!0)]),_:1},8,["option","data"])}const j=k(J,[["render",P],["__file","button.vue"]]),z={__name:"slot",setup(g,{expose:s}){s();const d=v([{id:0,sex:1,age:18,$cellEdit:!0},{id:1,name:"李四",age:18,sex:0},{id:1,name:"王五",age:18,sex:0,$cellEdit:!0}]),e=v({addBtn:!1,addRowBtn:!0,cellBtn:!0,menuWidth:250,column:[{label:"姓名",prop:"name",cell:!0,rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",type:"select",dicData:[{label:"男",value:0},{label:"女",value:1}],cell:!0},{label:"年龄",prop:"age",dicData:[{label:"男",value:0},{label:"女",value:1}],rules:[{required:!0,message:"请输入年龄",trigger:"blur"}],cell:!0},{label:"开关",prop:"switch",type:"switch",cell:!0}]}),o={data:d,option:e,addUpdate:(p,b,C,E)=>{f.success("模拟网络请求"),setTimeout(()=>{f.success("关闭按钮等待"),E()},1e3),setTimeout(()=>{f.success("编辑数据"+JSON.stringify(p)+"数据序号"+b),C()},2e3)},rowSave:(p,b)=>{f.success("新增数据"+JSON.stringify(p)),b()},addRow:()=>{f.success("正在添加，请稍后"),setTimeout(()=>{for(let p=0;p<10;p++)refs.crud.rowCellAdd({name:""})},500)},addNextRow:(p,b)=>{d.value.splice(b+1,0,{$cellEdit:!0})},addBreakRow:(p,b)=>{d.value.splice(b,0,{$cellEdit:!0})},handleRowClick:p=>{f({showClose:!0,message:"序号"+p.$index,type:"success"})},ref:v,get ElMessage(){return f}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function W(g,s,d,e,m,w){const u=_("el-tag"),t=_("el-input"),i=_("el-button"),c=_("tvue-crud");return x(),y(c,{ref:"crud",option:e.option,data:e.data,onRowUpdate:e.addUpdate,onRowSave:e.rowSave,onRowClick:e.handleRowClick},{age:a(({row:o})=>[r(u,null,{default:a(()=>[l(h(o.age),1)]),_:2},1024)]),"age-form":a(({row:o,disabled:p})=>[s[0]||(s[0]=l(" 自定义:")),r(t,{modelValue:o.age,"onUpdate:modelValue":b=>o.age=b,disabled:p},null,8,["modelValue","onUpdate:modelValue","disabled"])]),"name-form":a(({row:o})=>[r(t,{modelValue:o.name,"onUpdate:modelValue":p=>o.name=p,disabled:o.$index==2},null,8,["modelValue","onUpdate:modelValue","disabled"])]),"menu-left":a(({})=>[r(i,{onClick:e.addRow},{default:a(()=>s[1]||(s[1]=[l("添加10条")])),_:1})]),menu:a(({row:o,index:p,size:b})=>[r(i,{onClick:C=>e.addBreakRow(o,p),size:b,type:"primary",text:""},{default:a(()=>s[2]||(s[2]=[l("向上添加")])),_:2},1032,["onClick","size"]),r(i,{onClick:C=>e.addNextRow(o,p),size:b,type:"primary",text:""},{default:a(()=>s[3]||(s[3]=[l("向下添加")])),_:2},1032,["onClick","size"])]),default:a(()=>[s[4]||(s[4]=n("span",null,null,-1))]),_:1},8,["option","data"])}const L=k(z,[["render",W],["__file","slot.vue"]]),F={__name:"base",setup(g,{expose:s}){s();const d=v([{id:0,sex:1,age:18,$cellEdit:!0},{id:1,name:"李四",age:18,sex:0}]),e=v({addBtn:!1,addRowBtn:!0,cellBtn:!0,menuWidth:250,column:[{label:"姓名",prop:"name",cell:!0,rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",type:"select",dicData:[{label:"男",value:0},{label:"女",value:1}],cell:!0},{label:"年龄",prop:"age",dicData:[{label:"男",value:0},{label:"女",value:1}],rules:[{required:!0,message:"请输入年龄",trigger:"blur"}],cell:!0},{label:"开关",prop:"switch",type:"switch",cell:!0}]});function m(t,i){f.success("新增数据"+JSON.stringify(t)),i()}function w(t,i,c,o){f.success("模拟网络请求"),setTimeout(()=>{f.success("关闭按钮等待"),o()},1e3),setTimeout(()=>{f.success("编辑数据"+JSON.stringify(t)+"数据序号"+i),c()},2e3)}const u={data:d,option:e,rowSave:m,addUpdate:w,ref:v,get ElMessage(){return f}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function K(g,s,d,e,m,w){const u=_("tvue-crud");return x(),y(u,{ref:"crud",option:e.option,data:e.data,onRowUpdate:e.addUpdate,onRowSave:e.rowSave},null,8,["option","data"])}const G=k(F,[["render",K],["__file","base.vue"]]),H={__name:"index.html",setup(g,{expose:s}){s();const d={DemoDbClick_vue:A,DemoClick_vue:O,DemoCascader_vue:V,DemoButton_vue:j,DemoSlot_vue:L,DemoBase_vue:G};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function I(g,s,d,e,m,w){const u=_("VPDemoBasic"),t=_("Tabs");return x(),$("div",null,[s[24]||(s[24]=S('<p>可以批量对表格编辑和新增等操作</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果进行其它操作可以参考<a href="/form/form-event.html" target="_blank" rel="noopener noreferrer">Form组件事件</a>进行联动</p></div><h2 id="普通用法" tabindex="-1"><a class="header-anchor" href="#普通用法"><span>普通用法</span></a></h2>',3)),r(t,{id:"11",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue",desc:"配置数据中`$cellEdit`为`true`即可开启首次编辑`addRowBtn`为行新增按钮，`cellBtn`设置为true则开启行编辑按钮，在配置中将编辑的字段设置`cell`为`true`,增删改查方法和`crud`组件使用一致，`rowKey`为主键的key，如果数据中存在主键，数据才会保存在表格中"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="addUpdate"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 0, sex: 1, age: 18, $cellEdit: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '李四', age: 18, sex: 0 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addRowBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cellBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 250,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请输入姓名', trigger: 'blur' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'age',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请输入年龄', trigger: 'blur' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowSave (form, done) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('新增数据' + JSON.stringify(form));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function addUpdate (form, index, done, loading) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('编辑数据' + JSON.stringify(form) + '数据序号' + index);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoBase_vue)]),_:1})]),_:1}),s[25]||(s[25]=n("h2",{id:"内容自定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内容自定义"},[n("span",null,"内容自定义")])],-1)),r(t,{id:"24",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue",desc:"和普通的卡槽用法一致，可以参考[自定义列](/crud/crud-column.html#自定义列)和[自定义表单](/crud/crud-form.html#自定义表单)"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="addUpdate"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-click="handleRowClick">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #age="{row}">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>{{row.age}}</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #age-form="{row,disabled}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      自定义:<el-input v-model="row.age"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                :disabled="disabled"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <span></span>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-form="{row}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-input v-model="row.name"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                :disabled="row.$index==2"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-left="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="addRow">添加10条</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{row,index,size}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="addBreakRow(row,index)"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 text>向上添加</el-button>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="addNextRow(row,index)"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 text>向下添加</el-button>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  id: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  age: 18,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  $cellEdit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"}, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  age: 18,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"}, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '王五',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  age: 18,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  $cellEdit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addRowBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cellBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 250,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请输入姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'age',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        message: '请输入年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const addUpdate = (form, index, done, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('模拟网络请求');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('关闭按钮等待');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success(")]),l(`
`),n("span",{class:"line"},[n("span",null,"      '编辑数据' + JSON.stringify(form) + '数据序号' + index")]),l(`
`),n("span",{class:"line"},[n("span",null,"    );")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (form, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(")]),l(`
`),n("span",{class:"line"},[n("span",null,"    '新增数据' + JSON.stringify(form)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  );")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const addRow = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('正在添加，请稍后');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    for (let i = 0; i < 10; i++) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      refs.crud.rowCellAdd({")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      });")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 500);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const addNextRow = (row, index) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data.value.splice(index + 1, 0, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    $cellEdit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const addBreakRow = (row, index) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data.value.splice(index, 0, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    $cellEdit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowClick = (row) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage({")]),l(`
`),n("span",{class:"line"},[n("span",null,"    showClose: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    message: '序号' + row.$index,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'success',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSlot_vue)]),_:1})]),_:1}),s[26]||(s[26]=n("h2",{id:"按钮自定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮自定义"},[n("span",null,"按钮自定义")])],-1)),r(t,{id:"37",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue",desc:"卡槽中的`row.$cellEdit`来判断是他的当前状态,`cancelBtn`为取消按钮)"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="rowUpdate"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-click="handleRowClick">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ row, index }">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-button text")]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,`                 :icon="row.$cellEdit ? 'el-icon-plus' : 'el-icon-edit'"`)]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowCell(row, index)">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        {{ row.$cellEdit ? '自定义保存' : '自定义修改' }}")]),l(`
`),n("span",{class:"line"},[n("span",null,"      </el-button>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button v-if="row.$cellEdit"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 text")]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-cancel"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="rowCancel(row, index)">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        取消")]),l(`
`),n("span",{class:"line"},[n("span",null,"      </el-button>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 0, name: '张三', sex: 1, $cellEdit: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '李四', sex: 0 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addRowBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cellBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cancelBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请输入姓名', trigger: 'blur' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: 0 },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: 1 }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowCell = (row, index) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowCell(row, index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowCancel = (row, index) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowCancel(row, index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (form, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('新增数据: ' + JSON.stringify(form))")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done()")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowUpdate = (form, index, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('编辑数据: ' + JSON.stringify(form) + ' 数据序号: ' + index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done()")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowClick = (row, event, column) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage({")]),l(`
`),n("span",{class:"line"},[n("span",null,"    showClose: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    message: '序号: ' + row.id,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'success'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  })")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoButton_vue)]),_:1})]),_:1}),s[27]||(s[27]=n("h2",{id:"多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多级联动"},[n("span",null,"多级联动")])],-1)),r(t,{id:"50",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, province: '130000', city: '130200', area: '130202', $cellEdit: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, province: '110000', city: '110100', area: '110101', $cellEdit: true }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addRowBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  cellBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, message: '请选择省份', trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['area'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, message: '请选择城市', trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'area',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getArea/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, message: '请选择地区', trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const addRow = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowCellAdd({")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    $cellEdit: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  })")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoCascader_vue)]),_:1})]),_:1}),s[28]||(s[28]=n("h2",{id:"行单击编辑",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行单击编辑"},[n("span",null,"行单击编辑")])],-1)),r(t,{id:"63",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue",desc:"调用行单击事件，在调用内部`rowEdit`方法即可"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-click="handleRowClick">')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogType: 'drawer',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogWidth: 800,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowClick = (row, event, column) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowEdit(row, row.$index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoClick_vue)]),_:1})]),_:1}),s[29]||(s[29]=n("h2",{id:"行双击编辑",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行双击编辑"},[n("span",null,"行双击编辑")])],-1)),r(t,{id:"76",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:c})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:c})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:c})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:c})=>[r(u,{type:"vue",desc:"调用行双击事件，在调用内部`rowEdit`方法即可"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-dblclick="handleRowDBLClick">')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"])")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogType: 'drawer',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogWidth: 800,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowDBLClick = (row, event) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowEdit(row, row.$index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoDbClick_vue)]),_:1})]),_:1})])}const X=k(H,[["render",I],["__file","index.html.vue"]]),Y=JSON.parse('{"path":"/doc/crud-cell/","title":"行编辑","lang":"zh-CN","frontmatter":{"title":"行编辑","createTime":"2025/02/06 09:23:08","permalink":"/doc/crud-cell/"},"headers":[],"readingTime":{"minutes":1.11,"words":333},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-cell.md","bulletin":false}');export{X as comp,Y as data};

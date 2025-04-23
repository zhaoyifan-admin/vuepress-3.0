import{_,b as d,r as b,o as f,h as x,g as e,a as p,E as h,f as s,i as A,c as S,F as D,y as C,t as $,e as n,d as B}from"./app-Cibr2ptE.js";const E={__name:"icon",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"},{name:"王五",sex:"女"},{name:"赵六",sex:"男"}]),a=d({menuType:"icon",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:a,tip:u=>{h.success("自定义按钮"+JSON.stringify(u))},ref:d,get ElMessage(){return h}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function w(m,l,r,a,c,o){const u=b("el-button"),v=b("tvue-crud");return f(),x(v,{data:a.data,option:a.option},{menu:e(({row:t})=>[p(u,{onClick:i=>a.tip(t),icon:"el-icon-share"},null,8,["onClick"])]),_:1},8,["data","option"])}const N=_(E,[["render",w],["__file","icon.vue"]]),W={__name:"filterBtn",setup(m,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"}]),a=d({filterBtn:!0,align:"center",column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]}),o={data:r,option:a,filterChange:u=>{h.success("过滤器"+JSON.stringify(u))},ref:d,get ElMessage(){return h}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function M(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{option:a.option,data:a.data,onFilter:a.filterChange},null,8,["option","data"])}const O=_(W,[["render",M],["__file","filterBtn.vue"]]),P={__name:"excelBtn",setup(m,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"}]),a=d({menu:!1,excelBtn:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function j(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{option:a.option,data:a.data},null,8,["option","data"])}const T=_(P,[["render",j],["__file","excelBtn.vue"]]),F={__name:"printBtn",setup(m,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"}]),a=d({menu:!1,printBtn:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function z(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{option:a.option,data:a.data},null,8,["option","data"])}const L=_(F,[["render",z],["__file","printBtn.vue"]]),q={__name:"copyBtn",setup(m,{expose:l}){l();const r=d([{ids:1,name:"张三",sex:"男"},{ids:2,name:"李四",sex:"女"}]),a=d({rowKey:"ids",copyBtn:!0,delBtn:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function J(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{data:a.data,option:a.option},null,8,["data","option"])}const V=_(q,[["render",J],["__file","copyBtn.vue"]]),H={__name:"viewBtn",setup(m,{expose:l}){l();const r=d([{name:"张三",age:12,address:"码云的地址"},{name:"李四",age:13,address:"码云的地址"}]),a=d({viewBtn:!0,editBtn:!1,delBtn:!1,column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"age"},{label:"地址",span:24,prop:"address",type:"textarea"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function K(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{ref:"crud",option:a.option,data:a.data},null,8,["option","data"])}const I=_(H,[["render",K],["__file","viewBtn.vue"]]),R={__name:"headerSlot",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menuWidth:380,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:a,tip:(u,v)=>{h.success("自定义按钮"+JSON.stringify(u))},ref:d,get ElMessage(){return h}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function G(m,l,r,a,c,o){const u=b("el-button"),v=b("el-tag"),t=b("tvue-crud");return f(),x(t,{data:a.data,option:a.option},{menu:e(({size:i,row:g,index:k})=>[p(u,{onClick:y=>a.tip(g,k),icon:"el-icon-check",text:"",type:"primary",size:i},{default:e(()=>l[0]||(l[0]=[s(" 自定义后菜单 ")])),_:2},1032,["onClick","size"])]),"menu-before":e(({size:i,row:g,index:k})=>[p(v,{type:"primary",size:i},{default:e(()=>l[1]||(l[1]=[s("提示")])),_:2},1032,["size"])]),_:1},8,["data","option"])}const Q=_(R,[["render",G],["__file","headerSlot.vue"]]),U={__name:"slot",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menuWidth:380,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:a,tip:()=>{h.success("自定义头部按钮")},ref:d,get ElMessage(){return h}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function X(m,l,r,a,c,o){const u=b("el-tag"),v=b("tvue-crud");return f(),x(v,{data:a.data,option:a.option},{"menu-header":e(()=>[p(u,{onClick:a.tip},{default:e(()=>l[0]||(l[0]=[s("操作")])),_:1})]),_:1},8,["data","option"])}const Y=_(U,[["render",X],["__file","slot.vue"]]),Z={__name:"className",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menuClassName:"menuClassName",menuLabelClassName:"menuLabelClassName",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function nn(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{data:a.data,option:a.option},null,8,["data","option"])}const sn=_(Z,[["render",nn],["__file","className.vue"]]),ln={__name:"auto",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menuWidth:0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c=()=>{setTimeout(()=>{let u=0;document.querySelectorAll(".tvue-crud__menu").forEach(t=>{const i=t.children;let g=0;for(let k=0;k<i.length;k++){const y=i[k];g+=y.offsetWidth+18}g>=u&&(u=g)}),a.value.menuWidth=u})};A(()=>{c()});const o={data:r,option:a,setMenuWidth:c,ref:d,onMounted:A};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function en(m,l,r,a,c,o){const u=b("el-button"),v=b("tvue-crud");return f(),x(v,{data:a.data,option:a.option},{menu:e(()=>[(f(),S(D,null,C(5,(t,i)=>p(u,{key:i,text:"",type:"primary"},{default:e(()=>[s("操作"+$(i+1),1)]),_:2},1024)),64))]),_:1},8,["data","option"])}const an=_(ln,[["render",en],["__file","auto.vue"]]),tn={__name:"menuWidth",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menuTitle:"其它",menuWidth:250,menuAlign:"left",menuHeaderAlign:"left",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option1:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function un(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{data:a.data,option:a.option1},null,8,["data","option"])}const pn=_(tn,[["render",un],["__file","menuWidth.vue"]]),cn={__name:"base",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({menu:!1,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function rn(m,l,r,a,c,o){const u=b("tvue-crud");return f(),x(u,{data:a.data,option:a.option},null,8,["data","option"])}const dn=_(cn,[["render",rn],["__file","base.vue"]]),on={__name:"index.html",setup(m,{expose:l}){l();const r={DemoIcon_vue:N,DemoFilterBtn_vue:O,DemoExcelBtn_vue:T,DemoPrintBtn_vue:L,DemoCopyBtn_vue:V,DemoViewBtn_vue:I,DemoHeaderSlot_vue:Q,DemoSlot_vue:Y,DemoClassName_vue:sn,DemoAuto_vue:an,DemoMenuWidth_vue:pn,DemoBase_vue:dn};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function mn(m,l,r,a,c,o){const u=b("VPDemoBasic"),v=b("Tabs");return f(),S("div",null,[l[52]||(l[52]=n("h2",{id:"操作栏隐藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作栏隐藏"},[n("span",null,"操作栏隐藏")])],-1)),p(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`menu`属性接受一个`Boolean`的属性达到隐藏操作栏的效果，默认为`false`"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoBase_vue)]),_:1})]),_:1}),l[53]||(l[53]=n("h2",{id:"操作栏对齐方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作栏对齐方式"},[n("span",null,"操作栏对齐方式")])],-1)),p(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`menuWidth`属性设置操作栏宽度,`menuTitle`属性设置操作栏目的文字,`menuAlign`属性设置对齐方式,`menuHeaderAlign`属性设置表头对齐方式"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option1" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option1 = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuTitle: '其它',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 250,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'left',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuHeaderAlign: 'left',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoMenuWidth_vue)]),_:1})]),_:1}),l[54]||(l[54]=n("h2",{id:"操作栏自适应",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作栏自适应"},[n("span",null,"操作栏自适应")])],-1)),p(v,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[8]||(l[8]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[9]||(l[9]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"通过`js`计算元素宽度，动态给`menuWidth`去赋值，实现动态宽度"},{code:e(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,"    <template #menu>")]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button v-for="(item, index) in 5"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :key="index"')]),s(`
`),n("span",{class:"line"},[n("span",null,"                 text")]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary">操作{{ index + 1 }}</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 数据和选项")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 设置菜单宽度")]),s(`
`),n("span",{class:"line"},[n("span",null,"const setMenuWidth = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let width = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    const list = document.querySelectorAll('.tvue-crud__menu');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    list.forEach(ele => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      const childList = ele.children;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let allWidth = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      for (let i = 0; i < childList.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        const child = childList[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"        allWidth += child.offsetWidth + 18;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (allWidth >= width) width = allWidth;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    });")]),s(`
`),n("span",{class:"line"},[n("span",null,"    option.value.menuWidth = width;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 在组件挂载后执行")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setMenuWidth();")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoAuto_vue)]),_:1})]),_:1}),l[55]||(l[55]=n("h2",{id:"操作栏样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作栏样式"},[n("span",null,"操作栏样式")])],-1)),p(v,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[12]||(l[12]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[13]||(l[13]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`menuClassName`属性和`menuLabelClassName`属性配置操作栏列的单元格和表头样式名称"},{code:e(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuClassName: 'menuClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuLabelClassName: 'menuLabelClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoClassName_vue)]),_:1})]),_:1}),l[56]||(l[56]=n("h2",{id:"自定义操作栏头部",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义操作栏头部"},[n("span",null,"自定义操作栏头部")])],-1)),p(v,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[16]||(l[16]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[17]||(l[17]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`menu-header`插槽为操作栏头部自定义"},{code:e(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,"    <template #menu-header>")]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-tag @click="tip">操作</el-tag>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 380,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const tip = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('自定义头部按钮');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoSlot_vue)]),_:1})]),_:1}),l[57]||(l[57]=n("h2",{id:"自定义操作栏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义操作栏"},[n("span",null,"自定义操作栏")])],-1)),p(v,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[20]||(l[20]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[21]||(l[21]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`menu`为操作栏自定义,`menu-before`为按钮前置卡槽"},{code:e(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ size, row, index }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="tip(row, index)"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),s(`
`),n("span",{class:"line"},[n("span",null,"                 text")]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size">')]),s(`
`),n("span",{class:"line"},[n("span",null,"        自定义后菜单")]),s(`
`),n("span",{class:"line"},[n("span",null,"      </el-button>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-before="{ size, row, index }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-tag type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'              :size="size">提示</el-tag>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuWidth: 380,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const tip = (row, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('自定义按钮' + JSON.stringify(row));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoHeaderSlot_vue)]),_:1})]),_:1}),l[58]||(l[58]=B('<h2 id="查看按钮" tabindex="-1"><a class="header-anchor" href="#查看按钮"><span>查看按钮</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><a href="/crud/crud-btn-slot.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9F%A5%E7%9C%8B%E6%8C%89%E9%92%AE" target="_blank" rel="noopener noreferrer">自定义按钮</a></p></div>',2)),p(v,{id:"86",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[24]||(l[24]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[25]||(l[25]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`viewBtn`配置为`true`即可"},{code:e(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', age: 12, address: '码云的地址' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', age: 13, address: '码云的地址' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  viewBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  editBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'age' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '地址',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'address',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'textarea'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoViewBtn_vue)]),_:1})]),_:1}),l[59]||(l[59]=n("h2",{id:"复制按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#复制按钮"},[n("span",null,"复制按钮")])],-1)),p(v,{id:"99",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[28]||(l[28]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[29]||(l[29]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"设置`copyBtn`为`true`时激活行复制功能,复制的数据会去除`rowKey`配置的主键"},{code:e(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { ids: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { ids: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'ids',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  copyBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  delBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoCopyBtn_vue)]),_:1})]),_:1}),l[60]||(l[60]=n("h2",{id:"打印按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印按钮"},[n("span",null,"打印按钮")])],-1)),p(v,{id:"112",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[32]||(l[32]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[33]||(l[33]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[34]||(l[34]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`printBtn`设置为`true`即可开启打印功能"},{code:e(()=>l[35]||(l[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  printBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoPrintBtn_vue)]),_:1})]),_:1}),l[61]||(l[61]=B(`<h2 id="导出按钮" tabindex="-1"><a class="header-anchor" href="#导出按钮"><span>导出按钮</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里）--&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/FileSaver.js/2014-11-29/FileSaver.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/xlsx/0.18.2/xlsx.full.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),p(v,{id:"126",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[36]||(l[36]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[37]||(l[37]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[38]||(l[38]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`excelBtn`设置为`true`即可开启表格导出功能"},{code:e(()=>l[39]||(l[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  excelBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoExcelBtn_vue)]),_:1})]),_:1}),l[62]||(l[62]=n("h2",{id:"筛选按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#筛选按钮"},[n("span",null,"筛选按钮")])],-1)),l[63]||(l[63]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"常用自定筛选条件")],-1)),p(v,{id:"144",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[40]||(l[40]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[41]||(l[41]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[42]||(l[42]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"`filterBtn`默认为`true`，可以自定义过滤条件，根据`filter`函数回调"},{code:e(()=>l[43]||(l[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @filter="filterChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  filterBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const filterChange = (result) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('过滤器' + JSON.stringify(result));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoFilterBtn_vue)]),_:1})]),_:1}),l[64]||(l[64]=n("h2",{id:"合并菜单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#合并菜单"},[n("span",null,"合并菜单")])],-1)),p(v,{id:"157",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[44]||(l[44]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[45]||(l[45]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[46]||(l[46]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"配置`menuType`为`menu`表格的操作栏目菜单合并，`menuBtn`卡槽为自定义卡槽"},{code:e(()=>l[47]||(l[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @filter="filterChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  filterBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const filterChange = (result) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('过滤器' + JSON.stringify(result));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoFilterBtn_vue)]),_:1})]),_:1}),l[65]||(l[65]=n("h2",{id:"图标菜单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图标菜单"},[n("span",null,"图标菜单")])],-1)),p(v,{id:"170",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:t,isActive:i})=>l[48]||(l[48]=[s("vue2")])),title1:e(({value:t,isActive:i})=>l[49]||(l[49]=[s("vue3")])),tab0:e(({value:t,isActive:i})=>l[50]||(l[50]=[n("p",null,null,-1)])),tab1:e(({value:t,isActive:i})=>[p(u,{type:"vue",desc:"配置`menuType`为`icon`时表格操作栏为图标按钮"},{code:e(()=>l[51]||(l[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ row }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="tip(row)"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-share"></el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '王五', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '赵六', sex: '男' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuType: 'icon',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const tip = (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('自定义按钮' + JSON.stringify(row));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoIcon_vue)]),_:1})]),_:1})])}const bn=_(on,[["render",mn],["__file","index.html.vue"]]),fn=JSON.parse('{"path":"/doc/crud-menu/","title":"操作栏配置","lang":"zh-CN","frontmatter":{"title":"操作栏配置","createTime":"2025/2/5 16:30:12","permalink":"/doc/crud-menu/"},"headers":[],"readingTime":{"minutes":1.86,"words":558},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-menu.md","bulletin":false}');export{bn as comp,fn as data};

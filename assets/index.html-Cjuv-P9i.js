import{_ as x,b as d,r as b,o as f,h as _,q as k,g as e,a as t,f as s,t as S,E as h,i as A,c as C,e as n,d as g}from"./app-Cibr2ptE.js";const $={__name:"spanMethod",setup(o,{expose:l}){l();const r=d([{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]),a=d({border:!0,menu:!1,column:[{label:"ID",prop:"id"},{label:"姓名",prop:"name"},{label:"数值 1",prop:"amount1"},{label:"数值 2",prop:"amount2"},{label:"数值 3",prop:"amount3"}]});function c({row:p,column:v,rowIndex:i,columnIndex:u}){if(u===0)return i%2===0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}const m={data:r,option:a,spanMethod:c,ref:d};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function N(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option,"span-method":a.spanMethod},null,8,["data","option"])}const D=x($,[["render",N],["__file","spanMethod.vue"]]),w={__name:"render",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name",render:({row:m})=>k("p",{attrs:{id:"box"},class:{demo:!0},style:{color:"pink",lineHeight:"30px"}},m.name+"Hello World Avue")},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d,h:k};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function O(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const M=x(w,[["render",O],["__file","render.vue"]]),P={__name:"slot",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function j(o,l,r,a,c,m){const p=b("el-tag"),v=b("tvue-crud");return f(),_(v,{data:a.data,option:a.option},{name:e(i=>[t(p,null,{default:e(()=>[s(S(i),1)]),_:2},1024)]),_:1},8,["data","option"])}const I=x(P,[["render",j],["__file","slot.vue"]]),L={__name:"columnSort",setup(o,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"},{text1:"内容3-1",text2:"内容3-2"}]),a=d({columnSort:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]});function c(p,v){h.success(`${p}, ${v}`),console.log(p,v)}const m={data:r,option:a,columnSortableChange:c,ref:d,get ElMessage(){return h}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function F(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{option:a.option,data:a.data,onColumnSortableChange:a.columnSortableChange},null,8,["option","data"])}const H=x(L,[["render",F],["__file","columnSort.vue"]]),B={__name:"className",setup(o,{expose:l}){l();const r=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),a=d({index:!0,indexClassName:"indexClassName",indexLabelClassName:"indexLabelClassName",selection:!0,selectionClassName:"selectionClassName",selectionLabelClassName:"selectionLabelClassName",expand:!0,expandClassName:"expandClassName",expandLabelClassName:"expandLabelClassName",column:[{label:"姓名",prop:"name",className:"className",labelClassName:"labelClassName"},{width:500,label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function E(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const W=x(B,[["render",E],["__file","className.vue"]]),J={__name:"fixed",setup(o,{expose:l}){l();const r=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),a=d({index:!0,indexFixed:!1,indexWidth:100,selection:!0,selectionWidth:100,selectionFixed:!1,expand:!0,expandWidth:100,expandFixed:!1,column:[{label:"姓名",fixed:!0,prop:"name"},{width:500,label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function z(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const K=x(J,[["render",z],["__file","fixed.vue"]]),R={__name:"defaultSort",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({defaultSort:{prop:"name",order:"descending"},border:!0,column:[{sortable:!0,label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]});function c(p){h.success(JSON.stringify(p))}const m={data:r,option1:a,sortChange:c,ref:d,get ElMessage(){return h}};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function T(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option1,onSortChange:a.sortChange},null,8,["data","option"])}const V=x(R,[["render",T],["__file","defaultSort.vue"]]),q={__name:"filters",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name",formatter:(m,p,v,i)=>m.name+"自定义"},{label:"性别",prop:"sex",filters:!0,dicData:[{label:"男",value:"男"},{label:"女",value:"女"}],filterMethod:(m,p,v)=>p.sex===m}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function U(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const G=x(q,[["render",U],["__file","filters.vue"]]),y="tvue-option",Q={__name:"session",setup(o,{expose:l}){l();const r=d(Math.random()),a=d([{text1:"内容1-1",text2:"内容2-1",text3:"110000"},{text1:"内容1-2",text2:"内容2-2",text3:"120000"},{text1:"内容1-3",text2:"内容2-3"},{text1:"内容1-4",text2:"内容2-4"},{text1:"内容1-5",text2:"内容2-5"}]),c=d({sortable:!0,addBtn:!1,menu:!1,border:!0,align:"center",column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"},{label:"列内容3",prop:"text3",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]});A(()=>{const v=localStorage.getItem(y);v&&(c.value=JSON.parse(v),r.value=Math.random())});const p={key:y,reload:r,data:a,option:c,saveOption:()=>{localStorage.setItem(y,JSON.stringify(c.value)),ElMessage.success("配置保存成功")},ref:d,onMounted:A};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function X(o,l,r,a,c,m){const p=b("el-button"),v=b("tvue-crud");return f(),_(v,{ref:"crud",key:a.reload,option:a.option,data:a.data},{"menu-left":e(({size:i})=>[t(p,{onClick:a.saveOption,type:"danger",size:i},{default:e(()=>l[0]||(l[0]=[s("保存配置")])),_:2},1032,["size"])]),_:1},8,["option","data"])}const Y=x(Q,[["render",X],["__file","session.vue"]]),Z={__name:"hide",setup(o,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2",text3:"内容1-3",text4:"内容1-4"},{text1:"内容2-1",text2:"内容2-2",text3:"内容2-3",text4:"内容2-4"}]),a=d({align:"center",headerAlign:"center",column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"},{label:"列内容3",prop:"text3",hide:!0},{label:"列内容4",prop:"text4",showColumn:!1}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function nn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{option:a.option,data:a.data},null,8,["option","data"])}const sn=x(Z,[["render",nn],["__file","hide.vue"]]),ln={__name:"html",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name",html:!0,formatter:m=>`<b style="color:red">${m.name}格式化内容</b>`},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function en(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const an=x(ln,[["render",en],["__file","html.vue"]]),un={__name:"formatter",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男",select:"110000"},{name:"李四",sex:"女",select:"120000"}]),a=d({column:[{label:"姓名",prop:"name",formatter:(m,p,v)=>m.name+"格式化内容"},{label:"性别",prop:"sex"},{label:"字典",prop:"select",type:"select",formatter:(m,p,v)=>`${v}(${p})`,props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function pn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const cn=x(un,[["render",pn],["__file","formatter.vue"]]),tn={__name:"overHidden",setup(o,{expose:l}){l();const r=d([{name:"张三的名字是一个很长很长的内容",sex:"男"},{name:"李四",sex:"女"}]),a=d({column:[{label:"姓名",prop:"name",overHidden:!0,width:80},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function rn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const dn=x(tn,[["render",rn],["__file","overHidden.vue"]]),mn={data(){return{data:[{name:"张三",sex:"男"},{name:"李四",sex:"女"}],option:{column:[{label:"序号",prop:"index",fixed:!0},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}}}};function vn(o,l,r,a,c,m){const p=b("el-tag"),v=b("tvue-crud");return f(),_(v,{data:c.data,option:c.option},{index:e(({row:i,index:u})=>[t(p,null,{default:e(()=>[s(S(u+1),1)]),_:2},1024)]),_:1},8,["data","option"])}const on=x(mn,[["render",vn],["__file","index-slot.vue"]]),bn={__name:"index",setup(o,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),a=d({index:!0,indexLabel:"序号",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function xn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const fn=x(bn,[["render",xn],["__file","index.vue"]]),_n={__name:"width",setup(o,{expose:l}){l();const r=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),a=d({column:[{width:200,label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function hn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const gn=x(_n,[["render",hn],["__file","width.vue"]]),yn={__name:"rowKey",setup(o,{expose:l}){l();const r=d([{ids:1,name:"张三",sex:"男"},{ids:2,name:"李四",sex:"女"}]),a=d({rowKey:"ids",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={data:r,option:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function kn(o,l,r,a,c,m){const p=b("tvue-crud");return f(),_(p,{data:a.data,option:a.option},null,8,["data","option"])}const An=x(yn,[["render",kn],["__file","rowKey.vue"]]),Sn={__name:"index.html",setup(o,{expose:l}){l();const r={DemoSpanMethod_vue:D,DemoRender_vue:M,DemoSlot_vue:I,DemoColumnSort_vue:H,DemoClassName_vue:W,DemoFixed_vue:K,DemoDefaultSort_vue:V,DemoFilters_vue:G,DemoSession_vue:Y,DemoHide_vue:sn,DemoHtml_vue:an,DemoFormatter_vue:cn,DemoOverHidden_vue:dn,DemoIndex_slot_vue:on,DemoIndex_vue:fn,DemoWidth_vue:gn,DemoRowKey_vue:An};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function Cn(o,l,r,a,c,m){const p=b("VPDemoBasic"),v=b("Tabs");return f(),C("div",null,[l[68]||(l[68]=n("h2",{id:"主键",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#主键"},[n("span",null,"主键")])],-1)),t(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"对开开放了`cell-style`和`row-style`方法"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ids: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ids: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'ids',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoRowKey_vue)]),_:1})]),_:1}),l[69]||(l[69]=n("h2",{id:"宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#宽度"},[n("span",null,"宽度")])],-1)),t(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"可以配置`width`属性控制每列的宽度，如果不配置则会自适应"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 200,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoWidth_vue)]),_:1})]),_:1}),l[70]||(l[70]=n("h2",{id:"索引",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#索引"},[n("span",null,"索引")])],-1)),t(v,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[8]||(l[8]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[9]||(l[9]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设`index`属性为`true`即可，`indexLabel`设置表格的序号的标题,默认为`#`"},{code:e(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  indexLabel: '序号',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoIndex_vue)]),_:1})]),_:1}),l[71]||(l[71]=n("h2",{id:"自定义索引",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义索引"},[n("span",null,"自定义索引")])],-1)),t(v,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[12]||(l[12]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[13]||(l[13]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue"},{code:e(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #index="{row,index}">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>{{index+1}}</el-tag>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <script>")]),s(`
`),n("span",{class:"line"},[n("span",null,"export default {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  data () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      data: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      option: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '序号',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'index',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          fixed: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoIndex_slot_vue)]),_:1})]),_:1}),l[72]||(l[72]=n("h2",{id:"内容超出隐藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内容超出隐藏"},[n("span",null,"内容超出隐藏")])],-1)),t(v,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[16]||(l[16]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[17]||(l[17]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`overHidden`设置`true`即可超出列表宽度的内容以省略号显示"},{code:e(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三的名字是一个很长很长的内容',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      overHidden: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 80,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoOverHidden_vue)]),_:1})]),_:1}),l[73]||(l[73]=n("h2",{id:"内容格式化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内容格式化"},[n("span",null,"内容格式化")])],-1)),t(v,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[20]||(l[20]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[21]||(l[21]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`formatter`方法格式化内容"},{code:e(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    select: '110000'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    select: '120000'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (val, value, label) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return val.name + '格式化内容';")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '字典',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (val, value, label) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return `${label}(${value})`;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoFormatter_vue)]),_:1})]),_:1}),l[74]||(l[74]=n("h2",{id:"支持-html-转译",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#支持-html-转译"},[n("span",null,"支持 html 转译")])],-1)),t(v,{id:"81",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[24]||(l[24]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[25]||(l[25]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`html`设置为`true`即可支持`formatter`转义`html`代码"},{code:e(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      html: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (val) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,'        return `<b style="color:red">${val.name}格式化内容</b>`;')]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoHtml_vue)]),_:1})]),_:1}),l[75]||(l[75]=n("h2",{id:"列隐藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#列隐藏"},[n("span",null,"列隐藏")])],-1)),t(v,{id:"94",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[28]||(l[28]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[29]||(l[29]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"一共是有 4 列的`hide`和`showColumn`可以达到控制列显隐控制"},{code:e(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容1-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容1-2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text3: '内容1-3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text4: '内容1-4'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容2-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容2-2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text3: '内容2-3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text4: '内容2-4'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  headerAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      hide: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容4',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text4',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      showColumn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoHide_vue)]),_:1})]),_:1}),l[76]||(l[76]=g('<h2 id="持久化存储" tabindex="-1"><a class="header-anchor" href="#持久化存储"><span>持久化存储</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果有远程字典类的配置或者加载错误情况，需要初始化下组件<a href="/crud/crud-ajax" target="_blank" rel="noopener noreferrer">CRUD 初始化</a></p></div>',2)),t(v,{id:"112",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[32]||(l[32]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[33]||(l[33]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[34]||(l[34]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue"},{code:e(()=>l[35]||(l[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :key="reload"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-left="{size}">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button @click="saveOption"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="danger"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size">保存配置</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 设置常量")]),s(`
`),n("span",{class:"line"},[n("span",null,"const key = 'tvue-option';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 定义响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容2-1', text3: '110000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-2', text2: '内容2-2', text3: '120000' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-3', text2: '内容2-3' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-4', text2: '内容2-4' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-5', text2: '内容2-5' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  sortable: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  addBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容3', prop: 'text3', type: 'select', props: { label: 'name', value: 'code' }, dicUrl: 'https://cli.avuejs.com/api/area/getProvince' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 在组件挂载后读取本地存储")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  const storedOption = localStorage.getItem(key);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (storedOption) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    option.value = JSON.parse(storedOption);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    reload.value = Math.random();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 保存配置到本地存储")]),s(`
`),n("span",{class:"line"},[n("span",null,"const saveOption = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  localStorage.setItem(key, JSON.stringify(option.value));")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('配置保存成功');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoSession_vue)]),_:1})]),_:1}),l[77]||(l[77]=n("h2",{id:"筛选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#筛选"},[n("span",null,"筛选")])],-1)),t(v,{id:"125",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[36]||(l[36]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[37]||(l[37]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[38]||(l[38]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`filters`为`true`，字典用法和普通用法一致,`filterMethod`为自定义的筛选逻辑，`filter-multiple`筛选的数据为多选还是单选，默认为 `true`"},{code:e(()=>l[39]||(l[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row, value, label, column) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return row.name + '自定义';")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      filters: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        { label: '男', value: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        { label: '女', value: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      filterMethod: (value, row, column) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return row.sex === value;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoFilters_vue)]),_:1})]),_:1}),l[78]||(l[78]=n("h2",{id:"默认排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认排序"},[n("span",null,"默认排序")])],-1)),t(v,{id:"138",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[40]||(l[40]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[41]||(l[41]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[42]||(l[42]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`defaultSort`一个属性接受`prop`排序的字段和`order`排序的方式俩个属性，初始化的时候根据设置默认排序,`order`中接受 `ascending` 表示升序，`descending` 表示降序，回调`sort-change`方法返回排序参数"},{code:e(()=>l[43]||(l[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option1"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @sort-change="sortChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option1 = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  defaultSort: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    order: 'descending'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      sortable: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function sortChange (val) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(val));")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoDefaultSort_vue)]),_:1})]),_:1}),l[79]||(l[79]=n("h2",{id:"冻结列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#冻结列"},[n("span",null,"冻结列")])],-1)),l[80]||(l[80]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("配置"),n("code",null,"fixed"),s("为"),n("code",null,"true"),s("即可实现冻结列")])],-1)),t(v,{id:"156",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[44]||(l[44]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[45]||(l[45]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[46]||(l[46]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`indexFixed`,`selectionFixed`,`expandFixed`可以配置序号，多选，面板是否为冻结,当然你也可以配置他们的宽度`indexWdth`,`selectionWidth`,`expandWidth`"},{code:e(()=>l[47]||(l[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  indexFixed: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  indexWidth: 100,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectionWidth: 100,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectionFixed: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expand: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandWidth: 100,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandFixed: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      fixed: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 500,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoFixed_vue)]),_:1})]),_:1}),l[81]||(l[81]=n("h2",{id:"单元格和表头样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单元格和表头样式"},[n("span",null,"单元格和表头样式")])],-1)),l[82]||(l[82]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,[s("配置"),n("code",null,"className"),s("和"),n("code",null,"labelClassName"),s("配置单元格和表头样式名称")])],-1)),t(v,{id:"174",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[48]||(l[48]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[49]||(l[49]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[50]||(l[50]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"配置`indexClassName`,`selectionClassName`,`expandClassName`可以配置序号，多选，面板列单元格的样式名称,配置`indexLabelClassName`,`selectionLabelClassName`,`expandLabelClassName`表头样式名称"},{code:e(()=>l[51]||(l[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  indexClassName: 'indexClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  indexLabelClassName: 'indexLabelClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectionClassName: 'selectionClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectionLabelClassName: 'selectionLabelClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expand: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandClassName: 'expandClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandLabelClassName: 'expandLabelClassName',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      className: 'className',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      labelClassName: 'labelClassName'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 500,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoClassName_vue)]),_:1})]),_:1}),l[83]||(l[83]=g(`<h2 id="列拖拽排序" tabindex="-1"><a class="header-anchor" href="#列拖拽排序"><span>列拖拽排序</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(v,{id:"188",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[52]||(l[52]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[53]||(l[53]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[54]||(l[54]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`columnSort`设置为`true`即可开启拖拽功能，没有回调用方法直接修改`option`中的顺序，`column-sortable-change`拖拽回调方法"},{code:e(()=>l[55]||(l[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @column-sortable-change="columnSortableChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null," ")]),s(`
`),n("span",{class:"line"},[n("span",null," <script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容1-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容1-2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容2-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容2-2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容3-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容3-2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  columnSort: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '列内容2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"function columnSortableChange (oldIndex, newIndex) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(`${oldIndex}, ${newIndex}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(oldIndex, newIndex);")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null," <\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoColumnSort_vue)]),_:1})]),_:1}),l[84]||(l[84]=n("h2",{id:"自定义列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义列"},[n("span",null,"自定义列")])],-1)),t(v,{id:"201",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[56]||(l[56]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[57]||(l[57]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[58]||(l[58]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置列的属性`slot`为`true`时，在卡槽中用`prop`作为卡槽的名字即可"},{code:e(()=>l[59]||(l[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #name="scope">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>{{scope}}</el-tag>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoSlot_vue)]),_:1})]),_:1}),l[85]||(l[85]=n("h2",{id:"render-渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#render-渲染"},[n("span",null,"render 渲染")])],-1)),t(v,{id:"214",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[60]||(l[60]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[61]||(l[61]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[62]||(l[62]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue"},{code:e(()=>l[63]||(l[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, h } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      render: ({ row }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return h('p',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            attrs: { id: 'box' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            class: { 'demo': true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            style: { color: 'pink', lineHeight: '30px' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }, row.name + 'Hello World Avue')")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"},)")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoRender_vue)]),_:1})]),_:1}),l[86]||(l[86]=g('<h2 id="列合并" tabindex="-1"><a class="header-anchor" href="#列合并"><span>列合并</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果数据不确定参考<a href="/crud/crud-rc.html" target="_blank" rel="noopener noreferrer">动态数据行和列合并</a></p></div>',2)),t(v,{id:"232",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:u})=>l[64]||(l[64]=[s("vue2")])),title1:e(({value:i,isActive:u})=>l[65]||(l[65]=[s("vue3")])),tab0:e(({value:i,isActive:u})=>l[66]||(l[66]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过给传入`spanMethod`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象"},{code:e(()=>l[67]||(l[67]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :span-method="spanMethod"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987122',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '234',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '3.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987123',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '165',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.43',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 12")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987124',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '324',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '1.9',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 9")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987125',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '621',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '2.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 17")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987126',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: 'ID',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount3'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"function spanMethod ({ row, column, rowIndex, columnIndex }) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (columnIndex === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (rowIndex % 2 === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        rowspan: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        colspan: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        rowspan: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        colspan: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[t(a.DemoSpanMethod_vue)]),_:1})]),_:1})])}const Nn=x(Sn,[["render",Cn],["__file","index.html.vue"]]),Dn=JSON.parse('{"path":"/doc/crud-column/","title":"表格列配置项","lang":"zh-CN","frontmatter":{"title":"表格列配置项","createTime":"2025/2/5 14:01:52","permalink":"/doc/crud-column/"},"headers":[],"readingTime":{"minutes":2.89,"words":867},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-column.md","bulletin":false}');export{Nn as comp,Dn as data};

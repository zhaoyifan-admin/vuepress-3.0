import{_ as f,b as m,r as b,o as _,h as y,g as a,a as r,f as s,E as k,c as h,e as n,d as x}from"./app-Cibr2ptE.js";const D={__name:"mock",setup(v,{expose:l}){l();const p={VAILD:[{label:"真",value:"true"},{label:"假",value:"false"}],SEX:[{label:"男",value:0},{label:"女",value:1}]},e=m({text:"动态内容1"}),o={mockBtn:!0,column:[{label:"头像",prop:"video",type:"upload",listType:"picture-img",mock:{type:"image"},span:24},{label:"id",prop:"id",mock:{type:"id",uuid:!0}},{label:"手机号",prop:"tel",mock:{type:"tel"}},{label:"用户名",prop:"username",mock:{type:"name",en:!0}},{label:"自定义",prop:"text2",mock:t=>"自定义逻辑"+t.name,span:8},{label:"姓名",prop:"name",mock:{type:"name"},span:8},{label:"类型",prop:"type",type:"select",dicData:p.VAILD,span:6,mock:{type:"dic"}},{label:"权限",prop:"grade",span:6,type:"checkbox",dicData:p.VAILD,mock:{type:"dic"}},{label:"开关",prop:"switch",span:6,type:"switch",dicData:p.SEX,mock:{type:"dic"},hide:!0,row:!0},{label:"性别",prop:"sex",span:6,type:"radio",dicData:p.SEX,mock:{type:"dic"}},{label:"数字",prop:"number",type:"number",span:6,precision:2,mock:{type:"number",max:1,min:2,precision:2},min:0,max:3,row:!0},{label:"网站",span:12,prop:"url",prepend:"http://",mock:{type:"url",header:!1},append:"com",row:!0},{label:"日期",prop:"date",type:"date",span:8,format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",mock:{type:"datetime",format:"yyyy-MM-dd"}},{label:"日期时间",prop:"datetime",type:"datetime",span:8,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss",mock:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",now:!0}},{label:"时间",prop:"time",type:"time",span:8,format:"HH:mm:ss",valueFormat:"HH:mm:ss",mock:{type:"datetime",format:"HH:mm:ss"}},{label:"地址",span:24,prop:"address",mock:{type:"county"}},{label:"建议",span:24,prop:"adit",mock:{type:"word",min:10,max:30}}]},d={DIC:p,form:e,option:o,ref:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function S(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c)},null,8,["modelValue"])}const A=f(D,[["render",S],["__file","mock.vue"]]),M={__name:"print",setup(v,{expose:l}){l();const p=m({}),e=m({printBtn:!0,column:[{label:"用户名",prop:"username"}]}),d={form:p,option:e,handleSubmit:()=>{},ref:m};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function V(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c),onSubmit:e.handleSubmit},null,8,["option","modelValue"])}const Y=f(M,[["render",V],["__file","print.vue"]]),B={__name:"slot",setup(v,{expose:l}){l();const p=m({}),e=m(null),o=m({submitBtn:!1,emptyBtn:!1,column:[{label:"用户名",prop:"username"}]}),u={form:p,formRef:e,option:o,submitForm:()=>{e.value.submit()},resetForm:()=>{e.value.resetForm()},handleSubmit:(i,g)=>{k.success("3s后关闭"),setTimeout(()=>{g()},3e3)},ref:m,get ElMessage(){return k}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function H(v,l,p,e,o,d){const t=b("el-tag"),c=b("el-button"),u=b("tvue-form");return _(),y(u,{ref:"formRef",option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=i=>e.form=i),onSubmit:e.handleSubmit},{"menu-form-before":a(({size:i})=>[r(t,{type:"primary",size:i},{default:a(()=>l[1]||(l[1]=[s("提示")])),_:2},1032,["size"])]),"menu-form":a(({size:i})=>[r(c,{type:"primary",size:i,onClick:e.submitForm},{default:a(()=>l[2]||(l[2]=[s("自定义提交")])),_:2},1032,["size"]),r(c,{size:i,onClick:e.resetForm},{default:a(()=>l[3]||(l[3]=[s("自定义清空")])),_:2},1032,["size"])]),_:1},8,["option","modelValue"])}const P=f(B,[["render",H],["__file","slot.vue"]]),E={__name:"position",setup(v,{expose:l}){l();const p=m({}),e=m({menuPosition:"left",column:[{label:"用户名",prop:"username"}]}),o={form:p,option:e,ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function F(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c)},null,8,["option","modelValue"])}const T=f(E,[["render",F],["__file","position.vue"]]),$={__name:"inline",setup(v,{expose:l}){l();const e={option:m({menuSpan:6,column:[{label:"姓名",prop:"name",span:6},{label:"年龄",prop:"sex",span:6}]}),ref:m};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function w(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option},null,8,["option"])}const C=f($,[["render",w],["__file","inline.vue"]]),R={__name:"text",setup(v,{expose:l}){l();const p=m({}),e=m({submitText:"完成",emptyText:"取消",column:[{label:"用户名",prop:"username"}]}),o={form:p,optipn:e,ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function j(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:v.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c)},null,8,["option","modelValue"])}const z=f(R,[["render",j],["__file","text.vue"]]),I={__name:"hide",setup(v,{expose:l}){l();const p=m({}),e=m({submitBtn:!1,emptyBtn:!1,column:[{label:"用户名",prop:"username"}]}),o={form:p,option:e,ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function O(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c)},null,8,["option","modelValue"])}const U=f(I,[["render",O],["__file","hide.vue"]]),q={__name:"reset",setup(v,{expose:l}){l();const p=m({}),e=m({column:[{label:"用户名",prop:"username"}]}),d={form:p,option:e,handleReset:()=>{k.success("清空成功回调")},ref:m,get ElMessage(){return k}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function L(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c),onResetChange:e.handleReset},null,8,["option","modelValue"])}const N=f(q,[["render",L],["__file","reset.vue"]]),X={__name:"submit",setup(v,{expose:l}){l();const p=m({}),e=m({column:[{label:"用户名",prop:"username"}]}),d={form:p,option:e,handleSubmit:(t,c)=>{k.success("3s后关闭"),setTimeout(()=>{c()},3e3)},ref:m,get ElMessage(){return k}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function J(v,l,p,e,o,d){const t=b("tvue-form");return _(),y(t,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=c=>e.form=c),onSubmit:e.handleSubmit},null,8,["option","modelValue"])}const G=f(X,[["render",J],["__file","submit.vue"]]),K={__name:"index.html",setup(v,{expose:l}){l();const p={DemoMock_vue:A,DemoPrint_vue:Y,DemoSlot_vue:P,DemoPosition_vue:T,DemoInline_vue:C,DemoText_vue:z,DemoHide_vue:U,DemoReset_vue:N,DemoSubmit_vue:G};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Q(v,l,p,e,o,d){const t=b("VPDemoBasic"),c=b("Tabs");return _(),h("div",null,[l[36]||(l[36]=n("h2",{id:"提交按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#提交按钮"},[n("span",null,"提交按钮")])],-1)),r(c,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"`submit`方法为表单提交按钮回调"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @submit="handleSubmit"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({})")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleSubmit = (form, done) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('3s后关闭');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done()")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 3000)")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSubmit_vue)]),_:1})]),_:1}),l[37]||(l[37]=n("h2",{id:"清空按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#清空按钮"},[n("span",null,"清空按钮")])],-1)),r(c,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"`reset-change`方法为表单清空按钮回调"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @reset-change="handleReset"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleReset = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('清空成功回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoReset_vue)]),_:1})]),_:1}),l[38]||(l[38]=n("h2",{id:"隐藏按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#隐藏按钮"},[n("span",null,"隐藏按钮")])],-1)),r(c,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"利用`submitBtn`和`emptyBtn`属性去隐藏按钮"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  submitBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,'      label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoHide_vue)]),_:1})]),_:1}),l[39]||(l[39]=n("h2",{id:"按钮文案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮文案"},[n("span",null,"按钮文案")])],-1)),r(c,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"利用`submitText`和`emptyText`属性去隐藏按钮"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const optipn = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  submitText: '完成',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyText: '取消',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoText_vue)]),_:1})]),_:1}),l[40]||(l[40]=n("h2",{id:"行内按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行内按钮"},[n("span",null,"行内按钮")])],-1)),r(c,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"利用列的`span`属性和`menuSpan`属性达到行内表单"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuSpan: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoInline_vue)]),_:1})]),_:1}),l[41]||(l[41]=n("h2",{id:"按钮位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮位置"},[n("span",null,"按钮位置")])],-1)),r(c,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"利用`menuPosition`属性设置按钮的位置"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuPosition: 'left',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoPosition_vue)]),_:1})]),_:1}),l[42]||(l[42]=n("h2",{id:"自定义按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义按钮"},[n("span",null,"自定义按钮")])],-1)),r(c,{id:"81",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[24]||(l[24]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[25]||(l[25]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"利用`menu-form`卡槽去自定义按钮"},{code:a(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="formRef"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @submit="handleSubmit">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form-before="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-tag type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'              :size="size">提示</el-tag>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="submitForm">自定义提交</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="resetForm">自定义清空</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const formRef = ref(null)")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  submitBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const submitForm = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  formRef.value.submit();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const resetForm = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  formRef.value.resetForm();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleSubmit = (form, done) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('3s后关闭');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 3000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSlot_vue)]),_:1})]),_:1}),l[43]||(l[43]=n("h2",{id:"打印按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打印按钮"},[n("span",null,"打印按钮")])],-1)),l[44]||(l[44]=n("blockquote",null,[n("p",null,[s("你可以可以调用全局"),n("a",{href:"/default/print",target:"_blank",rel:"noopener noreferrer"},"$Print打印方法")])],-1)),r(c,{id:"99",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[28]||(l[28]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[29]||(l[29]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"配置`printBtn`打开表单打印功能"},{code:a(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @submit="handleSubmit"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  printBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,'    label: "用户名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'    prop: "username"')]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleSubmit = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  // Your submit logic here")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoPrint_vue)]),_:1})]),_:1}),l[45]||(l[45]=x(`<h2 id="模拟数据按钮" tabindex="-1"><a class="header-anchor" href="#模拟数据按钮"><span>模拟数据按钮</span></a></h2><blockquote><p>一键生成模拟数据方便测试</p></blockquote><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdnjs.cloudflare.com/ajax/libs/Mock.js/1.0.0/mock-min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),r(c,{id:"118",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>l[32]||(l[32]=[s("vue2")])),title1:a(({value:u,isActive:i})=>l[33]||(l[33]=[s("vue3")])),tab0:a(({value:u,isActive:i})=>l[34]||(l[34]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(t,{type:"vue",desc:"`mock`设置`true`，在列中配置对应的规则即可，当然你可以自己写模拟逻辑，在`mock`写方法，会返回当前表单的数据,最后`return`即可，详情参考如下例子"},{code:a(()=>l[35]||(l[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const DIC = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  VAILD: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '真', value: 'true' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '假', value: 'false' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  SEX: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '男', value: 0 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '女', value: 1 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  text: '动态内容1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  mockBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '头像',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'video',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'upload',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      listType: 'picture-img',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'image' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: 'id',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'id', uuid: true }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '手机号',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tel',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'tel' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'username',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'name', en: true }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '自定义',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: (form) => '自定义逻辑' + form.name,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '类型',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'type',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: DIC.VAILD,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'dic' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '权限',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'grade',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'checkbox',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: DIC.VAILD,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'dic' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '开关',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'switch',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'switch',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: DIC.SEX,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'dic' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      hide: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'radio',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: DIC.SEX,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'dic' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数字',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 6,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      precision: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'number', max: 1, min: 2, precision: 2 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      min: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      max: 3,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '网站',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 12,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'url',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prepend: 'http://',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'url', header: false },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      append: 'com',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 8,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM-DD',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'datetime', format: 'yyyy-MM-dd' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期时间',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'datetime',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 8,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'YYYY-MM-DD HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'datetime', format: 'yyyy-MM-dd HH:mm:ss', now: true }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '时间',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'time',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'time',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 8,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      format: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      valueFormat: 'HH:mm:ss',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'datetime', format: 'HH:mm:ss' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '地址',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'address',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'county' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '建议',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'adit',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      mock: { type: 'word', min: 10, max: 30 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoMock_vue)]),_:1})]),_:1})])}const Z=f(K,[["render",Q],["__file","index.html.vue"]]),nn=JSON.parse('{"path":"/form/form-submit/","title":"表单操作按钮","lang":"zh-CN","frontmatter":{"title":"表单操作按钮","createTime":"2025/02/06 15:15:40","permalink":"/form/form-submit/"},"headers":[],"readingTime":{"minutes":1.24,"words":371},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-submit.md","bulletin":false}');export{Z as comp,nn as data};

import{_ as f,b as m,r as b,o as _,c as x,a as u,g as a,f as e,e as n,F as g,h as V}from"./app-Cibr2ptE.js";const k={__name:"model",setup(d,{expose:l}){l();const i=m({name:"small"}),s=m({column:[{label:"姓名",prop:"name"}]}),v={form:i,option:s,changeText:()=>{i.value.name="我改变了"},ref:m};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function y(d,l,i,s,o,v){const p=b("el-button"),c=b("tvue-form");return _(),x(g,null,[u(p,{onClick:s.changeText,type:"success"},{default:a(()=>l[1]||(l[1]=[e("改变值")])),_:1}),l[2]||(l[2]=n("br",null,null,-1)),l[3]||(l[3]=n("br",null,null,-1)),u(c,{option:s.option,modelValue:s.form,"onUpdate:modelValue":l[0]||(l[0]=t=>s.form=t)},null,8,["option","modelValue"])],64)}const T=f(k,[["render",y],["__file","model.vue"]]),h={__name:"value",setup(d,{expose:l}){l();const i=m({}),s=m({column:[{label:"姓名",prop:"name",value:"small"}]}),o={form:i,option:s,ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function A(d,l,i,s,o,v){const p=b("tvue-form");return _(),V(p,{option:s.option,modelValue:s.form,"onUpdate:modelValue":l[0]||(l[0]=c=>s.form=c)},null,8,["option","modelValue"])}const S=f(h,[["render",A],["__file","value.vue"]]),$={__name:"index.html",setup(d,{expose:l}){l();const i={DemoModel_vue:T,DemoValue_vue:S};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function B(d,l,i,s,o,v){const p=b("VPDemoBasic"),c=b("Tabs");return _(),x("div",null,[l[8]||(l[8]=n("h2",{id:"配置方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置方法"},[n("span",null,"配置方法")])],-1)),u(c,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:r})=>l[0]||(l[0]=[e("vue2")])),title1:a(({value:t,isActive:r})=>l[1]||(l[1]=[e("vue3")])),tab0:a(({value:t,isActive:r})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:r})=>[u(p,{type:"vue",desc:"配置`value`为字段默认值"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      value: 'small'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(s.DemoValue_vue)]),_:1})]),_:1}),l[9]||(l[9]=n("h2",{id:"赋值方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#赋值方法"},[n("span",null,"赋值方法")])],-1)),u(c,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:t,isActive:r})=>l[4]||(l[4]=[e("vue2")])),title1:a(({value:t,isActive:r})=>l[5]||(l[5]=[e("vue3")])),tab0:a(({value:t,isActive:r})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:t,isActive:r})=>[u(p,{type:"vue",desc:"利用`v-model`绑定的对象直接操作即可"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="changeText"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             type="success">改变值</el-button>')]),e(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  name: 'small'")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    {")]),e(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),e(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),e(`
`),n("span",{class:"line"},[n("span",null,"    }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const changeText = () => {")]),e(`
`),n("span",{class:"line"},[n("span",null,'  form.value.name = "我改变了";')]),e(`
`),n("span",{class:"line"},[n("span",null,"};")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[u(s.DemoModel_vue)]),_:1})]),_:1})])}const P=f($,[["render",B],["__file","index.html.vue"]]),N=JSON.parse('{"path":"/form/form-value/","title":"表单默认值","lang":"zh-CN","frontmatter":{"title":"表单默认值","createTime":"2025/02/06 15:13:40","permalink":"/form/form-value/"},"headers":[],"readingTime":{"minutes":0.23,"words":70},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-value.md","bulletin":false}');export{P as comp,N as data};

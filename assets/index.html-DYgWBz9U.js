import{_ as f,b as r,r as b,o as _,h,g as i,a as c,c as x,e as n,f as e}from"./app-Cibr2ptE.js";const g={__name:"crud-children",setup(u,{expose:s}){s();const t=r({}),l=r([{name:"张三",info:[{sex:15},{sex:16}]}]),p=r({column:[{label:"姓名",prop:"name"},{labelWidth:0,label:"",prop:"info",span:24,hide:!0}]}),o=r({column:[{label:"年龄",prop:"sex"}]}),a={form:t,data:l,option:p,infoOption:o,ref:r};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function V(u,s,t,l,p,o){const a=b("tvue-crud");return _(),h(a,{option:l.option,data:l.data,modelValue:l.form,"onUpdate:modelValue":s[0]||(s[0]=d=>l.form=d)},{"info-form":i(({})=>[c(a,{option:l.infoOption,data:l.form.info},null,8,["option","data"])]),_:1},8,["option","data","modelValue"])}const k=f(g,[["render",V],["__file","crud-children.vue"]]),O={__name:"index.html",setup(u,{expose:s}){s();const t={DemoCrud_children_vue:k};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function B(u,s,t,l,p,o){const a=b("VPDemoBasic"),d=b("Tabs");return _(),x("div",null,[s[4]||(s[4]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("p",null,"由于有的表格包含了父子表，在父表填写的完后还要填写子表的内容，由于业务场景复发多元化，如果采用配置的方法去开发，将会边不可维护，所以这里采用一种灵活的方法去实现")],-1)),c(d,{id:"5",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:m,isActive:v})=>s[0]||(s[0]=[e("vue2")])),title1:i(({value:m,isActive:v})=>s[1]||(s[1]=[e("vue3")])),tab0:i(({value:m,isActive:v})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:i(({value:m,isActive:v})=>[c(a,{type:"vue",desc:"如下用法可以根据场景灵活使用，你可以将`infoForm`自定义内容封装成一个组件使用,这样子将会达到很好的维护效果"},{code:i(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),e(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),e(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),e(`
`),n("span",{class:"line"},[n("span",null,'    <template #info-form="{}">')]),e(`
`),n("span",{class:"line"},[n("span",null,'      <tvue-crud :option="infoOption"')]),e(`
`),n("span",{class:"line"},[n("span",null,'                 :data="form.info"></tvue-crud>')]),e(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),e(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),e(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),e(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),e(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),e(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),e(`
`),n("span",{class:"line"},[n("span",null,"  info: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { sex: 15 },")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { sex: 16 }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { labelWidth: 0, label: '', prop: 'info', span: 24, hide: true }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span")]),e(`
`),n("span",{class:"line"},[n("span",null,"const infoOption = ref({")]),e(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),e(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),e(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),e(`
`),n("span",{class:"line"},[n("span",null,"});")]),e(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[c(l.DemoCrud_children_vue)]),_:1})]),_:1})])}const y=f(O,[["render",B],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/doc/crud-children/","title":"父子表","lang":"zh-CN","frontmatter":{"title":"父子表","createTime":"2025/02/06 09:28:51","permalink":"/doc/crud-children/"},"headers":[],"readingTime":{"minutes":0.49,"words":147},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-children.md","bulletin":false}');export{y as comp,C as data};

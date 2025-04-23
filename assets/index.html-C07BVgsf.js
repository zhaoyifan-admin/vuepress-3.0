import{_,b as d,r as o,o as f,h as A,g as e,a as p,e as n,f as s,c as y}from"./app-Cibr2ptE.js";const x={__name:"slot",setup(m,{expose:l}){l();const i=d(null),a=d({emptyText:"自定义暂无数据提示语",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),c=d([]),t={crud:i,option:a,data:c,handleAdd:()=>{i&&i.value.rowAdd()},ref:d};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function g(m,l,i,a,c,b){const t=o("el-button"),v=o("tvue-empty"),u=o("tvue-crud");return f(),A(u,{ref:"crud",option:a.option,data:a.data},{empty:e(()=>[p(v,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",desc:"自定义的提示语"},{default:e(()=>[l[1]||(l[1]=n("br",null,null,-1)),p(t,{type:"primary",onClick:a.handleAdd},{default:e(()=>l[0]||(l[0]=[s("新增数据")])),_:1})]),_:1})]),_:1},8,["option","data"])}const h=_(x,[["render",g],["__file","slot.vue"]]),k={__name:"base",setup(m,{expose:l}){l();const i=d({emptyText:"自定义暂无数据提示语",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),a=d([]),c={option:i,data:a,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function T(m,l,i,a,c,b){const t=o("tvue-crud");return f(),A(t,{ref:"crud",option:a.option,data:a.data},null,8,["option","data"])}const B=_(k,[["render",T],["__file","base.vue"]]),S={__name:"index.html",setup(m,{expose:l}){l();const i={DemoSlot_vue:h,DemoBase_vue:B};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function $(m,l,i,a,c,b){const t=o("VPDemoBasic"),v=o("Tabs");return f(),y("div",null,[l[8]||(l[8]=n("h2",{id:"普通用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通用法"},[n("span",null,"普通用法")])],-1)),p(v,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:r})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:u,isActive:r})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:u,isActive:r})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:r})=>[p(t,{type:"vue",desc:"`emptyText`属性可以配置空状态时的提示语"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyText: '自定义暂无数据提示语',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoBase_vue)]),_:1})]),_:1}),l[9]||(l[9]=n("h2",{id:"自定义空状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义空状态"},[n("span",null,"自定义空状态")])],-1)),p(v,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:u,isActive:r})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:u,isActive:r})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:u,isActive:r})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:u,isActive:r})=>[p(t,{type:"vue",desc:"当然你也可以自定义`empty`卡槽"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,"    <template #empty>")]),s(`
`),n("span",{class:"line"},[n("span",null,'      <tvue-empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  desc="自定义的提示语">')]),s(`
`),n("span",{class:"line"},[n("span",null,"        <br />")]),s(`
`),n("span",{class:"line"},[n("span",null,'        <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                   @click="handleAdd">新增数据</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"      </tvue-empty>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyText: '自定义暂无数据提示语',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleAdd = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (crud) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowAdd();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoSlot_vue)]),_:1})]),_:1})])}const w=_(S,[["render",$],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/doc/crud-empty/","title":"空状态","lang":"zh-CN","frontmatter":{"title":"空状态","createTime":"2025/02/06 09:36:04","permalink":"/doc/crud-empty/"},"headers":[],"readingTime":{"minutes":0.24,"words":73},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-empty.md","bulletin":false}');export{w as comp,C as data};

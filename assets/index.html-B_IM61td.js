import{_ as h,b as o,r as m,o as k,c as _,e as n,a as p,g as e,f as s,F as g,u as f,h as y,d as D}from"./app-Cibr2ptE.js";const A={__name:"import",setup(v,{expose:l}){l();let{proxy:t}=f();const a=o([]),c=o({column:[{label:"id",prop:"id"},{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]});function b(){window.open("/cdn/demo.xlsx")}function u(i,r){t.$Export.xlsx(i.raw).then(x=>{x.value=x.results})}const d={get proxy(){return t},set proxy(i){t=i},data:a,option:c,handleGet:b,handleChange:u,ref:o,getCurrentInstance:f};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}},B={style:{display:"flex"}};function C(v,l,t,a,c,b){const u=m("el-button"),d=m("el-upload"),i=m("tvue-crud");return k(),_(g,null,[n("div",B,[p(u,{type:"primary",onClick:a.handleGet},{default:e(()=>l[0]||(l[0]=[s("下载模版")])),_:1}),l[2]||(l[2]=s("    ")),p(d,{"auto-upload":!1,"show-file-list":!1,action:"action","on-change":a.handleChange},{default:e(()=>[p(u,{type:"primary"},{default:e(()=>l[1]||(l[1]=[s("导入 excel")])),_:1})]),_:1})]),l[3]||(l[3]=n("br",null,null,-1)),p(i,{option:a.option,data:a.data},null,8,["option","data"])],64)}const w=h(A,[["render",C],["__file","import.vue"]]),S={__name:"export",setup(v,{expose:l}){l();const t=o([{text1:"内容1-1",text2:"内容1-2",deep:{text3:"内容1-3"}},{text1:"内容2-1",text2:"内容2-2",deep:{text3:"内容2-3"}}]),a=o({excelBtn:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"},{label:"列内容3",prop:"text3",bind:"deep.text3"}]}),c={data:t,option:a,ref:o};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function $(v,l,t,a,c,b){const u=m("tvue-crud");return k(),y(u,{option:a.option,data:a.data},null,8,["option","data"])}const E=h(S,[["render",$],["__file","export.vue"]]),F={__name:"index.html",setup(v,{expose:l}){l();const t={DemoImport_vue:w,DemoExport_vue:E};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function j(v,l,t,a,c,b){const u=m("VPDemoBasic"),d=m("Tabs");return k(),_("div",null,[l[8]||(l[8]=D(`<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里）--&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/FileSaver.js/2014-11-29/FileSaver.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/xlsx/0.18.2/xlsx.full.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表格导出" tabindex="-1"><a class="header-anchor" href="#表格导出"><span>表格导出</span></a></h2>`,2)),p(d,{id:"4",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:r})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:i,isActive:r})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:i,isActive:r})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:r})=>[p(u,{type:"vue",desc:"`excelBtn`设置为`true`即可开启导出功能"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容1-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容1-2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    deep: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      text3: '内容1-3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text1: '内容2-1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    text2: '内容2-2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    deep: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      text3: '内容2-3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  excelBtn: true,")]),s(`
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
`),n("span",{class:"line"},[n("span",null,"      bind: 'deep.text3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoExport_vue)]),_:1})]),_:1}),l[9]||(l[9]=n("h2",{id:"表格导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表格导入"},[n("span",null,"表格导入")])],-1)),p(d,{id:"17",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:i,isActive:r})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:i,isActive:r})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:i,isActive:r})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:i,isActive:r})=>[p(u,{type:"vue"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <div style="display:flex;">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'               @click="handleGet">下载模版</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    &nbsp;&nbsp;")]),s(`
`),n("span",{class:"line"},[n("span",null,'    <el-upload :auto-upload="false"')]),s(`
`),n("span",{class:"line"},[n("span",null,'               :show-file-list="false"')]),s(`
`),n("span",{class:"line"},[n("span",null,'               action="action"')]),s(`
`),n("span",{class:"line"},[n("span",null,'               :on-change="handleChange">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary">导入 excel</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </el-upload>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </div>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  <br />")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, getCurrentInstance } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"let { proxy } = getCurrentInstance()")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: 'id', prop: 'id' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function handleGet () {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  window.open('/cdn/demo.xlsx');")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function handleChange (file, fileList) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  proxy.$Export.xlsx(file.raw).then((data) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    data.value = data.results;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[p(a.DemoImport_vue)]),_:1})]),_:1})])}const N=h(F,[["render",j],["__file","index.html.vue"]]),P=JSON.parse('{"path":"/doc/crud-export/","title":"导入导出","lang":"zh-CN","frontmatter":{"title":"导入导出","createTime":"2025/02/06 09:34:45","permalink":"/doc/crud-export/"},"headers":[],"readingTime":{"minutes":0.29,"words":88},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-export.md","bulletin":false}');export{N as comp,P as data};

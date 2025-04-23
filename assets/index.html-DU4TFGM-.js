import{_ as g,b,E as m,w as y,r as f,o as _,h as x,c as h,e as n,a as v,g as i,f as s}from"./app-Cibr2ptE.js";const S={__name:"default",setup(o,{expose:l}){l();const d=b({}),a=b(null),c=b({column:[{label:"表格",prop:"table",type:"table",children:{border:!0,column:[{label:"姓名",width:120,search:!0,searchSpan:24,prop:"name"},{label:"性别",prop:"sex"}]},formatter:e=>e.name?e.name+"-"+e.sex:"",onLoad:({page:e,value:u,data:p},r)=>{if(u){m.success("首次查询"+u),r({id:"0",name:"张三",sex:"男",age:18});return}p&&m.success("搜索查询参数"+JSON.stringify(p)),e&&m.success("分页参数"+JSON.stringify(e)),r({total:2,data:[{id:"0",name:"张三",sex:"男",age:18},{id:"1",name:"李四",sex:"女",age:18}]})},props:{label:"name",value:"id"}},{label:"性别",prop:"sex"},{label:"年龄",prop:"age"}]});y(()=>d.value.table,()=>{let u=a.value.getPropRef("table").$refs.temp.active;Array.isArray(u)&&(u=u[0]),d.value.sex=u.sex,d.value.age=u.age});const t={form:d,formRef:a,option:c,ref:b,watch:y,get ElMessage(){return m}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function k(o,l,d,a,c,t){const e=f("tvue-form");return _(),x(e,{ref:"formRef",option:a.option,modelValue:a.form,"onUpdate:modelValue":l[0]||(l[0]=u=>a.form=u)},null,8,["option","modelValue"])}const A=g(S,[["render",k],["__file","default.vue"]]),E={__name:"disabled",setup(o,{expose:l}){l();const a={option:b({column:[{label:"表格选择器",prop:"table",type:"table",disabled:!0}]}),ref:b};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function M(o,l,d,a,c,t){const e=f("tvue-form");return _(),x(e,{option:a.option},null,8,["option"])}const O=g(E,[["render",M],["__file","disabled.vue"]]),w={__name:"multiple",setup(o,{expose:l}){l();const d=b({table:[0,2]}),a=b({column:[{label:"表格选择器",prop:"table",type:"table",multiple:!0,children:{border:!0,column:[{label:"姓名",width:120,search:!0,searchSpan:24,prop:"name"},{label:"性别",prop:"sex"}]},formatter:t=>Array.isArray(t)?t.map(e=>e.name+"格式化").join(","):t.name+"格式化",onLoad:({page:t,value:e,data:u},p)=>{if(e){m.success("首次查询"+e),p([{id:"0",name:"张三",sex:"男",age:18},{id:"2",name:"王五",sex:"女"}]);return}u&&m.success("搜索查询参数"+JSON.stringify(u)),t&&m.success("分页参数"+JSON.stringify(t)),p({total:2,data:[{id:"0",name:"张三",sex:"男",age:18},{id:"1",name:"李四",sex:"女",disabled:!0,age:18},{id:"2",name:"王五",sex:"女"}]})},props:{disabled:"disabled",label:"name",value:"id"}}]}),c={form:d,option:a,ref:b,get ElMessage(){return m}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function $(o,l,d,a,c,t){const e=f("tvue-form");return _(),x(e,{option:a.option,modelValue:a.form,"onUpdate:modelValue":l[0]||(l[0]=u=>a.form=u)},null,8,["option","modelValue"])}const N=g(w,[["render",$],["__file","multiple.vue"]]),J={__name:"value",setup(o,{expose:l}){l();const a={option:b({column:[{label:"表格选择器",prop:"table",type:"table",value:"0",children:{border:!0,column:[{label:"姓名",width:120,search:!0,searchSpan:24,prop:"name"},{label:"性别",prop:"sex"}]},formatter:c=>c.name?c.name+"-"+c.sex:"",onLoad:({page:c,value:t,data:e},u)=>{if(t){m.success("首次查询"+t),u({id:"0",name:"张三",sex:"男",age:18});return}e&&m.success("搜索查询参数"+JSON.stringify(e)),c&&m.success("分页参数"+JSON.stringify(c)),u({total:2,data:[{id:"0",name:"张三",sex:"男",age:18},{id:"1",name:"李四",sex:"女",age:18}]})},props:{label:"name",value:"id"}}]}),ref:b,get ElMessage(){return m}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function D(o,l,d,a,c,t){const e=f("tvue-form");return _(),x(e,{option:a.option},null,8,["option"])}const V=g(J,[["render",D],["__file","value.vue"]]),P={__name:"base",setup(o,{expose:l}){l();const a={option:b({column:[{label:"表格选择器",prop:"table",type:"table",children:{border:!0,column:[{label:"姓名",width:120,search:!0,searchSpan:24,prop:"name"},{label:"性别",prop:"sex"}]},formatter:c=>c.name?c.name+"-"+c.sex:"",onLoad:({page:c,value:t,data:e},u)=>{if(t){m.success("首次查询"+t),u({id:"0",name:"张三",sex:"男",age:18});return}e&&m.success("搜索查询参数"+JSON.stringify(e)),c&&m.success("分页参数"+JSON.stringify(c)),u({total:2,data:[{id:"0",name:"张三",sex:"男",age:18},{id:"1",name:"李四",sex:"女",disabled:!0,age:18},{id:"2",name:"王五",sex:"女"}]})},props:{disabled:"disabled",label:"name",value:"id"}}]}),ref:b,get ElMessage(){return m}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}};function R(o,l,d,a,c,t){const e=f("tvue-form");return _(),x(e,{ref:"form",option:a.option},null,8,["option"])}const j=g(P,[["render",R],["__file","base.vue"]]),B={__name:"index.html",setup(o,{expose:l}){l();const d={DemoDefault_vue:A,DemoDisabled_vue:O,DemoMultiple_vue:N,DemoValue_vue:V,DemoBase_vue:j};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function L(o,l,d,a,c,t){const e=f("VPDemoBasic"),u=f("Tabs");return _(),h("div",null,[l[20]||(l[20]=n("h2",{id:"基础用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础用法"},[n("span",null,"基础用法")])],-1)),l[21]||(l[21]=n("blockquote",null,[n("p",null,"内部组件为crud组件，大部分属性参考Crud文档")],-1)),v(u,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:r})=>l[0]||(l[0]=[s("vue2")])),title1:i(({value:p,isActive:r})=>l[1]||(l[1]=[s("vue3")])),tab0:i(({value:p,isActive:r})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:r})=>[v(e,{type:"vue"},{code:i(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '表格选择器',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (!row.name) return '';")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return row.name + '-' + row.sex;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      onLoad: ({ page, value, data }, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('首次查询' + value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"            id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"          });")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (data) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('搜索查询参数' + JSON.stringify(data));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (page) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('分页参数' + JSON.stringify(page));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"          total: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          data: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              disabled: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '王五',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        disabled: 'disabled',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[v(a.DemoBase_vue)]),_:1})]),_:1}),l[22]||(l[22]=n("h2",{id:"默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#默认值"},[n("span",null,"默认值")])],-1)),v(u,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:r})=>l[4]||(l[4]=[s("vue2")])),title1:i(({value:p,isActive:r})=>l[5]||(l[5]=[s("vue3")])),tab0:i(({value:p,isActive:r})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:r})=>[v(e,{type:"vue",desc:"`value`属性可以提供一个初始化的默认值"},{code:i(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '表格选择器',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      value: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (!row.name) return ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return row.name + '-' + row.sex")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      onLoad: ({ page, value, data }, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('首次查询' + value)")]),s(`
`),n("span",{class:"line"},[n("span",null,"          callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"            id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"          })")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (data) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('搜索查询参数' + JSON.stringify(data))")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (page) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('分页参数' + JSON.stringify(page))")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"          total: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          data: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        })")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[v(a.DemoValue_vue)]),_:1})]),_:1}),l[23]||(l[23]=n("h2",{id:"多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多选"},[n("span",null,"多选")])],-1)),v(u,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:r})=>l[8]||(l[8]=[s("vue2")])),title1:i(({value:p,isActive:r})=>l[9]||(l[9]=[s("vue3")])),tab0:i(({value:p,isActive:r})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:r})=>[v(e,{type:"vue",desc:"设置`multiple`属性即可启用多选"},{code:i(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  table: [0, 2]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '表格选择器',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (Array.isArray(row)) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return row.map(ele => ele.name + '格式化').join(',');")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return row.name + '格式化';")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      onLoad: ({ page, value, data }, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('首次查询' + value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          callback([")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { id: '0', name: '张三', sex: '男', age: 18 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { id: '2', name: '王五', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (data) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('搜索查询参数' + JSON.stringify(data));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (page) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('分页参数' + JSON.stringify(page));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"          total: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          data: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { id: '0', name: '张三', sex: '男', age: 18 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { id: '1', name: '李四', sex: '女', disabled: true, age: 18 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            { id: '2', name: '王五', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        disabled: 'disabled',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[v(a.DemoMultiple_vue)]),_:1})]),_:1}),l[24]||(l[24]=n("h2",{id:"禁用状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁用状态"},[n("span",null,"禁用状态")])],-1)),v(u,{id:"47",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:r})=>l[12]||(l[12]=[s("vue2")])),title1:i(({value:p,isActive:r})=>l[13]||(l[13]=[s("vue3")])),tab0:i(({value:p,isActive:r})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:r})=>[v(e,{type:"vue",desc:"通过`disabled`属性指定是否禁用"},{code:i(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '表格选择器',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      disabled: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[v(a.DemoDisabled_vue)]),_:1})]),_:1}),l[25]||(l[25]=n("h2",{id:"与其它框交互",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其它框交互"},[n("span",null,"与其它框交互")])],-1)),v(u,{id:"60",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:p,isActive:r})=>l[16]||(l[16]=[s("vue2")])),title1:i(({value:p,isActive:r})=>l[17]||(l[17]=[s("vue3")])),tab0:i(({value:p,isActive:r})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:i(({value:p,isActive:r})=>[v(e,{type:"vue",desc:"利用内置的`getPropRef`方法可以获取内部值赋值给其它变量"},{code:i(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="formRef"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const formRef = ref(null)")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '表格',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'table',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      children: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"        column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"          }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      formatter: (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (!row.name) return '';")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return row.name + '-' + row.sex;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      onLoad: ({ page, value, data }, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('首次查询' + value);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"            id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"            age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"          });")]),s(`
`),n("span",{class:"line"},[n("span",null,"          return;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (data) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('搜索查询参数' + JSON.stringify(data));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (page) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('分页参数' + JSON.stringify(page));")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        callback({")]),s(`
`),n("span",{class:"line"},[n("span",null,"          total: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          data: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '0',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              id: '1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              age: 18")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        });")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'age'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"watch(() => form.value.table, () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  const table = formRef.value.getPropRef('table').$refs.temp;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let active = table.active;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (Array.isArray(active)) active = active[0];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  form.value.sex = active.sex;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  form.value.age = active.age;")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[v(a.DemoDefault_vue)]),_:1})]),_:1})])}const C=g(B,[["render",L],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/form/form-input-table/","title":"Table表格选择器","lang":"zh-CN","frontmatter":{"title":"Table表格选择器","createTime":"2025/02/06 14:40:04","permalink":"/form/form-input-table/"},"headers":[],"readingTime":{"minutes":0.59,"words":177},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-input-table.md","bulletin":false}');export{C as comp,q as data};

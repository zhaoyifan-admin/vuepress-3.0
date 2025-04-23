import{_ as g,b as o,r as f,o as _,h as x,E as b,c as y,a as t,g as i,f as s,F as w,d as k,e as n}from"./app-Cibr2ptE.js";const E={__name:"slot",setup(m,{expose:l}){l();const c=o({name:"张三",password:"",oldpassword:""}),u={obj:c,option1:{column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",rules:[{required:!0,message:"请输入性别",trigger:"blur"}]},{label:"密码",prop:"password",type:"password",rules:[{validator:(p,a,r)=>{a===""?r(new Error("请输入密码")):r()},trigger:"blur"}]},{label:"确认密码",prop:"oldpassword",type:"password",rules:[{validator:(p,a,r)=>{a===""?r(new Error("请再次输入密码")):a!==c.value.password?r(new Error("两次输入密码不一致!")):r()},trigger:"blur"}]}]},submit:(p,a)=>{b.success(JSON.stringify(p)),a()},error:p=>{b.success("请查看控制台"),console.log(p)},ref:o,get ElMessage(){return b}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function S(m,l,c,e,v,d){const u=f("tvue-form");return _(),x(u,{modelValue:e.obj,"onUpdate:modelValue":l[0]||(l[0]=p=>e.obj=p),option:e.option1,onSubmit:e.submit,onError:e.error},null,8,["modelValue"])}const h=g(E,[["render",S],["__file","slot.vue"]]),q={__name:"out",setup(m,{expose:l}){l();const c=o({column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",rules:[{required:!0,message:"请输入性别",trigger:"blur"}]}]}),e=o(null),d={option:c,form:e,validate:()=>{e.value&&e.value.validate((u,p,a)=>{if(u)p();else return console.log("error submit!!"),!1})},ref:o};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function A(m,l,c,e,v,d){const u=f("el-button"),p=f("tvue-form");return _(),y(w,null,[t(u,{type:"danger",onClick:e.validate},{default:i(()=>l[0]||(l[0]=[s("验证表单")])),_:1}),t(p,{ref:"form",option:e.option},null,8,["option"])],64)}const O=g(q,[["render",A],["__file","out.vue"]]),j={__name:"base",setup(m,{expose:l}){l();const d={option:o({column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",rules:[{required:!0,message:"请输入性别",trigger:"blur"}]}]}),submit:(u,p)=>{b.success(JSON.stringify(u)),p()},error:u=>{b.success("请查看控制台"),console.log(u)},ref:o,get ElMessage(){return b}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function N(m,l,c,e,v,d){const u=f("tvue-form");return _(),x(u,{option:e.option,onSubmit:e.submit,onError:e.error},null,8,["option"])}const M=g(j,[["render",N],["__file","base.vue"]]),V={__name:"index.html",setup(m,{expose:l}){l();const c={DemoSlot_vue:h,DemoOut_vue:O,DemoBase_vue:M};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function $(m,l,c,e,v,d){const u=f("VPDemoBasic"),p=f("Tabs");return _(),y("div",null,[l[12]||(l[12]=k('<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法"><span>基础用法</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>具体参考<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a></p></div>',2)),t(p,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:r})=>l[0]||(l[0]=[s("vue2")])),title1:i(({value:a,isActive:r})=>l[1]||(l[1]=[s("vue3")])),tab0:i(({value:a,isActive:r})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:r})=>[t(u,{type:"vue",desc:"配置验证字段的`rules`的数据对象"},{code:i(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @submit="submit"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @error="error"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const submit = (form, done) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(form));")]),s(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const error = (err) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('请查看控制台');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(err);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoBase_vue)]),_:1})]),_:1}),l[13]||(l[13]=n("h2",{id:"外置验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#外置验证"},[n("span",null,"外置验证")])],-1)),t(p,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:r})=>l[4]||(l[4]=[s("vue2")])),title1:i(({value:a,isActive:r})=>l[5]||(l[5]=[s("vue3")])),tab0:i(({value:a,isActive:r})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:r})=>[t(u,{type:"vue"},{code:i(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="danger"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @click="validate">验证表单</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref(null);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const validate = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (form.value) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    form.value.validate((valid, done, msg) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (valid) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        console.log('error submit!!');")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    });")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoOut_vue)]),_:1})]),_:1}),l[14]||(l[14]=n("h2",{id:"自定义验证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义验证"},[n("span",null,"自定义验证")])],-1)),t(p,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:r})=>l[8]||(l[8]=[s("vue2")])),title1:i(({value:a,isActive:r})=>l[9]||(l[9]=[s("vue3")])),tab0:i(({value:a,isActive:r})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:r})=>[t(u,{type:"vue"},{code:i(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="obj"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option1"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @submit="submit"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @error="error"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const obj = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  password: '',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  oldpassword: ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option1 = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'          message: "请输入姓名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'          trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'          message: "请输入性别",')]),s(`
`),n("span",{class:"line"},[n("span",null,'          trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '密码',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'password',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'password',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          validator: (rule, value, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (value === '') {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              callback(new Error('请输入密码'));")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              callback();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '确认密码',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'oldpassword',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'password',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          validator: (rule, value, callback) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"            if (value === '') {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              callback(new Error('请再次输入密码'));")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else if (value !== obj.value.password) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              callback(new Error('两次输入密码不一致!'));")]),s(`
`),n("span",{class:"line"},[n("span",null,"            } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              callback();")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const submit = (form, done) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(form));")]),s(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const error = (err) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('请查看控制台');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(err);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoSlot_vue)]),_:1})]),_:1})])}const D=g(V,[["render",$],["__file","index.html.vue"]]),P=JSON.parse('{"path":"/form/form-rules/","title":"表单验证","lang":"zh-CN","frontmatter":{"title":"表单验证","createTime":"2025/02/06 15:12:20","permalink":"/form/form-rules/"},"headers":[],"readingTime":{"minutes":0.28,"words":83},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-rules.md","bulletin":false}');export{D as comp,P as data};

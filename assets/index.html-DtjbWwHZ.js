import{_ as f,b as d,E as k,r as v,o as _,c as A,f as s,t as h,a as t,F as D,h as g,q as y,g as a,e as n,d as S}from"./app-Cibr2ptE.js";const E={__name:"component",setup(m,{expose:l}){l();const o=d({}),e=d({column:[{label:"文本1",prop:"text1"},{label:"",labelWidth:40,prop:"divider",component:"elDivider",span:24,event:{click:()=>{k.success("点击方法")}},params:{html:'<h2 style="color:red">自定义html标签,点我触发方法</h2>',contentPosition:"left"}},{label:"文本2",prop:"text2"},{label:"",labelWidth:40,prop:"calendar",component:"elCalendar",span:24,params:{}}]}),p={form:o,option:e,ref:d,get ElMessage(){return k}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function B(m,l,o,e,p,b){const c=v("tvue-form");return _(),A(D,null,[s(h(e.form)+" ",1),t(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r)},null,8,["option","modelValue"])],64)}const C=f(E,[["render",B],["__file","component.vue"]]),N={__name:"render",setup(m,{expose:l}){l();const p={form:d({}),option:{column:[{label:"姓名",prop:"text",render:b=>y("p",{id:"box",class:{demo:!0},style:{color:"pink",lineHeight:"30px"}},"Hello World Avue")}]},ref:d,h:y};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function P(m,l,o,e,p,b){const c=v("tvue-form");return _(),g(c,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},null,8,["modelValue"])}const W=f(N,[["render",P],["__file","render.vue"]]),q={__name:"class",setup(m,{expose:l}){l();const o=d({}),e=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",span:24,className:"formClassName"}]}),p={form:o,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function O(m,l,o,e,p,b){const c=v("tvue-form");return _(),g(c,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r)},null,8,["option","modelValue"])}const $=f(q,[["render",O],["__file","class.vue"]]),j={__name:"button",setup(m,{expose:l}){l();const o=d({}),e=d(null),p=d({emptyBtn:!1,submitBtn:!1,column:[{label:"用户名",prop:"username",rules:[{required:!0,message:"请输入用户名",trigger:"blur"}]}]}),r={form:o,formRef:e,option:p,handleEmpty:()=>{o.value={}},handleSubmit:()=>{e.value.validate((i,u,x)=>{i&&(k.success(JSON.stringify(o.value)),setTimeout(()=>{u()},2e3))})},ref:d,get ElMessage(){return k}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function R(m,l,o,e,p,b){const c=v("el-button"),r=v("tvue-form");return _(),g(r,{ref:"formRef",modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=i=>e.form=i),option:e.option},{"menu-form":a(({})=>[t(c,{icon:"el-icon-user",type:"primary",onClick:e.handleSubmit},{default:a(()=>l[1]||(l[1]=[s("提 交")])),_:1}),t(c,{icon:"el-icon-delete",onClick:e.handleEmpty},{default:a(()=>l[2]||(l[2]=[s("清 空")])),_:1})]),_:1},8,["modelValue","option"])}const T=f(j,[["render",R],["__file","button.vue"]]),U={__name:"error",setup(m,{expose:l}){l();const p={form:d({text:""}),option:{labelWidth:120,column:[{label:"姓名",prop:"text",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]}]},ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}},M={style:{color:"green"}};function z(m,l,o,e,p,b){const c=v("tvue-form");return _(),g(c,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=r=>e.form=r),option:e.option},{"text-error":a(({error:r})=>[n("p",M,"自定义提示"+h(r),1)]),_:1},8,["modelValue"])}const H=f(U,[["render",z],["__file","error.vue"]]),J={__name:"label",setup(m,{expose:l}){l();const p={form:d({text:""}),option:{labelWidth:120,column:[{label:"姓名",prop:"text",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]}]},ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function w(m,l,o,e,p,b){const c=v("el-tooltip"),r=v("tvue-form");return _(),g(r,{modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=i=>e.form=i),option:e.option},{"text-label":a(({})=>[t(c,{class:"item",effect:"dark",content:"文字提示",placement:"top-start"},{default:a(()=>l[1]||(l[1]=[n("span",null,"姓名",-1)])),_:1})]),_:1},8,["modelValue"])}const F=f(J,[["render",w],["__file","label.vue"]]),L={__name:"slot",setup(m,{expose:l}){l();const p={form:d({text:""}),option:{labelWidth:120,column:[{label:"姓名",prop:"text",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]}]},ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function G(m,l,o,e,p,b){const c=v("el-tag"),r=v("el-input"),i=v("tvue-form");return _(),g(i,{modelValue:e.form,"onUpdate:modelValue":l[1]||(l[1]=u=>e.form=u),option:e.option},{text:a(({disabled:u,size:x})=>[n("div",null,[t(c,null,{default:a(()=>[s(h(e.form.text?e.form.text:"暂时没有内容"),1)]),_:1}),t(r,{disabled:u,size:x,modelValue:e.form.text,"onUpdate:modelValue":l[0]||(l[0]=V=>e.form.text=V),placeholder:"这里是自定的表单"},null,8,["disabled","size","modelValue"])])]),_:1},8,["modelValue"])}const I=f(L,[["render",G],["__file","slot.vue"]]),K={__name:"index.html",setup(m,{expose:l}){l();const o={DemoComponent_vue:C,DemoRender_vue:W,DemoClass_vue:$,DemoButton_vue:T,DemoError_vue:H,DemoLabel_vue:F,DemoSlot_vue:I};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function Q(m,l,o,e,p,b){const c=v("VPDemoBasic"),r=v("Tabs");return _(),A("div",null,[l[28]||(l[28]=n("h2",{id:"自定义内容",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义内容"},[n("span",null,"自定义内容")])],-1)),t(r,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #text="{ disabled, size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <div>")]),s(`
`),n("span",{class:"line"},[n("span",null,"        <el-tag>{{ form.text ? form.text : '暂时没有内容' }}</el-tag>")]),s(`
`),n("span",{class:"line"},[n("span",null,'        <el-input :disabled="disabled"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  v-model="form.text"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  placeholder="这里是自定的表单">')]),s(`
`),n("span",{class:"line"},[n("span",null,"        </el-input>")]),s(`
`),n("span",{class:"line"},[n("span",null,"      </div>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  text: ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    rules: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"      required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'      message: "请输入姓名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSlot_vue)]),_:1})]),_:1}),l[29]||(l[29]=n("h2",{id:"自定义标题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义标题"},[n("span",null,"自定义标题")])],-1)),t(r,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #text-label="{}">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-tooltip class="item"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  effect="dark"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  content="文字提示"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                  placement="top-start">')]),s(`
`),n("span",{class:"line"},[n("span",null,"        <span>姓名</span>")]),s(`
`),n("span",{class:"line"},[n("span",null,"      </el-tooltip>")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  text: ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    rules: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"      required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'      message: "请输入姓名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoLabel_vue)]),_:1})]),_:1}),l[30]||(l[30]=n("h2",{id:"自定义错误提示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义错误提示"},[n("span",null,"自定义错误提示")])],-1)),t(r,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #text-error="{ error }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <p style="color:green">自定义提示{{ error }}</p>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  text: ''")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    rules: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"      required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'      message: "请输入姓名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'      trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoError_vue)]),_:1})]),_:1}),l[31]||(l[31]=n("h2",{id:"自定义按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义按钮"},[n("span",null,"自定义按钮")])],-1)),t(r,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="formRef"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form="{}">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button icon="el-icon-user"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleSubmit">提 交</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button icon="el-icon-delete"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleEmpty">清 空</el-button>')]),s(`
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
`),n("span",{class:"line"},[n("span",null,"  emptyBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  submitBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'username',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入用户名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleEmpty = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  form.value = {};")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleSubmit = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  formRef.value.validate((valid, done, msg) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (valid) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success(JSON.stringify(form.value));")]),s(`
`),n("span",{class:"line"},[n("span",null,"      setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoButton_vue)]),_:1})]),_:1}),l[32]||(l[32]=S(`<h2 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式"><span>自定义样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">formClassName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">409eff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  .</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">el-form-item</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">__</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">label</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:#</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">fff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(r,{id:"56",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue",desc:"`className`属性配置上样式的名字即可"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      className: 'formClassName'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoClass_vue)]),_:1})]),_:1}),l[33]||(l[33]=n("h2",{id:"render渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#render渲染"},[n("span",null,"render渲染")])],-1)),t(r,{id:"69",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form v-model="form"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, h } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),s(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    render: (params) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return h('p',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          id: 'box',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          class: { 'demo': true },")]),s(`
`),n("span",{class:"line"},[n("span",null,"          style: { color: 'pink', lineHeight: '30px' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }, 'Hello World Avue');")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRender_vue)]),_:1})]),_:1}),l[34]||(l[34]=n("h2",{id:"引入三方组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#引入三方组件"},[n("span",null,"引入三方组件")])],-1)),t(r,{id:"82",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[24]||(l[24]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[25]||(l[25]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(c,{type:"vue"},{code:a(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {{ form }}")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '文本1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 40,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'divider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      component: 'elDivider',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      event: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        click: () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ElMessage.success('点击方法');")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      params: {")]),s(`
`),n("span",{class:"line"},[n("span",null,`        html: '<h2 style="color:red">自定义html标签,点我触发方法</h2>',`)]),s(`
`),n("span",{class:"line"},[n("span",null,"        contentPosition: 'left'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '文本2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 40,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'calendar',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      component: 'elCalendar',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      params: {}")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoComponent_vue)]),_:1})]),_:1})])}const Y=f(K,[["render",Q],["__file","index.html.vue"]]),Z=JSON.parse('{"path":"/form/form-slot/","title":"表单自定义","lang":"zh-CN","frontmatter":{"title":"表单自定义","createTime":"2025/02/06 15:18:18","permalink":"/form/form-slot/"},"headers":[],"readingTime":{"minutes":0.5,"words":151},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-slot.md","bulletin":false}');export{Y as comp,Z as data};

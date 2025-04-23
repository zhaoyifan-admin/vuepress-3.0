import{_,b as d,r as f,o as g,h as x,i as h,E as v,c as k,d as y,a as m,g as u,e as n,f as l}from"./app-Cibr2ptE.js";const E={__name:"control",setup(b,{expose:s}){s();const c=d({text1:0}),e=d({column:[{label:"内容1",prop:"text1",type:"radio",control:(i,a)=>i===0?{text2:{display:!0},text3:{label:"内容3"}}:{text2:{display:!1},text3:{label:"有没有发现我变了"}},dicData:[{label:"显示",value:0},{label:"隐藏",value:1}]},{label:"内容2",prop:"text2",display:!0,control:(i,a)=>new Promise(p=>{p(i?{text1:{label:"改变内容1"}}:{text1:{label:"内容1"}})})},{label:"内容3",prop:"text3"}]}),r={form:c,option:e,ref:d};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function V(b,s,c,e,r,i){const a=f("tvue-form");return g(),x(a,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=p=>e.form=p)},null,8,["option","modelValue"])}const M=_(E,[["render",V],["__file","control.vue"]]),A={__name:"ref",setup(b,{expose:s}){s();const c=d({}),e=d(null),r={labelWidth:120,column:[{label:"测试框",prop:"text"}]};h(()=>{setTimeout(()=>{v.success("查看控制台"),console.log("text的ref对象"),console.log(e.value.getPropRef("text").$refs.temp)})});const i={form:c,formRef:e,option:r,ref:d,onMounted:h,get ElMessage(){return v}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function $(b,s,c,e,r,i){const a=f("tvue-form");return g(),x(a,{ref:"formRef",modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=p=>e.form=p),option:e.option},null,8,["modelValue"])}const P=_(A,[["render",$],["__file","ref.vue"]]),D={__name:"event",setup(b,{expose:s}){s();const c=d({name:"11"}),e=d({column:[{label:"姓名",prop:"name",change:({value:i,column:a})=>{v.success("change事件查看控制台"),console.log("值改变",i,a)},click:({value:i,column:a})=>{v.success("click事件查看控制台"),console.log("点击事件",i,a)},focus:({value:i,column:a})=>{v.success("focus事件查看控制台"),console.log("获取焦点",i,a)},blur:({value:i,column:a})=>{v.success("blur事件查看控制台"),console.log("失去焦点",i,a)},enter:({value:i,column:a})=>{v.success("enter事件查看控制台"),console.log("回车事件",i,a)}}]}),r={form:c,option:e,ref:d,get ElMessage(){return v}};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function R(b,s,c,e,r,i){const a=f("tvue-form");return g(),x(a,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=p=>e.form=p)},null,8,["option","modelValue"])}const S=_(D,[["render",R],["__file","event.vue"]]),T={__name:"index.html",setup(b,{expose:s}){s();const c={DemoControl_vue:M,DemoRef_vue:P,DemoEvent_vue:S};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function B(b,s,c,e,r,i){const a=f("VPDemoBasic"),p=f("Tabs");return g(),k("div",null,[s[12]||(s[12]=y('<ul><li><code>change</code>事件</li><li><code>click</code>事件</li><li><code>focus</code>事件</li><li><code>blur</code>事件</li><li><code>enter</code>事件</li></ul><h2 id="组件事件" tabindex="-1"><a class="header-anchor" href="#组件事件"><span>组件事件</span></a></h2>',2)),m(p,{id:"30",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:u(({value:t,isActive:o})=>s[0]||(s[0]=[l("vue2")])),title1:u(({value:t,isActive:o})=>s[1]||(s[1]=[l("vue3")])),tab0:u(({value:t,isActive:o})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:u(({value:t,isActive:o})=>[m(a,{type:"vue",desc:"目前组件有 5 个事件`change`,`click`,`focus`,`blur`,`enter`"},{code:u(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '11'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    change: ({ value, column }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success('change事件查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      console.log('值改变', value, column);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    click: ({ value, column }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success('click事件查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      console.log('点击事件', value, column);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    focus: ({ value, column }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success('focus事件查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      console.log('获取焦点', value, column);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    blur: ({ value, column }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success('blur事件查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      console.log('失去焦点', value, column);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    enter: ({ value, column }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ElMessage.success('enter事件查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      console.log('回车事件', value, column);")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:u(()=>[m(e.DemoEvent_vue)]),_:1})]),_:1}),s[13]||(s[13]=y('<h2 id="组件对象" tabindex="-1"><a class="header-anchor" href="#组件对象"><span>组件对象</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><a href="/form/form-input-table.html" target="_blank" rel="noopener noreferrer">input-table 组件实际用法</a></li></ul></div>',2)),m(p,{id:"52",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:u(({value:t,isActive:o})=>s[4]||(s[4]=[l("vue2")])),title1:u(({value:t,isActive:o})=>s[5]||(s[5]=[l("vue3")])),tab0:u(({value:t,isActive:o})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:u(({value:t,isActive:o})=>[m(a,{type:"vue"},{code:u(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form ref="formRef"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const formRef = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '测试框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    console.log('text的ref对象')")]),l(`
`),n("span",{class:"line"},[n("span",null,"    console.log(formRef.value.getPropRef('text').$refs.temp)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:u(()=>[m(e.DemoRef_vue)]),_:1})]),_:1}),s[14]||(s[14]=n("h2",{id:"组件交互",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#组件交互"},[n("span",null,"组件交互")])],-1)),m(p,{id:"65",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:u(({value:t,isActive:o})=>s[8]||(s[8]=[l("vue2")])),title1:u(({value:t,isActive:o})=>s[9]||(s[9]=[l("vue3")])),tab0:u(({value:t,isActive:o})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:u(({value:t,isActive:o})=>[m(a,{type:"vue",desc:"可以写判断逻辑，返回对应改变的对象属性"},{code:u(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "内容1",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "text1",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      type: "radio",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      control: (val, form) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        if (val === 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text2: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              display: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text3: {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "内容3",')]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          };")]),l(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text2: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              display: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            text3: {")]),l(`
`),n("span",{class:"line"},[n("span",null,'              label: "有没有发现我变了",')]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          };")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,'          label: "显示",')]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,'          label: "隐藏",')]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "内容2",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "text2",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      display: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      control: (val, form) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return new Promise((resolve) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          if (val) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            resolve({")]),l(`
`),n("span",{class:"line"},[n("span",null,"              text1: {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                label: "改变内容1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"          } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            resolve({")]),l(`
`),n("span",{class:"line"},[n("span",null,"              text1: {")]),l(`
`),n("span",{class:"line"},[n("span",null,'                label: "内容1",')]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            });")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        });")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,'      label: "内容3",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      prop: "text3",')]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:u(()=>[m(e.DemoControl_vue)]),_:1})]),_:1})])}const C=_(T,[["render",B],["__file","index.html.vue"]]),O=JSON.parse('{"path":"/form/form-event/","title":"表单组件事件","lang":"zh-CN","frontmatter":{"title":"表单组件事件","createTime":"2025/02/06 15:27:03","permalink":"/form/form-event/"},"headers":[],"readingTime":{"minutes":0.4,"words":121},"git":{"updatedTime":1738829218000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":2,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-event.md","bulletin":false}');export{C as comp,O as data};

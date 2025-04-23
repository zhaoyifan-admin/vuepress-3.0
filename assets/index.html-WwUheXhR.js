import{_,b as r,l as x,r as v,o as f,c as y,a as p,g as a,f as l,e as n,F as A,E as k,h as g,t as h,i as S,d as D}from"./app-Cibr2ptE.js";const $={__name:"tabs",setup(d,{expose:s}){s();const c=r(!0),e=r({text:"文本",text1:"文本1",text2:"文本2",text3:"文本3"}),m=x(()=>({tabs:c.value,tabsActive:2,column:[{label:"内容1",prop:"text1"}],group:[{icon:"el-icon-info",label:"分组1",prop:"group1",column:[{label:"内容1",prop:"text1"}]},{icon:"el-icon-info",label:"分组2",prop:"group2",column:[{label:"选项卡2",prop:"text2"},{label:"选项卡3",prop:"text3"}]}]}));function b(){k.success(JSON.stringify(e.value)),setTimeout(()=>{done()},2e3)}function t(i,u){k.success("序号为:"+i.index)}const o={tabs:c,form:e,option:m,handleSubmit:b,handleTabClick:t,ref:r,computed:x,get ElMessage(){return k}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function T(d,s,c,e,m,b){const t=v("el-button"),o=v("tvue-form");return f(),y(A,null,[p(t,{onClick:s[0]||(s[0]=i=>e.tabs.value=!e.tabs.value)},{default:a(()=>s[2]||(s[2]=[l("转化")])),_:1}),s[4]||(s[4]=n("br",null,null,-1)),s[5]||(s[5]=n("br",null,null,-1)),p(o,{onTabClick:e.handleTabClick,option:e.option,modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=i=>e.form=i),onSubmit:e.handleSubmit},{"group1-header":a(()=>s[3]||(s[3]=[n("h4",null,"自定义表头",-1)])),_:1},8,["option","modelValue"])],64)}const V=_($,[["render",T],["__file","tabs.vue"]]),j={__name:"group",setup(d,{expose:s}){s();const c=r({text:"文本",text1:"文本1",text2:"文本2",text3:"文本3"}),e=r({column:[{label:"内容",prop:"text"}],group:[{icon:"el-icon-info",label:"分组1",collapse:!1,prop:"group1",column:[{label:"内容1",prop:"text1"}]},{icon:"el-icon-info",label:"分组2",arrow:!1,prop:"group2",column:[{label:"选项卡2",prop:"text2"},{label:"选项卡3",prop:"text3"}]}]}),t={form:c,option:e,handleSubmit:()=>{k.success(JSON.stringify(c.value))},handleTabClick:o=>{k.success(o)},ref:r,get ElMessage(){return k}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},O={"aria-hidden":"true",style:{width:"30px",height:"30px"}};function w(d,s,c,e,m,b){const t=v("el-input"),o=v("tvue-form");return f(),g(o,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=i=>e.form=i),onSubmit:e.handleSubmit,onTabClick:e.handleTabClick},{"group1-header":a(({column:i})=>[(f(),y("svg",O,s[2]||(s[2]=[n("use",{"xlink:href":"#icon-duanxinguanli"},null,-1)]))),l(" "+h(i.label),1)]),text3:a(({})=>[p(t,{placeholder:"自定义",modelValue:e.form.text3,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form.text3=i)},null,8,["modelValue"])]),_:1},8,["option","modelValue"])}const C=_(j,[["render",w],["__file","group.vue"]]),M={__name:"detail2",setup(d,{expose:s}){s();const c=r(!0),e=r({datetime:"2020-05-01"}),m=x(()=>e.value.datetime.split("-")),b=x(()=>({detail:c.value,column:[{label:"选择日期",span:12,prop:"datetime",type:"datetime",format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD"},{label:"",labelWidth:10,prop:"divider",display:!c.value,component:"elDivider",span:24,params:{html:"这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成",contentPosition:"left"}}]})),t=x(()=>c.value?"编辑":"保存"),i={detail:c,obj:e,datetime:m,option:b,title:t,submit:()=>{k.success(JSON.stringify(e.value))},ref:r,computed:x,get ElMessage(){return k}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},z={key:0};function N(d,s,c,e,m,b){const t=v("el-button"),o=v("el-input"),i=v("tvue-form");return f(),y(A,null,[p(t,{onClick:s[0]||(s[0]=u=>e.detail=!e.detail)},{default:a(()=>[l(h(e.title),1)]),_:1}),s[3]||(s[3]=n("br",null,null,-1)),s[4]||(s[4]=n("br",null,null,-1)),p(i,{option:e.option,modelValue:e.obj,"onUpdate:modelValue":s[2]||(s[2]=u=>e.obj=u),onSubmit:e.submit},{datetime:a(({})=>[e.detail?(f(),y("span",z," 这是我要选择的日期"+h(e.datetime[0])+"年"+h(e.datetime[1])+"月"+h(e.datetime[2])+"日 ",1)):(f(),g(o,{key:1,modelValue:e.obj.datetime,"onUpdate:modelValue":s[1]||(s[1]=u=>e.obj.datetime=u)},null,8,["modelValue"]))]),_:1},8,["option","modelValue"])],64)}const E=_(M,[["render",N],["__file","detail2.vue"]]),Y={__name:"detail",setup(d,{expose:s}){s();const c=r({}),e=r({detail:!0,labelWidth:110,group:[{label:"用户信息",prop:"jbxx",icon:"el-icon-edit-outline",column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex"}]},{label:"退款申请",prop:"tksq",icon:"el-icon-view",column:[{label:"省份",span:24,prop:"province",type:"select",props:{label:"name",value:"code"},dicUrl:"https://cli.avuejs.com/api/area/getProvince",rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"多选",prop:"checkbox",type:"checkbox",all:!0,props:{label:"name",value:"code"},span:24,dicUrl:"https://cli.avuejs.com/api/area/getProvince"}]},{label:"用户信息",prop:"yhxx",icon:"el-icon-edit-outline",column:[{label:"测试长度",prop:"len",value:3,maxlength:5},{label:"测试自定义",prop:"lens",value:3}]}]}),m=x(()=>e.value.detail?"编 辑":"保 存");function b(){e.value.detail=!e.value.detail}function t(){console.log("Form submitted with data:",c.value)}S(()=>{setTimeout(()=>{c.value={name:"small",province:"110000",checkbox:["110000"]}},100)});const o={form:c,option:e,title:m,handle:b,submit:t,ref:r,computed:x,onMounted:S};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function B(d,s,c,e,m,b){const t=v("el-button"),o=v("tvue-form");return f(),y(A,null,[p(t,{onClick:e.handle,style:{"margin-left":"20px"}},{default:a(()=>[l(h(e.title),1)]),_:1}),s[1]||(s[1]=n("br",null,null,-1)),s[2]||(s[2]=n("br",null,null,-1)),p(o,{option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form=i),onSubmit:e.submit},null,8,["option","modelValue"])],64)}const W=_(Y,[["render",B],["__file","detail.vue"]]),U={__name:"tip",setup(d,{expose:s}){s();const e={option:r({column:[{label:"内容1",prop:"text1",tip:"我是一个默认提示语"},{label:"内容2",prop:"text2",tip:"我是一个左边提示语",tipPlacement:"left"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function q(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const F=_(U,[["render",q],["__file","tip.vue"]]),J={__name:"labelTip",setup(d,{expose:s}){s();const e={option:r({column:[{label:"内容1",prop:"text1",labelTip:"我是一个标题提示语"},{label:"内容2",prop:"text2",labelTip:"我是一个标题提示语",labelTipPlacement:"right"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function L(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const G=_(J,[["render",L],["__file","labelTip.vue"]]),R={__name:"class",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name",span:12,row:!0},{label:"性别",prop:"sex",span:12,row:!0},{label:"身份证号",prop:"id",span:12},{label:"视频",prop:"video",type:"upload",className:"upload",listType:"picture-img"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function H(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const I=_(R,[["render",H],["__file","class.vue"]]),K={__name:"labelPosition",setup(d,{expose:s}){s();const e={option:r({labelPosition:"top",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function Q(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const X=_(K,[["render",Q],["__file","labelPosition.vue"]]),Z={__name:"labelWidth",setup(d,{expose:s}){s();const e={option:r({column:[{labelWidth:200,label:"我是一个超级长的标题",prop:"name"},{label:"性别",prop:"sex"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function nn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const ln=_(Z,[["render",nn],["__file","labelWidth.vue"]]),sn={__name:"display",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name",display:!1}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function en(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const an=_(sn,[["render",en],["__file","display.vue"]]),un={__name:"order",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",order:1}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function pn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const tn=_(un,[["render",pn],["__file","order.vue"]]),cn={__name:"row",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name",span:8},{label:"性别",prop:"sex",span:8,row:!0},{label:"年龄",prop:"number",type:"number",span:8}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function rn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const on=_(cn,[["render",rn],["__file","row.vue"]]),dn={__name:"offset",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name",span:8},{label:"性别",prop:"sex",offset:8,span:8},{label:"年龄",prop:"number",type:"number",offset:8,span:8}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function mn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const vn=_(dn,[["render",mn],["__file","offset.vue"]]),bn={__name:"gutter",setup(d,{expose:s}){s();const e={option:r({gutter:100,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function fn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const _n=_(bn,[["render",fn],["__file","gutter.vue"]]),gn={__name:"span",setup(d,{expose:s}){s();const e={option:r({column:[{label:"姓名",prop:"name",span:24},{label:"性别",prop:"sex",span:8},{label:"年龄",prop:"number",type:"number",span:8}]}),ref:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}};function xn(d,s,c,e,m,b){const t=v("tvue-form");return f(),g(t,{option:e.option},null,8,["option"])}const kn=_(gn,[["render",xn],["__file","span.vue"]]),yn={__name:"size",setup(d,{expose:s}){s();const c=r("default"),e=x(()=>({size:c.value,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"年龄",prop:"number",type:"number"}]})),m={sizeValue:c,option:e,ref:r,computed:x};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function hn(d,s,c,e,m,b){const t=v("el-radio"),o=v("el-radio-group"),i=v("el-row"),u=v("tvue-form");return f(),y(A,null,[p(i,{style:{"margin-bottom":"20px"}},{default:a(()=>[p(o,{modelValue:e.sizeValue,"onUpdate:modelValue":s[0]||(s[0]=P=>e.sizeValue=P)},{default:a(()=>[p(t,{label:"large"},{default:a(()=>s[1]||(s[1]=[l("large")])),_:1}),p(t,{label:"default"},{default:a(()=>s[2]||(s[2]=[l("default")])),_:1}),p(t,{label:"small"},{default:a(()=>s[3]||(s[3]=[l("small")])),_:1})]),_:1},8,["modelValue"])]),_:1}),p(u,{option:e.option},null,8,["option"])],64)}const An=_(yn,[["render",hn],["__file","size.vue"]]),Sn={__name:"index.html",setup(d,{expose:s}){s();const c={DemoTabs_vue:V,DemoGroup_vue:C,DemoDetail2_vue:E,DemoDetail_vue:W,DemoTip_vue:F,DemoLabelTip_vue:G,DemoClass_vue:I,DemoLabelPosition_vue:X,DemoLabelWidth_vue:ln,DemoDisplay_vue:an,DemoOrder_vue:tn,DemoRow_vue:on,DemoOffset_vue:vn,DemoGutter_vue:_n,DemoSpan_vue:kn,DemoSize_vue:An};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function Dn(d,s,c,e,m,b){const t=v("VPDemoBasic"),o=v("Tabs");return f(),y("div",null,[s[64]||(s[64]=D('<div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>size</li><li>span</li><li>gutter</li><li>offset</li><li>labelWidth</li><li>labelPosition</li></ul><p>以上属性配置到<code>option</code>下作用于全部列，优先列中配置属性生效，更多用法可以参考<a href="https://element-plus.gitee.io/zh-CN/component/layout.html" target="_blank" rel="noopener noreferrer">Element-plus-Layout 布局</a>和<a href="https://element-plus.gitee.io/zh-CN/component/form.html" target="_blank" rel="noopener noreferrer">Element-plus-Form 表单</a></p></div><h2 id="栏大小" tabindex="-1"><a class="header-anchor" href="#栏大小"><span>栏大小</span></a></h2>',2)),p(o,{id:"40",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`size`属性调节栏的大小，默认为`small`"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-row style="margin-bottom:20px">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio-group v-model="sizeValue">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-radio label="large">large</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-radio label="default">default</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-radio label="small">small</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </el-radio-group>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </el-row>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const sizeValue = ref('default')")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = computed(() => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  size: sizeValue.value,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}))")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoSize_vue)]),_:1})]),_:1}),s[65]||(s[65]=n("h2",{id:"栏距列数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栏距列数"},[n("span",null,"栏距列数")])],-1)),p(o,{id:"53",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`span`属性调节栏列数,默认为12"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoSpan_vue)]),_:1})]),_:1}),s[66]||(s[66]=n("h2",{id:"栏距间隔",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栏距间隔"},[n("span",null,"栏距间隔")])],-1)),p(o,{id:"66",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`gutter`属性调节栏列数,默认为0"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  gutter: 100,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoGutter_vue)]),_:1})]),_:1}),s[67]||(s[67]=n("h2",{id:"分栏偏移",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分栏偏移"},[n("span",null,"分栏偏移")])],-1)),p(o,{id:"79",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`offset`属性调节栏列数,默认为12"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      offset: 8,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      offset: 8,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoOffset_vue)]),_:1})]),_:1}),s[68]||(s[68]=n("h2",{id:"栏成行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栏成行"},[n("span",null,"栏成行")])],-1)),p(o,{id:"92",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`row`属性栅格后面的内容是否从新的一行开始展示"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'number',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 8")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoRow_vue)]),_:1})]),_:1}),s[69]||(s[69]=n("h2",{id:"栏排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栏排序"},[n("span",null,"栏排序")])],-1)),p(o,{id:"105",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设`order`属性可排序与`column`中顺序不同"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      order: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoOrder_vue)]),_:1})]),_:1}),s[70]||(s[70]=n("h2",{id:"栏隐藏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#栏隐藏"},[n("span",null,"栏隐藏")])],-1)),p(o,{id:"118",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"设置`display`属性隐藏栏目"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      display: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDisplay_vue)]),_:1})]),_:1}),s[71]||(s[71]=n("h2",{id:"标题宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题宽度"},[n("span",null,"标题宽度")])],-1)),p(o,{id:"131",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`labelWidth`为标题的宽度，默认为`110`"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 200,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '我是一个超级长的标题',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoLabelWidth_vue)]),_:1})]),_:1}),s[72]||(s[72]=n("h2",{id:"标题位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题位置"},[n("span",null,"标题位置")])],-1)),p(o,{id:"144",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[32]||(s[32]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[33]||(s[33]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`labelPosition`为标题的位置，默认为`left`"},{code:a(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelPosition: 'top',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoLabelPosition_vue)]),_:1})]),_:1}),s[73]||(s[73]=D(`<h2 id="样式布局" tabindex="-1"><a class="header-anchor" href="#样式布局"><span>样式布局</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">upload</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  right</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  bottom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),p(o,{id:"158",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[36]||(s[36]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[37]||(s[37]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[38]||(s[38]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"利用`className`去布局"},{code:a(()=>s[39]||(s[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref(({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 12,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 12,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      row: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '身份证号',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 12")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '视频',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'video',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'upload',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      className: 'upload',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      listType: 'picture-img'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}));")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoClass_vue)]),_:1})]),_:1}),s[74]||(s[74]=n("h2",{id:"标题辅助语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题辅助语"},[n("span",null,"标题辅助语")])],-1)),p(o,{id:"171",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[40]||(s[40]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[41]||(s[41]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[42]||(s[42]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`labelTip`为标题提示的内容,`labelTipPlacement`为标题提示语的方向，默认为`bottom`"},{code:a(()=>s[43]||(s[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelTip: '我是一个标题提示语'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelTip: '我是一个标题提示语',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelTipPlacement: 'right'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoLabelTip_vue)]),_:1})]),_:1}),s[75]||(s[75]=n("h2",{id:"内容辅助语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内容辅助语"},[n("span",null,"内容辅助语")])],-1)),p(o,{id:"184",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[44]||(s[44]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[45]||(s[45]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[46]||(s[46]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`tip`为提示的内容,`tipPlacement`为提示语的方向，默认为`bottom`"},{code:a(()=>s[47]||(s[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tip: '我是一个默认提示语',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tip: '我是一个左边提示语',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tipPlacement: 'left',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoTip_vue)]),_:1})]),_:1}),s[76]||(s[76]=n("h2",{id:"详情编辑",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#详情编辑"},[n("span",null,"详情编辑")])],-1)),p(o,{id:"197",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[48]||(s[48]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[49]||(s[49]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[50]||(s[50]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`detail`控制是否为详情页"},{code:a(()=>s[51]||(s[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="handle"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             style="margin-left: 20px">{{ title }}</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @submit="submit"></tvue-form>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed, onMounted } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  detail: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 110,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  group: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户信息',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'jbxx',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-edit-outline',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              message: '请输入姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '退款申请',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tksq',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-view',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          dicUrl: `https://cli.avuejs.com/api/area/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '多选',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          type: 'checkbox',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          all: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          dicUrl: 'https://cli.avuejs.com/api/area/getProvince'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '用户信息',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'yhxx',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-edit-outline',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '测试长度',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'len',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          maxlength: 5,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '测试自定义',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'lens',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 3")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const title = computed(() => option.value.detail ? '编 辑' : '保 存');")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handle () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.detail = !option.value.detail;")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function submit () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  console.log('Form submitted with data:', form.value);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    form.value = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: 'small',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      checkbox: ['110000']")]),l(`
`),n("span",{class:"line"},[n("span",null,"    };")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 100);")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDetail_vue)]),_:1})]),_:1}),p(o,{id:"207",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[52]||(s[52]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[53]||(s[53]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[54]||(s[54]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"`detail`控制是否为详情页"},{code:a(()=>s[55]||(s[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="detail = !detail">{{ title }}</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="obj"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @submit="submit">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #datetime="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <span v-if="detail">')]),l(`
`),n("span",{class:"line"},[n("span",null,"        这是我要选择的日期{{ datetime[0] }}年{{ datetime[1] }}月{{ datetime[2] }}日")]),l(`
`),n("span",{class:"line"},[n("span",null,"      </span>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-input v-else")]),l(`
`),n("span",{class:"line"},[n("span",null,'                v-model="obj.datetime"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const detail = ref(true);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const obj = ref({ datetime: '2020-05-01' });")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const datetime = computed(() => obj.value.datetime.split('-'));")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = computed(() => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  detail: detail.value,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '选择日期',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 12,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'datetime',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime',")]),l(`
`),n("span",{class:"line"},[n("span",null,'      format: "YYYY-MM-DD",')]),l(`
`),n("span",{class:"line"},[n("span",null,'      valueFormat: "YYYY-MM-DD"')]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 10,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'divider',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      display: !detail.value,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      component: 'elDivider',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      params: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        html: '这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成这是一大堆的文字介绍，很长 很长 很长成',")]),l(`
`),n("span",{class:"line"},[n("span",null,'        contentPosition: "left",')]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}));")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const title = computed(() => detail.value ? '编辑' : '保存');")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const submit = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(obj.value));")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoDetail2_vue)]),_:1})]),_:1}),s[77]||(s[77]=n("h2",{id:"分组展示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#分组展示"},[n("span",null,"分组展示")])],-1)),s[78]||(s[78]=n("blockquote",null,[n("p",null,"将表单已分组的形式展示")],-1)),p(o,{id:"225",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[56]||(s[56]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[57]||(s[57]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[58]||(s[58]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"用法普通的form组件分组用法一样，在`group`中配置结构体即可"},{code:a(()=>s[59]||(s[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @submit="handleSubmit"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @tab-click="handleTabClick">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #group1-header="{ column }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <svg aria-hidden="true"')]),l(`
`),n("span",{class:"line"},[n("span",null,'           style="width:30px;height:30px;">')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <use xlink:href="#icon-duanxinguanli"></use>')]),l(`
`),n("span",{class:"line"},[n("span",null,"      </svg>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {{ column.label }}")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #text3="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-input placeholder="自定义"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                v-model="form.text3"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text: '文本',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: '文本1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text2: '文本2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text3: '文本3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  group: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-info',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '分组1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      collapse: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'group1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text1'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-info',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '分组2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      arrow: false,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'group2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '选项卡2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text2'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '选项卡3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleSubmit = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(form.value));")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleTabClick = (event) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(event);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoGroup_vue)]),_:1})]),_:1}),s[79]||(s[79]=n("h2",{id:"选项卡展示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#选项卡展示"},[n("span",null,"选项卡展示")])],-1)),s[80]||(s[80]=n("blockquote",null,[n("p",null,"将表单已选项卡的形式展示")],-1)),p(o,{id:"243",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>s[60]||(s[60]=[l("vue2")])),title1:a(({value:i,isActive:u})=>s[61]||(s[61]=[l("vue3")])),tab0:a(({value:i,isActive:u})=>s[62]||(s[62]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[p(t,{type:"vue",desc:"配置`tabs`为true即可开启选项卡,`tabsVerifyAll`是否单独提交，默认为`false`"},{code:a(()=>s[63]||(s[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-button @click="tabs.value = !tabs.value">转化</el-button><br /><br />')]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-form @tab-click="handleTabClick"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @submit="handleSubmit">')]),l(`
`),n("span",{class:"line"},[n("span",null,"    <template #group1-header>")]),l(`
`),n("span",{class:"line"},[n("span",null,"      <h4>自定义表头</h4>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-form>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, computed } from 'vue'")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const tabs = ref(true)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text: '文本',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: '文本1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text2: '文本2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text3: '文本3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"})")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = computed(() => ({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tabs: tabs.value,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  tabsActive: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  group: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-info',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '分组1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'group1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      icon: 'el-icon-info',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '分组2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'group2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '选项卡2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '选项卡3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        prop: 'text3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"}))")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleSubmit () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(form.value))")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done()")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleTabClick (tabs, event) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('序号为:' + tabs.index)")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[p(e.DemoTabs_vue)]),_:1})]),_:1})])}const $n=_(Sn,[["render",Dn],["__file","index.html.vue"]]),Tn=JSON.parse('{"path":"/form/form-layout/","title":"表单布局","lang":"zh-CN","frontmatter":{"title":"表单布局","createTime":"2025/02/06 15:07:57","permalink":"/form/form-layout/"},"headers":[],"readingTime":{"minutes":1.97,"words":590},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-layout.md","bulletin":false}');export{$n as comp,Tn as data};

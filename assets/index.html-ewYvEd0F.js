import{_ as f,b as d,r as b,o as _,h,E as g,i as A,p as D,g as a,a as r,f as s,c as S,e as n,t as $,F as T,d as B}from"./app-Cibr2ptE.js";const O={__name:"dateBtn",setup(m,{expose:l}){l();const t=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"},{text1:"内容3-1",text2:"内容3-2"}]),e=d({dateBtn:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]}),v={data:t,option:e,dateChange:c=>{g.success(JSON.stringify(c))},ref:d,get ElMessage(){return g}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function P(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{ref:"crud",onDateChange:e.dateChange,option:e.option,data:e.data},null,8,["option","data"])}const C=f(O,[["render",P],["__file","dateBtn.vue"]]),y="https://cli.avuejs.com/api/area",M={__name:"cascader",setup(m,{expose:l}){l();const t=d([]),e=d({excelBtn:!0,column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cascader:["city"],search:!0,dicUrl:`${y}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",cascader:["area"],props:{label:"name",value:"code"},search:!0,dicUrl:`${y}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",type:"select",props:{label:"name",value:"code"},search:!0,dicUrl:`${y}/getArea/{{key}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]}),p=d(null);A(()=>{t.value=[{id:1,name:"张三",province:"110000",city:"110100",area:"110101"},{id:2,name:"李四",province:"140000",city:"140600",area:"140623"}],D(()=>{p.value.dicInit("cascader")})});const v={baseUrl:y,data:t,option:e,crud:p,ref:d,onMounted:A,nextTick:D};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function j(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{ref:"crud",option:e.option,data:e.data},null,8,["option","data"])}const N=f(M,[["render",j],["__file","cascader.vue"]]),I={__name:"slot",setup(m,{expose:l}){l();const t=d({}),e=d([{name:"张三",age:18}]),p=d({column:[{label:"姓名",prop:"name",search:!0},{label:"年龄",prop:"age",search:!0}]}),v={search:t,data:e,option:p,ref:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function U(m,l,t,e,p,v){const c=b("el-slider"),o=b("tvue-crud");return _(),h(o,{option:e.option,data:e.data,search:e.search,"onUpdate:search":l[1]||(l[1]=i=>e.search=i)},{"age-search":a(({disabled:i,size:u})=>[r(c,{disabled:i,size:u,value:e.search.age,"onUpdate:value":l[0]||(l[0]=x=>e.search.age=x)},null,8,["disabled","size","value"])]),_:1},8,["option","data","search"])}const z=f(I,[["render",U],["__file","slot.vue"]]),w={__name:"searchMenu",setup(m,{expose:l}){l();const t=d({}),e=d([{name:"张三"}]),p=d({column:[{label:"姓名",prop:"name"},{label:"日期",prop:"date",type:"datetime"}]});function v(o){console.log(o)}const c={search:t,data:e,option:p,searchSubmit:v,ref:d};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function F(m,l,t,e,p,v){const c=b("el-button"),o=b("el-tag"),i=b("el-input"),u=b("tvue-crud");return _(),h(u,{option:e.option,search:e.search,"onUpdate:search":l[1]||(l[1]=x=>e.search=x),data:e.data},{"search-menu":a(({row:x,size:k})=>[r(c,{size:k,onClick:Mn=>e.searchSubmit(x)},{default:a(()=>l[2]||(l[2]=[s("自定义提交")])),_:2},1032,["size","onClick"])]),search:a(({size:x})=>[r(o,null,{default:a(()=>l[3]||(l[3]=[s("标题")])),_:1}),r(i,{placeholder:"自定义输入框",size:x,style:{width:"200px"},value:e.search.slot,"onUpdate:value":l[0]||(l[0]=k=>e.search.slot=k)},null,8,["size","value"])]),_:1},8,["option","search","data"])}const E=f(w,[["render",F],["__file","searchMenu.vue"]]),V={__name:"type",setup(m,{expose:l}){l();const t=[{label:"选项1",value:1},{label:"选项2",value:2}],e=d([{selects:[1,2],select:1}]),p=d({column:[{label:"多选框",prop:"selects",type:"select",multiple:!0,search:!0,searchType:"checkbox",searchSpan:24,dicData:t},{label:"单选框",prop:"select",type:"select",search:!0,searchType:"radio",searchSpan:24,dicData:t}]}),v={dic:t,data:e,option:p,ref:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function q(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const R=f(V,[["render",q],["__file","type.vue"]]),W={__name:"menuSpan",setup(m,{expose:l}){l();const t=d([{text1:"文本1",text2:"文本2"}]),e=d({searchMenuSpan:8,column:[{label:"内容1",prop:"text1",search:!0},{label:"内容2",prop:"text2",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function L(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const J=f(W,[["render",L],["__file","menuSpan.vue"]]),G={__name:"showBtn",setup(m,{expose:l}){l();const t=d([{name:"张三"}]),e=d({searchShowBtn:!1,column:[{label:"姓名",prop:"name",search:!0},{label:"日期",prop:"date",type:"datetime",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function H(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const K=f(G,[["render",H],["__file","showBtn.vue"]]),Q={__name:"tip",setup(m,{expose:l}){l();const t=d([{text1:"文本1",text2:"文本2"}]),e=d({column:[{label:"内容1",prop:"text1",search:!0,searchTip:"我是一个默认提示语"},{label:"内容2",prop:"text2",search:!0,searchTip:"我是一个左边提示语",searchTipPlacement:"left"}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function X(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const Y=f(Q,[["render",X],["__file","tip.vue"]]),Z={__name:"index",setup(m,{expose:l}){l();const t=d([{text1:"文本1",text2:"文本2"}]),e=d({searchIndex:3,searchIcon:!0,column:[{label:"内容1",prop:"text1",search:!0},{label:"内容2",prop:"text2",search:!0},{label:"内容3",prop:"text3",search:!0},{label:"内容4",prop:"text4",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function nn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const sn=f(Z,[["render",nn],["__file","index.vue"]]),ln={__name:"value",setup(m,{expose:l}){l();const t=d([{name:"张三"}]),e=d({column:[{label:"姓名",prop:"name",searchValue:"small",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function en(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const an=f(ln,[["render",en],["__file","value.vue"]]),un={__name:"span",setup(m,{expose:l}){l();const t=d([{name:"张三",date:""}]),e=d({column:[{label:"姓名",prop:"name",search:!0},{label:"日期",prop:"date",type:"datetime",search:!0,searchSpan:18,searchRange:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function cn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const pn=f(un,[["render",cn],["__file","span.vue"]]),rn={__name:"rules",setup(m,{expose:l}){l();const t=d([{name:"张三"}]),e=d({column:[{label:"姓名",prop:"name",search:!0,searchRules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"日期",prop:"date",type:"datetime"}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function tn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const dn=f(rn,[["render",tn],["__file","rules.vue"]]),vn={__name:"filter",setup(m,{expose:l}){l();const t=d({cascader:[0,1],tree:0}),e=d(Math.random()),p=d([{cascader:[0,1],tree:0}]),v=d({column:[{label:"姓名",prop:"name",search:!0},{label:"级别",prop:"cascader",type:"cascader",search:!0,dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"树型",prop:"tree",type:"tree",search:!0,dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]}]}),c=()=>{e.value=Math.random()},x={search:t,reload:e,data:p,option:v,refresh:c,filter:()=>{v.value.searchFilterDic=!1,v.value.searchFilterNull=!1,c()},filterDic:()=>{v.value.searchFilterDic=!0,c()},filterNull:()=>{v.value.searchFilterNull=!0,c()},ref:d};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}};function mn(m,l,t,e,p,v){const c=b("el-button"),o=b("tvue-crud");return _(),S(T,null,[r(c,{type:"danger",onClick:e.filterDic},{default:a(()=>l[1]||(l[1]=[s("过滤数据字典")])),_:1}),r(c,{type:"success",onClick:e.filterNull},{default:a(()=>l[2]||(l[2]=[s("过滤空数据")])),_:1}),r(c,{type:"primary",onClick:e.filter},{default:a(()=>l[3]||(l[3]=[s("不过滤")])),_:1}),n("p",null,$(e.search),1),(_(),h(o,{key:e.reload,data:e.data,search:e.search,"onUpdate:search":l[0]||(l[0]=i=>e.search=i),option:e.option},null,8,["data","search","option"]))],64)}const on=f(vn,[["render",mn],["__file","filter.vue"]]),bn={__name:"order",setup(m,{expose:l}){l();const t=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({column:[{label:"姓名",prop:"name",search:!0},{label:"性别",prop:"sex",search:!0,searchOrder:1}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function _n(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{data:e.data,option:e.option},null,8,["data","option"])}const fn=f(bn,[["render",_n],["__file","order.vue"]]),hn={__name:"labelWidth",setup(m,{expose:l}){l();const t=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({searchLabelWidth:150,column:[{label:"姓名",prop:"name",searchLabelWidth:30,search:!0},{label:"性别",prop:"sex",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function xn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{data:e.data,option:e.option},null,8,["data","option"])}const gn=f(hn,[["render",xn],["__file","labelWidth.vue"]]),yn={__name:"search-change",setup(m,{expose:l}){l();const t=d([{name:"张三"}]),e=d({column:[{label:"姓名",prop:"name",search:!0}]});function p(o){g.success("清空回调")}function v(o,i){g.success("2s后关闭锁定"),setTimeout(()=>{i(),g.success(JSON.stringify(o))},2e3)}const c={data:t,option:e,resetChange:p,searchChange:v,ref:d,get ElMessage(){return g}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function kn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data,onSearchChange:e.searchChange,onSearchReset:e.resetChange},null,8,["option","data"])}const Sn=f(yn,[["render",kn],["__file","search-change.vue"]]),An={__name:"text",setup(m,{expose:l}){l();const t=d([{name:"张三"}]),e=d({searchBtnText:"查询",searchBtnIcon:"el-icon-user",emptyBtnText:"重置",emptyBtnIcon:"el-icon-close",column:[{label:"姓名",prop:"name",search:!0}]}),p={data:t,option:e,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Dn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),h(c,{option:e.option,data:e.data},null,8,["option","data"])}const $n=f(An,[["render",Dn],["__file","text.vue"]]),Tn={__name:"params",setup(m,{expose:l}){l();const t=d({name:"small"}),e=d([{name:"张三"}]),p=d({column:[{label:"姓名",prop:"name",search:!0}]}),v={search:t,data:e,option:p,ref:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function Bn(m,l,t,e,p,v){const c=b("tvue-crud");return _(),S(T,null,[s($(e.search)+" ",1),r(c,{option:e.option,search:e.search,"onUpdate:search":l[0]||(l[0]=o=>e.search=o),data:e.data},null,8,["option","search","data"])],64)}const On=f(Tn,[["render",Bn],["__file","params.vue"]]),Pn={__name:"index.html",setup(m,{expose:l}){l();const t={DemoDateBtn_vue:C,DemoCascader_vue:N,DemoSlot_vue:z,DemoSearchMenu_vue:E,DemoType_vue:R,DemoMenuSpan_vue:J,DemoShowBtn_vue:K,DemoTip_vue:Y,DemoIndex_vue:sn,DemoValue_vue:an,DemoSpan_vue:pn,DemoRules_vue:dn,DemoFilter_vue:on,DemoOrder_vue:fn,DemoLabelWidth_vue:gn,DemoSearch_change_vue:Sn,DemoText_vue:$n,DemoParams_vue:On};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function Cn(m,l,t,e,p,v){const c=b("VPDemoBasic"),o=b("Tabs");return _(),S("div",null,[l[72]||(l[72]=n("h2",{id:"搜索变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索变量"},[n("span",null,"搜索变量")])],-1)),r(o,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`search`变量为搜索的表单对象"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {{ search }}")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model:search="search"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const search = ref({ name: 'small' });")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoParams_vue)]),_:1})]),_:1}),l[73]||(l[73]=n("h2",{id:"搜索按钮文字和图标配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索按钮文字和图标配置"},[n("span",null,"搜索按钮文字和图标配置")])],-1)),r(o,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchBtnText`和`emptyBtnText`为搜索和清空的文字`searchBtnIcon`和`emptyBtnIcon`为搜索和清空的图标"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchBtnText: '查询',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchBtnIcon: 'el-icon-user',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyBtnText: '重置',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  emptyBtnIcon: 'el-icon-close',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoText_vue)]),_:1})]),_:1}),l[74]||(l[74]=n("h2",{id:"搜索方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索方法"},[n("span",null,"搜索方法")])],-1)),r(o,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`search-change`为点击搜索后执行方法，`done`方法为关闭等待框,`search-reset`点击清空的执行方法"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @search-change="searchChange"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @search-reset="resetChange">')]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function resetChange (item) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('清空回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function searchChange (params, done) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('2s后关闭锁定');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success(JSON.stringify(params));")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, 2000);")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSearch_change_vue)]),_:1})]),_:1}),l[75]||(l[75]=n("h2",{id:"搜索字段标题宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索字段标题宽度"},[n("span",null,"搜索字段标题宽度")])],-1)),r(o,{id:"42",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchLabelWidth`为标题的宽度，默认为`110`，可以配置到`option`下作用于全部,也可以单独配置每一项"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchLabelWidth: 150,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchLabelWidth: 30,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoLabelWidth_vue)]),_:1})]),_:1}),l[76]||(l[76]=n("h2",{id:"搜索字段排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索字段排序"},[n("span",null,"搜索字段排序")])],-1)),r(o,{id:"55",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchOrder`为排序字段，不写默认为`0`搜索字段排序不影响表格顺序"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchOrder: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoOrder_vue)]),_:1})]),_:1}),l[77]||(l[77]=n("h2",{id:"搜索过滤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索过滤"},[n("span",null,"搜索过滤")])],-1)),r(o,{id:"68",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="danger"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @click="filterDic">过滤数据字典</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="success"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @click="filterNull">过滤空数据</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'  <el-button type="primary"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @click="filter">不过滤</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"  <p>{{ search }}</p>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :key="reload"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model:search="search"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 初始化响应式数据")]),s(`
`),n("span",{class:"line"},[n("span",null,"const search = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  cascader: [0, 1],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  tree: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    cascader: [0, 1],")]),s(`
`),n("span",{class:"line"},[n("span",null,"    tree: 0")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '级别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 2")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"// 方法定义")]),s(`
`),n("span",{class:"line"},[n("span",null,"const refresh = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const filter = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  option.value.searchFilterDic = false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  option.value.searchFilterNull = false;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const filterDic = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  option.value.searchFilterDic = true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const filterNull = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  option.value.searchFilterNull = true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoFilter_vue)]),_:1})]),_:1}),l[78]||(l[78]=B('<h2 id="搜索验证规则" tabindex="-1"><a class="header-anchor" href="#搜索验证规则"><span>搜索验证规则</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>具体参考<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a></p></div>',2)),r(o,{id:"86",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[24]||(l[24]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[25]||(l[25]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"配置验证字段的`searchRules`的数据对象即可"},{code:a(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchRules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,'          message: "请输入姓名",')]),s(`
`),n("span",{class:"line"},[n("span",null,'          trigger: "blur"')]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoRules_vue)]),_:1})]),_:1}),l[79]||(l[79]=n("h2",{id:"搜索范围和宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索范围和宽度"},[n("span",null,"搜索范围和宽度")])],-1)),r(o,{id:"99",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[28]||(l[28]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[29]||(l[29]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchSpan`搜索框的宽度，`searchRange`配置后可以开启范围搜索"},{code:a(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三', date: '' }]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchSpan: 18,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchRange: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSpan_vue)]),_:1})]),_:1}),l[80]||(l[80]=n("h2",{id:"搜索默认值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#搜索默认值"},[n("span",null,"搜索默认值")])],-1)),r(o,{id:"112",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[32]||(l[32]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[33]||(l[33]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[34]||(l[34]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchValue`为搜索的默认值"},{code:a(()=>l[35]||(l[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchValue: 'small',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoValue_vue)]),_:1})]),_:1}),l[81]||(l[81]=n("h2",{id:"局部展开收缩",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#局部展开收缩"},[n("span",null,"局部展开收缩")])],-1)),r(o,{id:"125",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[36]||(l[36]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[37]||(l[37]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[38]||(l[38]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchIcon`是否启用功能按钮, `searchIndex`配置收缩展示的个数,默认为`2`个"},{code:a(()=>l[39]||(l[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '文本1', text2: '文本2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchIndex: 3,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchIcon: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容4',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text4',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoIndex_vue)]),_:1})]),_:1}),l[82]||(l[82]=n("h2",{id:"辅助提示语",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#辅助提示语"},[n("span",null,"辅助提示语")])],-1)),r(o,{id:"138",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[40]||(l[40]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[41]||(l[41]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[42]||(l[42]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchTip`为提示的内容,`searchTipPlacement`为提示语的方向，默认为`bottom`"},{code:a(()=>l[43]||(l[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '文本1', text2: '文本2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchTip: '我是一个默认提示语',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchTip: '我是一个左边提示语',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchTipPlacement: 'left',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoTip_vue)]),_:1})]),_:1}),l[83]||(l[83]=n("h2",{id:"隐藏搜索折叠按钮",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#隐藏搜索折叠按钮"},[n("span",null,"隐藏搜索折叠按钮")])],-1)),r(o,{id:"151",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[44]||(l[44]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[45]||(l[45]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[46]||(l[46]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchShowBtn`设置为:`false`"},{code:a(()=>l[47]||(l[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchShowBtn: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoShowBtn_vue)]),_:1})]),_:1}),l[84]||(l[84]=n("h2",{id:"按钮是否单独成行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#按钮是否单独成行"},[n("span",null,"按钮是否单独成行")])],-1)),r(o,{id:"164",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[48]||(l[48]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[49]||(l[49]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[50]||(l[50]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"前提的`searchMenuSpan`可以控制搜索按钮的长度"},{code:a(()=>l[51]||(l[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '文本1', text2: '文本2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  searchMenuSpan: 8,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '内容2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'text2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoMenuSpan_vue)]),_:1})]),_:1}),l[85]||(l[85]=n("h2",{id:"定义类型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义类型"},[n("span",null,"定义类型")])],-1)),r(o,{id:"177",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[52]||(l[52]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[53]||(l[53]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[54]||(l[54]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`searchType`属性可以重新定义搜索框的类型"},{code:a(()=>l[55]||(l[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const dic = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { label: '选项1', value: 1 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { label: '选项2', value: 2 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"];")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selects: [1, 2],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  select: 1")]),s(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '多选框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'selects',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      multiple: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchType: 'checkbox',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '单选框',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchType: 'radio',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      searchSpan: 24,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: dic")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoType_vue)]),_:1})]),_:1}),l[86]||(l[86]=n("h2",{id:"自定义搜索卡槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义搜索卡槽"},[n("span",null,"自定义搜索卡槽")])],-1)),r(o,{id:"190",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[56]||(l[56]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[57]||(l[57]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[58]||(l[58]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`search`和`searchMenu`卡槽可以自定义搜索内容，不需要单独设置列`search`:`true`"},{code:a(()=>l[59]||(l[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model:search="search"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #search-menu="{ row, size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="searchSubmit(row)">自定义提交</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #search="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>标题</el-tag>")]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-input placeholder="自定义输入框"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                style="width: 200px"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                v-model:value="search.slot"></el-input>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const search = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三' }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '日期',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'date',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'datetime'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function searchSubmit (row) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(row)")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSearchMenu_vue)]),_:1})]),_:1}),l[87]||(l[87]=n("h2",{id:"自定义列搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义列搜索"},[n("span",null,"自定义列搜索")])],-1)),r(o,{id:"203",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[60]||(l[60]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[61]||(l[61]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[62]||(l[62]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"列的`prop`加`-search`作为卡槽的名称即可开启自定义"},{code:a(()=>l[63]||(l[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             v-model:search="search">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #age-search="{ disabled, size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-slider :disabled="disabled"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 v-model:value="search.age" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const search = ref({});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{ name: '张三', age: 18 }]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'age',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoSlot_vue)]),_:1})]),_:1}),l[88]||(l[88]=n("h2",{id:"多级联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多级联动"},[n("span",null,"多级联动")])],-1)),r(o,{id:"216",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[64]||(l[64]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[65]||(l[65]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[66]||(l[66]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"`cascader`为需要联动的子选择框`prop`值，可以写多个，形成一对多的关系,需要手动调用内部的`dicInit`方法去初始化表格联动数据"},{code:a(()=>l[67]||(l[67]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted, nextTick } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  excelBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请选择省份', trigger: 'blur' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['area'],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请选择城市', trigger: 'blur' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '地区',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'area',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: { label: 'name', value: 'code' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      search: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getArea/{{key}}`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        { required: true, message: '请选择地区', trigger: 'blur' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  data.value = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { id: 1, name: '张三', province: '110000', city: '110100', area: '110101' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { id: 2, name: '李四', province: '140000', city: '140600', area: '140623' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"  //加载完数据后调用")]),s(`
`),n("span",{class:"line"},[n("span",null,"  nextTick(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.dicInit('cascader');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoCascader_vue)]),_:1})]),_:1}),l[89]||(l[89]=n("h2",{id:"单独日期搜索",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#单独日期搜索"},[n("span",null,"单独日期搜索")])],-1)),r(o,{id:"229",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[68]||(l[68]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[69]||(l[69]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[70]||(l[70]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[r(c,{type:"vue",desc:"配置`dateBtn`为`true`即可激活,搜索后回调`date-change`方法"},{code:a(()=>l[71]||(l[71]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @date-change="dateChange"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容3-1', text2: '内容3-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  dateBtn: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const dateChange = (date) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(date));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoDateBtn_vue)]),_:1})]),_:1})])}const Nn=f(Pn,[["render",Cn],["__file","index.html.vue"]]),In=JSON.parse('{"path":"/doc/crud-search/","title":"搜索","lang":"zh-CN","frontmatter":{"title":"搜索","createTime":"2025/2/5 13:24:35","permalink":"/doc/crud-search/"},"headers":[],"readingTime":{"minutes":2.33,"words":700},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-search.md","bulletin":false}');export{Nn as comp,In as data};

import{_ as g,b as d,r as b,o as f,h,E as k,z as x,g as a,f as s,t as w,a as t,c as S,e as n,F as C,d as y}from"./app-Cx0zDz_B.js";const A={__name:"spanMethod",setup(m,{expose:l}){l();const r=d([{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]),e=d({border:!0,menu:!1,column:[{label:"ID",prop:"id"},{label:"姓名",prop:"name"},{label:"数值 1",prop:"amount1"},{label:"数值 2",prop:"amount2"},{label:"数值 3",prop:"amount3"}]});function o({row:p,column:c,rowIndex:i,columnIndex:u}){if(i%2===0){if(u===0)return[1,2];if(u===1)return[0,0]}}const v={data:r,option:e,spanMethod:o,ref:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function D(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option,"span-method":e.spanMethod},null,8,["data","option"])}const R=g(A,[["render",D],["__file","spanMethod.vue"]]),E={__name:"drag",setup(m,{expose:l}){l();const r=d([{text1:"内容1-1",text2:"内容1-2"},{text1:"内容2-1",text2:"内容2-2"},{text1:"内容3-1",text2:"内容3-2"},{text1:"内容4-1",text2:"内容4-2"},{text1:"内容5-1",text2:"内容5-2"}]),e=d({rowSort:!0,column:[{label:"列内容1",prop:"text1"},{label:"列内容2",prop:"text2"}]});function o(p,c){k.success(`${p}, ${c}`),console.log(p,c)}const v={data:r,option:e,sortableChange:o,ref:d,get ElMessage(){return k}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function B(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{option:e.option,data:e.data,onSortableChange:e.sortableChange},null,8,["option","data"])}const $=g(E,[["render",B],["__file","drag.vue"]]),N={__name:"row-dblclick",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),v={data:r,option:e,handleRowDBLClick:(p,c)=>{x({showClose:!0,message:JSON.stringify(p),type:"success"})},ref:d,get ElNotification(){return x}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function M(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option,onRowDblclick:e.handleRowDBLClick},null,8,["data","option"])}const O=g(N,[["render",M],["__file","row-dblclick.vue"]]),z={__name:"row-click",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),v={data:r,option:e,handleRowClick:(p,c,i)=>{x({showClose:!0,message:JSON.stringify(p),type:"success"})},ref:d,get ElNotification(){return x}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function P(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option,onRowClick:e.handleRowClick},null,8,["data","option"])}const I=g(z,[["render",P],["__file","row-click.vue"]]),K={__name:"expand-change",setup(m,{expose:l}){l();const r=d([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:20}]),e=d({expand:!0,expandRowKeys:[],rowKey:"id",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]});function o(p,c){c.length?(e.value.expandRowKeys=[],p&&e.value.expandRowKeys.push(p.id)):e.value.expandRowKeys=[],k.success("展开回调")}const v={data:r,option1:e,expandChanges:o,ref:d,get ElMessage(){return k}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function j(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{ref:"crud",option:e.option1,data:e.data,onExpandChange:e.expandChanges},{expand:a(({row:c})=>[s(w(c),1)]),_:1},8,["option","data"])}const L=g(K,[["render",j],["__file","expand-change.vue"]]),J={__name:"expand",setup(m,{expose:l}){l();const r=d({expand:!0,expandRowKeys:[1],rowKey:"id",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]}),e=d([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:20}]),v={option:r,data:e,expandChange:(p,c)=>{k.success("展开回调")},ref:d,get ElMessage(){return k}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function F(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{ref:"crud",option:e.option,data:e.data,onExpandChange:e.expandChange},{expand:a(({row:c})=>[s(w(c),1)]),_:1},8,["option","data"])}const V=g(J,[["render",F],["__file","expand.vue"]]),T={__name:"radio",setup(m,{expose:l}){l();const r=d(""),e=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),o=d({align:"center",menuAlign:"center",column:[{label:"",prop:"radio",width:60,hide:!1},{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),p={selectRow:r,data:e,option:o,rowClick:c=>{r.value=c.$index,k.success(`选择序号 ${c.$index}`)},ref:d,get ElMessage(){return k}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function q(m,l,r,e,o,v){const p=b("el-radio"),c=b("tvue-crud");return f(),h(c,{ref:"crud",data:e.data,option:e.option,onRowClick:e.rowClick},{radio:a(({row:i})=>[t(p,{modelValue:e.selectRow,"onUpdate:modelValue":l[0]||(l[0]=u=>e.selectRow=u),label:i.$index},{default:a(()=>l[1]||(l[1]=[s("-")])),_:2},1032,["modelValue","label"])]),_:1},8,["data","option"])}const W=g(T,[["render",q],["__file","radio.vue"]]),H={__name:"highlightCurrentRow",setup(m,{expose:l}){l();const r=d(null),e=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),o=d({highlightCurrentRow:!0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={crud:r,data:e,option:o,setCurrent:i=>{r.value.setCurrentRow(i)},handleCurrentRowChange:i=>{x({showClose:!0,message:"单选"+JSON.stringify(i),type:"success"})},ref:d,get ElNotification(){return x}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}},U={style:{"margin-top":"20px"}};function G(m,l,r,e,o,v){const p=b("tvue-crud"),c=b("el-button");return f(),S(C,null,[t(p,{ref:"crud",data:e.data,option:e.option,onCurrentRowChange:e.handleCurrentRowChange},null,8,["data","option"]),n("div",U,[t(c,{onClick:l[0]||(l[0]=i=>e.setCurrent(e.data[1]))},{default:a(()=>l[2]||(l[2]=[s("选中第二行")])),_:1}),t(c,{onClick:l[1]||(l[1]=i=>e.setCurrent())},{default:a(()=>l[3]||(l[3]=[s("取消选择")])),_:1})])],64)}const Q=g(H,[["render",G],["__file","highlightCurrentRow.vue"]]),X={__name:"tip",setup(m,{expose:l}){l();const r=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),e=d({selection:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:e,ref:d};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function Y(m,l,r,e,o,v){const p=b("el-tag"),c=b("tvue-crud");return f(),h(c,{data:e.data,option:e.option},{tip:a(()=>[t(p,{type:"danger"},{default:a(()=>l[0]||(l[0]=[s("自定义内容")])),_:1})]),_:1},8,["data","option"])}const Z=g(X,[["render",Y],["__file","tip.vue"]]),nn={__name:"reserveSelection",setup(m,{expose:l}){l();const r=d({pageSize:2,pageSizes:[2],total:4}),e=d([]),o=d({selection:!0,reserveSelection:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c={page:r,data:e,option:o,onLoad:i=>{i.currentPage===1?e.value=[{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]:i.currentPage===2&&(e.value=[{id:3,name:"王五",sex:"女"},{id:4,name:"赵六",sex:"女"}])},selectionChange:i=>{k.success("选中的数据"+JSON.stringify(i))},ref:d,get ElMessage(){return k}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function sn(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{page:e.page,"onUpdate:page":l[0]||(l[0]=c=>e.page=c),data:e.data,option:e.option,onSelectionChange:e.selectionChange,onOnLoad:e.onLoad},null,8,["page","data","option"])}const ln=g(nn,[["render",sn],["__file","reserveSelection.vue"]]),en={__name:"selectable",setup(m,{expose:l}){l();const r=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),e=d({selection:!0,selectable:(p,c)=>c===1,tip:!1,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),v={data:r,option:e,selectionChange:p=>{k.success("选中的数据",JSON.stringify(p))},ref:d,get ElMessage(){return k}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function an(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{ref:"crud",data:e.data,option:e.option,onSelectionChange:e.selectionChange},null,8,["data","option"])}const un=g(en,[["render",an],["__file","selectable.vue"]]),pn={__name:"selection",setup(m,{expose:l}){l();const r=d(null),e=d([{id:1,name:"张三",sex:"男"},{id:2,name:"李四",sex:"女"}]),o=d({selection:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),u={crud:r,data:e,option:o,toggleAllSelection:()=>{r.value.toggleAllSelection()},toggleSelection:_=>{r.value.toggleSelection(_)},toggleRowSelection:_=>{r.value.toggleRowSelection(_,!0)},selectionChange:_=>{k.success("选中的数据: "+JSON.stringify(_))},ref:d,get ElMessage(){return k}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function cn(m,l,r,e,o,v){const p=b("el-button"),c=b("tvue-crud");return f(),h(c,{ref:"crud",data:e.data,option:e.option,onSelectionChange:e.selectionChange},{"menu-left":a(({size:i})=>[t(p,{type:"success",icon:"el-icon-check",size:i,onClick:e.toggleAllSelection},{default:a(()=>l[3]||(l[3]=[s("选中全部")])),_:2},1032,["size"]),t(p,{type:"success",icon:"el-icon-check",size:i,onClick:l[0]||(l[0]=u=>e.toggleRowSelection(e.data[0]))},{default:a(()=>l[4]||(l[4]=[s("选中第一行")])),_:2},1032,["size"]),t(p,{type:"success",icon:"el-icon-check",size:i,onClick:l[1]||(l[1]=u=>e.toggleSelection([e.data[1]]))},{default:a(()=>l[5]||(l[5]=[s("选中第二行")])),_:2},1032,["size"]),t(p,{type:"danger",icon:"el-icon-delete",size:i,onClick:l[2]||(l[2]=u=>e.toggleSelection())},{default:a(()=>l[6]||(l[6]=[s("取消选择")])),_:2},1032,["size"])]),_:1},8,["data","option"])}const tn=g(pn,[["render",cn],["__file","selection.vue"]]),rn={__name:"row-class-name",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),v={data:r,option:e,tableRowClassName:({row:p,rowIndex:c})=>c===0?"warning-row":c===1?"success-row":"",ref:d};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function dn(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option,"row-class-name":e.tableRowClassName},null,8,["data","option"])}const on=g(rn,[["render",dn],["__file","row-class-name.vue"]]),vn={__name:"cell-style",setup(m,{expose:l}){l();const r=d([{id:1,name:"张三",money:3e3},{id:2,name:"李四",sex:!1,money:4e3},{id:3,name:"王五",sex:!1,money:2e3}]),e=d({column:[{label:"姓名",prop:"name"},{label:"工资",prop:"money"}]});function o({row:c,column:i,rowIndex:u}){return u%2===0?{backgroundColor:"#eee",color:"#fff"}:{}}function v({row:c,column:i,rowIndex:u,columnIndex:_}){return _===1?c.money<=3e3?{color:"green",fontWeight:"bold",fontSize:"20px"}:{color:"red",fontWeight:"bold",fontSize:"20px"}:{}}const p={data:r,option:e,rowStyle:o,cellStyle:v,ref:d};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function mn(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option,"cell-style":e.cellStyle,"row-style":e.rowStyle},null,8,["data","option"])}const bn=g(vn,[["render",mn],["__file","cell-style.vue"]]),gn={__name:"stripe",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({stripe:!0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:e,ref:d};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function fn(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option},null,8,["data","option"])}const hn=g(gn,[["render",fn],["__file","stripe.vue"]]),kn={__name:"border",setup(m,{expose:l}){l();const r=d([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=d({border:!0,align:"center",menuAlign:"center",column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),o={data:r,option:e,ref:d};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function _n(m,l,r,e,o,v){const p=b("tvue-crud");return f(),h(p,{data:e.data,option:e.option},null,8,["data","option"])}const xn=g(kn,[["render",_n],["__file","border.vue"]]),yn={__name:"index.html",setup(m,{expose:l}){l();const r={DemoSpanMethod_vue:R,DemoDrag_vue:$,DemoRow_dblclick_vue:O,DemoRow_click_vue:I,DemoExpand_change_vue:L,DemoExpand_vue:V,DemoRadio_vue:W,DemoHighlightCurrentRow_vue:Q,DemoTip_vue:Z,DemoReserveSelection_vue:ln,DemoSelectable_vue:un,DemoSelection_vue:tn,DemoRow_class_name_vue:on,DemoCell_style_vue:bn,DemoStripe_vue:hn,DemoBorder_vue:xn};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function wn(m,l,r,e,o,v){const p=b("VPDemoBasic"),c=b("Tabs");return f(),S("div",null,[l[64]||(l[64]=n("h2",{id:"边框",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#边框"},[n("span",null,"边框")])],-1)),t(c,{id:"3",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"默认情况下，是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用"},{code:a(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
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
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoBorder_vue)]),_:1})]),_:1}),l[65]||(l[65]=n("h2",{id:"条纹",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#条纹"},[n("span",null,"条纹")])],-1)),t(c,{id:"16",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"默认情况下，是不具有行彩色条纹的，如果需要，可以使用`stripe`属性，它接受一个`Boolean`，设置为`true`即可启用"},{code:a(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  stripe: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoStripe_vue)]),_:1})]),_:1}),l[66]||(l[66]=n("h2",{id:"行和单元格样式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行和单元格样式"},[n("span",null,"行和单元格样式")])],-1)),t(c,{id:"29",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[8]||(l[8]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[9]||(l[9]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[10]||(l[10]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"对开开放了`cell-style`和`row-style`方法"},{code:a(()=>l[11]||(l[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :cell-style="cellStyle"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :row-style="rowStyle"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', money: 3000 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: false, money: 4000 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 3, name: '王五', sex: false, money: 2000 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '工资', prop: 'money' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function rowStyle ({ row, column, rowIndex }) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (rowIndex % 2 === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return { backgroundColor: '#eee', color: '#fff' };")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return {};")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function cellStyle ({ row, column, rowIndex, columnIndex }) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (columnIndex === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (row.money <= 3000) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        color: 'green',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fontWeight: 'bold',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fontSize: '20px'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        color: 'red',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fontWeight: 'bold',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        fontSize: '20px'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      };")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return {};")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoCell_style_vue)]),_:1})]),_:1}),l[67]||(l[67]=y(`<h2 id="自定义行样式" tabindex="-1"><a class="header-anchor" href="#自定义行样式"><span>自定义行样式</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">warning-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">f56c6c</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> !important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">fff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">success-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">67c23a</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> !important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">fff</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">warning-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover-row</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> td</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">success-row</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">hover-row</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> td</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> initial</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> !important</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(c,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[12]||(l[12]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[13]||(l[13]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[14]||(l[14]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"可以通过指定 组件的 `row-class-name` 属性来为 crud 中的某一行添加 class，表明该行处于某种状态,返回当前行的`row`数据和行的序号`index`"},{code:a(()=>l[15]||(l[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :row-class-name="tableRowClassName"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const tableRowClassName = ({ row, rowIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (rowIndex === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return 'warning-row';")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else if (rowIndex === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    return 'success-row';")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return '';")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRow_class_name_vue)]),_:1})]),_:1}),l[68]||(l[68]=n("h2",{id:"行多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行多选"},[n("span",null,"行多选")])],-1)),t(c,{id:"56",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[16]||(l[16]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[17]||(l[17]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[18]||(l[18]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设`selection`属性为`true`即可；勾选的同时会回调`selectionChange`方法返回当前选中的数据,`toggleRowSelection`方法设置行勾选,`toggleAllSelection`方法设置全部勾选"},{code:a(()=>l[19]||(l[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @selection-change="selectionChange">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-left="{ size }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="toggleAllSelection">选中全部</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="toggleRowSelection(data[0])">选中第一行</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="toggleSelection([data[1]])">选中第二行</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="danger"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-delete"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 :size="size"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                 @click="toggleSelection()">取消选择</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const toggleAllSelection = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.toggleAllSelection();")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const toggleSelection = (data) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.toggleSelection(data);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const toggleRowSelection = (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.toggleRowSelection(row, true);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectionChange = (list) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('选中的数据: ' + JSON.stringify(list));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSelection_vue)]),_:1})]),_:1}),l[69]||(l[69]=n("h2",{id:"禁止某个项选择",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#禁止某个项选择"},[n("span",null,"禁止某个项选择")])],-1)),t(c,{id:"69",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[20]||(l[20]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[21]||(l[21]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[22]||(l[22]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`selectable`函数决定该行是否可以勾选"},{code:a(()=>l[23]||(l[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @selection-change="selectionChange" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectable: (row, index) => index === 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  tip: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectionChange = (list) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('选中的数据', JSON.stringify(list));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSelectable_vue)]),_:1})]),_:1}),l[70]||(l[70]=n("h2",{id:"翻页多选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#翻页多选"},[n("span",null,"翻页多选")])],-1)),t(c,{id:"82",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[24]||(l[24]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[25]||(l[25]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[26]||(l[26]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`reserveSelection`为`true`保留之前的勾选"},{code:a(()=>l[27]||(l[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud v-model:page="page"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @selection-change="selectionChange"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @on-load="onLoad" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const page = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  pageSize: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  pageSizes: [2],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  total: 4,")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  reserveSelection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const onLoad = (page) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (page.currentPage === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { id: 2, name: '李四', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else if (page.currentPage === 2) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    data.value = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { id: 3, name: '王五', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      { id: 4, name: '赵六', sex: '女' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectionChange = (list) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('选中的数据' + JSON.stringify(list));")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoReserveSelection_vue)]),_:1})]),_:1}),l[71]||(l[71]=n("h2",{id:"多选提示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多选提示"},[n("span",null,"多选提示")])],-1)),t(c,{id:"95",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[28]||(l[28]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[29]||(l[29]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[30]||(l[30]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"设置`tip`为`false`可以取消表格上方显示的提示，同时支持对应的卡槽自定义"},{code:a(()=>l[31]||(l[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),s(`
`),n("span",{class:"line"},[n("span",null,"    <template #tip>")]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-tag type="danger">自定义内容</el-tag>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),s(`
`),n("span",{class:"line"},[n("span",null,"  id: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"}, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  id: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"}])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selection: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoTip_vue)]),_:1})]),_:1}),l[72]||(l[72]=n("h2",{id:"行单选",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行单选"},[n("span",null,"行单选")])],-1)),t(c,{id:"108",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[32]||(l[32]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[33]||(l[33]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[34]||(l[34]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"单选一行数据时需要设置`highlightCurrentRow`属性为`true`,回调`current-row-change`方法,同时返回当前行的`row`数据"},{code:a(()=>l[35]||(l[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @current-row-change="handleCurrentRowChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,'  <div style="margin-top: 20px">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <el-button @click="setCurrent(data[1])">选中第二行</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <el-button @click="setCurrent()">取消选择</el-button>')]),s(`
`),n("span",{class:"line"},[n("span",null,"  </div>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElNotification } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  highlightCurrentRow: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const setCurrent = (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.setCurrentRow(row);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleCurrentRowChange = (val) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElNotification({")]),s(`
`),n("span",{class:"line"},[n("span",null,"    showClose: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    message: '单选' + JSON.stringify(val),")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'success'")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoHighlightCurrentRow_vue)]),_:1})]),_:1}),l[73]||(l[73]=n("h2",{id:"行单选-利用卡槽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行单选-利用卡槽"},[n("span",null,"行单选(利用卡槽)")])],-1)),t(c,{id:"121",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[36]||(l[36]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[37]||(l[37]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[38]||(l[38]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"这里利用了列自定义卡槽方式去实现行单选"},{code:a(()=>l[39]||(l[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-click="rowClick">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #radio="{ row }">')]),s(`
`),n("span",{class:"line"},[n("span",null,'      <el-radio v-model="selectRow"')]),s(`
`),n("span",{class:"line"},[n("span",null,'                :label="row.$index">-</el-radio>')]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const selectRow = ref('');")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '', prop: 'radio', width: 60, hide: false },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowClick = (row) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  selectRow.value = row.$index;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(`选择序号 ${row.$index}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRadio_vue)]),_:1})]),_:1}),l[74]||(l[74]=n("h2",{id:"展开行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#展开行"},[n("span",null,"展开行")])],-1)),t(c,{id:"134",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[40]||(l[40]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[41]||(l[41]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[42]||(l[42]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"使用`expand`属性时必须配置`rowKey`属性为你行数据的主键，不能重复, `defaultExpandAll`属性默认展开全部,`expandRowKeys`为展开指定`rowKey`主键的数组，同时你也可以调用`toggleRowExpansion`方法传入你要展开的`row`"},{code:a(()=>l[43]||(l[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @expand-change="expandChange">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #expand="{ row }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      {{ row }}")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expand: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandRowKeys: [1],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'id',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: 12")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: 20")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const expandChange = (row, expendList) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('展开回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoExpand_vue)]),_:1})]),_:1}),l[75]||(l[75]=n("h2",{id:"展开行-手风琴模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#展开行-手风琴模式"},[n("span",null,"展开行(手风琴模式)")])],-1)),t(c,{id:"147",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[44]||(l[44]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[45]||(l[45]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[46]||(l[46]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`expand-change`配置`expandRowKeys`去使用"},{code:a(()=>l[47]||(l[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option1"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @expand-change="expandChanges">')]),s(`
`),n("span",{class:"line"},[n("span",null,'    <template #expand="{ row }">')]),s(`
`),n("span",{class:"line"},[n("span",null,"      {{ row }}")]),s(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'; // 根据实际使用的库导入消息组件")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 1, name: '张三', sex: 12 },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { id: 2, name: '李四', sex: 20 }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option1 = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expand: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  expandRowKeys: [],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'id',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function expandChanges (row, expandList) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (expandList.length) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    option1.value.expandRowKeys = [];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (row) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      option1.value.expandRowKeys.push(row.id);")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    option1.value.expandRowKeys = [];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('展开回调');")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoExpand_change_vue)]),_:1})]),_:1}),l[76]||(l[76]=n("h2",{id:"行单击方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行单击方法"},[n("span",null,"行单击方法")])],-1)),t(c,{id:"160",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[48]||(l[48]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[49]||(l[49]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[50]||(l[50]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"单击一行数据时回调`row-click`方法,同时返回当前行的`row`数据,`event`当前的操作对象,`column`当前列的属性"},{code:a(()=>l[51]||(l[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-click="handleRowClick"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElNotification } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleRowClick = (row, event, column) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElNotification({")]),s(`
`),n("span",{class:"line"},[n("span",null,"    showClose: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    message: JSON.stringify(row),")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'success',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRow_click_vue)]),_:1})]),_:1}),l[77]||(l[77]=n("h2",{id:"行双击方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#行双击方法"},[n("span",null,"行双击方法")])],-1)),t(c,{id:"173",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[52]||(l[52]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[53]||(l[53]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[54]||(l[54]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"双击一行数据时回调`row-dblclick`方法,同时返回当前行的`row`数据,`event`当前的操作对象,`column`当前列的属性"},{code:a(()=>l[55]||(l[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @row-dblclick="handleRowDBLClick"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElNotification } from 'element-plus';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const handleRowDBLClick = (row, event) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElNotification({")]),s(`
`),n("span",{class:"line"},[n("span",null,"    showClose: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    message: JSON.stringify(row),")]),s(`
`),n("span",{class:"line"},[n("span",null,"    type: 'success',")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoRow_dblclick_vue)]),_:1})]),_:1}),l[78]||(l[78]=y(`<h2 id="行拖拽排序" tabindex="-1"><a class="header-anchor" href="#行拖拽排序"><span>行拖拽排序</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),t(c,{id:"187",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[56]||(l[56]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[57]||(l[57]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[58]||(l[58]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"`rowSort`设置为`true`即可开启拖拽功能，`sortable-change`为拖拽后的回调方法,数据中需要包含`rowKey`主键，默认为`id`"},{code:a(()=>l[59]||(l[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             @sortable-change="sortableChange"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus'; // 或根据实际使用的库导入消息组件")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容1-1', text2: '内容1-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容2-1', text2: '内容2-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容3-1', text2: '内容3-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容4-1', text2: '内容4-2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { text1: '内容5-1', text2: '内容5-2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowSort: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容1', prop: 'text1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '列内容2', prop: 'text2' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"function sortableChange (oldIndex, newIndex) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(`${oldIndex}, ${newIndex}`);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  console.log(oldIndex, newIndex);")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoDrag_vue)]),_:1})]),_:1}),l[79]||(l[79]=y('<h2 id="行合并" tabindex="-1"><a class="header-anchor" href="#行合并"><span>行合并</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果数据不确定参考<a href="/crud/crud-rc.html" target="_blank" rel="noopener noreferrer">动态数据行和列合并</a></p></div>',2)),t(c,{id:"205",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:u})=>l[60]||(l[60]=[s("vue2")])),title1:a(({value:i,isActive:u})=>l[61]||(l[61]=[s("vue3")])),tab0:a(({value:i,isActive:u})=>l[62]||(l[62]=[n("p",null,null,-1)])),tab1:a(({value:i,isActive:u})=>[t(p,{type:"vue",desc:"通过给传入`spanMethod`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象"},{code:a(()=>l[63]||(l[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :span-method="spanMethod"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987122',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '234',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '3.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987123',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '165',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.43',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 12")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987124',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '324',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '1.9',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 9")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987125',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '621',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '2.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 17")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    id: '12987126',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"])")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  menu: false,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: 'ID',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount1'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount2'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '数值 3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'amount3'")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"})")]),s(`
`),n("span",{class:"line"},[n("span",null,"function spanMethod ({ row, column, rowIndex, columnIndex }) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  if (rowIndex % 2 === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (columnIndex === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return [1, 2]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    } else if (columnIndex === 1) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return [0, 0]")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"}")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[t(e.DemoSpanMethod_vue)]),_:1})]),_:1})])}const Cn=g(yn,[["render",wn],["__file","index.html.vue"]]),An=JSON.parse('{"path":"/doc/crud-row/","title":"表格行配置项","lang":"zh-CN","frontmatter":{"title":"表格行配置项","createTime":"2025/2/5 13:53:08","permalink":"/doc/crud-row/"},"headers":[],"readingTime":{"minutes":3.17,"words":951},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-row.md","bulletin":false}');export{Cn as comp,An as data};

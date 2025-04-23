import{_ as y,b as m,i as A,r as b,o as D,h as g,g as i,a as t,f as l,e as n,A as k,c as I}from"./app-Cibr2ptE.js";const C={__name:"crud",setup(h,{expose:s}){s();const d=m({}),e=m([{value:0,label:"一级部门",children:[{value:1,label:"一级部门1"}]}]),f={defaultExpandAll:!0,formOption:{labelWidth:100,column:[{label:"自定义项",prop:"test"}]},props:{labelText:"标题",label:"label",value:"value",children:"children"}},v=m([]),p=[{name:"张三",sex:"男"}],r=[{name:"李四2",sex:"女"}],a={column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]};A(()=>{v.value=p});const _={obj:d,treeData:e,treeOption:f,loadData:v,loadData1:p,loadData2:r,loadOption:a,nodeClick:o=>{o.value==0?v.value=p:o.value==1&&(v.value=r),console.log(JSON.stringify(o))},ref:m,onMounted:A};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}};function S(h,s,d,e,f,v){const p=b("tvue-tree"),r=b("el-aside"),a=b("tvue-crud"),u=b("el-main"),_=b("el-container");return D(),g(_,null,{default:i(()=>[t(r,{width:"200px"},{default:i(()=>[t(p,{option:e.treeOption,data:e.treeData,onNodeClick:e.nodeClick},null,8,["data"])]),_:1}),t(u,null,{default:i(()=>[t(a,{data:e.loadData,option:e.loadOption,modelValue:e.obj,"onUpdate:modelValue":s[0]||(s[0]=o=>e.obj=o)},null,8,["data","modelValue"])]),_:1})]),_:1})}const z=y(C,[["render",S],["__file","crud.vue"]]),L={__name:"lazy",setup(h,{expose:s}){s();const d=m(null),e=m(void 0),f={lazy:!0,rowKey:"id",column:[{label:"姓名",prop:"name"},{label:"日期",prop:"date"},{label:"地址",prop:"address",overHidden:!0}]},v=m([{id:1,date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{id:2,date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{id:3,date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0},{id:4,date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]);function p(c,x,w){w(c)}function r(c,x){c.parentId=e.value,c.id=new Date().getTime(),e.value=void 0,x(c)}function a(c,x,w){w(c)}function u(c){e.value=c.id,d.value.rowAdd()}function _(c,x,w){setTimeout(()=>{w([{id:new Date().getTime(),date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",hasChildren:!0}])},1e3)}const o={crud:d,parentId:e,option1:f,data1:v,rowDel:p,rowSave:r,rowUpdate:a,handleAdd:u,treeLoad:_,ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function O(h,s,d,e,f,v){const p=b("el-button"),r=b("tvue-crud");return D(),g(r,{ref:"crud",option:e.option1,data:e.data1,onTreeLoad:e.treeLoad,onRowSave:e.rowSave,onRowUpdate:e.rowUpdate},{menu:i(({row:a,size:u})=>[t(p,{size:u,text:"",type:"primary",onClick:_=>e.handleAdd(a)},{default:i(()=>s[0]||(s[0]=[l("新增子级")])),_:2},1032,["size","onClick"])]),_:1},8,["data"])}const T=y(L,[["render",O],["__file","lazy.vue"]]),U={__name:"base",setup(h,{expose:s}){s();const d=m(null),e=m(void 0),f=m({}),v=m([{id:10,event:"事件1",timeLine:50,comment:"无"},{id:1,event:"事件1",timeLine:100,comment:"无",children:[{parentId:1,id:2,event:"事件2",timeLine:10,comment:"无"},{parentId:1,id:3,event:"事件3",timeLine:90,comment:"无",children:[{parentId:3,id:4,event:"事件4",timeLine:5,comment:"无"},{parentId:3,id:5,event:"事件5",timeLine:10,comment:"无"}]}]}]),o={crud:d,parentId:e,form:f,data:v,option:{headerAlign:"center",align:"center",border:!0,index:!0,rowKey:"id",rowParentKey:"parentId",column:[{label:"事件",prop:"event",align:"left",width:200},{label:"时间线",prop:"timeLine"},{label:"备注",prop:"comment"}]},rowDel:(c,x,w)=>{w(c)},rowSave:(c,x)=>{c.parentId=e.value,c.id=new Date().getTime(),e.value=void 0,x(c)},rowUpdate:(c,x,w)=>{w(c)},handleAdd:c=>{e.value=c.id,d&&d.value.rowAdd()},ref:m};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function P(h,s,d,e,f,v){const p=b("el-button"),r=b("tvue-crud");return D(),g(r,{modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=a=>e.form=a),option:e.option,data:e.data,ref:"crud",onRowSave:e.rowSave,onRowUpdate:e.rowUpdate,onRowDel:e.rowDel},{icon:i(({row:a})=>[n("i",{class:k(a.icon),style:{"font-size":"24px"}},null,2)]),menu:i(({row:a,size:u})=>[t(p,{size:u,text:"",type:"primary",onClick:_=>e.handleAdd(a)},{default:i(()=>s[1]||(s[1]=[l("新增子级")])),_:2},1032,["size","onClick"])]),_:1},8,["modelValue","data"])}const V=y(U,[["render",P],["__file","base.vue"]]),K={__name:"index.html",setup(h,{expose:s}){s();const d={DemoCrud_vue:z,DemoLazy_vue:T,DemoBase_vue:V};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function N(h,s,d,e,f,v){const p=b("VPDemoBasic"),r=b("Tabs");return D(),I("div",null,[s[12]||(s[12]=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"提示"),n("ul",null,[n("li",null,"配置rowKey主键(默认为id)"),n("li",null,"配置rowParentKey父类主键(默认为parentId)")])],-1)),s[13]||(s[13]=n("h2",{id:"普通用法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#普通用法"},[n("span",null,"普通用法")])],-1)),t(r,{id:"17",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:u})=>s[0]||(s[0]=[l("vue2")])),title1:i(({value:a,isActive:u})=>s[1]||(s[1]=[l("vue3")])),tab0:i(({value:a,isActive:u})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:u})=>[t(p,{type:"vue",desc:"`defaultExpandAll`属性是否全部展开,其他用法和普通crud一致,一定要配置`rowKey`主键和`rowParentKey`父类主键，如果非懒加载树形不显示，删除据中`hasChildren`字段"},{code:i(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="rowUpdate"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-del="rowDel">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #icon="{ row }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <i :class="row.icon"')]),l(`
`),n("span",{class:"line"},[n("span",null,'         style="font-size:24px"></i>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{ row, size }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 text")]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleAdd(row)">新增子级</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),l(`
`),n("span",{class:"line"},[n("span",null,"const parentId = ref(undefined);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 10,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    event: '事件1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    timeLine: 50,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    comment: '无'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    event: '事件1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    timeLine: 100,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    comment: '无',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        parentId: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        event: '事件2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        timeLine: 10,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        comment: '无'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        parentId: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        id: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        event: '事件3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        timeLine: 90,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        comment: '无',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            parentId: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            id: 4,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            event: '事件4',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            timeLine: 5,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            comment: '无'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            parentId: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            id: 5,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            event: '事件5',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            timeLine: 10,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            comment: '无'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  headerAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  index: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'id',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  rowParentKey: 'parentId',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '事件',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'event',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      align: 'left',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      width: 200")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '时间线',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'timeLine'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '备注',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'comment'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowDel = (row, index, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (row, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  row.parentId = parentId.value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  row.id = new Date().getTime();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  parentId.value = undefined;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowUpdate = (row, index, done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleAdd = (row) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  parentId.value = row.id;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (crud) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.rowAdd();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoBase_vue)]),_:1})]),_:1}),s[14]||(s[14]=n("h2",{id:"表格树懒加载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表格树懒加载"},[n("span",null,"表格树懒加载")])],-1)),t(r,{id:"30",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:u})=>s[4]||(s[4]=[l("vue2")])),title1:i(({value:a,isActive:u})=>s[5]||(s[5]=[l("vue3")])),tab0:i(({value:a,isActive:u})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:u})=>[t(p,{type:"vue",desc:"`lazy`为`true`,同时接受`tree-load`函数的回调即可，通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点"},{code:i(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option1"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data1"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @tree-load="treeLoad"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="rowUpdate">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu="{row, size}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button :size="size"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 text")]),l(`
`),n("span",{class:"line"},[n("span",null,'                 type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleAdd(row)">新增子级</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const parentId = ref(undefined);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option1 = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  lazy: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  rowKey: 'id',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '日期',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'date'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '地址',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'address',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    overHidden: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data1 = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    date: '2016-05-02',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    address: '上海市普陀区金沙江路 1518 弄'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    date: '2016-05-04',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    address: '上海市普陀区金沙江路 1517 弄'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 3,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    date: '2016-05-01',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    address: '上海市普陀区金沙江路 1519 弄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    hasChildren: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 4,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    date: '2016-05-03',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    address: '上海市普陀区金沙江路 1516 弄'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowDel (row, index, done) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowSave (row, done) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  row.parentId = parentId.value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  row.id = new Date().getTime();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  parentId.value = undefined;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function rowUpdate (row, index, done) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done(row);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function handleAdd (row) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  parentId.value = row.id;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowAdd();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function treeLoad (tree, treeNode, resolve) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    resolve([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      id: new Date().getTime(),")]),l(`
`),n("span",{class:"line"},[n("span",null,"      date: '2016-05-01',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      name: '王小虎',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      address: '上海市普陀区金沙江路 1519 弄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      hasChildren: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoLazy_vue)]),_:1})]),_:1}),s[15]||(s[15]=n("h2",{id:"左树右表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#左树右表"},[n("span",null,"左树右表")])],-1)),t(r,{id:"43",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:i(({value:a,isActive:u})=>s[8]||(s[8]=[l("vue2")])),title1:i(({value:a,isActive:u})=>s[9]||(s[9]=[l("vue3")])),tab0:i(({value:a,isActive:u})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:i(({value:a,isActive:u})=>[t(p,{type:"vue",desc:"这是`tree`组件和`crud`组件的结合使用，主要是用`nodeClick`回调刷新`crud`数据"},{code:i(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <el-container>")]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-aside width="200px">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <tvue-tree :option="treeOption"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :data="treeData"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @node-click="nodeClick"></tvue-tree>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </el-aside>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    <el-main>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <tvue-crud :data="loadData"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 :option="loadOption"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 v-model="obj"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </el-main>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </el-container>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const obj = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const treeData = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '一级部门',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        label: '一级部门1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const treeOption = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  defaultExpandAll: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  formOption: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    labelWidth: 100,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '自定义项',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'test'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"  },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    labelText: '标题',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: 'label',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    value: 'value',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    children: 'children'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loadData = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loadData1 = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loadData2 = [")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"];")]),l(`
`),n("span",{class:"line"},[n("span",null,"const loadOption = {")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  loadData.value = loadData1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const nodeClick = (data) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (data.value == 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loadData.value = loadData1;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else if (data.value == 1) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loadData.value = loadData2;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  console.log(JSON.stringify(data));")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:i(()=>[t(e.DemoCrud_vue)]),_:1})]),_:1})])}const B=y(K,[["render",N],["__file","index.html.vue"]]),R=JSON.parse('{"path":"/doc/crud-tree/","title":"表格树","lang":"zh-CN","frontmatter":{"title":"表格树","createTime":"2025/02/06 09:26:50","permalink":"/doc/crud-tree/"},"headers":[],"readingTime":{"minutes":0.66,"words":198},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-tree.md","bulletin":false}');export{B as comp,R as data};

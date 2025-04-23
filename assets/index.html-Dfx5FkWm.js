import{_ as S,b as h,i as A,r as y,o as C,h as E,c as M,a as k,g as b,f as s,e as n}from"./app-Cibr2ptE.js";const B={__name:"crud-rc",setup(w,{expose:a}){a();const i=h([{name:"王小虎",sex:"男",grade:"级别1",amount1:"234",amount2:"3.2",amount3:10},{name:"王小虎",sex:"男",grade:"级别2",amount1:"165",amount2:"4.43",amount3:12},{name:"王三虎",sex:"女",grade:"级别2",amount1:"539",amount2:"4.1",amount3:15},{name:"王三虎",sex:"女",grade:"级别1",amount1:"539",amount2:"4.1",amount3:15},{name:"王小虎",sex:"男",grade:"级别3",amount1:"324",amount2:"1.9",amount3:9},{name:"王小虎",sex:"女",grade:"级别1",amount1:"621",amount2:"2.2",amount3:17},{name:"王小虎",sex:"女",grade:"级别1",amount1:"539",amount2:"4.1",amount3:15},{name:"王大虎",sex:"男",grade:"级别2",amount1:"539",amount2:"4.1",amount3:15},{name:"王小虎",sex:"男",grade:"级别1",amount1:"539",amount2:"4.1",amount3:15},{name:"王大虎",sex:"女",grade:"级别2",amount1:"539",amount2:"4.1",amount3:15}]),t=h({border:!0,column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"},{label:"数值 1",prop:"amount1"},{label:"数值 2",prop:"amount2"},{label:"数值 3",prop:"amount3"},{label:"权限",prop:"grade"}]}),p=h([{prop:"name",span:[]},{prop:"sex",span:[]},{prop:"grade",span:[]}]),_=()=>{p.value.forEach((u,c)=>{let l;c!==0&&(l=p.value[u.parent||c-1].span),u.span=x(u.prop,l)})},d=()=>{p.value.map(u=>u.prop),p.value.forEach((u,c)=>{let l=u.prop;i.value=i.value.sort((r,m)=>{let e=!0;for(let v=0;v<c;v++){let g=p.value[v].prop;e=e&&r[g]==m[g]}return e?r[l]<m[l]?1:r[l]>m[l]?-1:0:0})})},x=(u,c)=>{let l=[],r=0;return i.value.forEach((m,e)=>{e===0?(l.push(1),r=0):i.value[e][u]===i.value[e-1][u]?c&&c[e]!==0?(l.push(1),r=e):(l[r]+=1,l.push(0)):(l.push(1),r=e)}),l},f=({row:u,column:c,rowIndex:l,columnIndex:r})=>{for(let m=0;m<p.value.length;m++){const e=p.value[m];if(c.property==e.prop){const v=e.span[l],g=v>0?1:0;return{rowspan:v,colspan:g}}}};A(()=>{d(),_()});const o={data:i,option:t,spanArr:p,rowCalc:_,rowSort:d,rowSpan:x,spanMethod:f,ref:h,onMounted:A};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function T(w,a,i,t,p,_){const d=y("tvue-crud");return C(),E(d,{data:t.data,option:t.option,"span-method":t.spanMethod},null,8,["data","option"])}const $=S(B,[["render",T],["__file","crud-rc.vue"]]),N={__name:"index.html",setup(w,{expose:a}){a();const i={DemoCrud_rc_vue:$};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function P(w,a,i,t,p,_){const d=y("VPDemoBasic"),x=y("Tabs");return C(),M("div",null,[k(x,{id:"0",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:b(({value:f,isActive:o})=>a[0]||(a[0]=[s("vue2")])),title1:b(({value:f,isActive:o})=>a[1]||(a[1]=[s("vue3")])),tab0:b(({value:f,isActive:o})=>a[2]||(a[2]=[n("p",null,null,-1)])),tab1:b(({value:f,isActive:o})=>[k(d,{type:"vue"},{code:b(()=>a[3]||(a[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :span-method="spanMethod"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '234',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '3.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 10")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '165',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.43',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 12")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王三虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王三虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别3',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '324',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '1.9',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 9")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '621',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '2.2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 17")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王大虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王小虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    name: '王大虎',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    grade: '级别2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount1: '539',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount2: '4.1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    amount3: 15")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  border: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '年龄', prop: 'sex' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '数值 1', prop: 'amount1' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '数值 2', prop: 'amount2' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '数值 3', prop: 'amount3' },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    { label: '权限', prop: 'grade' }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"const spanArr = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { prop: 'name', span: [] },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { prop: 'sex', span: [] },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  { prop: 'grade', span: [] }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowCalc = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  spanArr.value.forEach((ele, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let parent;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (index !== 0) parent = spanArr.value[ele.parent || index - 1].span;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    ele.span = rowSpan(ele.prop, parent);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowSort = () => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let propList = spanArr.value.map(ele => ele.prop);")]),s(`
`),n("span",{class:"line"},[n("span",null,"  spanArr.value.forEach((ele, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    let key = ele.prop;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    data.value = data.value.sort((a, b) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      let flag = true;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      for (let i = 0; i < index; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        let prop = spanArr.value[i].prop;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        flag = flag && a[prop] == b[prop];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (flag) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (a[key] < b[key]) { return 1; }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        else if (a[key] > b[key]) { return -1; }")]),s(`
`),n("span",{class:"line"},[n("span",null,"        return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    });")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const rowSpan = (key, parent) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let list = [];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  let position = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"  data.value.forEach((item, index) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (index === 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      list.push(1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"      position = 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      if (data.value[index][key] === data.value[index - 1][key]) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        if (parent && parent[index] !== 0) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          list.push(1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"          position = index;")]),s(`
`),n("span",{class:"line"},[n("span",null,"        } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          list[position] += 1;")]),s(`
`),n("span",{class:"line"},[n("span",null,"          list.push(0);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        list.push(1);")]),s(`
`),n("span",{class:"line"},[n("span",null,"        position = index;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      }")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"  return list;")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const spanMethod = ({ row, column, rowIndex, columnIndex }) => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  for (let i = 0; i < spanArr.value.length; i++) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    const ele = spanArr.value[i];")]),s(`
`),n("span",{class:"line"},[n("span",null,"    if (column.property == ele.prop) {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      const _row = ele.span[rowIndex];")]),s(`
`),n("span",{class:"line"},[n("span",null,"      const _col = _row > 0 ? 1 : 0;")]),s(`
`),n("span",{class:"line"},[n("span",null,"      return { rowspan: _row, colspan: _col };")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"};")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowSort();")]),s(`
`),n("span",{class:"line"},[n("span",null,"  rowCalc();")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:b(()=>[k(t.DemoCrud_rc_vue)]),_:1})]),_:1})])}const D=S(N,[["render",P],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/doc/crud-rc/","title":"动态行列合并","lang":"zh-CN","frontmatter":{"title":"动态行列合并","createTime":"2025/02/06 09:33:51","permalink":"/doc/crud-rc/"},"headers":[],"readingTime":{"minutes":0.09,"words":26},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-rc.md","bulletin":false}');export{D as comp,I as data};

import{_ as h,b as r,i as y,p as _,r as o,o as k,h as x,c as A,d as D,a as d,g as e,e as n,f as s}from"./app-Cibr2ptE.js";const b="https://cli.avuejs.com/api/area",B={__name:"cascader",setup(v,{expose:l}){l();const i=r(null),a=r([]),c=r({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"},{label:"省份",prop:"province",type:"select",cascader:["city"],cascaderIndex:1,props:{label:"name",value:"code"},dicUrl:`${b}/getProvince`},{width:120,label:"城市",prop:"city",type:"select",cascader:["area"],cascaderIndex:1,cell:!0,props:{label:"name",value:"code"},dicUrl:`${b}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{width:120,label:"地区",prop:"area",cell:!0,props:{label:"name",value:"code"},type:"select",dicUrl:`${b}/getArea/{{key}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]});y(()=>{a.value=[{name:"张三",sex:"男",province:"110000",city:"110100",area:"110101"},{name:"李四",sex:"女",province:"130000",city:"130200",area:"130202"}],_(()=>{i.value.dicInit("cascader")})});const m={baseUrl:b,crud:i,data:a,option:c,ref:r,onMounted:y,nextTick:_};return Object.defineProperty(m,"__isScriptSetup",{enumerable:!1,value:!0}),m}};function $(v,l,i,a,c,m){const t=o("tvue-crud");return k(),x(t,{ref:"crud",data:a.data,option:a.option},null,8,["data","option"])}const U=h(B,[["render",$],["__file","cascader.vue"]]),f="https://cli.avuejs.com/api/area",C={__name:"base",setup(v,{expose:l}){l();const i=r([{province:"110000",cascader:[0,1]},{province:"130000",cascader:[0,2]}]),a=r({column:[{label:"本地字典",prop:"cascader",type:"cascader",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"网络字典",prop:"province",type:"select",props:{label:"name",value:"code"},dicFlag:!0,dicUrl:`${f}/getProvince`}]}),c={data:i,baseUrl:f,option:a,ref:r};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function j(v,l,i,a,c,m){const t=o("tvue-crud");return k(),x(t,{data:a.data,option:a.option},null,8,["data","option"])}const P=h(C,[["render",j],["__file","base.vue"]]),T={__name:"index.html",setup(v,{expose:l}){l();const i={DemoCascader_vue:U,DemoBase_vue:P};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function q(v,l,i,a,c,m){const t=o("VPDemoBasic"),g=o("Tabs");return k(),A("div",null,[l[8]||(l[8]=D(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>更多字典详细用法参考<a href="/form/form-dic.html" target="_blank" rel="noopener noreferrer">Form 组件数据字典</a></p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//使用字典需要引入axios</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">axios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({});</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Avue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="字典使用" tabindex="-1"><a class="header-anchor" href="#字典使用"><span>字典使用</span></a></h2>`,2)),d(g,{id:"9",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:p,isActive:u})=>l[0]||(l[0]=[s("vue2")])),title1:e(({value:p,isActive:u})=>l[1]||(l[1]=[s("vue3")])),tab0:e(({value:p,isActive:u})=>l[2]||(l[2]=[n("p",null,null,-1)])),tab1:e(({value:p,isActive:u})=>[d(t,{type:"vue",desc:"本地字典配置`dicData`为一个`Array`数组，网络字典可以配置`dicUrl`字段，自动加载字典到对应的组件中，注意返回的字典中 value 类型和数据的类型必须要对应，比如都是字符串或者都是数字。配置`dicFlag`为`true`，打开表单的时候会重新请求字典"},{code:e(()=>l[3]||(l[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option" />')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    province: '110000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    cascader: [0, 1],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    province: '130000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    cascader: [0, 2],")]),s(`
`),n("span",{class:"line"},[n("span",null,"  }")]),s(`
`),n("span",{class:"line"},[n("span",null,"]);")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '本地字典',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            },")]),s(`
`),n("span",{class:"line"},[n("span",null,"            {")]),s(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),s(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),s(`
`),n("span",{class:"line"},[n("span",null,"            }")]),s(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"        }")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '网络字典',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code'")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicFlag: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`")]),s(`
`),n("span",{class:"line"},[n("span",null,"    }")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[d(a.DemoBase_vue)]),_:1})]),_:1}),l[9]||(l[9]=n("h2",{id:"字典联动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字典联动"},[n("span",null,"字典联动")])],-1)),d(g,{id:"22",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:e(({value:p,isActive:u})=>l[4]||(l[4]=[s("vue2")])),title1:e(({value:p,isActive:u})=>l[5]||(l[5]=[s("vue3")])),tab0:e(({value:p,isActive:u})=>l[6]||(l[6]=[n("p",null,null,-1)])),tab1:e(({value:p,isActive:u})=>[d(t,{type:"vue",desc:"`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系，表格加载联动数据需要调用内置方法`dicInit`"},{code:e(()=>l[7]||(l[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),s(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),s(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),s(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),s(`
`),n("span",{class:"line"},[n("span",null,"import { ref, onMounted, nextTick } from 'vue';")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"const baseUrl = 'https://cli.avuejs.com/api/area';")]),s(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null)")]),s(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),s(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),s(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '省份',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'province',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['city'],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascaderIndex: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getProvince`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '城市',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'city',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascader: ['area'],")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cascaderIndex: 1,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getCity/{{key}}`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择城市',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      width: 120,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      label: '地区',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'area',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      cell: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      props: {")]),s(`
`),n("span",{class:"line"},[n("span",null,"        label: 'name',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        value: 'code',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      type: 'select',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      dicUrl: `${baseUrl}/getArea/{{key}}`,")]),s(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),s(`
`),n("span",{class:"line"},[n("span",null,"        {")]),s(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),s(`
`),n("span",{class:"line"},[n("span",null,"          message: '请选择地区',")]),s(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur',")]),s(`
`),n("span",{class:"line"},[n("span",null,"        },")]),s(`
`),n("span",{class:"line"},[n("span",null,"      ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ],")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span")]),s(`
`),n("span",{class:"line"},[n("span",null,"onMounted(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"  data.value = [")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      name: '张三',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      sex: '男',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      province: '110000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      city: '110100',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      area: '110101',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"    {")]),s(`
`),n("span",{class:"line"},[n("span",null,"      name: '李四',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      sex: '女',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      province: '130000',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      city: '130200',")]),s(`
`),n("span",{class:"line"},[n("span",null,"      area: '130202',")]),s(`
`),n("span",{class:"line"},[n("span",null,"    },")]),s(`
`),n("span",{class:"line"},[n("span",null,"  ];")]),s(`
`),n("span",{class:"line"},[n("span",null,"  //加载完数据后调用")]),s(`
`),n("span",{class:"line"},[n("span",null,"  nextTick(() => {")]),s(`
`),n("span",{class:"line"},[n("span",null,"    crud.value.dicInit('cascader');")]),s(`
`),n("span",{class:"line"},[n("span",null,"  });")]),s(`
`),n("span",{class:"line"},[n("span",null,"});")]),s(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:e(()=>[d(a.DemoCascader_vue)]),_:1})]),_:1})])}const I=h(T,[["render",q],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/doc/crud-dic/","title":"数据字典","lang":"zh-CN","frontmatter":{"title":"数据字典","createTime":"2025/2/5 16:30:12","permalink":"/doc/crud-dic/"},"headers":[],"readingTime":{"minutes":0.74,"words":221},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-dic.md","bulletin":false}');export{I as comp,w as data};

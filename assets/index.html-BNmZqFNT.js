import{_ as h,b as o,r as b,o as k,h as g,c as x,f as n,t as B,a as c,F as T,g as a,e as s,E as f,s as _,d as y}from"./app-Cibr2ptE.js";const w={__name:"cos",setup(m,{expose:l}){l();const d=o({}),e=o({column:[{label:"腾讯上传",prop:"imgUrl",type:"upload",listType:"picture-img",fileType:"img",oss:"cos",span:24}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function U(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const V=h(w,[["render",U],["__file","cos.vue"]]),C={__name:"qiniu",setup(m,{expose:l}){l();const d=o({}),e=o({column:[{label:"七牛上传",prop:"imgUrl",type:"upload",listType:"picture-img",fileType:"img",oss:"qiniu",span:24}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function S(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const E=h(C,[["render",S],["__file","qiniu.vue"]]),H={__name:"ali",setup(m,{expose:l}){l();const d=o({}),e=o({column:[{label:"阿里上传",prop:"imgUrl",type:"upload",listType:"picture-img",canvasOption:{text:"avue",ratio:.1},oss:"ali",span:24}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function P(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const $=h(H,[["render",P],["__file","ali.vue"]]),F={__name:"drag",setup(m,{expose:l}){l();const d=o({img:["/images/logo-bg.jpg","/images/logo-bg.jpg","./xx/xx.sql"]}),e=o({column:[{label:"数组图片组",prop:"img",drag:!0,type:"upload",propsHttp:{res:"data"},span:24,listType:"picture-card",action:"https://api.avuejs.com/imgupload"}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function M(m,l,d,e,r,v){const u=b("tvue-form");return k(),x(T,null,[n(B(e.form)+" ",1),c(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])],64)}const O=h(F,[["render",M],["__file","drag.vue"]]),q={__name:"slot",setup(m,{expose:l}){l();const d=o({img:["/images/logo-bg.jpg","https://www.w3school.com.cn/i/movie.ogg"]}),e=o({column:[{label:"附件上传",prop:"img",type:"upload",span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function z(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},{"img-type":a(({file:t})=>[s("span",null,"自定义模板"+B(t),1)]),_:1},8,["option","modelValue"])}const K=h(q,[["render",z],["__file","slot.vue"]]),L={__name:"error",setup(m,{expose:l}){l();const d=o({}),e=o({labelWidth:120,column:[{label:"附件上传",prop:"imgUrl",type:"upload",listType:"picture-card",span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]}),v={form:d,option:e,uploadError:(u,t)=>{f.error("上传失败回调"),console.log(u,t)},ref:o,get ElMessage(){return f}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function N(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-error":e.uploadError},null,8,["option","modelValue"])}const W=h(L,[["render",N],["__file","error.vue"]]),I={__name:"exceed",setup(m,{expose:l}){l();const v={form:o({imgUrl:["/images/logo-bg.jpg"]}),option:{column:[{label:"附件上传",prop:"imgUrl",type:"upload",listType:"picture-card",limit:1,span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]},uploadExceed:(u,t,i,p)=>{f.error("超出上传限制文件数量"),console.log(u,t,i,p)},ref:o,get ElMessage(){return f}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function J(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-exceed":e.uploadExceed},null,8,["modelValue"])}const Q=h(I,[["render",J],["__file","exceed.vue"]]),R={__name:"accept",setup(m,{expose:l}){l();const d=o({}),e=o({column:[{label:"水印头像",prop:"imgUrl3",type:"upload",listType:"picture-card",accept:"image/png, image/jpeg",limit:2,fileSize:1e4,span:24,propsHttp:{res:"data"},tip:"只能上传jpg/png用户头像，且不超过10M",action:"https://api.avuejs.com/imgupload"}]}),v={form:d,option:e,uploadSize:(u,t,i,p)=>{console.log(u,t,i,p)},ref:o};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function G(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-size":e.uploadSize},null,8,["option","modelValue"])}const X=h(R,[["render",G],["__file","accept.vue"]]),Y={__name:"load-text",setup(m,{expose:l}){l();const d=o({}),e=o({column:[{label:"头像",prop:"imgUrl3",type:"upload",span:24,propsHttp:{res:"data"},fileText:"我是上传按钮",loadText:"上传等待文案",tip:"只能上传jpg/png用户头像，且不超过500kb",action:"https://api.avuejs.com/imgupload"}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function Z(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const ss=h(Y,[["render",Z],["__file","load-text.vue"]]),ns={data(){return{form:{},option:{column:[{label:"头像",prop:"imgUrl3",type:"upload",listType:"picture-img",span:24,propsHttp:{res:"data"},data:{a:1},headers:{b:1},action:"https://api.avuejs.com/imgupload"}]}}}};function ls(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:r.option,modelValue:r.form,"onUpdate:modelValue":l[0]||(l[0]=t=>r.form=t)},null,8,["option","modelValue"])}const es=h(ns,[["render",ls],["__file","params.vue"]]),as={__name:"file-type",setup(m,{expose:l}){l();const r={form:o({imgUrl3:"https://www.runoob.com/try/demo_source/circle1.svg"}),option:{column:[{label:"头像",prop:"imgUrl3",type:"upload",listType:"picture-img",span:24,fileType:"img",propsHttp:{res:"data"},tip:"只能上传jpg/png用户头像，且不超过500kb",action:"https://api.avuejs.com/imgupload"}]},ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function is(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["modelValue"])}const ps=h(as,[["render",is],["__file","file-type.vue"]]),ts={__name:"delete",setup(m,{expose:l}){l();const d=o({imgUrl3:["/images/logo-bg.jpg"]}),e=o({column:[{label:"水印头像",prop:"imgUrl3",type:"upload",listType:"picture-card",span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]}),v={form:d,option:e,uploadDelete:(u,t)=>(console.log(u,t),_.confirm("这里是自定义的，是否确定移除该选项？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})),ref:o,get ElMessageBox(){return _}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function us(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-delete":e.uploadDelete},null,8,["option","modelValue"])}const rs=h(ts,[["render",us],["__file","delete.vue"]]),cs={__name:"preview",setup(m,{expose:l}){l();const d=o({imgUrl:["/images/logo-bg.jpg","https://www.w3school.com.cn/i/movie.ogg"]}),e=o({column:[{label:"附件上传",prop:"imgUrl",type:"upload",listType:"picture-card",span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]});function r(u,t,i){_.confirm("是否放大查看图片","确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{i()}).catch(()=>{})}const v={form:d,option:e,uploadPreview:r,ref:o,get ElMessageBox(){return _}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function ds(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-preview":e.uploadPreview},null,8,["option","modelValue"])}const os=h(cs,[["render",ds],["__file","preview.vue"]]),ms={__name:"before",setup(m,{expose:l}){l();const d=o({imgUrl:["/images/logo-bg.jpg"]}),e=o({column:[{label:"附件上传",prop:"imgUrl",type:"upload",listType:"picture-card",span:24,propsHttp:{res:"data"},action:"https://api.avuejs.com/imgupload"}]}),u={form:d,option:e,uploadBefore:(t,i,p,D)=>{console.log(t,D);const j=new File([t],"1234",{type:t.type});i(j),f.success("上传前的方法")},uploadAfter:(t,i,p,D)=>{console.log(t,D),i(),f.success("上传后的方法")},ref:o,get ElMessage(){return f}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function vs(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t),"upload-before":e.uploadBefore,"upload-after":e.uploadAfter},null,8,["option","modelValue"])}const bs=h(ms,[["render",vs],["__file","before.vue"]]),hs={__name:"type",setup(m,{expose:l}){l();const d=o({array:[{label:"名称.jpg",value:"/images/logo-bg.jpg"}],array1:[{name:"名称.jpg",url:"/images/logo-bg.jpg"}],string:"/images/logo-bg.jpg,/images/logo-bg.jpg",json:'[{"label":"名称.jpg","value":"/images/logo-bg.jpg"}]'}),e=o({labelWidth:120,column:[{label:"数组对象",prop:"array",dataType:"object",type:"upload",propsHttp:{res:"data"},span:24,action:"https://api.avuejs.com/imgupload"},{label:"数组对象",prop:"array1",dataType:"object",type:"upload",props:{label:"name",value:"url"},propsHttp:{res:"data"},span:24,action:"https://api.avuejs.com/imgupload"},{label:"字符串",prop:"string",dataType:"string",type:"upload",propsHttp:{res:"data"},span:24,action:"https://api.avuejs.com/imgupload"},{label:"json字符串",prop:"json",dataType:"json",type:"upload",propsHttp:{res:"data"},span:24,action:"https://api.avuejs.com/imgupload"}]}),r={form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function ks(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const gs=h(hs,[["render",ks],["__file","type.vue"]]),A="https://api.avuejs.com/imgupload",fs={__name:"base",setup(m,{expose:l}){l();const d=o({video:"/i/movie.ogg",imgUrl:["/images/logo-bg.jpg","https://www.w3school.com.cn/i/movie.ogg","https://www.runoob.com/try/demo_source/horse.mp3"]}),e=o({column:[{label:"附件上传",prop:"imgUrl",type:"upload",multiple:!0,span:24,propsHttp:{url:"url",name:"name",res:"data"},action:A},{label:"视频",prop:"video",type:"upload",propsHttp:{res:"data",url:"url",name:"name",home:"https://www.w3school.com.cn"},listType:"picture-img",span:24,action:A},{label:"照片墙",prop:"imgUrl",listType:"picture-card",type:"upload",span:24,action:A},{label:"缩略图上传",prop:"imgUrl",type:"upload",span:24,listType:"picture",action:A},{label:"拖拽上传",prop:"imgUrl",type:"upload",span:24,dragFile:!0,action:A}]}),r={action:A,form:d,option:e,ref:o};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}};function ys(m,l,d,e,r,v){const u=b("tvue-form");return k(),g(u,{option:e.option,modelValue:e.form,"onUpdate:modelValue":l[0]||(l[0]=t=>e.form=t)},null,8,["option","modelValue"])}const As=h(fs,[["render",ys],["__file","base.vue"]]),_s={__name:"index.html",setup(m,{expose:l}){l();const d={DemoCos_vue:V,DemoQiniu_vue:E,DemoAli_vue:$,DemoDrag_vue:O,DemoSlot_vue:K,DemoError_vue:W,DemoExceed_vue:Q,DemoAccept_vue:X,DemoLoad_text_vue:ss,DemoParams_vue:es,DemoFile_type_vue:ps,DemoDelete_vue:rs,DemoPreview_vue:os,DemoBefore_vue:bs,DemoType_vue:gs,DemoBase_vue:As};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function Ds(m,l,d,e,r,v){const u=b("VPDemoBasic"),t=b("Tabs");return k(),x("div",null,[l[68]||(l[68]=y(`<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//使用上传附件需要引入axios</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> axios</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">axios</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({})</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Avue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,{</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">axios</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>propsHttp</code>配置请求接口返回的数据结构</p><ul><li><code>name</code>图片的名称</li><li><code>url</code>路径地址</li><li><code>res</code>返回数据层级结构</li><li><code>home</code>相对路径的主路径</li></ul></div><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2>`,3)),c(t,{id:"31",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[0]||(l[0]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[1]||(l[1]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[2]||(l[2]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"`listType`配置上传的类型,`multiple`是否多选上传"},{code:a(()=>l[3]||(l[3]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const action = 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  video: '/i/movie.ogg',")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl: [")]),n(`
`),s("span",{class:"line"},[s("span",null,'    "/images/logo-bg.jpg",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    'https://www.w3school.com.cn/i/movie.ogg',")]),n(`
`),s("span",{class:"line"},[s("span",null,"    'https://www.runoob.com/try/demo_source/horse.mp3'")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ],")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      multiple: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        url: 'url',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        name: 'name',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '视频',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'video',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        url: 'url',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        name: 'name',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        home: 'https://www.w3school.com.cn'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '照片墙',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '缩略图上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '拖拽上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dragFile: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBase_vue)]),_:1})]),_:1}),l[69]||(l[69]=y('<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>dataType</code>配置数据的结构<code>string</code>、<code>object</code>、<code>json</code> 当<code>dataType</code>配置为<code>object</code>时，可以配置<code>props</code>存储的数据结构</p><ul><li><code>label</code>图片的名称</li><li><code>value</code>路径地址 当<code>dataType</code>配置为<code>json</code>时，是json序列化字符串,也可以配置<code>props</code>存储的数据结构</li></ul></div>',2)),c(t,{id:"61",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[4]||(l[4]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[5]||(l[5]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[6]||(l[6]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"`dataType`可以配置数据的类型"},{code:a(()=>l[7]||(l[7]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  array: [{ label: '名称.jpg', value: '/images/logo-bg.jpg' }],")]),n(`
`),s("span",{class:"line"},[s("span",null,"  array1: [{ name: '名称.jpg', url: '/images/logo-bg.jpg' }],")]),n(`
`),s("span",{class:"line"},[s("span",null,"  string: '/images/logo-bg.jpg,/images/logo-bg.jpg',")]),n(`
`),s("span",{class:"line"},[s("span",null,`  json: '[{"label":"名称.jpg","value":"/images/logo-bg.jpg"}]'`)]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  labelWidth: 120,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '数组对象',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'array',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dataType: 'object',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: { res: 'data' },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '数组对象',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'array1',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dataType: 'object',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      props: { label: 'name', value: 'url' },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: { res: 'data' },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '字符串',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'string',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dataType: 'string',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: { res: 'data' },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    },")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: 'json字符串',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'json',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      dataType: 'json',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: { res: 'data' },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoType_vue)]),_:1})]),_:1}),l[70]||(l[70]=s("h2",{id:"上传前和上传后方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上传前和上传后方法"},[s("span",null,"上传前和上传后方法")])],-1)),c(t,{id:"74",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[8]||(l[8]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[9]||(l[9]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[10]||(l[10]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"`upload-before`上传前的回调,`upload-after`上传后的回调"},{code:a(()=>l[11]||(l[11]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-before="uploadBefore"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-after="uploadAfter"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ElMessage } from 'element-plus'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl: ['/images/logo-bg.jpg']")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadBefore = (file, done, loading, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(file, column)")]),n(`
`),s("span",{class:"line"},[s("span",null,"  //如果你想修改file文件,由于上传的file是只读文件，必须复制新的file才可以修改名字，完后赋值到done函数里,如果不修改的话直接写done()即可")]),n(`
`),s("span",{class:"line"},[s("span",null,"  const newFile = new File([file], '1234', { type: file.type })")]),n(`
`),s("span",{class:"line"},[s("span",null,"  done(newFile)")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ElMessage.success('上传前的方法')")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadAfter = (res, done, loading, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(res, column)")]),n(`
`),s("span",{class:"line"},[s("span",null,"  done()")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ElMessage.success('上传后的方法')")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoBefore_vue)]),_:1})]),_:1}),l[71]||(l[71]=s("h2",{id:"自定义预览方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义预览方法"},[s("span",null,"自定义预览方法")])],-1)),c(t,{id:"87",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[12]||(l[12]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[13]||(l[13]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[14]||(l[14]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"配置`uploadPreview`预览回调方法"},{code:a(()=>l[15]||(l[15]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-preview="uploadPreview"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ElMessageBox } from 'element-plus';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl: [")]),n(`
`),s("span",{class:"line"},[s("span",null,'    "/images/logo-bg.jpg",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    'https://www.w3school.com.cn/i/movie.ogg'")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 方法定义")]),n(`
`),s("span",{class:"line"},[s("span",null,"function uploadPreview (file, column, done) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ElMessageBox.confirm('是否放大查看图片', '确认', {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    confirmButtonText: '确定',")]),n(`
`),s("span",{class:"line"},[s("span",null,"    cancelButtonText: '取消',")]),n(`
`),s("span",{class:"line"},[s("span",null,"    type: 'warning',")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }).then(() => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    done();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }).catch(() => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 用户取消操作时的处理逻辑，如果需要的话")]),n(`
`),s("span",{class:"line"},[s("span",null,"  });")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoPreview_vue)]),_:1})]),_:1}),l[72]||(l[72]=s("h2",{id:"自定义删除方法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义删除方法"},[s("span",null,"自定义删除方法")])],-1)),c(t,{id:"100",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[16]||(l[16]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[17]||(l[17]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[18]||(l[18]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"配置`uploadDelete`删除回调函数"},{code:a(()=>l[19]||(l[19]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-delete="uploadDelete">')]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ElMessageBox } from 'element-plus'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl3: ['/images/logo-bg.jpg'],")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '水印头像',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl3',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadDelete = (file, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(file, column)")]),n(`
`),s("span",{class:"line"},[s("span",null,"  return ElMessageBox.confirm('这里是自定义的，是否确定移除该选项？', '确认删除', {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    confirmButtonText: '确定',")]),n(`
`),s("span",{class:"line"},[s("span",null,"    cancelButtonText: '取消',")]),n(`
`),s("span",{class:"line"},[s("span",null,"    type: 'warning',")]),n(`
`),s("span",{class:"line"},[s("span",null,"  })")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDelete_vue)]),_:1})]),_:1}),l[73]||(l[73]=s("h2",{id:"指定文件类型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#指定文件类型"},[s("span",null,"指定文件类型")])],-1)),c(t,{id:"113",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[20]||(l[20]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[21]||(l[21]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[22]||(l[22]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以配置`fileType`来指定文件的类型，一般用于没有后缀格式的地址"},{code:a(()=>l[23]||(l[23]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form">')]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl3: 'https://www.runoob.com/try/demo_source/circle1.svg'")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '头像',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl3',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      fileType: 'img',//img/video/audio")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      tip: '只能上传jpg/png用户头像，且不超过500kb',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoFile_type_vue)]),_:1})]),_:1}),l[74]||(l[74]=s("h2",{id:"传参",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#传参"},[s("span",null,"传参")])],-1)),c(t,{id:"126",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[24]||(l[24]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[25]||(l[25]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[26]||(l[26]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以配置`data`和`headers`属性作为传递参数"},{code:a(()=>l[27]||(l[27]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form">')]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script>")]),n(`
`),s("span",{class:"line"},[s("span",null,"export default {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  data () {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      form: {},")]),n(`
`),s("span",{class:"line"},[s("span",null,"      option: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"          {")]),n(`
`),s("span",{class:"line"},[s("span",null,"            label: '头像',")]),n(`
`),s("span",{class:"line"},[s("span",null,"            prop: 'imgUrl3',")]),n(`
`),s("span",{class:"line"},[s("span",null,"            type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"            listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"            span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"            propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"              res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"            },")]),n(`
`),s("span",{class:"line"},[s("span",null,"            data: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"              a: 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"            },")]),n(`
`),s("span",{class:"line"},[s("span",null,"            headers: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"              b: 1")]),n(`
`),s("span",{class:"line"},[s("span",null,"            },")]),n(`
`),s("span",{class:"line"},[s("span",null,"            action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"          }")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"      }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoParams_vue)]),_:1})]),_:1}),l[75]||(l[75]=s("h2",{id:"上传等待文案和按钮文案",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上传等待文案和按钮文案"},[s("span",null,"上传等待文案和按钮文案")])],-1)),c(t,{id:"139",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[28]||(l[28]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[29]||(l[29]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[30]||(l[30]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以配置`loadText`上传等待文案,`fileText`上传按钮文案,`tip`提示文案"},{code:a(()=>l[31]||(l[31]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({});")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '头像',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl3',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      fileText: '我是上传按钮',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      loadText: '上传等待文案',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      tip: '只能上传jpg/png用户头像，且不超过500kb',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoLoad_text_vue)]),_:1})]),_:1}),l[76]||(l[76]=s("h2",{id:"限制文件类型和大小数量",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#限制文件类型和大小数量"},[s("span",null,"限制文件类型和大小数量")])],-1)),c(t,{id:"152",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[32]||(l[32]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[33]||(l[33]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[34]||(l[34]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以配置`accept`限制格式和`limit`显示个数以及`fileSize`限制大小对应参数即可,`fileSize`对应基础单位为KB"},{code:a(()=>l[35]||(l[35]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-size="uploadSize">')]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({})")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '水印头像',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl3',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      accept: 'image/png, image/jpeg',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      limit: 2,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      fileSize: 10000,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      tip: '只能上传jpg/png用户头像，且不超过10M',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadSize = (fileSize, file, fileList, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(fileSize, file, fileList, column)")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoAccept_vue)]),_:1})]),_:1}),l[77]||(l[77]=s("h2",{id:"超出上传限制回调",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#超出上传限制回调"},[s("span",null,"超出上传限制回调")])],-1)),c(t,{id:"165",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[36]||(l[36]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[37]||(l[37]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[38]||(l[38]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"`uploadExceed`文件超出上传限制回调"},{code:a(()=>l[39]||(l[39]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-exceed="uploadExceed"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ElMessage } from 'element-plus'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  imgUrl: ['/images/logo-bg.jpg']")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      limit: 1,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadExceed = (limit, files, fileList, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ElMessage.error('超出上传限制文件数量')")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(limit, files, fileList, column)")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoExceed_vue)]),_:1})]),_:1}),l[78]||(l[78]=s("h2",{id:"上传失败错误回调函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#上传失败错误回调函数"},[s("span",null,"上传失败错误回调函数")])],-1)),c(t,{id:"178",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[40]||(l[40]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[41]||(l[41]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[42]||(l[42]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"限制文件类型和大小数量触发时会调用`uploadError`上传失败错误回调函数"},{code:a(()=>l[43]||(l[43]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             :upload-error="uploadError"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ElMessage } from 'element-plus';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  labelWidth: 120,")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const uploadError = (error, column) => {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ElMessage.error('上传失败回调');")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(error, column);")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoError_vue)]),_:1})]),_:1}),l[79]||(l[79]=s("h2",{id:"自定义模板",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义模板"},[s("span",null,"自定义模板")])],-1)),c(t,{id:"191",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[44]||(l[44]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[45]||(l[45]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[46]||(l[46]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"列名的`prop`加上`Type`即可自定义内容"},{code:a(()=>l[47]||(l[47]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form">')]),n(`
`),s("span",{class:"line"},[s("span",null,'    <template #img-type="{ file }">')]),n(`
`),s("span",{class:"line"},[s("span",null,"      <span>自定义模板{{ file }}</span>")]),n(`
`),s("span",{class:"line"},[s("span",null,"    </template>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  img: ['/images/logo-bg.jpg', 'https://www.w3school.com.cn/i/movie.ogg'],")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1}),l[80]||(l[80]=s("h2",{id:"图片水印",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#图片水印"},[s("span",null,"图片水印")])],-1)),c(t,{id:"204",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[48]||(l[48]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[49]||(l[49]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[50]||(l[50]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"可以配置`canvasOption`属性去生成水印和压缩图片"},{code:a(()=>l[51]||(l[51]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form">')]),n(`
`),s("span",{class:"line"},[s("span",null,'    <template #img-type="{ file }">')]),n(`
`),s("span",{class:"line"},[s("span",null,"      <span>自定义模板{{ file }}</span>")]),n(`
`),s("span",{class:"line"},[s("span",null,"    </template>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  </tvue-form>")]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  img: ['/images/logo-bg.jpg', 'https://www.w3school.com.cn/i/movie.ogg'],")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '附件上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoSlot_vue)]),_:1})]),_:1}),l[81]||(l[81]=y(`<h2 id="拖拽排序" tabindex="-1"><a class="header-anchor" href="#拖拽排序"><span>拖拽排序</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),c(t,{id:"218",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[52]||(l[52]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[53]||(l[53]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[54]||(l[54]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue",desc:"配置`drag`属性即可开启拖拽排序"},{code:a(()=>l[55]||(l[55]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,"  {{ form }}")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"> </tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  img: ['/images/logo-bg.jpg', '/images/logo-bg.jpg', './xx/xx.sql']")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '数组图片组',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      drag: true,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      propsHttp: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        res: 'data'")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-card',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      action: 'https://api.avuejs.com/imgupload'")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoDrag_vue)]),_:1})]),_:1}),l[82]||(l[82]=y(`<h2 id="阿里云oss上传" tabindex="-1"><a class="header-anchor" href="#阿里云oss上传"><span>阿里云oss上传</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.staticfile.net/ali-oss/6.10.0/aliyun-oss-sdk.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//入口处全局配置阿里云的参数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({})</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">AVUE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  ali</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    region</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">oss-cn-beijing</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    endpoint</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">oss-cn-beijing.aliyuncs.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    stsToken</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    accessKeyId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    accessKeySecret</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    bucket</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">avue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),c(t,{id:"233",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[56]||(l[56]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[57]||(l[57]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[58]||(l[58]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue"},{code:a(()=>l[59]||(l[59]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({})")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '阿里上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      canvasOption: {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        text: 'avue',")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ratio: 0.1")]),n(`
`),s("span",{class:"line"},[s("span",null,"      },")]),n(`
`),s("span",{class:"line"},[s("span",null,"      oss: 'ali',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoAli_vue)]),_:1})]),_:1}),l[83]||(l[83]=y(`<h2 id="七牛云oss上传" tabindex="-1"><a class="header-anchor" href="#七牛云oss上传"><span>七牛云oss上传</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://avuejs.com/cdn/CryptoJS.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//入口处全局配置七牛云的参数 </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">createApp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({})</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">AVUE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  qiniu</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    AK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//七牛云相关密钥</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    SK</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//七牛云相关密钥</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    bucket</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://upload.qiniup.com</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//存储地区，默认为华东，其他的如下表</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    scope</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">test</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//存储空间名称</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    url</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://cdn.avuejs.com/</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//外链的域名地址</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),c(t,{id:"248",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[60]||(l[60]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[61]||(l[61]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[62]||(l[62]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue"},{code:a(()=>l[63]||(l[63]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue';")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({});")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '七牛上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      fileType: 'img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      oss: 'qiniu',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"});")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoQiniu_vue)]),_:1})]),_:1}),l[84]||(l[84]=y(`<h2 id="腾讯云oss上传" tabindex="-1"><a class="header-anchor" href="#腾讯云oss上传"><span>腾讯云oss上传</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 导入需要的包 （一定要放到index.html中的head标签里） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">https://avuejs.com/cdn/cos-js-sdk-v5.min.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Vue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">use</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">AVUE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  cos</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    SecretId</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//腾讯云相关密钥</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    SecretKey</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//腾讯云相关密钥</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    Bucket</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">test</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//存储空间名称</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    Region</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ap-beijing</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//存储地区</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),c(t,{id:"263",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:i,isActive:p})=>l[64]||(l[64]=[n("vue2")])),title1:a(({value:i,isActive:p})=>l[65]||(l[65]=[n("vue3")])),tab0:a(({value:i,isActive:p})=>l[66]||(l[66]=[s("p",null,null,-1)])),tab1:a(({value:i,isActive:p})=>[c(u,{type:"vue"},{code:a(()=>l[67]||(l[67]=[s("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"<template>")]),n(`
`),s("span",{class:"line"},[s("span",null,'  <tvue-form :option="option"')]),n(`
`),s("span",{class:"line"},[s("span",null,'             v-model="form"></tvue-form>')]),n(`
`),s("span",{class:"line"},[s("span",null,"</template>")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"<script setup>")]),n(`
`),s("span",{class:"line"},[s("span",null,"import { ref } from 'vue'")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const form = ref({})")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"const option = ref({")]),n(`
`),s("span",{class:"line"},[s("span",null,"  column: [")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      label: '腾讯上传',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      prop: 'imgUrl',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      type: 'upload',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      listType: 'picture-img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      fileType: 'img',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      oss: 'cos',")]),n(`
`),s("span",{class:"line"},[s("span",null,"      span: 24")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ]")]),n(`
`),s("span",{class:"line"},[s("span",null,"})")]),n(`
`),s("span",{class:"line"},[s("span",null,"<\/script>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),default:a(()=>[c(e.DemoCos_vue)]),_:1})]),_:1})])}const Bs=h(_s,[["render",Ds],["__file","index.html.vue"]]),js=JSON.parse('{"path":"/form/form-upload/","title":"Upload附件上传","lang":"zh-CN","frontmatter":{"title":"Upload附件上传","createTime":"2025/02/06 14:02:56","permalink":"/form/form-upload/"},"headers":[],"readingTime":{"minutes":3.2,"words":959},"git":{"updatedTime":1738827083000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/form/form-upload.md","bulletin":false}');export{Bs as comp,js as data};

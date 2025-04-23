import{_ as g,b as o,r as b,o as f,h as _,g as a,e as n,a as r,t as h,f as l,n as M,q as C,v as O,w as D,x as U,E as A,c as P,F as $,s as V,d as w}from"./app-Cibr2ptE.js";const N={__name:"labelslot",setup(m,{expose:s}){s();const d=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=o({column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex"}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function q(m,s,d,e,t,v){const p=b("el-tooltip"),c=b("tvue-crud");return f(),_(c,{data:e.data,option:e.option},{"name-label":a(({})=>[s[1]||(s[1]=n("span",null,"姓名  ",-1)),r(p,{class:"item",effect:"dark",content:"文字提示",placement:"top-start"},{default:a(()=>s[0]||(s[0]=[n("i",{class:"el-icon-warning"},null,-1)])),_:1})]),_:1},8,["data","option"])}const R=g(N,[["render",q],["__file","labelslot.vue"]]),W={__name:"errorslot",setup(m,{expose:s}){s();const t={data:o([{sex:"男"},{sex:"女"}]),option:{column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex"}]},ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},F={style:{color:"green"}};function L(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},{"name-error":a(({error:c})=>[n("p",F,"自定义提示"+h(c),1)]),_:1},8,["data"])}const J=g(W,[["render",L],["__file","errorslot.vue"]]),z={__name:"formslot",setup(m,{expose:s}){s();const d=o({}),e=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),t=o({column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex"}]}),v={form:d,data:e,option:t,ref:o};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function I(m,s,d,e,t,v){const p=b("el-tag"),c=b("el-input"),u=b("tvue-crud");return f(),_(u,{data:e.data,option:e.option,modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=i=>e.form=i)},{"name-form":a(({type:i,disabled:x})=>[i==="add"?(f(),_(p,{key:0},{default:a(()=>s[2]||(s[2]=[l("新增")])),_:1})):i==="edit"?(f(),_(p,{key:1},{default:a(()=>s[3]||(s[3]=[l("修改")])),_:1})):i==="view"?(f(),_(p,{key:2},{default:a(()=>s[4]||(s[4]=[l("查看")])),_:1})):M("",!0),r(p,null,{default:a(()=>[l(h(m.user.name?m.user.name:"暂时没有内容"),1)]),_:1}),r(c,{disabled:x,modelValue:m.user.name,"onUpdate:modelValue":s[0]||(s[0]=y=>m.user.name=y)},null,8,["disabled","modelValue"])]),_:1},8,["data","option","modelValue"])}const G=g(z,[["render",I],["__file","formslot.vue"]]),H={__name:"render",setup(m,{expose:s}){s();const d=o({}),e=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),t=o({column:[{label:"姓名",prop:"name",renderForm:({row:p})=>C("p",{id:"box",class:{demo:!0},style:{color:"pink",lineHeight:"30px"}},p.name||"name")},{label:"性别",prop:"sex"}]}),v={form:d,data:e,option:t,h:C,ref:o};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function K(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c)},null,8,["data","option","modelValue"])}const Q=g(H,[["render",K],["__file","render.vue"]]),X={__name:"filter",setup(m,{expose:s}){s();const d=o([{cascader:[0,1],tree:0}]),e=o(Math.random()),t=O({}),v=O({column:[{label:"姓名",span:24,prop:"name"},{label:"级别",prop:"cascader",type:"cascader",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]},{label:"树型",prop:"tree",type:"tree",dicData:[{label:"一级",value:0,children:[{label:"一级1",value:1},{label:"一级2",value:2}]}]}]});function p(){e.value=Math.random()}function c(){v.filterDic=!1,v.filterNull=!1,p()}function u(){v.filterDic=!0,p()}function i(){v.filterNull=!0,p()}const x={data:d,reload:e,form:t,option:v,refresh:p,filter:c,filterDic:u,filterNull:i,ref:o,reactive:O};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}};function Y(m,s,d,e,t,v){const p=b("el-button"),c=b("el-input"),u=b("tvue-crud");return f(),_(u,{key:e.reload,modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=i=>e.form=i),option:e.option,data:e.data},{"name-form":a(({size:i})=>[r(p,{type:"danger",onClick:e.filterDic},{default:a(()=>s[2]||(s[2]=[l("过滤数据字典")])),_:1}),r(p,{type:"success",onClick:e.filterNull},{default:a(()=>s[3]||(s[3]=[l("过滤空数据")])),_:1}),r(p,{type:"primary",onClick:e.filter},{default:a(()=>s[4]||(s[4]=[l("不过滤")])),_:1}),n("p",null,h(e.form),1),r(c,{modelValue:e.form.name,"onUpdate:modelValue":s[0]||(s[0]=x=>e.form.name=x),size:i},null,8,["modelValue","size"])]),_:1},8,["modelValue","option","data"])}const Z=g(X,[["render",Y],["__file","filter.vue"]]);let E="https://cli.avuejs.com/api/area";const nn={data(){return{form:{name:"11"},data:[{name:"张三",sex:15,province:"110000",city:"110100",area:"110101",checkbox:["110000"]}],option:{column:[{label:"姓名",prop:"name",display:!1},{label:"年龄",prop:"sex",display:!1}],group:[{label:"用户信息",prop:"jbxx",icon:"el-icon-edit-outline",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]},{label:"退款申请",prop:"tksq",icon:"el-icon-view",column:[{label:"省份",prop:"province",type:"select",props:{label:"name",value:"code"},cascader:["city"],dicUrl:`${E}/getProvince`,rules:[{required:!0,message:"请选择省份",trigger:"blur"}]},{label:"城市",prop:"city",type:"select",cascader:["area"],props:{label:"name",value:"code"},cascaderIndex:0,dicUrl:`${E}/getCity/{{key}}`,rules:[{required:!0,message:"请选择城市",trigger:"blur"}]},{label:"地区",prop:"area",type:"select",props:{label:"name",value:"code"},cascaderIndex:0,dicUrl:`${E}/getArea/{{key}}`,rules:[{required:!0,message:"请选择地区",trigger:"blur"}]}]},{label:"用户信息",prop:"yhxxs",icon:"el-icon-edit-outline",column:[{label:"测试长度",prop:"len",maxlength:5},{labelWidth:120,label:"测试自定义",prop:"names"}]}]}}}};function ln(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{option:t.option,modelValue:t.form,"onUpdate:modelValue":s[0]||(s[0]=c=>t.form=c),data:t.data},null,8,["option","modelValue","data"])}const sn=g(nn,[["render",ln],["__file","group.vue"]]),en={__name:"control",setup(m,{expose:s}){s();const d=o([{text1:0}]),e=o({}),v={data:d,form:e,option:{column:[{label:"内容1",prop:"text1",type:"radio",dicData:[{label:"显示",value:0},{label:"隐藏",value:1}],control:(p,c)=>p===0?{text2:{display:!0},text3:{label:"内容3"}}:{text2:{display:!1},text3:{label:"有没有发现我变了"}}},{label:"内容2",prop:"text2",display:!0},{label:"内容3",prop:"text3"}]},ref:o};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function an(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c)},null,8,["data","modelValue"])}const un=g(en,[["render",an],["__file","control.vue"]]),pn={__name:"defaults",setup(m,{expose:s}){s();const d=o({}),e=o({}),t=o([{text1:0}]),v={column:[{label:"内容1",prop:"text1",type:"radio",dicData:[{label:"显示",value:0},{label:"隐藏",value:1}]},{label:"内容2",prop:"text2",display:!0},{label:"内容3",prop:"text3"}]};D(()=>d.value.text1,c=>{c===0?(e.value.text2={display:!0},e.value.text3={label:"内容3"}):(e.value.text2={display:!1},e.value.text3={label:"有没有发现我变了"})});const p={form:d,defaults:e,data:t,option:v,ref:o,watch:D};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function rn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{defaults:e.defaults,"onUpdate:defaults":s[0]||(s[0]=c=>e.defaults=c),modelValue:e.form,"onUpdate:modelValue":s[1]||(s[1]=c=>e.form=c),option:e.option,data:e.data},null,8,["defaults","modelValue","data"])}const cn=g(pn,[["render",rn],["__file","defaults.vue"]]),tn={__name:"drag",setup(m,{expose:s}){s();const t={data:o([{name:"张三",sex:!0},{name:"李四",sex:!1}]),option:{dialogDrag:!0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function dn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},null,8,["data"])}const on=g(tn,[["render",dn],["__file","drag.vue"]]),vn={__name:"order",setup(m,{expose:s}){s();const d=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=o({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex",order:1}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function mn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},null,8,["data","option"])}const bn=g(vn,[["render",mn],["__file","order.vue"]]),fn={__name:"bind",setup(m,{expose:s}){s();const d=o({}),e=o([{deep:{deep:{deep:{value:"我是深结构"}}}}]),c={form:d,data:e,option:{labelWidth:120,column:[{label:"深结构",prop:"test",bind:"deep.deep.deep.value"},{label:"",prop:"bind",span:24,hide:!0}]},changeDeepValue:()=>{d.value.deep.deep.deep.value="改变deep.deep.deep.value值"},changeTestValue:()=>{d.value.test="改变test值"},ref:o,get ElButton(){return U}};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}};function _n(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{option:e.option,data:e.data,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c)},{"bind-form":a(({})=>[r(e.ElButton,{type:"primary",onClick:e.changeDeepValue},{default:a(()=>s[1]||(s[1]=[l("改变deep.deep.deep.value值")])),_:1}),r(e.ElButton,{type:"primary",onClick:e.changeTestValue},{default:a(()=>s[2]||(s[2]=[l("改变test值")])),_:1}),s[3]||(s[3]=n("br",null,null,-1)),s[4]||(s[4]=n("br",null,null,-1)),l(" "+h(e.form),1)]),_:1},8,["data","modelValue"])}const gn=g(fn,[["render",_n],["__file","bind.vue"]]),xn={__name:"status",setup(m,{expose:s}){s();const d=o([{name:"张三",sex:"男",grade:0},{name:"李四",sex:"女",grade:1}]),e=o({column:[{label:"姓名",prop:"name",editDisabled:!0},{label:"性别",prop:"sex",editDisplay:!1},{label:"权限",prop:"grade",editDetail:!0,addDisabled:!0},{label:"测试",prop:"test",addDisplay:!1}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function yn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},null,8,["data","option"])}const kn=g(xn,[["render",yn],["__file","status.vue"]]),An={__name:"ref",setup(m,{expose:s}){s();const d=o([{text:"测试数据"}]),e=o({labelWidth:120,column:[{label:"测试框",prop:"text"}]}),t=o(null),p={data:d,option:e,crud:t,beforeOpen:c=>{c(),setTimeout(()=>{A.success("查看控制台"),console.log("text的ref对象"),console.log(t.value.getPropRef("text"))},0)},ref:o,get ElMessage(){return A}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Dn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{ref:"crud",data:e.data,"before-open":e.beforeOpen,option:e.option},null,8,["data","option"])}const Sn=g(An,[["render",Dn],["__file","ref.vue"]]),wn={__name:"rules2",setup(m,{expose:s}){s();const d=o({}),e=o([]),t=(i,x,y)=>{x===""?y(new Error("请输入密码")):y()},v=(i,x,y)=>{x===""?y(new Error("请再次输入密码")):x!==d.value.password?y(new Error("两次输入密码不一致!")):y()},p=o({column:[{label:"密码",prop:"password",rules:[{required:!0,validator:t,trigger:"blur"}]},{label:"确认密码",prop:"oldpassword",rules:[{required:!0,validator:v,trigger:"blur"}]}]}),u={obj:d,data:e,validatePass:t,validatePass2:v,option:p,handleError:i=>{A.success("请查看控制台"),console.log(i)},ref:o,get ElMessage(){return A}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}};function Vn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,modelValue:e.obj,"onUpdate:modelValue":s[0]||(s[0]=c=>e.obj=c),option:e.option,onError:e.handleError},null,8,["data","modelValue","option"])}const hn=g(wn,[["render",Vn],["__file","rules2.vue"]]),On={__name:"rules",setup(m,{expose:s}){s();const d=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=o({column:[{label:"姓名",prop:"name",rules:[{required:!0,message:"请输入姓名",trigger:"blur"}]},{label:"性别",prop:"sex",rules:[{required:!0,message:"请输入性别",trigger:"blur"}]}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function En(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},null,8,["data","option"])}const Pn=g(On,[["render",En],["__file","rules.vue"]]),jn={__name:"labelWidth",setup(m,{expose:s}){s();const d=o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),e=o({labelWidth:150,column:[{labelWidth:30,label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function Bn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option},null,8,["data","option"])}const Cn=g(jn,[["render",Bn],["__file","labelWidth.vue"]]),Mn={__name:"done",setup(m,{expose:s}){s();const p={data:o([{name:"张三",sex:"男"},{name:"李四",sex:"女"}]),option:{column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},handleRowSave:(c,u,i)=>{A.success("1秒后关闭禁止表单"),setTimeout(()=>{i(),A.success("3秒后关闭表单")},1e3),setTimeout(()=>{u()},3e3)},handleRowUpdate:(c,u,i,x)=>{A.success("1秒后关闭禁止表单"),setTimeout(()=>{x(),A.success("3秒后关闭表单")},1e3),setTimeout(()=>{i()},3e3)},ref:o,get ElMessage(){return A}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Un(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,option:e.option,onRowSave:e.handleRowSave,onRowUpdate:e.handleRowUpdate},null,8,["data"])}const $n=g(Mn,[["render",Un],["__file","done.vue"]]),Tn={__name:"type",setup(m,{expose:s}){s();const d=o("rtl"),e=o([{name:"张三",sex:12},{name:"李四",sex:12}]),t=o({dialogDirection:"rtl",dialogType:"drawer",column:[{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]});D(d,p=>{t.value.dialogDirection=p});const v={direction:d,list:e,option:t,ref:o,watch:D};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function Nn(m,s,d,e,t,v){const p=b("el-radio"),c=b("el-radio-group"),u=b("tvue-crud");return f(),P($,null,[r(c,{modelValue:e.direction,"onUpdate:modelValue":s[0]||(s[0]=i=>e.direction=i)},{default:a(()=>[r(p,{label:"ltr"},{default:a(()=>s[1]||(s[1]=[l("从左往右开")])),_:1}),r(p,{label:"rtl"},{default:a(()=>s[2]||(s[2]=[l("从右往左开")])),_:1}),r(p,{label:"ttb"},{default:a(()=>s[3]||(s[3]=[l("从上往下开")])),_:1}),r(p,{label:"btt"},{default:a(()=>s[4]||(s[4]=[l("从下往上开")])),_:1})]),_:1},8,["modelValue"]),s[5]||(s[5]=n("br",null,null,-1)),s[6]||(s[6]=n("br",null,null,-1)),r(u,{option:e.option,data:e.list},null,8,["option","data"])],64)}const qn=g(Tn,[["render",Nn],["__file","type.vue"]]),Rn={__name:"position",setup(m,{expose:s}){s();const d=o("right"),e=o([{id:1,name:"张三",sex:12},{id:2,name:"李四",sex:12}]),t=o({dialogMenuPosition:"right",column:[{label:"id",prop:"id"},{label:"姓名",prop:"name"},{label:"年龄",prop:"sex"}]});D(d,p=>{t.value.dialogMenuPosition=p});const v={direction:d,list:e,option:t,ref:o,watch:D};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}};function Wn(m,s,d,e,t,v){const p=b("el-radio"),c=b("el-radio-group"),u=b("tvue-crud");return f(),P($,null,[r(c,{modelValue:e.direction,"onUpdate:modelValue":s[0]||(s[0]=i=>e.direction=i)},{default:a(()=>[r(p,{label:"left"},{default:a(()=>s[1]||(s[1]=[l("居左")])),_:1}),r(p,{label:"center"},{default:a(()=>s[2]||(s[2]=[l("居中")])),_:1}),r(p,{label:"right"},{default:a(()=>s[3]||(s[3]=[l("居右")])),_:1})]),_:1},8,["modelValue"]),s[4]||(s[4]=n("br",null,null,-1)),s[5]||(s[5]=n("br",null,null,-1)),r(u,{option:e.option,data:e.list},null,8,["option","data"])],64)}const Fn=g(Rn,[["render",Wn],["__file","position.vue"]]),Ln={__name:"next",setup(m,{expose:s}){s();const d=o({}),e=o(!1),t=o(""),v=o([]),p=o({align:"center",menuAlign:"center",viewBtn:!0,column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),c=(k,S)=>{e.value=!0,j.value.rowSave()},u=(k,S,T)=>{if(v.value.push(y(k)),A.success(JSON.stringify(k)),e.value){e.value=!1,T(),k.name="",k.sex="";return}S()},i=k=>{e.value=!1,k()},x=(k,S)=>{S.value=S,k()},y=k=>JSON.parse(JSON.stringify(k)),j=o(null),B={form:d,flag:e,type:t,data:v,option:p,handleNext:c,rowSave:u,beforeClose:i,beforeOpen:x,deepClone:y,crud:j,ref:o,get ElButton(){return U},get ElMessage(){return A}};return Object.defineProperty(B,"__isScriptSetup",{enumerable:!1,value:!0}),B}};function Jn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{ref:"crud",data:e.data,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c),onRowSave:e.rowSave,"before-open":e.beforeOpen,"before-close":e.beforeClose,option:e.option},{"menu-form":a(({row:c,index:u})=>[e.type==="add"?(f(),_(e.ElButton,{key:0,type:"primary",icon:"el-icon-check",plain:"",onClick:i=>e.handleNext(c,u)},{default:a(()=>s[1]||(s[1]=[l("继续添加")])),_:2},1032,["onClick"])):M("",!0)]),_:1},8,["data","modelValue","option"])}const zn=g(Ln,[["render",Jn],["__file","next.vue"]]),In={__name:"beforeClose",setup(m,{expose:s}){s();const d=o({}),e=o([{name:"张三",sex:"男"}]),t=o({column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]}),p={form:d,data:e,option:t,beforeClose:(c,u)=>{V.confirm("确认关闭？").then(()=>{c()}).catch(()=>{})},ref:o,get ElMessageBox(){return V}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Gn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c),"before-close":e.beforeClose,option:e.option},null,8,["data","modelValue","option"])}const Hn=g(In,[["render",Gn],["__file","beforeClose.vue"]]),Kn={__name:"beforeOpenLoading",setup(m,{expose:s}){s();const d=o({}),e=o([{name:"张三",sex:"男"}]),p={form:d,data:e,option:{column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},beforeOpen:(c,u,i)=>{["view","edit"].includes(u)?(i(),setTimeout(()=>{c()},300)):(d.value.name="初始化赋值",c())},ref:o,get ElMessageBox(){return V}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Qn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c),"before-open":e.beforeOpen,option:e.option},null,8,["data","modelValue"])}const Xn=g(Kn,[["render",Qn],["__file","beforeOpenLoading.vue"]]),Yn={__name:"beforeOpen",setup(m,{expose:s}){s();const d=o({}),e=o([{name:"张三",sex:"男"}]),p={form:d,data:e,option:{column:[{label:"姓名",prop:"name"},{label:"性别",prop:"sex"}]},beforeOpen:(c,u,i)=>{V.alert(`我是${u}`,"提示",{confirmButtonText:"确定"}).then(()=>{["view","edit"].includes(u)||(d.value.name="初始化赋值"),c()}).catch(()=>{})},ref:o,get ElMessageBox(){return V}};return Object.defineProperty(p,"__isScriptSetup",{enumerable:!1,value:!0}),p}};function Zn(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{data:e.data,modelValue:e.form,"onUpdate:modelValue":s[0]||(s[0]=c=>e.form=c),"before-open":e.beforeOpen,option:e.option},null,8,["data","modelValue"])}const nl=g(Yn,[["render",Zn],["__file","beforeOpen.vue"]]),ll={__name:"value",setup(m,{expose:s}){s();const d=o([]),e=o({column:[{label:"姓名",prop:"name",value:"small"}]}),t={data:d,option:e,ref:o};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function sl(m,s,d,e,t,v){const p=b("tvue-crud");return f(),_(p,{option:e.option,data:e.data},null,8,["option","data"])}const el=g(ll,[["render",sl],["__file","value.vue"]]),al={__name:"index.html",setup(m,{expose:s}){s();const d={DemoLabelslot_vue:R,DemoErrorslot_vue:J,DemoFormslot_vue:G,DemoRender_vue:Q,DemoFilter_vue:Z,DemoGroup_vue:sn,DemoControl_vue:un,DemoDefaults_vue:cn,DemoDrag_vue:on,DemoOrder_vue:bn,DemoBind_vue:gn,DemoStatus_vue:kn,DemoRef_vue:Sn,DemoRules2_vue:hn,DemoRules_vue:Pn,DemoLabelWidth_vue:Cn,DemoDone_vue:$n,DemoType_vue:qn,DemoPosition_vue:Fn,DemoNext_vue:zn,DemoBeforeClose_vue:Hn,DemoBeforeOpenLoading_vue:Xn,DemoBeforeOpen_vue:nl,DemoValue_vue:el};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}};function il(m,s,d,e,t,v){const p=b("VPDemoBasic"),c=b("Tabs");return f(),P("div",null,[s[96]||(s[96]=w('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>表格中的弹出的表单是内置组件<code>avue-form</code>组件,配置属性可以参考<a href="/form/form" target="_blank" rel="noopener noreferrer">FORM 组件文档</a></p></div><h2 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值"><span>默认值</span></a></h2>',2)),r(c,{id:"8",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[0]||(s[0]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[1]||(s[1]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[2]||(s[2]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"配置`value`为字段默认值"},{code:a(()=>s[3]||(s[3]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 'small'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoValue_vue)]),_:1})]),_:1}),s[97]||(s[97]=n("h2",{id:"打开表单前",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打开表单前"},[n("span",null,"打开表单前")])],-1)),r(c,{id:"21",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[4]||(s[4]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[5]||(s[5]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[6]||(s[6]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"打开表单前会执行`beforeOpen`方法，相关返回的方法值可以判断表单当前打开的类型是新增还是编辑，调用`done`方法打开弹窗"},{code:a(()=>s[7]||(s[7]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-open="beforeOpen"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessageBox } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"const beforeOpen = (done, type, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessageBox.alert(`我是${type}`, '提示', {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    confirmButtonText: '确定'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }).then(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    if (['view', 'edit'].includes(type)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      // 查看和编辑逻辑")]),l(`
`),n("span",{class:"line"},[n("span",null,"    } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      // 新增逻辑")]),l(`
`),n("span",{class:"line"},[n("span",null,"      form.value.name = '初始化赋值';")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }).catch(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 处理取消或关闭的逻辑（如果有需要）")]),l(`
`),n("span",{class:"line"},[n("span",null,"  });")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoBeforeOpen_vue)]),_:1})]),_:1}),s[98]||(s[98]=n("h2",{id:"加载数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#加载数据"},[n("span",null,"加载数据")])],-1)),r(c,{id:"34",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[8]||(s[8]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[9]||(s[9]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[10]||(s[10]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"打开表单前会执行`beforeOpen`方法，调用`loading`加载等待数据，调用`done`完成加载"},{code:a(()=>s[11]||(s[11]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-open="beforeOpen"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessageBox } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"const beforeOpen = (done, type, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (['view', 'edit'].includes(type)) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading()")]),l(`
`),n("span",{class:"line"},[n("span",null,"    setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      done()")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, 300)")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    // 新增逻辑")]),l(`
`),n("span",{class:"line"},[n("span",null,"    form.value.name = '初始化赋值';")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoBeforeOpenLoading_vue)]),_:1})]),_:1}),s[99]||(s[99]=n("h2",{id:"关闭表单前",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#关闭表单前"},[n("span",null,"关闭表单前")])],-1)),r(c,{id:"47",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[12]||(s[12]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[13]||(s[13]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[14]||(s[14]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"关闭表单前会执行`beforeClose`方法，执行返回的`done`方法后才会彻底关闭表单"},{code:a(()=>s[15]||(s[15]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-close="beforeClose"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessageBox } from 'element-plus'")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
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
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const beforeClose = (done, type) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessageBox.confirm('确认关闭？')")]),l(`
`),n("span",{class:"line"},[n("span",null,"    .then(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    })")]),l(`
`),n("span",{class:"line"},[n("span",null,"    .catch(() => { });")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoBeforeClose_vue)]),_:1})]),_:1}),s[100]||(s[100]=w('<h2 id="不关弹窗连续添加" tabindex="-1"><a class="header-anchor" href="#不关弹窗连续添加"><span>不关弹窗连续添加</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>源码中涉及自定义卡槽和按钮的操作方法可以下面介绍</p><ul><li><a href="/crud/crud-btn-slot.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%B9%E7%AA%97%E5%86%85%E6%8C%89%E9%92%AE" target="_blank" rel="noopener noreferrer">自定义按钮</a></li><li><a href="/crud/crud-fun.html" target="_blank" rel="noopener noreferrer">按钮方法</a></li></ul></div>',2)),r(c,{id:"77",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[16]||(s[16]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[17]||(s[17]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[18]||(s[18]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"关闭表单前会执行`beforeClose`方法，执行返回的`done`方法后才会彻底关闭表单"},{code:a(()=>s[19]||(s[19]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="rowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-open="beforeOpen"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-close="beforeClose"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #menu-form="{ row, index }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 icon="el-icon-check"')]),l(`
`),n("span",{class:"line"},[n("span",null,"                 plain")]),l(`
`),n("span",{class:"line"},[n("span",null,`                 v-if="type === 'add'"`)]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="handleNext(row, index)">继续添加</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElButton, ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import 'element-plus/theme-chalk/el-message.css';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const flag = ref(false);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const type = ref('');")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  align: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  menuAlign: 'center',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  viewBtn: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleNext = (row, index) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  flag.value = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  // @ts-ignore")]),l(`
`),n("span",{class:"line"},[n("span",null,"  crud.value.rowSave();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const rowSave = (form, done, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data.value.push(deepClone(form));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success(JSON.stringify(form));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (flag.value) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    flag.value = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),l(`
`),n("span",{class:"line"},[n("span",null,'    form.name = "";')]),l(`
`),n("span",{class:"line"},[n("span",null,'    form.sex = "";')]),l(`
`),n("span",{class:"line"},[n("span",null,"    return;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const beforeClose = (done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  flag.value = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const beforeOpen = (done, type) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  type.value = type;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const deepClone = (obj) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  return JSON.parse(JSON.stringify(obj));")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoNext_vue)]),_:1})]),_:1}),s[101]||(s[101]=n("h2",{id:"表单按钮位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表单按钮位置"},[n("span",null,"表单按钮位置")])],-1)),r(c,{id:"90",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[20]||(s[20]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[21]||(s[21]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[22]||(s[22]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"配置`dialogMenuPosition`属性值即可，默认为`right`"},{code:a(()=>s[23]||(s[23]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-radio-group v-model="direction">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="left">居左</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="center">居中</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="right">居右</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </el-radio-group>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="list"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const direction = ref('right');")]),l(`
`),n("span",{class:"line"},[n("span",null,"const list = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: 12")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    id: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: 12")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogMenuPosition: 'right',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: 'id',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'id'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"watch(direction, (value) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.dialogMenuPosition = value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoPosition_vue)]),_:1})]),_:1}),s[102]||(s[102]=n("h2",{id:"打开表单方式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#打开表单方式"},[n("span",null,"打开表单方式")])],-1)),r(c,{id:"103",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[24]||(s[24]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[25]||(s[25]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[26]||(s[26]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"配置`dialogType`为弹窗的方式,`dialogDirection`为弹窗的位置"},{code:a(()=>s[27]||(s[27]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <el-radio-group v-model="direction">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="ltr">从左往右开</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="rtl">从右往左开</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="ttb">从上往下开</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <el-radio label="btt">从下往上开</el-radio>')]),l(`
`),n("span",{class:"line"},[n("span",null,"  </el-radio-group>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="list"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const direction = ref('rtl');")]),l(`
`),n("span",{class:"line"},[n("span",null,"const list = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: 12")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: 12")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogDirection: 'rtl',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogType: 'drawer',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"watch(direction, (value) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.value.dialogDirection = value;")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoType_vue)]),_:1})]),_:1}),s[103]||(s[103]=n("h2",{id:"防重提交",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#防重提交"},[n("span",null,"防重提交")])],-1)),r(c,{id:"116",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[28]||(s[28]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[29]||(s[29]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[30]||(s[30]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"为了防止数据重复提交，加入了防重提交机制，`rowSave`方法和`rowUpdate`方法返回`done`用于关闭表单方法和`loading`用于关闭禁止的表单不关闭表单"},{code:a(()=>s[31]||(s[31]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-save="handleRowSave"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @row-update="handleRowUpdate"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowSave = (row, done, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('1秒后关闭禁止表单');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('3秒后关闭表单');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 3000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleRowUpdate = (row, index, done, loading) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('1秒后关闭禁止表单');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    loading();")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('3秒后关闭表单');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 1000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 3000);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoDone_vue)]),_:1})]),_:1}),s[104]||(s[104]=n("h2",{id:"标题字段宽度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#标题字段宽度"},[n("span",null,"标题字段宽度")])],-1)),r(c,{id:"129",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[32]||(s[32]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[33]||(s[33]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[34]||(s[34]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"`labelWidth`为标题的宽度，默认为`90`，可以配置到`option`下作用于全部,也可以单独配置每一项"},{code:a(()=>s[35]||(s[35]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 150,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      labelWidth: 30,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoLabelWidth_vue)]),_:1})]),_:1}),s[105]||(s[105]=w('<h2 id="验证" tabindex="-1"><a class="header-anchor" href="#验证"><span>验证</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>具体参考<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a></p></div>',2)),r(c,{id:"147",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[36]||(s[36]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[37]||(s[37]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[38]||(s[38]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"配置验证字段的`rules`的数据对象"},{code:a(()=>s[39]||(s[39]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, message: '请输入性别', trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoRules_vue)]),_:1})]),_:1}),s[106]||(s[106]=w('<h2 id="自定义验证" tabindex="-1"><a class="header-anchor" href="#自定义验证"><span>自定义验证</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>自定义校验 callback 必须被调用。 更多高级用法可参考 <a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>。</p></div>',2)),r(c,{id:"165",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[40]||(s[40]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[41]||(s[41]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[42]||(s[42]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue"},{code:a(()=>s[43]||(s[43]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="obj"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             @error="handleError"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span",null,"const obj = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const validatePass = (rule, value, callback) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (value === '') {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    callback(new Error('请输入密码'));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const validatePass2 = (rule, value, callback) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (value === '') {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    callback(new Error('请再次输入密码'));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else if (value !== obj.value.password) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    callback(new Error('两次输入密码不一致!'));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    callback();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '密码',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'password',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, validator: validatePass, trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '确认密码',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'oldpassword',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [{ required: true, validator: validatePass2, trigger: 'blur' }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const handleError = (err) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ElMessage.success('请查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"  console.log(err);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoRules2_vue)]),_:1})]),_:1}),s[107]||(s[107]=n("h2",{id:"组件对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#组件对象"},[n("span",null,"组件对象")])],-1)),r(c,{id:"178",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[44]||(s[44]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[45]||(s[45]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[46]||(s[46]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"打开表单的时候可以获取相关字段的 ref 对象"},{code:a(()=>s[47]||(s[47]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud ref="crud"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :before-open="beforeOpen"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElMessage } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text: '测试数据'")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '测试框',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text',")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const crud = ref(null);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const beforeOpen = (done) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  done();")]),l(`
`),n("span",{class:"line"},[n("span",null,"  setTimeout(() => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    ElMessage.success('查看控制台');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    console.log('text的ref对象');")]),l(`
`),n("span",{class:"line"},[n("span",null,"    console.log(crud.value.getPropRef('text'));")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, 0);")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoRef_vue)]),_:1})]),_:1}),s[108]||(s[108]=n("h2",{id:"字段不同状态",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字段不同状态"},[n("span",null,"字段不同状态")])],-1)),r(c,{id:"191",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[48]||(s[48]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[49]||(s[49]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[50]||(s[50]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"`disabled`、`display`、`detail`等字段在新增和编辑不同状态下，字段的不同状态展示"},{code:a(()=>s[51]||(s[51]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    grade: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    grade: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      editDisabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      editDisplay: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '权限',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'grade',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      editDetail: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      addDisabled: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '测试',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'test',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      addDisplay: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoStatus_vue)]),_:1})]),_:1}),s[109]||(s[109]=n("h2",{id:"深结构绑定",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#深结构绑定"},[n("span",null,"深结构绑定")])],-1)),r(c,{id:"204",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[52]||(s[52]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[53]||(s[53]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[54]||(s[54]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"`bing`绑定深层次的结构对象，`prop`也是需要填写"},{code:a(()=>s[55]||(s[55]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #bind-form="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="changeDeepValue">改变deep.deep.deep.value值</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="changeTestValue">改变test值</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <br /><br />")]),l(`
`),n("span",{class:"line"},[n("span",null,"      {{ form }}")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ElButton } from 'element-plus';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      deep: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        value: '我是深结构'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  labelWidth: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '深结构',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'test',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      bind: 'deep.deep.deep.value'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'bind',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      hide: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const changeDeepValue = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  form.value.deep.deep.deep.value = '改变deep.deep.deep.value值';")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const changeTestValue = () => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  form.value.test = '改变test值';")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoBind_vue)]),_:1})]),_:1}),s[110]||(s[110]=n("h2",{id:"字段排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#字段排序"},[n("span",null,"字段排序")])],-1)),r(c,{id:"217",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[56]||(s[56]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[57]||(s[57]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[58]||(s[58]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"配置`order`的序号可以实现表单和表格字段不同的顺序"},{code:a(()=>s[59]||(s[59]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      order: 1")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoOrder_vue)]),_:1})]),_:1}),s[111]||(s[111]=n("h2",{id:"表单窗口拖拽",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#表单窗口拖拽"},[n("span",null,"表单窗口拖拽")])],-1)),r(c,{id:"230",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[60]||(s[60]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[61]||(s[61]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[62]||(s[62]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"`dialogDrag`设置为`true`即可拖动表单"},{code:a(()=>s[63]||(s[63]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: false }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  dialogDrag: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '姓名', prop: 'name' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    { label: '性别', prop: 'sex' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoDrag_vue)]),_:1})]),_:1}),s[112]||(s[112]=n("h2",{id:"改变结构配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#改变结构配置"},[n("span",null,"改变结构配置")])],-1)),r(c,{id:"243",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[64]||(s[64]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[65]||(s[65]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[66]||(s[66]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue"},{code:a(()=>s[67]||(s[67]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud v-model:defaults="defaults"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, watch } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const defaults = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '显示',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '隐藏',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    display: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"watch(() => form.value.text1, (val) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  if (val === 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2 = { display: true };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3 = { label: '内容3' };")]),l(`
`),n("span",{class:"line"},[n("span",null,"  } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text2 = { display: false };")]),l(`
`),n("span",{class:"line"},[n("span",null,"    defaults.value.text3 = { label: '有没有发现我变了' };")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoDefaults_vue)]),_:1})]),_:1}),s[113]||(s[113]=n("h2",{id:"与其它字段交互",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#与其它字段交互"},[n("span",null,"与其它字段交互")])],-1)),r(c,{id:"256",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[68]||(s[68]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[69]||(s[69]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[70]||(s[70]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue"},{code:a(()=>s[71]||(s[71]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([{")]),l(`
`),n("span",{class:"line"},[n("span",null,"  text1: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"}]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    type: 'radio',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    dicData: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '显示',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '隐藏',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    control: (val, form) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      if (val === 0) {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          text2: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          text3: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '内容3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        };")]),l(`
`),n("span",{class:"line"},[n("span",null,"      } else {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          text2: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            display: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"          },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          text3: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '有没有发现我变了'")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        };")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    display: true")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    label: '内容3',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    prop: 'text3'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoControl_vue)]),_:1})]),_:1}),s[114]||(s[114]=w('<h2 id="表单分组" tabindex="-1"><a class="header-anchor" href="#表单分组"><span>表单分组</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><a href="/form/form-group.html" target="_blank" rel="noopener noreferrer">表单分组详细用法</a></li></ul></div>',2)),r(c,{id:"278",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[72]||(s[72]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[73]||(s[73]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[74]||(s[74]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue"},{code:a(()=>s[75]||(s[75]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script>")]),l(`
`),n("span",{class:"line"},[n("span",null,"let baseUrl = 'https://cli.avuejs.com/api/area'")]),l(`
`),n("span",{class:"line"},[n("span",null,"export default {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  data () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    return {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      form: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '11'")]),l(`
`),n("span",{class:"line"},[n("span",null,"      },")]),l(`
`),n("span",{class:"line"},[n("span",null,"      data: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"        name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        sex: 15,")]),l(`
`),n("span",{class:"line"},[n("span",null,"        province: '110000',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        city: '110100',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        area: '110101',")]),l(`
`),n("span",{class:"line"},[n("span",null,"        checkbox: ['110000']")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"      option: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        column: [{")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          display: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"        },")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          prop: 'sex',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          display: false")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }],")]),l(`
`),n("span",{class:"line"},[n("span",null,"        group: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '用户信息',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'jbxx',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            icon: 'el-icon-edit-outline',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'name'")]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '年龄',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"              }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '退款申请',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'tksq',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            icon: 'el-icon-view',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'province',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                },")]),l(`
`),n("span",{class:"line"},[n("span",null,"                cascader: ['city'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"                dicUrl: `${baseUrl}/getProvince`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    message: '请选择省份',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"                ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'city',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                cascader: ['area'],")]),l(`
`),n("span",{class:"line"},[n("span",null,"                props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                },")]),l(`
`),n("span",{class:"line"},[n("span",null,"                cascaderIndex: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                dicUrl: `${baseUrl}/getCity/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    message: '请选择城市',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"                ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"              },")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'area',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                type: 'select',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                props: {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  label: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  value: 'code'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                },")]),l(`
`),n("span",{class:"line"},[n("span",null,"                cascaderIndex: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                dicUrl: `${baseUrl}/getArea/{{key}}`,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    message: '请选择地区',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                    trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"                  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"                ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"              }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          , {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            label: '用户信息',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            prop: 'yhxxs',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            icon: 'el-icon-edit-outline',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"              {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '测试长度',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'len',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                maxlength: 5,")]),l(`
`),n("span",{class:"line"},[n("span",null,"              }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"                labelWidth: 120,")]),l(`
`),n("span",{class:"line"},[n("span",null,"                label: '测试自定义',")]),l(`
`),n("span",{class:"line"},[n("span",null,"                prop: 'names'")]),l(`
`),n("span",{class:"line"},[n("span",null,"              }")]),l(`
`),n("span",{class:"line"},[n("span",null,"            ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }")]),l(`
`),n("span",{class:"line"},[n("span",null,"        ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoGroup_vue)]),_:1})]),_:1}),s[115]||(s[115]=n("h2",{id:"数据过滤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据过滤"},[n("span",null,"数据过滤")])],-1)),r(c,{id:"291",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[76]||(s[76]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[77]||(s[77]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[78]||(s[78]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"`filterDic`设置为`true`返回的对象不会包含`$`前缀的字典翻译, `filterNull`设置为`true`返回的对象不会包含空数据的字段"},{code:a(()=>s[79]||(s[79]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :key="reload"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :data="data">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-form="{ size }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="danger"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="filterDic">过滤数据字典</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="success"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="filterNull">过滤空数据</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-button type="primary"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                 @click="filter">不过滤</el-button>')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <p>{{ form }}</p>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-input v-model="form.name"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                :size="size"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref, reactive } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    cascader: [0, 1],")]),l(`
`),n("span",{class:"line"},[n("span",null,"    tree: 0")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const reload = ref(Math.random());")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = reactive({});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = reactive({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      span: 24,")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '级别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'cascader',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '树型',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      type: 'tree',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      dicData: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          label: '一级',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          value: 0,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          children: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级1',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 1,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            {")]),l(`
`),n("span",{class:"line"},[n("span",null,"              label: '一级2',")]),l(`
`),n("span",{class:"line"},[n("span",null,"              value: 2,")]),l(`
`),n("span",{class:"line"},[n("span",null,"            }")]),l(`
`),n("span",{class:"line"},[n("span",null,"          ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function refresh () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  reload.value = Math.random();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function filter () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.filterDic = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.filterNull = false;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function filterDic () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.filterDic = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"function filterNull () {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  option.filterNull = true;")]),l(`
`),n("span",{class:"line"},[n("span",null,"  refresh();")]),l(`
`),n("span",{class:"line"},[n("span",null,"}")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoFilter_vue)]),_:1})]),_:1}),s[116]||(s[116]=n("h2",{id:"render-渲染表单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#render-渲染表单"},[n("span",null,"render 渲染表单")])],-1)),r(c,{id:"304",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[80]||(s[80]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[81]||(s[81]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[82]||(s[82]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue"},{code:a(()=>s[83]||(s[83]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form"></tvue-crud>')]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { h, ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '张三',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '男'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }, {")]),l(`
`),n("span",{class:"line"},[n("span",null,"    name: '李四',")]),l(`
`),n("span",{class:"line"},[n("span",null,"    sex: '女'")]),l(`
`),n("span",{class:"line"},[n("span",null,"  }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      renderForm: ({ row }) => {")]),l(`
`),n("span",{class:"line"},[n("span",null,"        return h('p',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          {")]),l(`
`),n("span",{class:"line"},[n("span",null,"            id: 'box',")]),l(`
`),n("span",{class:"line"},[n("span",null,"            class: { 'demo': true },")]),l(`
`),n("span",{class:"line"},[n("span",null,"            style: { color: 'pink', lineHeight: '30px' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"          }, row.name || 'name');")]),l(`
`),n("span",{class:"line"},[n("span",null,"      }")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoRender_vue)]),_:1})]),_:1}),s[117]||(s[117]=n("h2",{id:"自定义表单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义表单"},[n("span",null,"自定义表单")])],-1)),r(c,{id:"317",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[84]||(s[84]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[85]||(s[85]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[86]||(s[86]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"在卡槽中指定列的`prop`加上`-form`作为卡槽的名称开启自定义"},{code:a(()=>s[87]||(s[87]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             v-model="form">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-form="{ type, disabled }">')]),l(`
`),n("span",{class:"line"},[n("span",null,`      <el-tag v-if="type === 'add'">新增</el-tag>`)]),l(`
`),n("span",{class:"line"},[n("span",null,`      <el-tag v-else-if="type === 'edit'">修改</el-tag>`)]),l(`
`),n("span",{class:"line"},[n("span",null,`      <el-tag v-else-if="type === 'view'">查看</el-tag>`)]),l(`
`),n("span",{class:"line"},[n("span",null,"      <el-tag>{{ user.name ? user.name : '暂时没有内容' }}</el-tag>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-input :disabled="disabled"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                v-model="user.name"></el-input>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const form = ref({});")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,'          message: "请输入姓名",')]),l(`
`),n("span",{class:"line"},[n("span",null,'          trigger: "blur"')]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoFormslot_vue)]),_:1})]),_:1}),s[118]||(s[118]=n("h2",{id:"自定义表单错误提示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义表单错误提示"},[n("span",null,"自定义表单错误提示")])],-1)),r(c,{id:"330",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[88]||(s[88]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[89]||(s[89]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[90]||(s[90]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"在卡槽中指定列的`prop`加上`-error`作为卡槽的名称开启自定义"},{code:a(()=>s[91]||(s[91]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-error="{ error }">')]),l(`
`),n("span",{class:"line"},[n("span",null,'      <p style="color:green">自定义提示{{ error }}</p>')]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = {")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"};")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoErrorslot_vue)]),_:1})]),_:1}),s[119]||(s[119]=n("h2",{id:"自定义表单标题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义表单标题"},[n("span",null,"自定义表单标题")])],-1)),r(c,{id:"343",data:[{id:"vue2"},{id:"vue3"}],active:1},{title0:a(({value:u,isActive:i})=>s[92]||(s[92]=[l("vue2")])),title1:a(({value:u,isActive:i})=>s[93]||(s[93]=[l("vue3")])),tab0:a(({value:u,isActive:i})=>s[94]||(s[94]=[n("p",null,null,-1)])),tab1:a(({value:u,isActive:i})=>[r(p,{type:"vue",desc:"在卡槽中指定列的`prop`加上`-label`作为卡槽的名称开启自定义"},{code:a(()=>s[95]||(s[95]=[n("div",{class:"language-vue line-numbers-mode","data-ext":"vue","data-title":"vue"},[n("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),n("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[n("code",null,[n("span",{class:"line"},[n("span",null,"<template>")]),l(`
`),n("span",{class:"line"},[n("span",null,'  <tvue-crud :data="data"')]),l(`
`),n("span",{class:"line"},[n("span",null,'             :option="option">')]),l(`
`),n("span",{class:"line"},[n("span",null,'    <template #name-label="{}">')]),l(`
`),n("span",{class:"line"},[n("span",null,"      <span>姓名&nbsp;&nbsp;</span>")]),l(`
`),n("span",{class:"line"},[n("span",null,'      <el-tooltip class="item"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                  effect="dark"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                  content="文字提示"')]),l(`
`),n("span",{class:"line"},[n("span",null,'                  placement="top-start">')]),l(`
`),n("span",{class:"line"},[n("span",null,'        <i class="el-icon-warning"></i>')]),l(`
`),n("span",{class:"line"},[n("span",null,"      </el-tooltip>")]),l(`
`),n("span",{class:"line"},[n("span",null,"    </template>")]),l(`
`),n("span",{class:"line"},[n("span",null,"  </tvue-crud>")]),l(`
`),n("span",{class:"line"},[n("span",null,"</template>")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"<script setup>")]),l(`
`),n("span",{class:"line"},[n("span",null,"import { ref } from 'vue';")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const data = ref([")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '张三', sex: '男' },")]),l(`
`),n("span",{class:"line"},[n("span",null,"  { name: '李四', sex: '女' }")]),l(`
`),n("span",{class:"line"},[n("span",null,"]);")]),l(`
`),n("span",{class:"line"},[n("span")]),l(`
`),n("span",{class:"line"},[n("span",null,"const option = ref({")]),l(`
`),n("span",{class:"line"},[n("span",null,"  column: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'name',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      rules: [")]),l(`
`),n("span",{class:"line"},[n("span",null,"        {")]),l(`
`),n("span",{class:"line"},[n("span",null,"          required: true,")]),l(`
`),n("span",{class:"line"},[n("span",null,"          message: '请输入姓名',")]),l(`
`),n("span",{class:"line"},[n("span",null,"          trigger: 'blur'")]),l(`
`),n("span",{class:"line"},[n("span",null,"        }")]),l(`
`),n("span",{class:"line"},[n("span",null,"      ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"    },")]),l(`
`),n("span",{class:"line"},[n("span",null,"    {")]),l(`
`),n("span",{class:"line"},[n("span",null,"      label: '性别',")]),l(`
`),n("span",{class:"line"},[n("span",null,"      prop: 'sex'")]),l(`
`),n("span",{class:"line"},[n("span",null,"    }")]),l(`
`),n("span",{class:"line"},[n("span",null,"  ]")]),l(`
`),n("span",{class:"line"},[n("span",null,"});")]),l(`
`),n("span",{class:"line"},[n("span",null,"<\/script>")])])]),n("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1)])),default:a(()=>[r(e.DemoLabelslot_vue)]),_:1})]),_:1})])}const pl=g(al,[["render",il],["__file","index.html.vue"]]),rl=JSON.parse('{"path":"/doc/crud-form/","title":"弹窗表单配置","lang":"zh-CN","frontmatter":{"title":"弹窗表单配置","createTime":"2025/02/05 17:08:32","permalink":"/doc/crud-form/"},"headers":[],"readingTime":{"minutes":3.44,"words":1033},"git":{"updatedTime":1738807187000,"contributors":[{"name":"赵亦凡","username":"赵亦凡","email":"1784848264@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/赵亦凡?v=4","url":"https://github.com/赵亦凡"}]},"filePathRelative":"notes/doc/crud/crud-form.md","bulletin":false}');export{pl as comp,rl as data};

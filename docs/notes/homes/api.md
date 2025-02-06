---
title: 全局API
createTime: 2025/01/15 10:03:30
permalink: /homes/api/
---

在avue中内置封装了很多全局的api函数，在项目开发中常用的函数，在引入avue后你可以在任何组件里取调用这些方法

>2.12.2+版本支持非this单独使用  
import {$DialogForm,$Export,...} from '@zhaoyifannan/tvue'



### $DialogForm弹窗表单

:::tip
- 可以直接弹框Form表单[在线例子](/default/dialog-form)
- 更多Form配置属性可以参考[From组件文档](/form/form)
::::


::: tabs
@tab VUE2

``` javascript
this.$DialogForm.show({
  title: '弹窗页面',
  width: '30%',
  menuPosition:'right',
  option:{
    submitText: '完成',
    span:24,
    column: [{
      label: "姓名",
      prop: "name",
      rules: [{
        required: true,
        message: "请输入姓名",
        trigger: "blur"
      }],
    }]
  },
  beforeClose: (done) => {
    this.$message.success('关闭前方法')
    done()
  },
  callback:(res)=>{
    console.log(res.data);
    this.$message.success('关闭等待框')
    setTimeout(() => {
      res.done()
      setTimeout(() => {
        this.$message.success('关闭弹窗')
        res.close()
      }, 1000)
    }, 1000)
  }
})
```

@tab VUE3

```javascript
import { getCurrentInstance } from "vue";
import { $DialogForm } from "@zhaoyifannan/tvue";
const { appContext } = getCurrentInstance();
const ops = {
  option: {
    submitText: "完成",
    column: [
      {
        label: "姓名",
        prop: "name",
        span: 24,
        rules: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
      },
    ],
  },
};
//用法 1
appContext.config.globalProperties.$DialogForm(ops);
//用法 2
$DialogForm(appContext)(ops);
//关闭
$DialogForm(appContext)(ops).lose();
```

:::


### $Clipboard复制到剪切板
>可以赋值任意文本到剪切板[在线例子](/default/clipboard)

::: tabs
@tab VUE2

``` javascript
 this.$Clipboard({
    text: '复制的文本内容'
  }).then(() => {
    this.$message.success('复制成功')
  }).catch(() => {
    this.$message.error('复制失败')
  });
```

@tab VUE3

```javascript
import { $Clipboard } from "@zhaoyifannan/tvue";
$Clipboard({
  text: "复制的文本内容",
})
  .then(() => {
    this.$message.success("复制成功");
  })
  .catch(() => {
    this.$message.error("复制失败");
  });
```

:::


### $ImagePreview图片预览
>可以赋值任赋值图片去放大预览(一张缩略图，一张放大图)[在线例子](/default/image-preview)

::: tabs
@tab VUE2

``` javascript
 data() {
    var link = 'https://lokeshdhakar.com/projects/lightbox2/images/';
    return {
      datas: [
        { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
        { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
        { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` },
      ]
    }
  }
 this.$ImagePreview(this.datas, index);
```

@tab VUE3

```javascript
import { getCurrentInstance } from "vue";
import { $ImagePreview } from "@zhaoyifannan/tvue";
const { appContext } = getCurrentInstance();
var link = "https://lokeshdhakar.com/projects/lightbox2/images/";
let datas = [
  { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
  { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
  { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` },
];
$ImagePreview(appContext)(datas, 0);
```

:::


### $Print 打印插件
>可以传入dom的id或者class[在线例子](/default/print)

::: tabs
@tab VUE2

``` javascript
  <div id="test"></div>
  this.$Print('#test')
```

@tab VUE3

```javascript
import { $Print } from "@zhaoyifannan/tvue";
<div id="test"></div>;
Print("#test");
```

:::


### $Export excel导出
>传入相关的属性配置[在线例子](/default/export)

::: tabs
@tab VUE2

``` javascript
 let opt = {
    title: '文档标题',
    column: [{
      label: '标题',
      prop: 'title'
    }],
    data: [{
      title: "测试数据1"
    }, {
      title: "测试数据2"
    }]
  }
  this.$Export.excel({
    title: opt.title || new Date().getTime(),
    columns: opt.column,
    data: opt.data
  });
```

@tab VUE3

```javascript
import { $Export } from "@zhaoyifannan/tvue";
let opt = {
  title: "文档标题",
  column: [
    {
      label: "标题",
      prop: "title",
    },
  ],
  data: [
    {
      title: "测试数据1",
    },
    {
      title: "测试数据2",
    },
  ],
};
$Export.excel({
  title: opt.title || new Date().getTime(),
  columns: opt.column,
  data: opt.data,
});
```

:::


### $Log日志打印
>可以打印不同颜色和标注的日志

::: tabs
@tab VUE2

``` javascript
/**
* 内置5中常用颜色,默认为primary
* default:#35495E
* primary:#3488ff
* success:#43B883
* warning:#e6a23c
* danger:#f56c6c
* 也可以直接打印彩色文字
*/

this.$Log.capsule('标题','内容','primary')
this.$Log.primary('内容')
```

@tab VUE3

```javascript
import { $Log } from "@zhaoyifannan/tvue";
/**
 * 内置5中常用颜色,默认为primary
 * default:#35495E
 * primary:#3488ff
 * success:#43B883
 * warning:#e6a23c
 * danger:#f56c6c
 * 也可以直接打印彩色文字
 */

$Log.capsule("标题", "内容", "primary");
$Log.primary("内容");
```

:::



### findObject发现结构对象
>可对对象和数组深拷贝

::: tabs
@tab VUE2

``` javascript
  var option = {column:[]}
  var prop = this.findObject(option.column,'prop');
  console.log(prop)//操作对象
```

@tab VUE3

```javascript
import { findObject } from "@zhaoyifannan/tvue";
var option = { column: [] };
var prop = findObject(option.column, "prop");
console.log(prop); //操作对象
```

:::



### watermark全局水印
>传入水印的文案[在线例子](/default/watermark)

::: tabs
@tab VUE2

``` javascript
  this.watermark({
    fontSize: '14px', 
    width: '100', 
    height: '80', 
    text: 'avue局部水印'
  });
```

@tab VUE3


:::


### downFile文件下载

::: tabs
@tab VUE2

``` javascript
  var url = "https://avuejs.com/images/logo-bg.jpg";
  this.downFile(url,'logo.jpg');
```

@tab VUE3

```javascript
import { downFile } from "@zhaoyifannan/tvue";
var url = "https://avuejs.com/images/logo-bg.jpg";
downFile(url, "logo.jpg");
```

:::


### randomId随机数生成

::: tabs
@tab VUE2

``` javascript
  var str = this.randomId();
  console.log(str)
```

@tab VUE3

```javascript
import { randomId } from "@zhaoyifannan/tvue";
var str = randomId();
console.log(str);
```

:::


### loadScript动态加载js/css

::: tabs
@tab VUE2

``` javascript
  this.loadScript('js','xxx.js').then(()=>{
    //执行后的方法
  })
  this.loadScript('css','xxx.css').then(()=>{
    //执行后的方法
  })
```

@tab VUE3

```javascript
import { loadScript } from "@zhaoyifannan/tvue";
loadScript("js", "xxx.js").then(() => {
  //执行后的方法
});
loadScript("css", "xxx.css").then(() => {
  //执行后的方法
});
```

:::


### deepClone对象深拷贝
>可对对象和数组深拷贝

::: tabs
@tab VUE2

``` javascript
  var obj1 = {
    name:'张三'
  }
  var obj2 = this.deepClone(obj1);
```

@tab VUE3

```javascript
import { deepClone } from "@zhaoyifannan/tvue";
var obj1 = {
  name: "张三",
};
var obj2 = deepClone(obj1);
```

:::


### setPx设置css像素方法
>如果传入是数字默认加px属性

::: tabs
@tab VUE2

``` javascript
  var obj = 23
  console.log(this.setPx(obj)) //'23px'
  console.log(this.setPx('100%')) //'100%'
  console.log(this.setPx('23px')) //'23px'
```

@tab VUE3

```javascript
import { setPx } from "@zhaoyifannan/tvue";
var obj = 23;
console.log(setPx(obj)); //'23px'
console.log(setPx("100%")); //'100%'
console.log(setPx("23px")); //'23px'
```

:::


### validatenull判断空
>可以判断对象、数组、字符串是否为空

::: tabs
@tab VUE2

``` javascript
  var obj1 = {}
  var obj2 = []
  var str1 = ''
  var str2 = undefined
  var str3 = null;
  console.log(this.validatenull(obj1)) //true
  console.log(this.validatenull(obj2)) //true
  console.log(this.validatenull(str1)) //true
  console.log(this.validatenull(str2)) //true
  console.log(this.validatenull(str3)) //true
```

@tab VUE3

```javascript
import { validatenull } from "@zhaoyifannan/tvue";
var obj1 = {};
var obj2 = [];
var str1 = "";
var str2 = undefined;
var str3 = null;
console.log(validatenull(obj1)); //true
console.log(validatenull(obj2)); //true
console.log(validatenull(str1)); //true
console.log(validatenull(str2)); //true
console.log(validatenull(str3)); //true
```

:::


### findNode数组中寻找对象下
> 根据对象属性在数组中寻找返回符合的对象

::: tabs
@tab VUE2

``` javascript
  var list = [{
    prop:'name'
  },{
    prop:'sex'
  }]
  var obj = this.findNode(list,'sex','prop');
  console.log(obj) //{prop:'sex'}
```

@tab VUE3

```javascript
import { findNode } from "@zhaoyifannan/tvue";
var list = [
  {
    prop: "name",
  },
  {
    prop: "sex",
  },
];
var obj = findNode(list, "sex", "prop");
console.log(obj); //{prop:'sex'}
```

:::


### findArray数组中寻找对象下标
> 根据对象属性在数组中寻找返回符合的数组下标

::: tabs
@tab VUE2

``` javascript
  var list = [{
    prop:'name'
  },{
    prop:'sex'
  }]
  var index = this.findArray(list,'sex','prop');
  console.log(index) //1
```

@tab VUE3

```javascript
import { findArray } from "@zhaoyifannan/tvue";
var list = [
  {
    prop: "name",
  },
  {
    prop: "sex",
  },
];
var index = findArray(list, "sex", "prop");
console.log(index); //1
```

:::


### vaildData验证对象
> 验证是否为空的任何类型数据,为空择取默认的设置值

::: tabs
@tab VUE2

``` javascript
  var obj = {}
  console.log(this.vaildData(obj,'默认值')) //默认值
  console.log(this.vaildData(obj,{name:11})) //{name:11}
  var obj2 = true
  console.log(this.vaildData(obj2,false)) //true
```

@tab VUE3

```javascript
import { validData } from "@zhaoyifannan/tvue";
var obj = {};
console.log(validData(obj, "默认值")); //默认值
console.log(validData(obj, { name: 11 })); //{name:11}
var obj2 = true;
console.log(validData(obj2, false)); //true
```

:::

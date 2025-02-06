---
title: Upload附件上传
createTime: 2025/02/06 14:02:56
permalink: /form/form-upload/
---

``` js
//使用上传附件需要引入axios
import axios from 'axios'
const app =createApp({})
app.use(Avue,{axios})
```

:::tip
`propsHttp`配置请求接口返回的数据结构
- `name`图片的名称
- `url`路径地址
- `res`返回数据层级结构
- `home`相对路径的主路径
:::

## 类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`listType`配置上传的类型,`multiple`是否多选上传"](../../examples/form/form-upload/base.vue)

:::

## 数据类型

:::tip
`dataType`配置数据的结构`string`、`object`、`json`
当`dataType`配置为`object`时，可以配置`props`存储的数据结构
- `label`图片的名称
- `value`路径地址
当`dataType`配置为`json`时，是json序列化字符串,也可以配置`props`存储的数据结构
:::

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`dataType`可以配置数据的类型"](../../examples/form/form-upload/type.vue)

:::

## 上传前和上传后方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`upload-before`上传前的回调,`upload-after`上传后的回调"](../../examples/form/form-upload/before.vue)

:::

## 自定义预览方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`uploadPreview`预览回调方法"](../../examples/form/form-upload/preview.vue)

:::

## 自定义删除方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`uploadDelete`删除回调函数"](../../examples/form/form-upload/delete.vue)

:::

## 指定文件类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`fileType`来指定文件的类型，一般用于没有后缀格式的地址"](../../examples/form/form-upload/file-type.vue)

:::

## 传参

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`data`和`headers`属性作为传递参数"](../../examples/form/form-upload/params.vue)

:::

## 上传等待文案和按钮文案

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`loadText`上传等待文案,`fileText`上传按钮文案,`tip`提示文案"](../../examples/form/form-upload/load-text.vue)

:::

## 限制文件类型和大小数量

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`accept`限制格式和`limit`显示个数以及`fileSize`限制大小对应参数即可,`fileSize`对应基础单位为KB"](../../examples/form/form-upload/accept.vue)

:::

## 超出上传限制回调

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`uploadExceed`文件超出上传限制回调"](../../examples/form/form-upload/exceed.vue)

:::

## 上传失败错误回调函数

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="限制文件类型和大小数量触发时会调用`uploadError`上传失败错误回调函数"](../../examples/form/form-upload/error.vue)

:::

## 自定义模板

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="列名的`prop`加上`Type`即可自定义内容"](../../examples/form/form-upload/slot.vue)

:::

## 图片水印

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以配置`canvasOption`属性去生成水印和压缩图片"](../../examples/form/form-upload/slot.vue)

:::

## 拖拽排序



``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js"></script>
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`drag`属性即可开启拖拽排序"](../../examples/form/form-upload/drag.vue)

:::

## 阿里云oss上传

``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdn.staticfile.net/ali-oss/6.10.0/aliyun-oss-sdk.min.js"></script>
```
```js
//入口处全局配置阿里云的参数
const app =createApp({})
app.use(AVUE, {
  ali: {
    region: 'oss-cn-beijing',
    endpoint: 'oss-cn-beijing.aliyuncs.com',
    stsToken:'',
    accessKeyId: '',
    accessKeySecret: '',
    bucket: 'avue',
  }
})
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-upload/ali.vue)

:::

## 七牛云oss上传



``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://avuejs.com/cdn/CryptoJS.js"></script>
```

```js
//入口处全局配置七牛云的参数 
const app =createApp({})
app.use(AVUE, {
  qiniu: {
    AK: '',//七牛云相关密钥
    SK: '',//七牛云相关密钥
    bucket:'https://upload.qiniup.com'//存储地区，默认为华东，其他的如下表
    scope: 'test',//存储空间名称
    url: 'https://cdn.avuejs.com/'//外链的域名地址
  }
})
```

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-upload/qiniu.vue)

:::

## 腾讯云oss上传

``` html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://avuejs.com/cdn/cos-js-sdk-v5.min.js"></script>
```

```js
Vue.use(AVUE, {
  cos: {
    SecretId: '',//腾讯云相关密钥
    SecretKey: '',//腾讯云相关密钥
    Bucket: 'test',//存储空间名称
    Region: 'ap-beijing'//存储地区
  }
})
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-upload/cos.vue)

:::
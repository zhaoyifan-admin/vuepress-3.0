---
title: 表单数据字典
createTime: 2025/02/06 15:20:40
permalink: /form/form-dic/
---

:::tip

```js
//使用字典需要引入axios
import axios from "axios";
const app = createApp({});
app.use(Avue, { axios });
```

::::

## 本地字典

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="注意返回的数据必须为`array`数组，返回数据中 value 类型和数据的类型必须要对应，比如都是字符串或者都是数字"](../../examples/form/form-dic/local.vue)

:::

## 字段类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`dataType`可以指定数据或者字典的数据类型"](../../examples/form/form-dic/type.vue)

:::

## 字段配置

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`对应的`label`和`value`即可，字典返回的是无任何层级包裹的，如果有层级需要配置`res`字段"](../../examples/form/form-dic/props.vue)

:::

## 网络字典

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="网络字典不需要配置`dicData`属性，直接配置`dicUrl`字典接口即可，`dicMethod`指定请求类型,默认为 get 请求,`dicQuery`为请求携带的参数"](../../examples/form/form-dic/net.vue)

:::

## 字典格式化

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`dicFormatter`为字典数据返回的执行函数，对字典处理完返回即可"](../../examples/form/form-dic/formatter.vue)

:::

## 禁止字典某项

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="禁止的项目配置`disabled`为`true`"](../../examples/form/form-dic/disabled.vue)

:::

## 字典联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`cascader`为需要联动的子选择框`prop`值，填写多个就会形成一对多的关系,`cascaderIndex`设置默认选择第几项"](../../examples/form/form-dic/cascader.vue)

:::

<!-- ## 修改类型

:::demo 调用内置方法`findObject`查找对应`prop`的属性序号 ,同时你也可以更新字典
form/form-dic/change
::: -->

## 修改数据

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="和上面方法一样，只是再调用`updateDic`时不需要传新的字典，他会自己调用`dicUrl`去请求字典"](../../examples/form/form-dic/data.vue)

:::